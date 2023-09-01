"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const CreateExercise = () => {
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
