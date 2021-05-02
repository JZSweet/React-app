import React from "react";
import "../styles/Header.css";

const styles = {
  headerStyle: {
    background: "#ddbea9"
  },
  headingStyle: {
    fontSize: 100
  }
};

function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Welcome to</h1>
    </header>
  );
}

export default Header;
