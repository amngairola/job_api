import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      const url = `/api/jobs/${id}`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        setJob(data);
        console.log(data);
      } catch (error) {
        console.log("Error fetching job:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, []);

  return loading ? <Spinner /> : <p>{job.title}</p>;
};

export default JobPage;
