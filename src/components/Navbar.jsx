import { NavLink } from "react-router-dom";

function Navbar() {
  const toggleStyles = (navInfo) => {
    return navInfo.isActive === true ? activeStyles : inActiveStyles;
  };

  const activeStyles = {
    textDecoration: "underline",
  };

  const inActiveStyles = {
    textDecoration: "none",
  };

  return (
    <div id= "navbar">
      <NavLink className= "navlink" to="/" style={toggleStyles}>
        Home
      </NavLink>
      <NavLink className= "navlink" to="/phone-list" end={true} style={toggleStyles}>
        Ver Lista
      </NavLink>
    </div>
  );
}

export default Navbar;
