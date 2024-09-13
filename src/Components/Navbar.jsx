import React from "react";
import { Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import { signOut } from "firebase/auth";
import { auth } from "../utils/auth/firebase";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
        navigate("/"); // Redirect to /login after successful logout
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <Stack
      direction="row"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        zIndex: 999,
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
      <button onClick={handleLogout}>Logout</button>;
    </Stack>
  );
};

export default Navbar;
