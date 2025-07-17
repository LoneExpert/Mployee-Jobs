import mongoose, { Document, Schema } from 'mongoose';
import {JobType} from '../types/job'

export interface JobDocument extends JobType, Document {}

const JobSchema = new Schema<JobDocument>({
  title: { type: String, required: true },
  company_name: { type: String, required: true },
  industry: { type: String },
  location: { type: String },
  remote: { type: Boolean, default: false },
  experience: { type: String },
  salary: { type: String },
  description: { type: String },
  apply_link: { type: String },
});

const Job = mongoose.model<JobDocument>('Job', JobSchema);
export default Job;
