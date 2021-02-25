import { gsap } from "gsap";
import { useEffect, useState } from "react";

export default function Toogler() {
  const [rotate, setRotate] = useState(false);
  const [rotationTween, setRotationTween] = useState(
    gsap.to({}, 1, { paused: true })
  );

  let rotator = null;

  const toggleRotate = () => {
    setRotate(!rotate);
  };

  useEffect(() => {
    setRotationTween(gsap.to(rotator, 0.3, { rotation: 180 }).reverse());
  }, []);

  useEffect(() => {
    rotationTween.reversed(!rotate);
  }, [rotate]);

  return (
    <div className="px-5 py-40 text-center overflow-hidden flex justify-center items-center bg-red-800">
      <button
        className="p-3 text-white bg-black border-yellow-300"
        onClick={toggleRotate}
      >
        Toggle Rotate
      </button>
      <div className="ml-10 bg-white p-3" ref={(e) => (rotator = e)}>
        Side Effect
      </div>
    </div>
  );
}
