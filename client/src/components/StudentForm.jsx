import { useState, useEffect } from "react";
import axios from "axios";

export default function StudentForm() {
  const [stvalues, setstvalues] = useState();

  const handleChangeStvalues = (values) => {
    setstvalues((prevStvalues) => ({
      ...prevStvalues,
      [values.target.name]: values.target.value,
    }));
  };
  const handleClickStbutton = () => {
    axios
      .post("http://localhost:8080/api/studentinsert", {
        first_name: stvalues.firstname,
        last_name: stvalues.lastname,
        admission_number: stvalues.admissionnumber,
        nic: stvalues.nic,
        address: stvalues.Address,
        course_name: stvalues.CourceName,
        gender: stvalues.Gender,
        joined_date: stvalues.joined_date,
        BOD: stvalues.BOD,
        extracurricular_activities: stvalues.extracurricular_activities,
        contact_no: stvalues.Contact_No,
        email: stvalues.email,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div className="studentform">
      <h1>Student Details</h1>
      <form method="post" onClick={handleClickStbutton()}>
        <table>
          <tr>
            <td>First Name</td>
            <td>
              <input
                type="text"
                name="firstname"
                onChange={handleChangeStvalues}
              ></input>
            </td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>
              <input type="text" name="lastname"></input>
            </td>
          </tr>
          <tr>
            <td>NIC</td>
            <td>
              <input type="Number" name="nic"></input>
            </td>
          </tr>
          <tr>
            <td>Admission Number</td>
            <td>
              <input type="text" name="admissionnumber"></input>
            </td>
          </tr>
          <tr>
            <td>Address</td>
            <td>
              <input type="text" name="Address"></input>
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input type="email" name="Email"></input>
            </td>
          </tr>
          <tr>
            <td>BOD</td>
            <td>
              <input type="date" name="BOD"></input>
            </td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>
              <input type="text" name="Gender"></input>
            </td>
          </tr>
          <tr>
            <td>Cource Name</td>
            <td>
              <input type="text" name="CourceName"></input>
            </td>
          </tr>
          <tr>
            <td>Joined Date</td>
            <td>
              <input type="text" name="joined_date"></input>
            </td>
          </tr>

          <tr>
            <td>Contact No</td>
            <td>
              <input type="tel" name="Contact_No"></input>
            </td>
          </tr>
          <tr>
            <td>Extracurricular Activities</td>
            <td>
              <textarea name="extracurricular_activities"></textarea>
            </td>
          </tr>
          <tr>
            <td colSpan={"2"}>
              <center>
                <input type="submit" className="submitbutton" />
              </center>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}
