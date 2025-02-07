import { Link, NavLink } from "react-router-dom"
const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light ">
        <div className="container py-4" >
        <a className="navbar-brand" to="/">Company Logo</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBar" aria-controls="navBar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

        <div className="collapse navbar-collapse" id="navBar">
          <ul className="navbar-nav">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/employee">Employee</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/report">Report</NavLink></li>
          </ul>
        </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;