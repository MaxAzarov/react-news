import React from "react";
import { Link } from "react-router-dom";
export default function UsefulLinks() {
  return (
    <div className="useful-links">
      <ul>
        <li>
          <Link to="about" className="link">
            About
          </Link>
        </li>
        <li>
          <Link to="settings" className="link">
            Settings
          </Link>
        </li>
        <li>
          <Link to="help" className="link">
            Help
          </Link>
        </li>
        <li>
          <Link to="api-documentation" className="link">
            Api Documentation
          </Link>
        </li>
      </ul>
    </div>
  );
}
