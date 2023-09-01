"use client";

import { useState } from "react";
import type { FormEvent } from "react";

// - route name --> string
// - distance travelled --> number
// - duration (minutes) --> number
// - average speed (kmph) --> number
// - top speed (kmph) --> number
// - calories burned --> number
// - date (today's day, month, year) --> date (string)

const CreateExercise = () => {
  const [routeName, setRouteName] = useState("");
  const [distanceTravelled, setDistanceTravelled] = useState(0);
  const [duration, setDuration] = useState(0);
  const [averageSpeed, setAverageSpeed] = useState(0);
  const [topSpeed, setTopSpeed] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [date, setDate] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("form submitted!");
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block" htmlFor="route_name">
          <p>Route name</p>
          <input
            type="text"
            name="route_name"
            id="route_name"
            className="border-2 border-solid border-cyan-600"
            value={routeName}
            onChange={(event) => setRouteName(event.target.value)}
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block" htmlFor="distance_travelled">
          <p>Distance travelled (km)</p>
          <input
            type="number"
            name="distance_travelled"
            id="distance_travelled"
            className="border-2 border-solid border-cyan-600"
            value={distanceTravelled}
            onChange={(event) => setDistanceTravelled(+event.target.value)}
            step="any"
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block" htmlFor="duration">
          <p>Duration (minutes)</p>
          <input
            type="text"
            name="duration"
            id="duration"
            className="border-2 border-solid border-cyan-600"
            value={duration}
            onChange={(event) => setDuration(+event.target.value)}
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block" htmlFor="average_speed">
          <p>Average speed (kmph)</p>
          <input
            type="number"
            name="average_speed"
            id="average_speed"
            className="border-2 border-solid border-cyan-600"
            value={averageSpeed}
            onChange={(event) => setAverageSpeed(+event.target.value)}
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block" htmlFor="top_speed">
          <p>Top speed (kmph)</p>
          <input
            type="number"
            name="top_speed"
            id="top_speed"
            className="border-2 border-solid border-cyan-600"
            value={topSpeed}
            onChange={(event) => setTopSpeed(+event.target.value)}
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block" htmlFor="calories_burned">
          <p>Calories burned</p>
          <input
            type="number"
            name="calories_burned"
            id="calories_burned"
            className="border-2 border-solid border-cyan-600"
            value={caloriesBurned}
            onChange={(event) => setCaloriesBurned(+event.target.value)}
          />
        </label>
      </div>

      <div className="mb-4">
        <label className="block" htmlFor="date">
          <p>Date</p>
          <input
            type="date"
            name="date"
            id="date"
            className="border-2 border-solid border-cyan-600"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>
      </div>

      <div>
        <button
          className="border-cyan-600 border-solid border-2 py-2 px-6 hover:bg-cyan-600 hover:text-white"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateExercise;
