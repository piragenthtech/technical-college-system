import express from "express";
// const express = require("express");
const app = express();
app.use(express.json());
import path from "path";
// const path = require("path");

import cors from "cors";
// const cors = require("cors");
app.use(cors());

import { StudentGet, StudentInsert, StudentRemove } from "./database.js";
// const ImportedStudentInsert = require("./database.js");

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500, send("something Broke!"));
});

// app.use(express.static(path.resolve(__dirname, "../client/dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
// });

app.post("/api/studentinsert", (req, res) => {
  const { first_name } = req.body;
  const { last_name } = req.body;
  const { admission_number } = req.body;
  const { nic } = req.body;
  const { address } = req.body;
  const { contact_no } = req.body;
  const { gender } = req.body;
  const { course_name } = req.body;
  const { joined_date } = req.body;
  const { BOD } = req.body;
  const { extracurricular_activities } = req.body;
  const { email } = req.body;

  // printing data from react
  console.log(req.body);

  const StudentFormInsert = {
    first_name: first_name,
    last_name: last_name,
    admission_number: admission_number,
    nic: nic,
    address: address,
    contact_no: contact_no,
    gender: gender,
    course_name: course_name,
    joined_date: joined_date,
    BOD: BOD,
    extracurricular_activities: extracurricular_activities,
    email: email,
  };
  StudentInsert(StudentFormInsert);
  res.json(StudentFormInsert);
});

app.get("/api/studentget", async (req, res) => {
  const result = await StudentGet();
  res.send(result);
});

app.get("/api/studentremove", async (req, res) => {
  const result = await StudentRemove();
  res.send(result);
});

app.listen(8080);
