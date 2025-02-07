import { useParams } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer";
import { employees } from "./Employee";

const EmplpoyeeDetails = () => {

  const employeeId = useParams()
  console.log(employeeId)

  const data = employees.find((employee) => employee.id == employeeId.id)
  // console.log("data:", data)
  return (
    <>
    <Header />
      <main className="container py-4">
        <div>
         <h2>{data.name}</h2>
         <ul className="list-group">
          <li className="list-group-item"><strong>Name: </strong>{data.name}</li>
          <li className="list-group-item"><strong>Designation: </strong>{data.title}</li>
          <li className="list-group-item"><strong>Department: </strong>{data.department}</li>
         </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default EmplpoyeeDetails;