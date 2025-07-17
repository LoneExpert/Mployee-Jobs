import React from "react";
import { Job } from "@/types/job";

interface Props {
  job: Job | null;
}

const JobDetail: React.FC<Props> = ({ job }) => {
  if (!job) {
    return (
      <div className="w-full md:w-2/3 p-6 h-screen flex items-center justify-center bg-white">
        <p className="text-gray-500">Select a job to view details</p>
      </div>
    );
  }

  const getDaysAgo = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 3600 * 24)
    );
    return `${diff}d ago`;
  };

  return (
    <div className="w-full md:w-2/3 p-6 h-screen overflow-y-auto bg-white space-y-6">
      <div className="flex items-center gap-4">
        {job.companyImageUrl && (
          <img
            src={job.companyImageUrl}
            alt={`${job.company} logo`}
            className="w-12 h-12 object-contain rounded"
          />
        )}
        <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
      </div>

      <div className="flex justify-between items-center flex-wrap">
        <a
          href={job.company_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-gray-700 hover:underline"
        >
          {job.company}
        </a>
        <a
          href={job.job_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition"
        >
          Apply Now →
        </a>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Job Details
        </h2>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
          <p>💼 Employment Type: {job.employment_type}</p>
          <p>🏠 Remote: {job.remote ? "Yes" : "No"}</p>
          <p>
            📈 Experience: {job.min_exp}-{job.max_exp} years
          </p>
          <p>🌍 Country: {job.country}</p>
          <p>🔗 Source: {job.source}</p>
          <p>📅 Posted: {getDaysAgo(job.postedDateTime)}</p>
          <p>🏷️ Seniority Level: {job.seniority_level}</p>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Job Description
        </h2>
        <div className="bg-gray-50 border rounded p-4 shadow-sm text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
          {job.description || "No description available"}
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
