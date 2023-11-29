import backgroundVideo from "./assets/backgroundVideo.mp4";
import icon1 from "./assets/icon1.svg";
import icon2 from "./assets/icon2.svg";
import icon3 from "./assets/icon3.svg";
import icon4 from "./assets/icon4.svg";
import "./Home.css";

export default function Home() {
  return (
    <div className="parent">
      <video
        autoPlay
        loop
        muted
        id="background-video"
        className="fullscreen-bg-video"
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser is not supported.
      </video>
      <div className="icon-container">
        <img src={icon1} width={40} alt="icon1" />
        <img src={icon2} width={40} alt="icon2" />
        <img src={icon3} width={40} alt="icon3" />
        <img src={icon4} width={40} alt="icon4" />
      </div>
      <div className="content-box">
        <h1>You were born to thrive</h1>
        <p>While society might want you weak, eating vegetable gruel, living in a commune, and singing kumbaya while you forget how to think for yourself.
          We believe you were made for something more. Being strong and resilient are two of the key features of any successful human. Here at Evolutionary Health, we
          provide you with the tools to not only survive, but to thrive. Be the person that millions of years of evolution designed you to be, and reclaim your Evolutionary Health today.</p>
      </div>
    </div>
  );
}
