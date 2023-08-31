import React from "react";
import { Stack, Box } from "@mui/material";

import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";
import Loader from "./Loader";

const Videos = ({
  videos,
  direction,
  isShow,
  setShow,
  setWillShow,
  isHovered,
}) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && (
            <VideoCard
              setShow={setShow}
              video={item}
              isShow={isShow}
              setWillShow={setWillShow}
              isHovered={isHovered}
            />
          )}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
