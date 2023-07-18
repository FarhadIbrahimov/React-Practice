import "./employee.css";

export default function EmployeeListItem({ data }) {
  console.log(data);
  return (
    <div className="employeeContainer">
      <h1>{data.name}</h1>
      <p>{data.title}</p>
      <img className="employeeImage" src={data.headshot} />
    </div>
  );
}
