import React from "react";
import { Stack, Box } from "@mui/material";
import { ChannelCard, VideoCard } from "./";
import PlayListCard from "./PlayListCard";
const Videos = ({ videos, ml = 0 }) => {
  return (
    <Stack
      direction="row"
      gap={2}
      flexWrap="wrap"
      justifyContent="start"
      sx={{ ml: { xs: 0, md: ml } }}
    >
      {videos.map((item, ind) =>
        item.id.playlistId ? (
          ""
        ) : (
          <Box key={ind}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard video={item} />}
            {/* {item.id.playlistId && <PlayListCard video={item} />} */}
          </Box>
        )
      )}
    </Stack>
  );
};

export default Videos;
