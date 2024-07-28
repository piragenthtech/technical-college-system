// const express = require("express");
import express from "express";
import cors from "cors";
import { getNote, getNotes } from "./database.js";

const app = express();
// var cors = require("cors");
let name = "piragenth";
let age = 22;

var stdetails = {
  name: name,
  age: age,
  address: "nervely north neervely",
  favcolor: ["blue", "black", "white"],
};

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>This is from node js server</h1>");
});

app.get("/students", (req, res) => {
  // res.send("<h1>this is from students</h1");
  res.json(stdetails.favcolor[1]);
});

app.get("/student", async (req, res) => {
  const notes = await getNote("piragenth");
  res.send(notes);
});

app.get("/student/:firstname", async (req, res) => {
  const firstname = req.params.firstname;
  const notes = await getNote(firstname);
  res.send(notes);
});

app.listen(8080, () => {
  console.log("server is running on port 8080");
});
