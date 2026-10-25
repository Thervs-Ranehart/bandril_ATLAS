import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Students", path: "/students" },
    { name: "Faculty", path: "/faculties" }
  ];

  return (
    <nav className="border-b border-slate-800 bg-slate-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-6 py-4 sm:flex-row sm:items-center">

       
        <div className="flex flex-wrap items-center gap-2">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition duration-200 ${
                location.pathname === link.path
                  ? "bg-red-500 text-white"
                  : "text-slate-300 hover:bg-slate-800 hover:text-red-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}