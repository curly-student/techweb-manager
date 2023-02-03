import  { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Manager Restaurante</div>
        </a>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item">
        <NavLink className="nav-link" exact="true" to="/"><i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Acasa</span></NavLink>
        </li>
    </ul>
    )
}

export default Navbar;