import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { errorHandler, tryCatch } from "./util.js";
import { populateDatabase } from "./populate.js";
import User from "./models/User.model.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:4200"],
  })
);

app.use(bodyParser.json());

const populate = async (req, res) => {
  populateDatabase(10000);
  return res.status(200).send({ success: true });
};
const handleCurrentWeekLeaderboard = async (req, res) => {
  const startOfWeek = new Date("2024-02-19");
  const endOfWeek = new Date("2024-02-26");

  User.aggregate([
    {
      $match: {
        timestamp: {
          $gte: startOfWeek,
          $lt: endOfWeek,
        },
      },
    },
    {
      $sort: { score: -1 },
    },
    {
      $limit: 200,
    },
  ])
    .then((result) => {
      return res.status(200).send({ success: true, result });
    })
    .catch((error) => {
      return res.status(200).send({ success: false, error });
    });
};

const handleLastWeekLeaderboardByCountry = async (req, res) => {
  const country = req.body.country;
  const startOfWeek = new Date("2024-02-12");
  const endOfWeek = new Date("2024-02-18");

  User.aggregate([
    {
      $match: {
        timestamp: {
          $gte: startOfWeek,
          $lt: endOfWeek,
        },
        country: { $regex: `^${country}`, $options: "i" },
      },
    },
    {
      $sort: { score: -1 },
    },
    {
      $limit: 200,
    },
  ])
    .then((result) => {
      return res.status(200).send({ success: true, result });
    })
    .catch((error) => {
      return res.status(200).send({ success: false, error });
    });
};
const handleUserLeaderboardRank = async (req, res) => {
  const uid = req.body.uid;
  User.aggregate([
    {
      $sort: { score: -1 },
    },
  ])
    .then((result) => {
      const resultsStartingWithUid = result
        .map((user, index) => {
          if (user.uid.startsWith(uid)) {
            return {
              ...user,
              rank: index + 1,
            };
          }
        })
        .filter((user) => user !== undefined)
        .slice(0, 200);
      return res.status(200).send({ success: true, data: resultsStartingWithUid });
    })
    .catch((error) => {
      return res.status(200).send({ success: false, error });
    });
};

//Routes
app.get("/currentWeekLeaderboard", tryCatch(handleCurrentWeekLeaderboard));
app.post("/lastWeekLeaderboardByCountry", tryCatch(handleLastWeekLeaderboardByCountry));
app.post("/userLeaderboardRank", tryCatch(handleUserLeaderboardRank));
app.get("/populate", tryCatch(populate));

// Error handler
app.use(errorHandler);

const PORT = process.env.PORT;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected!");
    app.listen(PORT, () => {
      console.log(`Server Started and listening to ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
