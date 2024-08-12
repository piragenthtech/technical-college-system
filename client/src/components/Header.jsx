import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function Header() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <div className="headerhead">
      <a href="/" className="headerlogo">
        Technical College system
      </a>
      <nav>
      <a href="Studentsget" className="link">
          StudentsGet
        </a>
        <a href="Students" className="link">
          Students
        </a>
        <a href="Staffs" className="link">
          Staffs
        </a>
        <a href="Computers" className="link">
          Computers
        </a>
      </nav>
    </div>
  );
}
