"use client";

import { useAuthContext } from "@/context/AuthContext";
import getExercisesFiltered from "@/firebase/firestore/getExercisesFiltered";

const Exercises = async () => {
  const { user } = useAuthContext();
  const { error, result } = await getExercisesFiltered(user?.uid);

  return (
    <div>
      <h2 className="font-bold text-1xl">Exercises:</h2>

      {result?.map((res) => {
        const data = res.data();

        return <p key={res.id}>route taken: {data.routeName}</p>;
      })}
    </div>
  );
};

export default Exercises;
