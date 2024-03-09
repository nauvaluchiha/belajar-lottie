import Lottie from "lottie-react";
// import animationData from "./assets/lotties-jadi.json"
// import animation from "./assets/animation.json";
import tesLottie from "./assets/tes.json";
import tesVideo from "./assets/tes.mp4";

function App() {
  return (
    <>
      {/* <Lottie animationData={animationData}/> */}
      {/* <Lottie animationData={animation} /> */}
      <div style={{ display: "flex", gap: "2rem" }}>
        <video src={tesVideo} autoPlay loop muted></video>
        <Lottie animationData={tesLottie} />
      </div>
    </>
  );
}

export default App;
