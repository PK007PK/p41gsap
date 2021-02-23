import styled from "styled-components";

const SliderStyles = styled.div`
  .slider {
    position: fixed;
    top: 50%;
    left: 6vw;
    transform: translateY(-50%);
    display: flex;

    .slide {
      &:not(:first-child) {
        margin-left: 6vw;
      }
      .preview {
        height: 350px;
        width: 350px;
        background: #c4c4c4;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
      .infos {
        font-weight: light;

        h3,
        h2 {
          font: inherit;
        }

        h3 {
          padding-top: 15px;
          color: #635d5d;
          font-size: 10px;
          text-transform: uppercase;
        }
        h2 {
          font-size: 18px;
          color: #000;
          padding-top: 10px;
        }
      }
    }
  }
`;

export default SliderStyles;
