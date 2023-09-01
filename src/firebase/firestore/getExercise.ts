import { doc, getDoc } from "firebase/firestore";
import { db } from "../config";

import type { FirebaseError } from "firebase/app";
import type {
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  FirestoreDataConverter,
  QueryDocumentSnapshot
} from "firebase/firestore";
import type { Exercise } from "@/types";

// create a custom converter for the Exercise type
const converter: FirestoreDataConverter<Exercise> = {
  toFirestore: (data: Exercise) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as Exercise
};

// get a single exercise doc from firestore
const getExercise = async (collection: string, id: string) => {
  // the withConverter method applies a custom data converter to a firestore Query (ie a collection reference)
  const docRef: DocumentReference<Exercise, DocumentData> = doc(db, collection, id).withConverter(
    converter
  );

  let error: FirebaseError | null = null;
  let result: DocumentSnapshot<Exercise, DocumentData> | null = null;

  try {
    result = await getDoc<Exercise, DocumentData>(docRef);
  } catch (err) {
    error = err as FirebaseError;
  }

  return { error, result };
};

export default getExercise;
