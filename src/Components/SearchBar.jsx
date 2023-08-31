import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, Grid, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ isShow }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={onhandleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: 20,
        height: "50px",
        padding: "5px",
        border: "1px solid #e3e3e3",
        boxShadow: "none",
        mr: 5,
        width: { xs: "100%", lg: "60%" },
      }}
    >
      <TextField
        sx={{
          flexGrow: 1,
          minWidth: 0,
          width: "100%",
          marginRight: 1,
          marginLeft: 2,
        }}
        variant="standard"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <IconButton
        type="submit"
        sx={{
          p: "5px",
          color: "red",
        }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
