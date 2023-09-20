import { addDoc, collection } from "firebase/firestore";
import { db } from "../config";

import type { Exercise } from "@/types";

// add a new document with an auto-generated id
const addExercise = async (data: Exercise) => {
  await addDoc(collection(db, "exercises"), data);
};

export { addExercise };
