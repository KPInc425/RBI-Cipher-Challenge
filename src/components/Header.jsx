import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RBIIcon from "./icons/RBIIcon";
import RBIFullIcon from "./icons/RBIFullIcon";

const MenuOptions = () => {
  const handleMenuItemClick = (e) => {
    // e.preventDefault();
    // console.log(e.target.parentElement.parentElement.parentElement);
    e.target.parentElement.parentElement.parentElement.removeAttribute("open");
    document.activeElement.blur();
    document.querySelectorAll("details").forEach((detail) => {
      if (detail !== e.target.parentElement) {
        detail.removeAttribute("open");
      }
    });
  };

  const handleNewMenuClick = (e) => {
    // e.preventDefault();
    // console.log(document.activeElement);
    document.querySelectorAll("details").forEach((detail) => {
      if (detail !== e.target.parentElement) {
        detail.removeAttribute("open");
      }
    });
  };

  return (
    <>
      <li>
        <Link to={"/"} onClick={handleMenuItemClick}>
          Home
        </Link>
      </li>
      <li>
        <details>
          <summary onClick={handleNewMenuClick}>Services</summary>
          <ul className="p-2">
            <li>
              <Link to={"/"} onClick={handleMenuItemClick}>
                Submenu 1
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={handleMenuItemClick}>
                Submenu 2
              </Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link to={"/portfolio"} onClick={handleMenuItemClick}>
          Portfolio
        </Link>
      </li>
      <li>
        <Link to={"/aboutus"} onClick={handleMenuItemClick}>
          About Us
        </Link>
      </li>
      <li>
        <Link to={"/contactus"} onClick={handleMenuItemClick}>
          Contact
        </Link>
      </li>
    </>
  );
};

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    document.addEventListener("click", () => {
      if (document.activeElement.tagName == "BODY") {
        console.log("body clicked");
        setOpenDropdown(false);
      }
    });
  }, []);

  const handleMobileMenuClick = (e) => {
    e.stopPropagation();
    console.log(document.activeElement.tagName);
    if (e.target.tagName !== "SUMMARY") {
      if (openDropdown) {
        document.activeElement.blur();
      }
      setOpenDropdown(!openDropdown);
    }
  };

  const handleLogoClick = (e) => {
    e.stopPropagation();
    if (openDropdown) setOpenDropdown(false);
  };

  return (
    <div className="navbar bg-base-100" onClick={handleMobileMenuClick}>
      <div className="navbar-start">
        <Link
          to={"/"}
          className="btn btn-ghost lg:h-16 lg:w-68 text-primary z-[1]"
          onClick={handleLogoClick}
        >
          <RBIFullIcon />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-[2] text-lg">
          <MenuOptions />
        </ul>
      </div>
      <div className="navbar-end">
        {/* <Link className="btn">Button</Link> */}
      </div>
      <div className="dropdown" onClick={handleMobileMenuClick}>
        <div
          tabIndex={0}
          role="button"
          className={`btn btn-ghost lg:hidden swap ${
            openDropdown && "swap-active"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 swap-off"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
          <svg
            className="swap-on h-5 w-5 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-md dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52 -translate-x-3/4 lg:-translate-x-full"
        >
          <MenuOptions />
        </ul>
      </div>
    </div>
  );
};

export default Header;
