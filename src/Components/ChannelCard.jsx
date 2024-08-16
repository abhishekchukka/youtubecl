import { Card, Typography, CardContent, CardMedia } from "@mui/material";
import { demoProfilePicture } from "../utils/constants";
import { demoChannelTitle } from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ChannelCard = ({ video: { id, snippet, statistics }, marginBot }) => {
  console.log(statistics);
  return (
    <Link to={`/channel/${id?.channelId || id}`}>
      <Card
        sx={{
          boxShadow: "none",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: 323,
          width: { md: 320, xs: 400 },
          backgroundColor: "transparent",
        }}
      >
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoProfilePicture}
          sx={{ height: 150, width: 150, borderRadius: 50 }}
          alt
        />
        <CardContent>
          <Typography
            variant="subtitle1"
            fontWeight={900}
            color="#FFF"
            sx={{ textAlign: "center" }}
          >
            {snippet?.ChannelTitle ? snippet.ChannelTitle : snippet?.title}
            <CheckCircle sx={{ fontSize: 16, mb: "-2px", ml: "2px" }} />
          </Typography>
          {statistics?.subscriberCount && (
            <Typography color="gray" sx={{ ml: "5px" }}>
              {parseInt(statistics?.subscriberCount).toLocaleString()}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default ChannelCard;
