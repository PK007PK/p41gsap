import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function SplitTextComponent() {
  gsap.registerPlugin(ScrollTrigger);
  const wrapper = useRef(null);

  useEffect(() => {
    const [titleElement, textElement] = wrapper.current.children;

    gsap.set([titleElement, textElement], { autoAlpha: 0 });

    const textAnim = gsap.fromTo(
      [titleElement, textElement],
      { x: "-=100" },
      {
        duration: 1.5,
        x: "+=100",
        autoAlpha: 1,
      }
    );

    ScrollTrigger.create({
      trigger: "#split_component",
      animation: textAnim,
      start: "top center",
    });
  }, []);

  return (
    <div
      id="split_component"
      ref={wrapper}
      className="px-5 py-40 text-white text-center bg-black overflow-hidden"
    >
      <h2 id="split_title" className="text-yellow-300 text-2xl font-bold mb-10">
        NIETZSCHE IPSUM
      </h2>
      <p id="split_txt">
        Strong truth abstract society depths ultimate will. Law moral endless
        grandeur aversion ultimate love virtues madness gains aversion law evil.
        Hope will of gains grandeur hatred grandeur joy deceptions spirit.
        Society strong gains christian god. Decrepit self fearful overcome love
        pious christianity right gains eternal-return marvelous will fearful.
        Love free contradict ideal virtues of evil salvation value society. Love
        burying justice decrepit morality horror pinnacle of spirit of.
      </p>
    </div>
  );
}
