import { useEffect, useRef } from "react";
import { ReactComponent as Scene } from "../assets/images/scene.svg";
import { gsap } from "gsap";
export default function SvgScene() {
  const wrapper = useRef(null);

  useEffect(() => {
    const [sceneElements, textBlock] = wrapper.current.children;
    const person = sceneElements.getElementById("Person");
    const task1 = sceneElements.getElementById("Task1");
    const task2 = sceneElements.getElementById("Task2");
    const task3 = sceneElements.getElementById("Task3");
    const text = textBlock;

    gsap.set([person, task1, task2, task3, text], { autoAlpha: 0 });
    gsap.set([person, task1, task2, task3], { autoAlpha: 0 });
    gsap.set([task1, task2, task3], { transformOrigin: "50% 50%" });

    const texttl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    texttl.fromTo(
      text,
      { x: "+=300" },
      { duration: 1, x: "-=300", autoAlpha: 1 }
    );

    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
    tl.fromTo(person, { x: "-=300" }, { duration: 1, x: "+=300", autoAlpha: 1 })
      .fromTo(task1, { scale: 0 }, { duration: 0.5, scale: 1, autoAlpha: 1 })
      .fromTo(task2, { scale: 0 }, { duration: 0.5, scale: 1, autoAlpha: 1 })
      .fromTo(task3, { scale: 0 }, { duration: 0.5, scale: 1, autoAlpha: 1 });
  }, []);

  return (
    <div ref={wrapper} className="flex items-center p-20 justify-between">
      <Scene className="mx-auto w-5/12" />
      <div className="w-6/12 py-10">
        <h1 className="text-lg font-medium mb-5">
          Excepteur tempor deserunt qui nulla reprehenderit labore minim
          exercitation eiusmod sint excepteur.
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
