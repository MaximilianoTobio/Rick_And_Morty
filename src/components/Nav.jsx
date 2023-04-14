import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import logo from "../assets/img/logo.png";

export default function Nav({ onSearch, logout }) {
  const handleLogout = () => {
    logout();
  };
  return (
    <>
    <div className={styles.nav}>
     {/* <div className={styles.logout}>
          <Link to="/about"className={styles.pulse}>About </Link>
     </div> */}
     <div className={styles.logout}>
          <Link to="/favorites"className={styles.pulse}>Favorites</Link>
     </div>
      <div className={styles.logoContainer}>
        <Link to="/home">
          <img src={logo} alt="Logo" className={styles.logo}/>
        </Link>
      </div>
      <div className={styles.logout}>
        <button onClick={handleLogout}className={styles.pulse}>Logout</button>
      </div>
    </div>
    <div>
      <SearchBar onSearch={onSearch} />
    </div>
  </>

  );
}
      

