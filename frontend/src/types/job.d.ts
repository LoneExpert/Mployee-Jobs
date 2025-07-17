export interface Job {
  _id: string;
  title: string;
  location: string;
  description: string;
  employment_type: string;
  posted_date: string;
  source: string;
  experience: string;
  remote:boolean;
  country:string;
  seniority_level:string;
  postedDateTime:string;
  job_link:string;
  company_url:string;
  company:string;
  companyImageUrl:string;
  min_exp:number;
  max_exp:number;
}
