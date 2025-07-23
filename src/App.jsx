import { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFound from "./pages/NotFound";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJob from "./pages/EditJob";

export default function App() {
  //ADD NEW JOB
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newJob),
    });
    return;
  };

  //update job

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(job),
    });
    return;
  };
  // delete job

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id} `, {
      method: "DELETE",
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={"/jobs"} element={<JobsPage />} />
        <Route
          path={"/add-job"}
          element={<AddJobPage addJobSubmit={addJob} />}
        />
        <Route
          path={"/edit-job/:id"}
          element={<EditJob updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route
          path={"/jobs/:id"}
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route path={"*"} element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
