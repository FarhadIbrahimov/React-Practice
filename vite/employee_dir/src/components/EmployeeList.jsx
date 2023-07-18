import EmployeeListItem from "./EmployeeListItem";
import "./employee.css";

export default function EmployeeList({ data }) {
  return (
    <div className="employeeList">
      {data.map((employee) => (
        <EmployeeListItem data={employee} key={crypto.randomUUID()} />
      ))}
    </div>
  );
}
