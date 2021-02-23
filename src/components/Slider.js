import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import SliderStyles from "./styles/SliderStyles";

gsap.registerPlugin(Draggable);

const pictures = [
  {
    source:
      "https://images.unsplash.com/photo-1613820070607-ef1d3ccc07f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=60",
    content: {
      desc: "Egor Yakushkin.",
    },
  },
  {
    source:
      "https://images.unsplash.com/photo-1606385411504-2372dc13eef1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8&auto=format&fit=crop&w=600&q=60",
    content: {
      desc: "Egor Yakushkin.",
    },
  },
  {
    source:
      "https://images.unsplash.com/photo-1594123582884-6c88a690210b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1234&q=60",
    content: {
      desc: "Egor Yakushkin.",
    },
  },
  {
    source:
      "https://images.unsplash.com/photo-1596738680597-cc28ca2e0750?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1800&q=80",
    content: {
      desc: "Egor Yakushkin.",
    },
  },
  {
    source:
      "https://images.unsplash.com/photo-1612965045618-4de96f0bfc77?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",
    content: {
      desc: "Lorem Ipsum",
    },
  },
  {
    source:
      "https://images.unsplash.com/photo-1612847759895-9a123f6de308?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1844&q=80",
    content: {
      desc: "Lorem Ipsum",
    },
  },
  {
    source:
      "https://images.unsplash.com/photo-1612738072307-3a48bbc7fd80?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1868&q=80",
    content: {
      desc: "Lorem Ipsum",
    },
  },
  {
    source:
      "https://images.unsplash.com/photo-1612308229952-77720a1cd570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1868&q=80",
    content: {
      desc: "Lorem Ipsum",
    },
  },
];

const Slide = ({ imageSource, content }) => {
  return (
    <div className="slide">
      <div className="preview">
        <img src={imageSource} alt="The Plant" draggable="false" />
      </div>
      <div className="infos">
        <h2>{content.desc}</h2>
      </div>
    </div>
  );
};

export default function Slider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    Draggable.create(sliderRef.current, {
      type: "x",
      bounds: {
        minX: -sliderRef.current.clientWidth + window.innerWidth * 0.88,
        maxX: 0,
      },
    });
  }, []);

  return (
    <SliderStyles>
      <div className="slider" ref={sliderRef}>
        {pictures.map((item, index) => {
          return (
            <Slide
              key={index}
              imageSource={item.source}
              content={item.content}
            />
          );
        })}
      </div>
    </SliderStyles>
  );
}
