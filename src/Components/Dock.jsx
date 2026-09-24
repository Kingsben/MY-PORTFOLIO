import { NavLink } from "react-router-dom";

const items = [
  {
    name: "Home",
    path: "/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5.5 10.5V20h13v-9.5" />
        <path d="M9.5 20v-5.5h5V20" />
      </svg>
    ),
  },
  {
    name: "About",
    path: "/about",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="3.2" />
        <path d="M5.5 20c.7-3.5 2.9-5.2 6.5-5.2s5.8 1.7 6.5 5.2" />
      </svg>
    ),
  },
  {
    name: "Skills",
    path: "/skills",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 5.5 4.5 9 8 12.5" />
        <path d="m16 5.5 3.5 3.5-3.5 3.5" />
        <path d="m13.5 4-3 9.5" />
        <path d="M4 18.5h16" />
      </svg>
    ),
  },
  {
    name: "Work",
    path: "/work",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
        <path d="M8 5.5V4.2c0-.7.6-1.2 1.3-1.2h5.4c.7 0 1.3.5 1.3 1.2v1.3" />
        <path d="M3.5 11.5h17" />
        <path d="M10 11.5v1.2h4v-1.2" />
      </svg>
    ),
  },
  {
    name: "Contact",
    path: "/contact",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="14" rx="2" />
        <path d="m5 7 7 5 7-5" />
      </svg>
    ),
  },
];

function Dock() {
  return (
    <nav className="dock" aria-label="Main navigation">
      <div className="dock-glow" />

      <div className="dock-inner">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `dock-item ${isActive ? "active" : ""}`
            }
          >
            <span className="dock-icon">{item.icon}</span>
            <span className="dock-label">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default Dock;