import SearchBar from "../components/SearchBar";
import EmployeeList from "../components/EmployeeList";
import Header from "../components/Header";

export default function HomePage({ data }) {
  return (
    <div>
      <Header />
      <SearchBar data={data} />
      <EmployeeList data={data} />
    </div>
  );
}
