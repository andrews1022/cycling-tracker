"use client";

import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";
import { getExercisesFiltered } from "@/firebase/firestore/getExercisesFiltered";

const tableHeaders = [
  "Route name",
  "Distance travelled (km)",
  "Duration (minutes)",
  "Average speed (kmph)",
  "Calories burned",
  "Date",
  "Edit"
];

const ExercisesTable = async () => {
  const { user } = useAuthContext();
  const { error, result } = await getExercisesFiltered(user?.uid);

  return (
    <div>
      <h2 className="font-bold text-1xl">Exercises:</h2>

      <table className="border-cyan-600 border-solid border-2 mt-4">
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th
                key={header}
                className="border-cyan-600 border-solid border-b-2 border-r-2 px-2 py-1 text-left"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {result?.map((res) => {
            const data = res.data();

            const { date } = data;
            const dateFromTimestamp = date?.toDate();

            // format the date to be "MMM dd, yyyy"
            const options: Intl.DateTimeFormatOptions = {
              day: "numeric",
              month: "short",
              year: "numeric"
            };
            const formattedDate = dateFromTimestamp?.toLocaleDateString("en-US", options);

            return (
              <tr key={res.id} className="border-cyan-600 border-solid border-b-2" data-id={res.id}>
                <td className="border-cyan-600 border-solid border-r-2 px-2 py-1">
                  {data.routeName}
                </td>

                <td className="border-cyan-600 border-solid border-r-2 px-2 py-1">
                  {data.distanceTravelled} km
                </td>

                <td className="border-cyan-600 border-solid border-r-2 px-2 py-1">
                  {data.duration} min
                </td>

                <td className="border-cyan-600 border-solid border-r-2 px-2 py-1">
                  {data.averageSpeed} km/h
                </td>

                <td className="border-cyan-600 border-solid border-r-2 px-2 py-1">
                  {data.caloriesBurned}
                </td>

                <td className="border-cyan-600 border-solid border-r-2 px-2 py-1">
                  {formattedDate}
                </td>

                <td className="border-cyan-600 border-solid border-r-2 px-2 py-1">
                  <Link href={`/exercise/${res.id}`} className="text-cyan-600 hover:underline">
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { ExercisesTable };
