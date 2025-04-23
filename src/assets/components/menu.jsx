import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  { label: "Home", path: "/home" },
  { label: "Need Help?", path: "/help" },
  { label: "Learn Stuff", path: "/learn" },
  { label: "Read Stuff", path: "/read" },
  { label: "About Sygnal", path: "/about" },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative z-50">
      {/* Mobile menu button */}
      <button onClick={toggleMenu} className="md:hidden p-2 z-50 relative">
        {isOpen ? <CloseIcon size={24} className="text-black"/> : <MenuIcon size={24} />}
      </button>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-8 text-sm">
        {menuItems.map(({ label, path }) => (
          <li key={path} className="relative">
            <NavLink
              to={path}
              className={({ isActive }) =>
                `relative font-medium px-1 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-pink-400 after:transition-opacity after:duration-300
                ${isActive ? "font-semibold after:opacity-100" : "after:opacity-0 hover:after:opacity-100"}`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile dropdown modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-0 left-0 w-full h-[370px] bg-gray-50 text-gray-900 z-10 flex flex-col items-center justify-start pt-20 px-6 md:hidden"
        >
          <ul className="space-y-6 text-lg w-full text-center">
            {menuItems.map(({ label, path }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `relative font-medium px-1 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-pink-400 after:transition-opacity after:duration-300
                    ${isActive ? "font-semibold after:opacity-100" : "after:opacity-0 hover:after:opacity-100"}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.div>
        
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
