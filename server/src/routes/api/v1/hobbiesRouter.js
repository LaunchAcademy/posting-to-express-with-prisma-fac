import express from "express";

import prisma from "../../../prisma/prisma.js";

const hobbiesRouter = new express.Router();

hobbiesRouter.get("/", async (req, res) => {
  try {
    const hobbies = await prisma.hobby.findMany();
    return res.status(200).json({ hobbies });
  } catch (err) {
    return res.status(500).json({ errors: err });
  }
});

hobbiesRouter.post("/", async (req, res) => {
  const hobbyData = req.body;
  try {
    const newHobby = await prisma.hobby.create({ data: hobbyData });
    return res.status(201).json({ hobby: newHobby });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ errors: err });
  }
});

export default hobbiesRouter;
