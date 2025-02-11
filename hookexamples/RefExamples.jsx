import React, { useEffect, useRef, useState } from "react";
import VIDEO from "./whats.mp4";

const RefExamples = () => {
    const [play, setPlay] = useState(true);
    const eleRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        eleRef.current.style.color = "teal";
        eleRef.current.innerText = "React Ref";
    }, []); // Dependency array added

    const playORpause = () => {
        if (play) {
            videoRef.current.play();
            setPlay(false);
        } else {
            videoRef.current.pause();
            setPlay(true);
        }
    };

    return (
        <div>
            <h1 ref={eleRef}>RefExamples</h1>
            <video src={VIDEO} ref={videoRef} onClick={playORpause} width="400" controls></video>
        </div>
    );
};

export default RefExamples;