import "../index.css";
export default function Header() {
  return (
    <div className="headerhead">
      <a href="/" className="headerlogo">
        Technical College system
      </a>
      <nav>
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
