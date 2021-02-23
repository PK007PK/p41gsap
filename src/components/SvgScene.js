import { useEffect, useRef } from "react";
import { ReactComponent as Scene } from "../assets/images/scene.svg";

export default function SvgScene() {
  const wrapper = useRef(null);
  return (
    <div ref={wrapper} className="flex">
      <Scene className="mx-auto" />
    </div>
  );
}
