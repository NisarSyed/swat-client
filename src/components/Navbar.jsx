import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDrivesDropdownOpen, setIsDrivesDropdownOpen] = useState(false);

  const drives = [
    { id: 1, name: "Drive 1" },
    { id: 2, name: "Drive 2" },
    { id: 3, name: "Drive 3" },
  ];

  const navLinkClass = "nav-link text-gray-100 px-20 py-2 rounded-md text-2xl font-bold";
  const dropdownClass = "absolute bg-indigo-950 rounded-md shadow-lg z-10";

  return (
    <nav className="bg-indigo-950 font-raleway text-transform: uppercase">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-[2cm]">
          <div className="hidden sm:block sm:ml-6">
            <div className="flex ">
              <Link to="/" className={navLinkClass}>
                Home
              </Link>
              <Link to="/about" className={navLinkClass}>
                About
              </Link>
              <Link to="/drives"
                className={navLinkClass}
                // onMouseEnter={() => setIsDrivesDropdownOpen(true)}
                // onMouseLeave={() => setIsDrivesDropdownOpen(false)}
              >
                Drives
                {/* {isDrivesDropdownOpen && (
                  <div className={dropdownClass}>
                    {drives.map((drive) => (
                      <Link
                        key={drive.id}
                        to={`/drives/${drive.id}`}
                        className="block px-4 py-2 text-gray-300 hover:bg-indigo-900"
                      >
                        {drive.name}
                      </Link>
                    ))}
                  </div>
                )} */}
              </Link>
              
              <Link to="/projects" className={navLinkClass}>
                Projects
              </Link>
              <Link to="/contact" className={navLinkClass}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
