"use client";

import { Timestamp } from "firebase/firestore";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthContext } from "@/context/AuthContext";

import { editExercise } from "@/firebase/firestore/editExercise";

import type { FormEvent } from "react";
import type { Exercise } from "@/types";

type EditExerciseProps = {
  data: Exercise | undefined;
  id: string;
};

const EditExercise = ({ data, id }: EditExerciseProps) => {
  const { user } = useAuthContext();

  const router = useRouter();

  const [averageSpeed, setAverageSpeed] = useState(data?.averageSpeed);
  const [caloriesBurned, setCaloriesBurned] = useState(data?.caloriesBurned);
  const [date, setDate] = useState("");
  const [distanceTravelled, setDistanceTravelled] = useState(data?.distanceTravelled);
  const [duration, setDuration] = useState(data?.duration);
  const [routeName, setRouteName] = useState(data?.routeName);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const [year, month, day] = date.split("-").map((el) => +el);

    const jsDate = new Date(year, month - 1, day); // months are 0-based in js, hence the -1
    const firestoreTimestamp = Timestamp.fromDate(jsDate);

    // construct object to edit doc
    const exerciseObj: Exercise = {
      averageSpeed,
      caloriesBurned,
      createdBy: user?.uid,
      date: firestoreTimestamp,
      distanceTravelled,
      duration,
      routeName
    };

    await editExercise(exerciseObj, id);

    router.push("/profile");
  };

  return (
    <div>
      <form className="mt-4" onSubmit={handleSubmit}>
        {/* ROUTE NAME */}
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
              required
            />
          </label>
        </div>

        {/* DISTANCE TRAVELLED */}
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
              required
              step="any"
            />
          </label>
        </div>

        {/* DURATION */}
        <div className="mb-4">
          <label className="block" htmlFor="duration">
            <p>Duration (minutes)</p>
            <input
              type="number"
              name="duration"
              id="duration"
              className="border-2 border-solid border-cyan-600"
              value={duration}
              onChange={(event) => setDuration(+event.target.value)}
              required
            />
          </label>
        </div>

        {/* AVERAGE SPEED */}
        <div className="mb-4">
          <label className="block" htmlFor="average_speed">
            <p>Average speed (km/h)</p>
            <input
              type="number"
              name="average_speed"
              id="average_speed"
              className="border-2 border-solid border-cyan-600"
              value={averageSpeed}
              onChange={(event) => setAverageSpeed(+event.target.value)}
              required
            />
          </label>
        </div>

        {/* CALORIES BURNED */}
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
              required
            />
          </label>
        </div>

        {/* DATE */}
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
              required
            />
          </label>
        </div>

        {/* SUBMIT */}
        <div>
          <button
            className="border-cyan-600 border-solid border-2 py-2 px-6 hover:bg-cyan-600 hover:text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export { EditExercise };
