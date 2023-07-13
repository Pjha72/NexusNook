import React, { useState } from "react";

export default function Calculate() {
  const [timestamp1, setTimestamp1] = useState("");
  const [timestamp2, setTimestamp2] = useState("");
  const [difference, setDifference] = useState("");

  const handleCalculate = () => {
    const [day1, month1, year1, hours1, minutes1, seconds1] =
      timestamp1.split(" ");
    const [day2, month2, year2, hours2, minutes2, seconds2] =
      timestamp2.split(" ");
    // const date1 = new Date(`${year1}-${month1}-${day1}T${hours1}:${minutes1}:${seconds1}`);
    // const date2 = new Date(`${year2}-${month2}-${day2}T${hours2}:${minutes2}:${seconds2}`);

    const totalSeconds1 =
      parseInt(seconds1, 10) +
      parseInt(minutes1, 10) * 60 +
      parseInt(hours1, 10) * 3600 +
      parseInt(day1, 10) * 86400 +
      parseInt(month1, 10) * 2629800 +
      parseInt(year1, 10) * 31557600;
    const totalSeconds2 =
      parseInt(seconds2, 10) +
      parseInt(minutes2, 10) * 60 +
      parseInt(hours2, 10) * 3600 +
      parseInt(day2, 10) * 86400 +
      parseInt(month2, 10) * 2629800 +
      parseInt(year2, 10) * 31557600;

    const differenceSeconds = Math.abs(totalSeconds1 - totalSeconds2);

    setDifference(differenceSeconds);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-10 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/time-chart-8571368-6805203.png"
            alt="CodeWithMe"
          />
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Calculate the Timestamp Difference
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label className="block text-lg font-medium leading-6 text-gray-900">
                Date & Time : 1
              </label>
              <div className="mt-2">
                <input
                  id="date1"
                  name="timestamp1"
                  type="text"
                  autoComplete="timestamp1"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={timestamp1}
                  onChange={(e) => setTimestamp1(e.target.value)}
                  placeholder="10 07 2022 08 30 00"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-lg font-medium leading-6 text-gray-900">
                  Date & Time : 2
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="date2"
                  name="timestamp2"
                  type="text"
                  autoComplete="timestamp2"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={timestamp2}
                  onChange={(e) => setTimestamp2(e.target.value)}
                  placeholder="15 07 2022 12 45 30"
                />
              </div>
            </div>

            <div>
              <button
                onClick={handleCalculate}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Calculate
              </button>
              {difference !== "" && (
                <div className="mt-5 border-dotted border-2 border-indigo-600 rounded text-center bg-gray-700 hover:bg-gray-900 shadow-md hover:shadow-lg cursor-pointer">
                  <h2 className="text-2xl text-white font-semibold">
                    Differenece in Seconds
                  </h2>
                  <p className="text-xl text-green-700 font-semibold">
                    {difference}
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
