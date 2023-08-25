import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})    
  return (
    <li className={isActive ? "active" : ""}>
      <Link
        to={to}
        style={
          isActive
            ? {
                color: "var(--color-dark)", // Active text color
                backgroundColor: "var(--color-tint)", // Active background color
              }
            : {
                color: "var(--color-accent)", // Default text color
                //backgroundColor: "transparent", // Default background color
              }
        }
        onMouseEnter={(e) => {
          if (!isActive) {
            // On hover, change the link's text and background colors
             //e.target.style.backgroundColor = "var(--color-light)"; // Change background color on hover
          }
        }}
        onMouseLeave={(e) => {
          if (!isActive) {
            // On hover exit, revert the link's text and background colors to default
            e.target.style.color = "var(--color-accent)";
            e.target.style.backgroundColor = "var(--color-shadow-dark)"; // Change background color on hover
          }
        }}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
}

export default CustomLink;