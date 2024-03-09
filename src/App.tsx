import Lottie from "lottie-react";
// import animationData from "./assets/lotties-jadi.json"
// import animation from "./assets/animation.json";
// import tesLottie from "./assets/tes.json";
// import tesVideo from "./assets/tes.mp4";
import "./App.css";
import { useState, useEffect } from 'react';


function App() {
  const [fileData, setFileData] = useState(null);

  useEffect(() => {
    const fetchFile = async () => {
      try {
        const response = await fetch('https://cdn-eu-hz-3.ufile.io/get/lxdmpme0?token=ZTc2Y2U4YzU2OWFkMWFmMzQ2OThjZDg2ODYyYmM3YzNkNGQ2ZTlmNzBhZjEwNmYzOGMzNzcwMDFlNTIwZjY1NTMzMDMwNDUyMzdmOTFkNmY4NmIzMmY0MjMxYTRhYzk4M2NkNmRkZGNhY2Y2Zjg1OTNhZmMyOWIxZWM3YmM3ZTFTOG5JZWFKckVwKzZocEkzTnNrVDFhd1REWEJ3NHlXUmhMajl0VHM1cjBrMnViYlE0b2kvV2liMUJSQlRPZm9VVHNRclJRNlF1Wll1bGhSMit1UTB0TUZhZEtWTm5GM1RNTEVUcTZsb2gyUkwzczVNbVREWmkvLzVpOUlWR0lyaEluNE9IV3RRWkR2TTV5Smo2TzhVd1Y5YUYwZEtCV0NoUEhYYmx5T2JpQmh5b0xyUC95ZmxYWHFvOEtVbmRvUXp5V0NBcjF6MnBzb1BnNWpiYjV6RGFTa0k3SXAwMWltWE5naUNVa0ozbUcwY1RVeWREejdseGsrN2JSWnlsUENV');
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
{/*         <video
          style={{ width: "100%", minWidth: "none" }}
          src={tesVideo}
          autoPlay
          loop
          muted
        ></video> */}
      </div>
      <div className="lottie-section">
        <p>Lottie</p>
        <Lottie style={{ width: "100%", minWidth: "none" }} animationData={fileData} />
      </div>
    </div>
  );
}

export default App;
