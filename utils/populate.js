import { readFile } from "fs/promises";
import mongoose from "mongoose";

import Job from "../model/job.model.js";
import User from "../model/user.model.js";

const MONGO_URI =
  "mongodb+srv://koushikxahmed:12345@cluster0.yonmmq7.mongodb.net/MERN_JOB?retryWrites=true&w=majority&appName=Cluster0";

try {
  await mongoose.connect(MONGO_URI);
  const user = await User.findOne({ email: "koushik@gmail.com" });
  // const user = await User.findOne({ email: "test@test.com" });

  const jsonJobs = JSON.parse(
    await readFile(new URL("./mockData.json", import.meta.url))
  );
  const jobs = jsonJobs.map((job) => {
    return { ...job, createdBy: user._id };
  });
  await Job.deleteMany({ createdBy: user._id });
  await Job.create(jobs);
  console.log("Success!!!");
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
