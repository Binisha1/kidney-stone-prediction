import { Card } from "flowbite-react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import React, { useState } from "react";

const PredictByData = () => {
  const [gravity, setGravity] = useState("");
  const [ph, setPH] = useState("");
  const [osmo, setOsmo] = useState("");
  const [cond, setCond] = useState("");
  const [urea, setUrea] = useState("");
  const [calc, setCalc] = useState("");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleDataSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch("http://127.0.0.1:5000/Predictbydata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gravity, ph, osmo, cond, urea, calc }),
      });
      console.log("Response status:", response.status);

      const data = await response.json();
      console.log("Response data:", data);

      if (response.ok) {
        setIsError(false);
        setData(data.prediction);
      } else {
        setIsError(true);

        setData(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false); // Hide loading indicator
    }
  };

  return (
    <div>
      <Navigation />
      <h1 className="text-center mt-10 font-bold text-3xl mb-10">
        Kidney stone prediction with urine analysis
      </h1>

      <form className="max-w-md mx-auto px-5" onSubmit={handleDataSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            step={0.01}
            name="gravity"
            id="gravity"
            min={1}
            max={1.04}
            title="Valid range: 1 to 1.04"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e) => setGravity(e.target.value)}
            required
          />
          <label
            htmlFor="gravity"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Specific Gravity (1 - 1.04)
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            step="any"
            name="pH"
            id="pH"
            min={4.76}
            max={7.94}
            title="Valid range: 4.76 to 7.94"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e) => setPH(e.target.value)}
            required
          />
          <label
            for="pH"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            pH (4.76 - 7.94)
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            step="any"
            name="osmo"
            id="osmo"
            min={187}
            max={1236}
            title="Valid range: 187 to 1236"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e) => setOsmo(e.target.value)}
            required
          />
          <label
            for="osmo"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Osmolality (187 - 1236)
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            step="any"
            name="conductivity"
            id="conductivity"
            min={5.1}
            max={38}
            title="Valid range: 5.1 to 38"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e) => setCond(e.target.value)}
            required
          />
          <label
            for="conductivity"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Conductivity (5.1 - 38)
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            step="any"
            name="urea"
            id="urea"
            min={10}
            max={620}
            title="Valid range: 10 to 620"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e) => setUrea(e.target.value)}
            required
          />
          <label
            for="urea"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Urea Concentration (10 - 620)
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            step="any"
            name="calc"
            id="calc"
            min={0.17}
            max={14.3}
            title="Valid range: 0.17 to 14.3"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            onChange={(e) => setCalc(e.target.value)}
            required
          />
          <label
            for="calc"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Calcium concentration (0.17 - 14.3)
          </label>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {isLoading ? "Processing..." : "Submit"}
        </button>
      </form>

      {/* REsult */}
      {data && (
        <div className="flex justify-center align-center mt-20">
          <Card className="max-w-md ">
            {isError ? (
              <h5 className="text-2xl text-center font-bold tracking-tight text-red-600 ">
                Error
              </h5>
            ) : (
              <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                Result
              </h5>
            )}

            <p className=" text-gray-700 font-bold">
              {" "}
              <p>{data}</p>
            </p>
          </Card>
        </div>
      )}

      <div className="mt-3">
        {" "}
        <Footer />{" "}
      </div>
    </div>
  );
};

export default PredictByData;
