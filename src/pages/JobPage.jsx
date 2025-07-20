// JobPage.jsx

import React from "react";
import { useParams, useLoaderData, Link } from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";

const JobPage = () => {
  const { id } = useParams();
  const job = useLoaderData();

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center transition-colors duration-300"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container m-auto py-10 px-6">
          {/* --- Corrected Grid Layout --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8">
            {/* --- Main Content (2/3 width) with Animation --- */}
            <main className="md:col-span-2 animate-fade-in-up">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center md:text-left">
                <div className="text-slate-500 mb-4">{job.type}</div>
                <h1 className="text-4xl font-extrabold mb-4 text-slate-800">
                  {job.title}
                </h1>
                <div className="text-slate-500 mb-4 flex items-center justify-center md:justify-start">
                  <FaMapMarker className="text-orange-700 mr-1" />
                  <p className="text-orange-700 font-medium">{job.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
                <h3 className="text-indigo-800 text-xl font-bold mb-4">
                  Job Description
                </h3>
                <p className="mb-4 leading-relaxed">{job.description}</p>
                <h3 className="text-indigo-800 text-xl font-bold mb-2">
                  Salary
                </h3>
                <p className="mb-4 text-indigo-600 font-bold text-lg">
                  {job.salary} / Year
                </p>
              </div>
            </main>

            {/* --- Sidebar (1/3 width) with Animation --- */}
            <aside
              className="md:col-span-1 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg mb-6 border border-slate-200">
                <h3 className="text-2xl font-bold mb-6 text-slate-800">
                  Ready to Apply?
                </h3>
                <a
                  href={`mailto:${job.company.contactEmail}`}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-center font-bold py-3 px-4 rounded-full w-full block transform hover:scale-105 transition-transform duration-300"
                >
                  Apply Now
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-slate-200">
                <h3 className="text-2xl font-bold mb-6 text-slate-800">
                  Company Info
                </h3>
                <h2 className="text-2xl font-semibold text-indigo-800">
                  {job.company.name}
                </h2>
                <p className="my-2 text-slate-600">{job.company.description}</p>
                <hr className="my-4" />
                <h3 className="text-xl font-semibold">Contact Email:</h3>
                <a
                  href={`mailto:${job.company.contactEmail}`}
                  className="my-2 bg-slate-100 p-3 font-bold block text-indigo-700 hover:bg-indigo-100 transition-colors duration-300 rounded-md break-words"
                >
                  {job.company.contactEmail}
                </a>
                <h3 className="text-xl font-semibold mt-4">Contact Phone:</h3>
                <a
                  href={`tel:${job.company.contactPhone}`}
                  className="my-2 bg-slate-100 p-3 font-bold block text-indigo-700 hover:bg-indigo-100 transition-colors duration-300 rounded-md"
                >
                  {job.company.contactPhone}
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg mt-6 border border-slate-200">
                <h3 className="text-2xl font-bold mb-6 text-slate-800">
                  Manage Job
                </h3>
                <Link
                  to={`/jobs/edit/${job.id}`}
                  className="bg-slate-700 hover:bg-slate-800 text-white text-center font-bold py-2 px-4 rounded-full w-full block transform hover:scale-105 transition-all duration-300"
                >
                  Edit Job
                </Link>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full mt-4 block transform hover:scale-105 transition-transform duration-300">
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

// The data loader remains the same
const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
