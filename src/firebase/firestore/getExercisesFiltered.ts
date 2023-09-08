import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { converter, db } from "../config";

import type { FirebaseError } from "firebase/app";
import type { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import type { Exercise } from "@/types";

// fetch all documents where the createdBy is the user's id
const getExercisesFiltered = async (uid: string | undefined) => {
  let error: FirebaseError | null = null;
  let result: QueryDocumentSnapshot<Exercise, DocumentData>[] | null = null;

  const firestoreQuery = query(
    collection(db, "exercises").withConverter(converter),
    where("createdBy", "==", uid),
    orderBy("date", "desc")
  );

  try {
    const { docs } = await getDocs(firestoreQuery);
    result = docs;
  } catch (err) {
    error = err as FirebaseError;
  }

  return { error, result };
};

export default getExercisesFiltered;
