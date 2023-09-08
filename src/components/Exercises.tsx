"use client";

import { useAuthContext } from "@/context/AuthContext";
import getExercisesFiltered from "@/firebase/firestore/getExercisesFiltered";

const tableHeaders = [
  "route name",
  "distance travelled (km)",
  "duration (minutes)",
  "average speed (kmph)",
  "calories burned",
  "date"
];

const Exercises = async () => {
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
            const d = date.toDate();

            return (
              <tr key={res.id}>
                <td>{data.routeName}</td>
                <td>{data.distanceTravelled} km</td>
                <td>{data.duration} min</td>
                <td>{data.averageSpeed} km/h</td>
                <td>{data.caloriesBurned}</td>
                {/* <td>{d.toString()}</td> */}
              </tr>

              // <div key={res.id} className="border-solid border-2 border-cyan-600 mb-4 p-2">
              //   <p>route taken: {data.routeName}</p>
              // </div>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Exercises;
