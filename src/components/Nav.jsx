import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav_container">
            <ul className="nav_list">
                <li className="nav_item">
                    <Link   className="link" to="/">Home</Link>
                </li>
                <li className="nav_item">
                    <Link   className="link" to="/GroupedTeamMembers">Grouped Team Members</Link>
                </li>
                <li className="nav_item">
                    <Link className="link" to="/SearchEmployee">Search for Employee</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav