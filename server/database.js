import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const pool = mysql
  .createPool({
    host: process.env.HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function getNotes() {
  const [rows] = await pool.query("select * from students;");
  return rows;
}

export async function getNote(first_name) {
  const [person] = await pool.query(
    `
    select * 
    from students
    where first_name= ?`,
    [first_name]
  );
  return person;
}

// console.log(await getNote("test"));
