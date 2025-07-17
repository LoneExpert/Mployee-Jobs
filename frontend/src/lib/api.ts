// const BASE_URL = "http://localhost:5000/api/jobs"; // change later after deployment

// export const fetchJobs = async () => {
//   const res = await fetch(BASE_URL);
//   return res.json();
// };

// export const fetchJobsByLocation = async (location: string) => {
//   const res = await fetch(`${BASE_URL}?location=${location}`);
//   return res.json();
// };

export async function fetchJobs() {
  const res = await fetch("mployee-jobs-1mzu.vercel.app/api/jobs");
  return res.json();
}

export async function fetchJobsByLocation(location: string) {
  const res = await fetch(`mployee-jobs-1mzu.vercel.app/api/jobs?location=${location}`);
  return res.json();
}
