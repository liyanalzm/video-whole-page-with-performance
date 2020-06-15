import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [allowVideo, setAllowVideo] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  useEffect(() => {
    setAllowVideo(true);
  }, []);

  const videoLoaded = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div>
      <div className="video-wrap">
        {allowVideo && (
          <video
            muted
            loop
            autoPlay
            playsInline
            onCanPlayThrough={videoLoaded}
            className={`${isVideoLoaded ? "show" : "hide"}`}
          >
            <source
              src="https://www.liyanalzm.com/static/wind-24aec1ed6c350d2efc9227d74cecbc8c.mp4"
              type="video/mp4"
            />
          </video>
        )}
        <div
          style={{
            backgroundImage:
              'url("https://www.liyanalzm.com/static/726d39074835b9d137d0e8963e2612c3/1920d/wind.jpg")'
          }}
          className={`fallback ${isVideoLoaded ? "hide" : "show"}`}
        />
        <div className="text-overlay">hello</div>
        <div className="background-overlay" />
      </div>
      <div style={{ height: "500px" }}>
        This is just another section. Peace.
      </div>
    </div>
  );
}
