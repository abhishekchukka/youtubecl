import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "../index.css";
import Fetch from "../utils/Fetch";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { ThumbUp, Visibility } from "@mui/icons-material";
import Videos from "./Videos";
const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState({});
  const [video, setVideo] = useState([]);
  console.log(videoDetails);

  useEffect(() => {
    Fetch(`videos?part=contentDetails,snippet,statistics&id=${id}`).then(
      (data) => setVideoDetails(data.items[0])
    );
    Fetch(`search?part=snippet&relatedVideoId=${id}`).then((data) =>
      setVideo(data.items)
    );
  }, [id]);

  if (!videoDetails?.snippet?.title) {
    return "Loading .....";
  }
  const {
    snippet: { title, channelTitle, channelId },
    statistics: { likeCount, viewCount },
  } = videoDetails;
  return (
    <Box minHeight="90vh">
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{ ml: { xs: 0, md: 5 } }}
      >
        <Box flex={1}>
          <Box
            sx={{
              position: "sticky",
              top: { xs: 5, md: 70 },
              width: "100%",
            }}
          >
            <ReactPlayer
              className="react-player"
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
            />

            <Typography color="#FFF" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#FFF" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant="h6" color="#FFF" fontWeight="bold">
                  {channelTitle}
                  <CheckCircle sx={{ mb: "-3px", fontSize: 20, ml: 2 }} />
                </Typography>
              </Link>
              <Stack direction="row" gap={2}>
                <Typography variant="subtitle2" color="#FFF">
                  {parseInt(likeCount).toLocaleString()}{" "}
                  <ThumbUp sx={{ fontSize: "16px" }} />
                </Typography>
                <Typography variant="subtitle2" color="#FFF">
                  {parseInt(viewCount).toLocaleString()}{" "}
                  <Visibility sx={{ fontSize: "16px" }} />
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          flex={0.4}
          px={1}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={video} />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
