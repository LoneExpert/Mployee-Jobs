"use client";

import { useEffect, useState } from "react";
import { fetchJobs, fetchJobsByLocation } from "@/lib/api";
import JobList from "@/components/JobList";
import JobDetail from "@/components/JobDetail";
import { Job } from "@/types/job";
import Header from "@/components/Header";

export default function HomePage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [location, setLocation] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    fetchJobs().then(setJobs).catch(console.error);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [location]);

  const filteredJobs = jobs.filter((job) =>
    job.location.toLowerCase().includes(location.toLowerCase())
  );

  return (
    <main className="bg-white min-h-screen">
      <Header location={location} setLocation={setLocation} />

      <div className="flex h-[calc(100vh-72px)]">
        {/* Job List */}
        <div className="w-1/3 border-r border-gray-200 overflow-y-auto bg-gray-50">
          <h2 className="text-lg font-semibold px-4 py-3 border-b text-gray-800">
            Job Listings
          </h2>
          <JobList
            jobs={filteredJobs}
            onSelect={(job) => setSelectedJob(job)}
            selectedJob={selectedJob}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>

        {/* Job Detail */}
        <div className="w-2/3 overflow-y-auto">
          <JobDetail job={selectedJob} />
        </div>
      </div>
    </main>
  );
}
