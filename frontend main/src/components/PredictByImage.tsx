import React, { useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Card } from "flowbite-react";

const PredictByImage = () => {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [error, setError] = useState(false);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      const img = new Image();
      img.onload = () => {
        if (img.width > 1024 || img.height > 1024) {
          alert(
            "Image dimensions exceed 1024x1024. Please upload a smaller image."
          );
          setFile(null);
          setImagePreview(null);
          setImage(null);
        } else {
          setFile(uploadedFile);
          setImagePreview(URL.createObjectURL(uploadedFile)); // Preview the image
          setImage(URL.createObjectURL(uploadedFile));
        }
      };
      img.onerror = () => {
        alert("Invalid image file. Please upload a valid image.");
      };
      img.src = URL.createObjectURL(uploadedFile); // Trigger onload
    } else {
      setFile(null);
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload an image file first.");
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/Predictbyimage", {
        method: "POST",
        body: formData,
      });

      console.log("Raw Response:", response);

      const data = await response.json();
      console.log("Parsed Response:", data);

      if (response.ok && data.prediction) {
        setPrediction(data.prediction);
        setError(false);
      } else {
        setPrediction(data.error || "Unexpected error occurred.");
        setError(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setPrediction("Network error. Please try again later.");
      setError(true);
    } finally {
      setIsLoading(false);
      setImagePreview(null);
    }
  };

  return (
    <div>
      <Navigation />
      <h1 className="text-center mt-20 font-bold text-3xl mb-10">
        Predict Kidney Stone By Image
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center bg-gray-50 border border-gray-300 shadow-md rounded-lg p-8 w-full sm:w-2/3 lg:w-1/3 mx-auto"
      >
        {/* File Upload */}
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white hover:bg-gray-100 relative"
        >
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          ) : (
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500">
                PNG, JPG or JPEG (MAX. 2MB)
              </p>
            </div>
          )}
          <input
            id="dropzone-file"
            type="file"
            accept="image/jpeg, image/png, image/jpg"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
        >
          {isLoading ? "Processing..." : "Submit"}
        </button>
      </form>

      {/* Prediction Result */}
      <div
        className={`flex justify-center align-center mt-20 ${
          !prediction ? "hidden" : ""
        }`}
      >
        <Card className="max-w-md ">
          {error ? (
            <h5 className="text-2xl text-center font-bold tracking-tight text-red-600">
              Error
            </h5>
          ) : (
            <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
              Result
            </h5>
          )}

          <img src={image} alt="Preview" className=" object-cover rounded-lg" />
          <p className=" text-gray-700 font-bold">
            {prediction ? prediction : null}
          </p>
        </Card>
      </div>
      <div className="mt-3">
        <Footer />
      </div>
    </div>
  );
};

export default PredictByImage;
