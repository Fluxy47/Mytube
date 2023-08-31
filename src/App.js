import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./Components/NavBar";
import Feed from "./Components/Feed";
import VideoDetail from "./Components/VideoDetail";
import ChannelDetail from "./Components/ChannelDetail";
import SearchFeed from "./Components/SearchFeed";
import { useLocation, Outlet, Link, useNavigate } from "react-router-dom";

function App() {
  const [isShow, setIsShow] = useState(false);
  const [willShow, setWillShow] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    if (location.pathname === `/video/${id}`) {
      setWillShow(false);
    } else {
      setWillShow(true);
    }
  }, [location.pathname, id]);

  const handleBackButton = () => {
    // clear the persisted state when the user navigates back
    localStorage.clear();

    // navigate back to the previous page
    navigate(-1);
  };

  const handleForwardButton = () => {
    // clear the persisted state when the user navigates back
    localStorage.removeItem("willShow");

    // navigate back to the previous page
    navigate(1);
  };

  useEffect(() => {
    window.onpopstate = handleForwardButton;

    return () => {
      window.onpopstate = null;
    };
  }, []);

  useEffect(() => {
    window.onpopstate = handleBackButton;

    return () => {
      window.onpopstate = null;
    };
  }, []);

  const setShow = () => {
    setWillShow(false);
  };

  const setNoShow = () => {
    setWillShow(true);
  };

  const toggleShow = () => {
    setIsShow(true);
  };

  const noToggleShow = () => {
    setIsShow(false);
  };

  return (
    <Box sx={{ backgroundColor: "#141414" }}>
      <NavBar
        willShow={willShow}
        setNoShow={setNoShow}
        isShow={isShow}
        toggleShow={toggleShow}
        noToggleShow={noToggleShow}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Feed
              setShow={setShow}
              isShow={isShow}
              selectedCategory={selectedCategory}
              setWillShow={setWillShow}
            />
          }
        />
        <Route
          path="/video/:id"
          element={<VideoDetail isShow={isShow} willShow={willShow} />}
        />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  );
}

export default App;
