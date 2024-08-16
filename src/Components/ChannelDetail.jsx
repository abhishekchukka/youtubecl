import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import Fetch from "../utils/Fetch";
const ChannelDetail = () => {
  const { id } = useParams();
  const [channel, setChannel] = useState({});
  const [videos, setVideos] = useState([]);
  console.log(channel);

  useEffect(() => {
    Fetch(`channels?part="snippet&id=${id}`).then((data) =>
      setChannel(data.items[0])
    );
  }, [id]);
  useEffect(() => {
    Fetch(`search?channelId=${id}&part=snippet,id&order=date`).then((data) =>
      setVideos(data.items)
    );
  }, [id]);
  return (
    <Box sx={{ height: "100%" }}>
      <div
        style={{
          width: "100%",
          height: "22rem",
          background: "rgb(127,255,152)",
          background:
            "linear-gradient(90deg, rgba(127,255,152,1) 0%, rgba(50,73,247,1) 47%, rgba(126,0,84,1) 100%)",
        }}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "-100px",
          // backgroundColor: "red",
        }}
      >
        <ChannelCard video={channel} />
      </div>
      <Videos videos={videos} ml={20} />
    </Box>
  );
};

export default ChannelDetail;
