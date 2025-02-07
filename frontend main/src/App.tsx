import { HomeScreen } from "./components/HomeScreen";
import PredictByData from "./components/PredictByData";
import PredictByImage from "./components/PredictByImage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/HomeScreen" element={<HomeScreen />} />
        <Route path="/PredictByData" element={<PredictByData />} />
        <Route path="/PredictByImage" element={<PredictByImage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
