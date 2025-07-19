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
import JobPage from "./pages/JobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path={"/jobs"} element={<JobsPage />} />
      <Route path={"*"} element={<NotFound />} />
      <Route path={"/jobs/:id"} element={<JobPage />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
