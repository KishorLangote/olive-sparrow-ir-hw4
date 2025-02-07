import { Link } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer";

export const employees = [
  {id:"1", name:"John Doe", title:"Software Developer", department:"IT"},
  {id:"2", name:"Jane Smith", title:"Designer", department:"Design"},
  {id:"3", name:"Bob Johnson", title:"Project Manager", department:"Management"}
]

const Employee = () => {

 
  return(
    <>
    <Header />
      <main className="container py-4">
        <h1>List of Employees</h1>
        <div>
          <ul className="list-group">
          { employees.map((employee) => (
            <li key={employee.id} className="list-group-item">
              <h3>{employee.name}</h3>
              <p>{employee.title}</p>
              <Link className="btn btn-primary" to={`/employee/${employee.id}`}>View Details</Link>
            </li>
          ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Employee;