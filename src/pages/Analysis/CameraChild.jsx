import { useEffect } from "react";

const CameraModal = () => {

  let localstream;

  useEffect(() => {
    let vid = document.getElementById("vid");
    if (navigator.mediaDevices.getUserMedia !== null) {
      var options = {
        video: true,
        audio: true
      };
      navigator.getUserMedia(
        options,
        function (stream) {
          vid.srcObject = stream;
          localstream = stream;
          vid.play();
          console.log(stream, "streaming");
        },
        function (e) {
          console.log("background error : " + e.name);
        }
      );
    }
  });

  const camON = () => {
    let vid = document.getElementById("vid");
    if (navigator.mediaDevices.getUserMedia !== null) {
      var options = {
        video: true,
        audio: true
      };
      navigator.getUserMedia(
        options,
        function (stream) {
          vid.srcObject = stream;
          localstream = stream;
          vid.play();
          console.log(stream, "streaming");
        },
        function (e) {
          console.log("background error : " + e.name);
        }
      );
    }
  };

  const capOff = () => {
    let vid = document?.getElementById("vid");
    if (vid) {
      vid.pause();
      vid.src = "";
    }
    localstream?.getTracks()?.forEach((x) => x.stop());
    console.log("all capture devices off");
  };

  return(
  <>
    <video id="vid" height="120" width="160" autoPlay></video>
    <br />
    <button onClick={capOff}>Turn Capture Off</button>
    <button onClick={camON}>Turn Capture ON</button>
  </>
  )
}

export default CameraModal;