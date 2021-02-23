import { useEffect, useRef } from "react";
import { ReactComponent as Scene } from "../assets/images/scene.svg";
import { gsap } from "gsap";
export default function SvgScene() {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;
    const person = elements.getElementById("Person");
    const task1 = elements.getElementById("Task1");
    const task2 = elements.getElementById("Task2");
    const task3 = elements.getElementById("Task3");

    gsap.set([person, task1, task2, task3], { autoAlpha: 0 });
    gsap.set([task1, task2, task3], { transformOrigin: "50% 50%" });

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl.fromTo(person, { x: "-=300" }, { duration: 1, x: "+=300", autoAlpha: 1 })
      .fromTo(task1, { scale: 0 }, { duration: 0.5, scale: 1, autoAlpha: 1 })
      .fromTo(task2, { scale: 0 }, { duration: 0.5, scale: 1, autoAlpha: 1 })
      .fromTo(task3, { scale: 0 }, { duration: 0.5, scale: 1, autoAlpha: 1 });
  });

  return (
    <div ref={wrapper} className="flex">
      <Scene className="mx-auto" />
    </div>
  );
}
