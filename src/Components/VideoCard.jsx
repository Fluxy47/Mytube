import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";
import { MotionConfig } from "framer-motion";

function VideoCard({
  video: { id, snippet },
  isShow,
  setShow,
  setWillShow,
  isHovered,
}) {
  const theme = createTheme();
  const isMdBreakpoint = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <ThemeProvider theme={theme}>
      <motion.div
        layout
        animate={{ width: isHovered && isMdBreakpoint ? "260px" : "295px" }}
        transition={{ duration: 0.3 }}
      >
        <Card
          sx={{
            width: {
              xs: "100%",
              sm: "100%",
              md: isHovered ? "260px" : "295px",
            },
            boxShadow: "none",
            borderRadius: 3,
            borderStyle: "none",
            aspectRatio: isShow ? 16 / 9 : 16 / 9,
          }}
        >
          <Link to={`/video/${id?.videoId || "cV2gBU6hKfY"}`}>
            <CardMedia
              onClick={setShow}
              image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
              alt={snippet?.title}
              sx={{
                width: { xs: "100%", sm: "358px" },
                height: 170,
                borderStyle: "none",
              }}
            />
          </Link>
          <CardContent
            sx={{
              backgroundColor: "#0F0F0F",
              height: "106px",
              borderStyle: "none",
            }}
          >
            <Link to={`/video/${id?.videoId || "cV2gBU6hKfY"}`}>
              <Typography variant="subtitle2" fontWeight="bold" color="#FFF">
                {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
              </Typography>
            </Link>
            <Link
              to={
                snippet?.channelId
                  ? `/channel/${snippet?.channelId}`
                  : demoChannelUrl
              }
            >
              <Typography variant="subtitle2" color="gray">
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircleIcon
                  sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                />
              </Typography>
            </Link>
          </CardContent>
        </Card>
      </motion.div>
    </ThemeProvider>
  );
}

export default VideoCard;
