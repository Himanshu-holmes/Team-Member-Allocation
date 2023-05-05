import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="/Team-Member-Allocation/">Home</Link>
            </li>
            <li className="nav-item" >
                <Link className="nav-link" to='/GroupedTeamMembers'>Teams</Link>
            </li>
        </ul>
    </nav>
  )
}