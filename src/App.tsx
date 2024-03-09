import Lottie from "lottie-react";
// import animationData from "./assets/lotties-jadi.json"
// import animation from "./assets/animation.json";
// import tesLottie from "./assets/tes.json";
import tesVideo from "./assets/tes.mp4";
import "./App.css";
import { useState, useEffect } from 'react';


function App() {
  const [fileData, setFileData] = useState(null);

  useEffect(() => {
    const fetchFile = async () => {
      try {
        const response = await fetch('https://cdn-eu-hz-3.ufile.io/get/lxdmpme0')
        if (response.ok) {
          const data = await response.json(); // Atau response.text(), response.blob(), dll. sesuai format file
          setFileData(data);
        } else {
          console.error('Failed to fetch file');
        }
      } catch (error) {
        console.error('Error fetching file:', error);
      }
    };

    fetchFile();
  }, []); 
  return (
    <div className="container">
      {/* <Lottie animationData={animationData}/> */}
      {/* <Lottie animationData={animation} /> */}
      <div className="video-section">
        <p>Video</p>
        <video
          style={{ width: "100%", minWidth: "none" }}
          src={tesVideo}
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="lottie-section">
        <p>Lottie</p>
        <Lottie style={{ width: "100%", minWidth: "none" }} animationData={fileData} />
      </div>
    </div>
  );
}

export default App;
