import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import Fetch from "../utils/Fetch";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, SetVideos] = useState([]);
  useEffect(() => {
    Fetch(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      SetVideos(data.items)
    );
  }, [selectedCategory]);
  return (
    <Stack direction="column" sx={{ flexDirection: { md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2024 AbhisheakChukka
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", color: "white" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
