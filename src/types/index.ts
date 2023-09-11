import type { Timestamp } from "firebase/firestore";

export type Exercise = {
  averageSpeed: number | undefined;
  caloriesBurned: number | undefined;
  createdBy: string | undefined;
  date: Timestamp | undefined;
  distanceTravelled: number | undefined;
  duration: number | undefined;
  routeName: string | undefined;
};
