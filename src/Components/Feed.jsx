import React, { useEffect, useLayoutEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import axios from "axios";
import Videos from "./Videos";
import { motion } from "framer-motion";
import SideBar from "./SideBar";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Base_URL = "https://www.googleapis.com/youtube/v3/search";
const API_key = "AIzaSyBhd5cB46AYdBYJwfVutDlVhVzmJhBZM-k";
const Feed = ({ isShow, setShow, setWillShow }) => {
  const [videos, setVideos] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [marginLeft, setMarginLeft] = useState(0);
  const [willAnimate, setWillAnimate] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("New");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  useLayoutEffect(() => {
    setMarginLeft(isShow ? 130 : 0);
  }, [isShow]);

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${Base_URL}?part=snippet&q=${selectedCategory}&type=video&regionCode=US&maxResults=50&key=${API_key}`
        );
        setVideos(response.data.items);
        setErrorMessage(null);
      } catch (error) {
        setErrorMessage("Error fetching data: " + error.message);
      }
    };
    fetchData();
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        overflowY: "auto",
        overflowX: "hidden",
        flexDirection: { sx: "column", md: "row" },
        alignItems: "center", // Add this to center the videos vertically
        justifyItems: "center",
      }}
    >
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          overflowX: "hidden",
          height: "100vh",
          flex: 2,
          marginTop: "60px",
          marginLeft: { xs: "30px", md: "80px" },
        }}
      >
        <SideBar
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          isHovered={isHovered}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <motion.div
          layout
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: isHovered ? "140px" : 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Videos
              setShow={setShow}
              videos={videos}
              isShow={isShow}
              setWillShow={setWillShow}
              isHovered={isHovered}
            />
          </motion.div>
        </motion.div>
      </Box>
    </Stack>
  );
};

export default Feed;
