import { collection, getDocs } from "firebase/firestore";
import { converter, db } from "../config";

import type { FirebaseError } from "firebase/app";
import type { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import type { Exercise } from "@/types";

// get all exercises from firestore
const getExercises = async () => {
  let error: FirebaseError | null = null;
  let result: QueryDocumentSnapshot<Exercise, DocumentData>[] | null = null;

  try {
    const { docs } = await getDocs(collection(db, "exercises").withConverter(converter));
    result = docs;
  } catch (err) {
    error = err as FirebaseError;
  }

  return { error, result };
};

export { getExercises };
