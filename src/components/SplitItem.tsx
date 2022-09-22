import { CSSProperties } from "react";
import styled from "@emotion/styled";

interface SplitItemProps {
  heading: string;
  desc: string;
  direction: "left" | "right";
  illustrationNum: string;
  img: { src: string; style: CSSProperties; alt: string };
}

// split-item-image: position relative

// @media (min-width: 821px) {
//   .container .split-wrap .split-item .split-item-content {
//     width: 488px;
//   }
//   .container .split-wrap .split-item .split-item-image {
//     min-width: 528px;
//   }
// }

const Root = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;

  @media (min-width: 641px) {
    padding-top: 40px;
    padding-bottom: 40px;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
  }
`;

const Content = styled.div`
  @media (max-width: 640px) {
    order: 1;
    margin-bottom: 0 !important;
    text-align: center;
  }

  @media (min-width: 641px) {
    flex-shrink: 0;
    width: 396px;
    margin-bottom: 0;
    margin-right: 64px;
  }

  @media (min-width: 821px) {
    width: 488px;
  }
`;

const Heading = styled.h3`
  margin-top: 0;
  margin-bottom: 16px;
  opacity: 1;
  transform: translate(0);
`;

const SplitItem = ({
  heading,
  desc,
  direction,
  illustrationNum,
  img,
}: SplitItemProps) => (
  <Root>
    <Content>
      <Heading
        css={{
          "@media (min-width: 641px)": {
            transform: `translateX(${20 * (direction === "left" ? -1 : 1)}px)`,
          },
        }}
        data-reveal-container=".split-item"
      >
        {heading}
      </Heading>
      <p
        className={`m-0 reveal-from-${direction} is-revealed`}
        data-reveal-delay="100"
        data-reveal-container=".split-item"
      >
        {desc}
      </p>
    </Content>

    <div
      className={
        `split-item-image center-content-mobile illustration-element-${illustrationNum}` +
        " " +
        `reveal-scale-up split-item-image-fill is-revealed`
      }
      data-reveal-container=".split-item"
      data-reveal-delay="200"
    >
      <img
        src="/features-split-image.svg"
        width="528"
        height="396"
        alt="Features split"
      />

      <div style={img.style}>
        <img src={img.src} alt={img.alt} />
      </div>
    </div>
  </Root>
);

export default SplitItem;
