import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Stack, Box, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import Fetch from "../utils/Fetch";
const SearchFeed = () => {
  const { searchTerm } = useParams();
  const [videos, SetVideos] = useState([]);
  useEffect(() => {
    Fetch(`search?part=snippet&q=${searchTerm}}`).then((data) =>
      SetVideos(data.items)
    );
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", color: "white" }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        The search results for
        <span style={{ color: "#FC1503" }}> {searchTerm} </span>
        videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
