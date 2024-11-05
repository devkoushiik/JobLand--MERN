import { StatusCodes } from "http-status-codes";
import Job from "../model/job.model.js";
import { NotFoundError } from "../errors/customErrors.js";
import mongoose from "mongoose";
import { param } from "express-validator";

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res.status(200).json({ total: jobs.length, jobs });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};
export const getJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(StatusCodes.OK).json({ job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const removedJob = await Job.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: "job deleted", job: removedJob });
};

// export const getAllJobs = async (req, res) => {
//   res.status(200).json({ jobs });
// };

// export const createJob = async (req, res) => {
//   const { company, position } = req.body;

//   if (!company || !position) {
//     return res.status(400).json({ msg: "please provide company and position" });
//   }
//   const id = nanoid(10);
//   const job = { id, company, position };
//   jobs.push(job);
//   res.status(200).json({ job });
// };

// export const getJob = async (req, res) => {
//   const { id } = req.params;
//   const job = jobs.find((job) => job.id === id);
//   if (!job) {
//     // throw new Error('no job with that id');
//     return res.status(404).json({ msg: `no job with id ${id}` });
//   }
//   res.status(200).json({ job });
// };

// export const updateJob = async (req, res) => {
//   const { company, position } = req.body;
//   if (!company || !position) {
//     return res.status(400).json({ msg: "please provide company and position" });
//   }
//   const { id } = req.params;
//   const job = jobs.find((job) => job.id === id);
//   if (!job) {
//     return res.status(404).json({ msg: `no job with id ${id}` });
//   }

//   job.company = company;
//   job.position = position;
//   res.status(200).json({ msg: "job modified", job });
// };

// export const deleteJob = async (req, res) => {
//   const { id } = req.params;
//   const job = jobs.find((job) => job.id === id);
//   if (!job) {
//     return res.status(404).json({ msg: `no job with id ${id}` });
//   }
//   const newJobs = jobs.filter((job) => job.id !== id);
//   jobs = newJobs;

//   res.status(200).json({ msg: "job deleted" });
// };
