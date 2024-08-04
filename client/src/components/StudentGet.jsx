import axios from "axios";
import { useEffect, useState } from "react";
export default function StudentGet() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/studentget")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <table border={2}>
        <tr>
          <th>First_Name</th>
          <th>Last_Name</th>
          <th>NIC</th>
          <th>Admission_Number</th>
          <th>Email</th>
          <th>Address</th>
          <th>BOD</th>
          <th>Gender</th>
          <th>Course_Name</th>
          <th>Contact_No</th>
          <th>joined_date</th>
          <th>extracurricular_activities</th>
        </tr>
        {data.map((item, key) => {
          return (
            <>
              <tr key={item.NIC}>
                <td>{item.First_Name}</td>

                <td>{item.Last_Name}</td>

                <td>{item.NIC}</td>

                <td>{item.Admission_Number}</td>

                <td>{item.Email}</td>

                <td>{item.Address}</td>

                <td>{item.BOD}</td>

                <td>{item.Gender}</td>

                <td>{item.Course_Name}</td>

                <td>{item.Contact_No}</td>

                <td>{item.joined_date}</td>

                <td>{item.extracurricular_activities}</td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
}
