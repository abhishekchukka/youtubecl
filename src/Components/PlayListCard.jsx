import { CheckCircle } from "@mui/icons-material";
import { Card, Typography, CardContent, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { PlaylistPlay } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
  demoVideoUrl,
} from "../utils/constants";
const PlayListCard = ({
  video: {
    id: { playlistId },
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
      <Link to={playlistId ? `/playlist/${playlistId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ height: 180, width: 362 }}
        />
      </Link>
      <CardContent
        sx={{ backgroundColor: "#1e1e1e", height: "106px", width: { xs: 330 } }}
      >
        <Link to={playlistId ? `/video/${playlistId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
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
            {`${snippet?.channelTitle || demoChannelTitle}`}
            <CheckCircle
              sx={{
                fontSize: 12,
                color: "grey",
                marginLeft: "5px",
                mb: "-1.2px",
              }}
            />
          </Typography>
          <Typography variant="subtitle2" fontWeight={900} color="#FF6">
            PlayList
            <PlaylistPlay sx={{ mb: "-10px", fontSize: 30, ml: 1 }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default PlayListCard;
