import React from "react";
import { Job } from "@/types/job";

interface Props {
  jobs: Job[];
  onSelect: (job: Job) => void;
  selectedJob: Job | null;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const JobList: React.FC<Props> = ({
  jobs,
  onSelect,
  selectedJob,
  currentPage,
  setCurrentPage,
}) => {
  const jobsPerPage = 20;
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const paginatedJobs = jobs.slice(startIndex, endIndex);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const getDaysAgo = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 3600 * 24)
    );
    return `${diff}d`;
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="divide-y divide-gray-200">
        {paginatedJobs.map((job) => (
          <div
            key={job._id}
            onClick={() => onSelect(job)}
            className={`cursor-pointer px-4 py-3 transition hover:bg-gray-100 ${
              selectedJob?._id === job._id ? "bg-gray-100" : ""
            }`}
          >
            <h3 className="text-sm font-semibold text-blue-600">{job.title}</h3>

            <p className="text-xs font-semibold text-gray-800">{job.source}</p>

            <p className="text-xs text-gray-600">{job.employment_type}</p>

            <div className="flex flex-wrap items-center text-xs text-gray-700 mt-1">
              <span>{job.location}</span>
            </div>

            <p className="text-[10px] text-gray-500 mt-1 line-clamp-2">
              {job.description || "No description available"}
            </p>

            <div className="flex justify-between items-center mt-2">
              <span className="bg-pink-600 text-white text-[10px] px-2 py-0.5 rounded-full">
                Quick Apply
              </span>
              <span className="text-[10px] text-gray-500">
                {getDaysAgo(job.postedDateTime)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center px-4 py-2 border-t border-gray-200 bg-white">
        <button
          className="px-3 py-1 text-sm rounded bg-blue-400 hover:bg-gray-400 disabled:opacity-40 cursor-pointer"
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage((prev: number) => Math.max(prev - 1, 1))
          }
        >
          ← Prev
        </button>
        <span className="text-xs text-gray-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-3 py-1 text-sm rounded bg-blue-400 hover:bg-gray-400 disabled:opacity-40 cursor-pointer"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev: number) => prev + 1)}
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default JobList;
