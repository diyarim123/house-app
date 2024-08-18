import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleExpanded = (): void => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="navbar">
      <h1 className="logo">Homies</h1>

      <div className="position-relative">
        <div className={isExpanded ? "link-container" : ""}>
          {isExpanded ? (
            <i
              className="fa-solid fa-x position-absolute top-1 right-1 burger-btn"
              style={{ color: "black" }}
              onClick={handleExpanded}
            ></i>
          ) : (
            ""
          )}
          <div className={isExpanded ? "expanded" : "nav-container"}>
            <NavLink to="2" className="link">
              Properties
            </NavLink>
            <NavLink to="1" className="link">
              Our Value
            </NavLink>
            <NavLink to="3" className="link">
              Contact
            </NavLink>
          </div>
        </div>

        <div className="burger-btn">
          {!isExpanded ? (
            <i
              className="fa-solid fa-bars"
              style={{ color: "white" }}
              onClick={handleExpanded}
            ></i>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
