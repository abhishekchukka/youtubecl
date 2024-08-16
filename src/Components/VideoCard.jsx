import { CheckCircle } from "@mui/icons-material";
import { Card, Typography, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
  demoVideoUrl,
} from "../utils/constants";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: "2px",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ height: 210, width: 362 }}
        />
      </Link>
      <CardContent
        sx={{ backgroundColor: "#1e1e1e", height: "106px", width: { xs: 330 } }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#FFF"
            sx={{ pr: 10 }}
          >
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
          <Typography variant="subtitle2" fontWeight="bold" color="grey">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle
              sx={{
                fontSize: 12,
                color: "grey",
                marginLeft: "5px",
                mb: "-1.2px",
              }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
