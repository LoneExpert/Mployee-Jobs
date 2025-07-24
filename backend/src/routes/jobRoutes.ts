import express from "express";
import Job from "../models/Job";
import { Request, Response } from "express";

const router = express.Router();

// router.get("/", async (_req: Request, res: Response) => {
//   try {
//     const jobs = await Job.find();
//     res.json(jobs);
//     // res.json({ message: "Jobs endpoint working" });
//     console.log("Jobs fetched successfully");
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Server error" });
//   }
// });
router.get("/", async (req: Request, res: Response) => {
  try {
    const { location } = req.query;

    let query = {};
    if (location) {
      query = {
        location: { $regex: new RegExp(location as string, "i") }, // case-insensitive match
      };
    }

    const jobs = await Job.find(query);
    res.json(jobs);
    console.log("Jobs fetched successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/test", (_req: Request, res: Response) => {
  res.json({ message: "Jobs route is working!" });
});


router.get("/:id", async (req: Request, res: Response) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ error: "Job not found" });
    res.json(job);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
