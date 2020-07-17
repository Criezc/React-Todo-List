import React from "react";
import PropTypes from "prop-types";

// untuk mengganti div yang ada di app.js
const Paper = ({ children }) => {
  return (
    <div className="container">
      <div className="frame">{children}</div>
    </div>
  );
};

Paper.propTypes = {
  // children akan memiliki 2 diantara type yang telah didefinisikan
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Paper;
