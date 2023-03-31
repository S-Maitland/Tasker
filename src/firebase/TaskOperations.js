import { database } from "./config";
import { collection, addDoc } from "firebase/firestore";

const dbInstance = collection(database, "Tasks");

export const saveTask = (taskValue) => {
  addDoc(dbInstance, {
    TaskTitle: { taskValue }
  });
};
