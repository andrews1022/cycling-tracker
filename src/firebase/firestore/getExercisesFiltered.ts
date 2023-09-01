import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config";

import type { FirebaseError } from "firebase/app";
import type {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot
} from "firebase/firestore";
import type { Exercise } from "@/types";

// create a custom converter for the Exercise type
const converter: FirestoreDataConverter<Exercise> = {
  toFirestore: (data: Exercise) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as Exercise
};

// fetch all documents where the createdBy is the user's id
const getExercisesFiltered = async (uid: string | undefined) => {
  let error: FirebaseError | null = null;
  let result: QueryDocumentSnapshot<Exercise, DocumentData>[] | null = null;

  const firestoreQuery = query(
    collection(db, "exercises").withConverter(converter),
    where("createdBy", "==", uid)
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
