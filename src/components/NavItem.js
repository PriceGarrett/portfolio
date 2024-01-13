import { Link } from "react-router-dom"

export default function NavItem({label, route}){
    return (<div className="nav-item">
    <Link className="nav-label" to={route}>{label}</Link>
  </div>)
}