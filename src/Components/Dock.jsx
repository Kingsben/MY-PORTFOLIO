import {
  Link,
  useLocation
} from "react-router-dom";


function HomeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M3 10.5L12 3l9 7.5"
      />

      <path
        d="M5 9.5V21h14V9.5"
      />

      <path
        d="M9 21v-7h6v7"
      />
    </svg>
  );
}


function UserIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="8"
        r="3.5"
      />

      <path
        d="M5 21c.7-4 3-6 7-6s6.3 2 7 6"
      />
    </svg>
  );
}


function SkillsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M8 8l-4 4 4 4"
      />

      <path
        d="M16 8l4 4-4 4"
      />

      <path
        d="M14 5l-4 14"
      />
    </svg>
  );
}


function WorkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="7"
        width="18"
        height="13"
        rx="2"
      />

      <path
        d="M8 7V5h8v2"
      />

      <path
        d="M3 12h18"
      />
    </svg>
  );
}


function ContactIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
      />

      <path
        d="M3 7l9 7 9-7"
      />
    </svg>
  );
}


function Dock() {

  const location = useLocation();

  const items = [
    {
      path: "/",
      label: "Home",
      icon: <HomeIcon />
    },

    {
      path: "/about",
      label: "About",
      icon: <UserIcon />
    },

    {
      path: "/skills",
      label: "Skills",
      icon: <SkillsIcon />
    },

    {
      path: "/work",
      label: "Work",
      icon: <WorkIcon />
    },

    {
      path: "/contact",
      label: "Contact",
      icon: <ContactIcon />
    }
  ];


  return (

    <div className="mac-dock">

      <div className="dock-inner">

        {items.map((item) => (

          <Link
            key={item.path}
            to={item.path}
            className={
              `dock-item ${
                location.pathname === item.path
                  ? "active"
                  : ""
              }`
            }
            aria-label={item.label}
          >

            <span className="dock-icon">
              {item.icon}
            </span>

            <span className="dock-tooltip">
              {item.label}
            </span>

          </Link>

        ))}

      </div>

    </div>

  );
}


export default Dock;