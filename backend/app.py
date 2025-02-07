from flask import Flask, jsonify,request
from flask_mysqldb import MySQL
from flask_cors import CORS
import pandas as pd
from joblib import load
from tensorflow.keras.preprocessing.image import img_to_array, load_img
from keras.models import load_model
import numpy as np
import os
import cv2



app = Flask(__name__)
CORS(app)


# Kidney stone prediction with urine analysis
@app.route('/Predictbydata', methods=['POST'])
def predictbydata():
   try:
      data = request.get_json()
      gravity= float(data.get("gravity"))
      ph = float(data.get("ph"))
      osmo = float(data.get("osmo"))
      cond = float(data.get("cond"))
      urea = float(data.get("urea"))
      calc = float(data.get("calc"))
      input_data = pd.DataFrame({
        'gravity': [gravity],
        'ph': [ph],
        'osmo': [osmo],
        'cond': [cond],
        'urea': [urea],
        'calc': [calc]
      })
      data_model = load('random_forest.joblib')
      prob = data_model.predict_proba(input_data)
      no_stone_prob=prob[0][0]
      stone_prob=prob[0][1]
      print(no_stone_prob,stone_prob)
      if prob[0][1] > 0.5:
        result = 'Kidney Stone Detected (Positive): ',round(float(prob[0][1])*100,2),'%'
      else:
        result = 'No Kidney Stone Detected  (Negative): ',round(float(prob[0][0])*100,2),'%'

      return jsonify({"prediction": result}),200
      # return jsonify({"Stone_Probability": round(float(stone_prob)*100,2), "No_Stone_Probalility": round(float(no_stone_prob)*100,2)}), 200
   
   except Exception as e:
      return jsonify({"message":str(e)})
   


# Kidney stone prediction with CT Scan

def has_sharp_edges(image_path):
   image = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)  # Load image in grayscale
   edges = cv2.Canny(image, 100, 200)
    
   # Calculate the percentage of edge pixels
   edge_percentage = np.sum(edges > 0) / float(image.size)

   # If the edge percentage is above a certain threshold, it might be a CT scan
   print("edge percentage",edge_percentage)
   return edge_percentage>0.05   # threshold

def predict_image(image_path):
   """
   Predicts if a CT scan image is 'Normal' or 'Stone'.
    
   Parameters:
   - image_path (str): Path to the CT scan image.
    
   Returns:
   - str: 'Normal' or 'Stone' based on the prediction.
   """
   # loading the model
   CT_model = load_model('kidney_stone_detection_CT_image_model_200.h5')

   # Load and preprocess the image
   image = load_img(image_path, target_size=(200, 200))  # Resize to match model's input size
   image = img_to_array(image) / 255.0  # Normalize the image
   image = np.expand_dims(image, axis=0)  # Add batch dimension
    
   # Make a prediction
   prediction = CT_model.predict(image)
   print(prediction[0][0])
   print(prediction[0][1])
   if prediction[0][1] > 0.5:
      return 'Kidney Stone Detected (Positive): ',round(float(prediction[0][1])*100,2),'%'
   else:
      return 'No Kidney Stone Detected  (Negative): ',round(float(prediction[0][0])*100,2),'%'

@app.route('/Predictbyimage', methods=['POST'])
def predictbyimage():
   try:
      if 'file' not in request.files:
         return jsonify({"error": "No file uploaded"}), 400
      file = request.files['file']
      
      # Save the uploaded file temporarily
      if not os.path.exists('temp'):
         os.makedirs('temp')

      filepath = os.path.join("temp", file.filename)
      file.save(filepath)

       # Validate if the image is a CT scan
      if not has_sharp_edges(filepath):
         return jsonify({"error": "Uploaded file is not a valid CT scan image of Kidney"}), 400
      
      # Run prediction
      result = predict_image(filepath)
      print(result)
      
      # Delete the temporary file
      os.remove(filepath)
      
      return jsonify({"prediction": result}),200
   
   except Exception as e:
      return jsonify({"error": str(e)})