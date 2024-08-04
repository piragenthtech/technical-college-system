import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function StudentForm() {
  const [stvalues, setstvalues] = useState("");
  const navigate = useNavigate();
  const formdata = {
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
  };
  const handleChangeStvalues = (values) => {
    setstvalues((prevStvalues) => ({
      ...prevStvalues,
      [values.target.name]: values.target.value,
    }));
  };
  const handleClickStbutton = (e) => {
    e.preventDefault();
    // console.log(stvalues.first_name);
    axios
      .post("http://localhost:8080/api/studentinsert", formdata)
      .then((response) => {
        console.log(response);
        navigate("/StudentsGet");
      })
      .catch((error) => console.log(error));
  };
  console.log(formdata);

  return (
    <div className="studentform">
      <h1>Student Details</h1>
      <form method="post" onSubmit={handleClickStbutton}>
        <table>
          <tbody>
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
                <input
                  type="text"
                  name="lastname"
                  onChange={handleChangeStvalues}
                ></input>
              </td>
            </tr>
            <tr>
              <td>NIC</td>
              <td>
                <input
                  type="Number"
                  name="nic"
                  onChange={handleChangeStvalues}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Admission Number</td>
              <td>
                <input
                  type="text"
                  name="admissionnumber"
                  onChange={handleChangeStvalues}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Address</td>
              <td>
                <input
                  type="text"
                  name="Address"
                  onChange={handleChangeStvalues}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="email"
                  name="email"
                  onChange={handleChangeStvalues}
                ></input>
              </td>
            </tr>
            <tr>
              <td>BOD</td>
              <td>
                <input
                  type="date"
                  name="BOD"
                  onChange={handleChangeStvalues}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>
                <input
                  type="radio"
                  name="Gender"
                  value="male"
                  onChange={handleChangeStvalues}
                  className="gender"
                ></input>
                Male
                <input
                  type="radio"
                  name="Gender"
                  value="female"
                  onChange={handleChangeStvalues}
                  className="gender"
                ></input>
                Female
              </td>
            </tr>
            <tr>
              <td>Cource Name</td>
              <td>
                <input
                  type="text"
                  name="CourceName"
                  onChange={handleChangeStvalues}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Joined Date</td>
              <td>
                <input
                  type="date"
                  name="joined_date"
                  onChange={handleChangeStvalues}
                ></input>
              </td>
            </tr>

            <tr>
              <td>Contact No</td>
              <td>
                <input
                  type="tel"
                  name="Contact_No"
                  onChange={handleChangeStvalues}
                ></input>
              </td>
            </tr>
            <tr>
              <td>Extracurricular Activities</td>
              <td>
                <textarea
                  name="extracurricular_activities"
                  onChange={handleChangeStvalues}
                ></textarea>
              </td>
            </tr>
            <tr>
              <td colSpan={"2"}>
                <center>
                  <input type="submit" className="submitbutton" />
                </center>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
