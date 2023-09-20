import { doc, setDoc } from "firebase/firestore";
import { db } from "../config";

import type { Exercise } from "@/types";

const editExercise = async (data: Exercise, exerciseId: string) => {
  await setDoc(doc(db, "exercises", exerciseId), data);
};

export { editExercise };
