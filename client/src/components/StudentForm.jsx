export default function StudentForm() {
  return (
    <div className="studentform">
      <h1>Student Details</h1>
      <form method="post" action="">
        <table>
          <tr>
            <td>FirstName</td>
            <td>
              <input type="text" name="firstname"></input>
            </td>
          </tr>
          <tr>
            <td>LastName</td>
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
              <input type="text" name="Cource Name"></input>
            </td>
          </tr>
          <tr>
            <td>Contact No</td>
            <td>
              <input type="tel" name="Contact No"></input>
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
