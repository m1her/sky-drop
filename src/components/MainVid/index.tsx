import React from "react";

export const MainVid = () => {
  return (
    <video
      className="w-full h-screen fixed top-0 left-0 object-cover object-center -z-10"
      controls={false}
      loop
      autoPlay
      muted
      playsInline
    >
      <source src="/mainVid.mp4" type="video/mp4" />
    </video>
  );
};
