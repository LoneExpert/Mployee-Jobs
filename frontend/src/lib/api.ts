import { Job } from "@/types/job";

const BASE_URL = "http://localhost:5000/api/jobs";

export const fetchJobs = async (): Promise<Job[]> => {
  try {
    const res = await fetch(BASE_URL);

    if (!res.ok) {
      console.error("Failed to fetch jobs:", res.statusText);
      return [];
    }

    const data = await res.json();



    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};

export const fetchJobsByLocation = async (location: string): Promise<Job[]> => {
  try {
    const res = await fetch(`${BASE_URL}?location=${location}`);

    if (!res.ok) {
      console.error("Failed to fetch jobs by location:", res.statusText);
      return [];
    }

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching jobs by location:", error);
    return [];
  }
};


// export async function fetchJobs() {
//   const res = await fetch("mployee-jobs-1mzu.vercel.app/api/jobs");
//   return res.json();
// }

// export async function fetchJobsByLocation(location: string) {
//   const res = await fetch(`mployee-jobs-1mzu.vercel.app/api/jobs?location=${location}`);
//   return res.json();
// }
