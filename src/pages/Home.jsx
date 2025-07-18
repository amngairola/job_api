import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobLisitng from "../components/JobLisitng";
import ViewAllJobs from "../components/ViewAllJobs";
const Home = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobLisitng isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default Home;
