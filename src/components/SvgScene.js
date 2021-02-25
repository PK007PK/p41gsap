import { useEffect, useRef } from "react";
import { ReactComponent as Scene } from "../assets/images/scene.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SvgScene() {
  gsap.registerPlugin(ScrollTrigger);
  const wrapper = useRef(null);

  useEffect(() => {
    const [sceneElements, textElement] = wrapper.current.children;
    const person = sceneElements.getElementById("Person");
    const task1 = sceneElements.getElementById("Task1");
    const task2 = sceneElements.getElementById("Task2");
    const task3 = sceneElements.getElementById("Task3");

    gsap.set([person, task1, task2, task3, textElement], { autoAlpha: 0 });
    gsap.set([task1, task2, task3], { transformOrigin: "50% 50%" });

    const textAnim = gsap.fromTo(
      textElement,
      { x: "+=300" },
      {
        duration: 1.5,
        x: "-=300",
        autoAlpha: 1,
      }
    );

    const svgAnim = gsap
      .timeline({ defaults: { ease: "power3.inOut" } })
      .fromTo(
        person,
        { x: "-=300" },
        {
          duration: 1,
          x: "+=300",
          autoAlpha: 1,
        }
      )
      .fromTo(task1, { scale: 0 }, { duration: 0.2, scale: 1, autoAlpha: 1 })
      .fromTo(task2, { scale: 0 }, { duration: 0.2, scale: 1, autoAlpha: 1 })
      .fromTo(task3, { scale: 0 }, { duration: 0.2, scale: 1, autoAlpha: 1 });

    ScrollTrigger.create({
      trigger: "#svgScene",
      animation: textAnim,
      start: "top center",
    });
    ScrollTrigger.create({
      trigger: "#svgScene",
      animation: svgAnim,
      start: "top center",
    });
  }, []);

  return (
    <div
      ref={wrapper}
      className="min-h-screen flex flex-col sm:flex-row items-center justify-center overflow-hidden bg-yellow-200"
      id="svgScene"
    >
      <Scene className="w-11/12 sm:w-6/12" />
      <div className="w-11/12  sm:w-4/12 py-10">
        <h1 className="text-3xl font-medium mb-5">
          Excepteur tempor deserunt qui nulla reprehenderit
        </h1>
        <p className="text-base">
          Est consectetur proident eu officia magna pariatur eu cupidatat.
          Occaecat ullamco culpa sunt minim excepteur incididunt velit esse
          incididunt nostrud esse deserunt.
        </p>
      </div>
    </div>
  );
}
