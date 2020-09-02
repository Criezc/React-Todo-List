import React from "react";
import PropTypes from "prop-types";

import styles from "./paper.module.css";

// untuk mengganti div yang ada di app.js
const Paper = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>{children}</div>
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
