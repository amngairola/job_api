import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobLisitng from "./components/JobLisitng";
export default function App() {
  return (
    <div>
      <Navbar />
      {/* <!-- Hero --> */}
      <Hero />
      <HomeCards />
      <JobLisitng />

      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="jobs.html"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </div>
  );
}
