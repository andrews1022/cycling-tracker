import type { Timestamp } from "firebase/firestore";

export type Exercise = {
  averageSpeed: number;
  caloriesBurned: number;
  createdBy: string | undefined;
  date: Timestamp;
  distanceTravelled: number;
  duration: number;
  routeName: string;
};
