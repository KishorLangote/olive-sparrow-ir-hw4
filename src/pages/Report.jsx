import Header from "../components/Header";
import Footer from "../components/Footer";

const Report = () => {

  const mostWorekdedEmployee = { name: "John Doe", hoursWorked: 210 }
  const highestRatedEmployee = { name: "Jane Smith", performanceRate: 0.95 }
  const totalOvertimeHours = { totalOvertimeHours: 35 }
  return (
    <>
    <Header />
      <main className="container">
        <h1>HR Report</h1>
        <hr />
        <div className="row">

          <div className="col-md-4">
            <div className="card border-light">
              <div className="card-body">
                <h3>Most Worked Employee</h3>
                <p>Name: {mostWorekdedEmployee.name}</p>
                <p>Hours Worked: {mostWorekdedEmployee.hoursWorked}</p>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div className="card border-light">
              <div className="card-body">
                <h3>Highest Rated Employee</h3>
                <p>Name: {highestRatedEmployee.name}</p>
                <p>Performance Rate: {highestRatedEmployee.performanceRate}</p>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div className="card border-light">
              <div className="card-body">
                <h3>Total Overtime Hours</h3>
                <p>Total Overtime Hours: {totalOvertimeHours.totalOvertimeHours}</p>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}

export default Report;