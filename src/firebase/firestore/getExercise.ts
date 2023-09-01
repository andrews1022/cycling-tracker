import { doc, getDoc } from "firebase/firestore";
import { db } from "../config";

import type { FirebaseError } from "firebase/app";
import type { DocumentSnapshot } from "firebase/firestore";

// get a single exercise doc from firestore
const getExercise = async (collection: string, id: string) => {
  let docRef = doc(db, collection, id);

  let error: FirebaseError | null = null;
  let result: DocumentSnapshot | null = null;

  try {
    result = await getDoc(docRef);
  } catch (err) {
    error = err as FirebaseError;
  }

  return { error, result };
};

export default getExercise;
