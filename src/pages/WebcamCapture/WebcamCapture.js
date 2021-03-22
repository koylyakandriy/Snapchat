import React, { useCallback, useRef } from "react";
import Webcam from "react-webcam";
import RadioButtonUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setCameraImage } from "../../features/cameraSlice";

import "./WebcamCapture.css";

const videoConstrains = {
  width: 250,
  height: 400,
  facingMode: "user",
};

const WebcamCapture = () => {
  const webcamRef = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    dispatch(setCameraImage(imageSrc));
    history.push("/preview");
  }, [webcamRef, dispatch, history]);

  return (
    <div className="webcamCapture">
      <Webcam
        audio={false}
        height={videoConstrains.height}
        width={videoConstrains.width}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstrains}
      />
      <RadioButtonUnchecked
        className="webcamCapture__button"
        onClick={capture}
        fontSize="large"
      />
    </div>
  );
};

export default WebcamCapture;
