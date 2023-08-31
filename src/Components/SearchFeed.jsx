import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Videos from "./Videos";
import SideBar from "./SideBar";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh" sx={{ marginTop: "50px", overflow: "hidden" }}>
      <Typography
        variant="h4"
        fontWeight={900}
        color="white"
        mt={2}
        mb={3}
        ml={{ sm: "100px" }}
      >
        Search Results for{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <SideBar
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        isHovered={isHovered}
      />
      <motion.div
        layout
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: isHovered ? "140px" : 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <Box display="flex" sx={{ overflow: "hidden" }}>
          <Box sx={{ mr: { sm: "100px" } }} />
          {<Videos videos={videos} isHovered={isHovered} />}
        </Box>
      </motion.div>
    </Box>
  );
};

export default SearchFeed;
