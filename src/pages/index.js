import signUserIn, { auth, signIn } from "@/firebase/auth/signIn";
import Head from "next/head";
import React from "react";
import { saveTask } from "../firebase/TaskOperations";
import { useState } from "react";

export default function Index() {
  const [taskTitle, setTaskTitle] = useState("");

  const handleSignIn = () => {};

  const handleSaveTask = () => {
    console.log(taskTitle);
    saveTask(taskTitle);
  };

  const updateTaskTitle = (e) => {
    setTaskTitle(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Landing page for Tasker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Home Screen</h1>
      <form>
        <input type="text" value={taskTitle} onChange={updateTaskTitle} />
      </form>
      <button onClick={handleSaveTask}>Save Task</button>
      <button onClick={handleSignIn}>Sign In</button>
    </>
  );
}
