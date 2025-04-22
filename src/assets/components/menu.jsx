import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "Need Help?", path: "/help" },
  { label: "Learn Stuff", path: "/learn" },
  { label: "Read Stuff", path: "/read" },
  { label: "About Sygnal", path: "/about" },
];

const Menu = () => {
  return (
    <ul className="flex space-x-8 text-sm">
      {menuItems.map(({ label, path }) => (
        <li
          key={path}
          className="relative"
        >
          <NavLink
            to={path}
            className={({ isActive }) =>
               `relative font-medium px-1 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-pink-400 after:transition-opacity after:duration-300
              ${isActive ? 'font-semibold after:opacity-100' : 'after:opacity-0 hover:after:opacity-100'}`
            
            }
          >
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
