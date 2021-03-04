import "./SideNav.css";
import { FaAngleDown } from "react-icons/fa";

const SideNav = () => {
  return (
    <>
        <div className="sort-nav-container">
            <div className="sort-nav-title">
                <span>All Books</span>
            </div>
            <div className="sort-menu">
                    A-Z <FaAngleDown className="sort-arrow"/>
                </div>
        </div>
        <div className="side-nav-container"></div>
    </>
    )
};

export default SideNav;