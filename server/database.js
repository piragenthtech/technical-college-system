import mysql from "mysql2";
// const mysql = require("mysql2");

import dotenv from "dotenv";
// const dotenv = require("dotenv");
dotenv.config();
const student_table = process.env.MYSQL_STUDENT_TABLE;
const pool = mysql
  .createPool({
    host: process.env.HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

// inserting details for student
export async function StudentInsert(StudentFormInsert) {
  const result = await pool.query(
    `INSERT INTO ${student_table} (First_name,Last_name,Admission_Number,Email,NIC,Address,Contact_No,Gender,Course_Name,joined_date,BOD,extracurricular_activities) Values(?,?,?,?,?,?,?,?,?,?,?,?)`,
    [
      StudentFormInsert.first_name,
      StudentFormInsert.last_name,
      StudentFormInsert.admission_number,
      StudentFormInsert.email,
      StudentFormInsert.nic,
      StudentFormInsert.address,
      StudentFormInsert.contact_no,
      StudentFormInsert.gender,
      StudentFormInsert.course_name,
      StudentFormInsert.joined_date,
      StudentFormInsert.BOD,
      StudentFormInsert.extracurricular_activities,
    ]
  );

  return result;
}

// Get Student Details
export async function StudentGet() {
  const [result] = await pool.query(`select * from ${student_table}`);
  return result;
}

// Remove Student
export async function StudentRemove(NIC) {
  const [result] = await pool.query(
    `DELETE FROM ${student_table} where  NIC=?`,
    [NIC]
  );
  return result;
}
// module.exports = { StudentInsert };
