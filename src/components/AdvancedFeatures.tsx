import { css } from "@emotion/react";
import styled from "@emotion/styled";

const img01Style = {
  position: "absolute",
  width: "130.11%",
  maxWidth: "130.11%",
  top: "-9.85%",
  left: "-11.93%",
} as const;

interface GridProps {
  imagePlace?: "left" | "right";
}

const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ imagePlace }: GridProps) =>
    imagePlace === "right" ? "1.3fr 1fr" : "1fr 1.3fr"};
  gap: 0 2rem;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    margin-bottom: 3rem;

    img {
      margin: 0 auto;
    }
  }
`;

const Details = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 30px;
    line-height: 42px;
    text-align: left;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  p {
    color: #565e81;
    font-size: 18px;
  }

  @media (max-width: 767px) {
    grid-row: 2 / 3;

    h3 {
      font-size: 26px;
    }

    p {
      font-size: 20px;
    }
    h3,
    p {
      text-align: center;
    }
  }
`;

const AdvancedFeatures = () => {
  return (
    <section
      css={css`
        position: relative;

        ::after {
          content: "";
          position: absolute;
          width: 100%;
          max-width: 100%;
          height: 500px;
          background-image: url(/illustration-section.svg);
          background-repeat: no-repeat;
          background-size: auto;
          left: 50%;
          top: 0;
          background-position: center top;
          transform: translate(-50%);
          z-index: -2;
          pointer-events: none;
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div
            css={css`
              width: 100%;
              margin: 0 auto;
              padding-left: 16px;
              padding-right: 16px;
              max-width: 668px;
              margin-bottom: 3rem;

              @media (min-width: 481px) {
                padding-left: 24px;
                padding-right: 24px;
              }
            `}
          >
            <h2 css={{ fontSize: 36, fontWeight: 700, textAlign: "center" }}>
              Built exclusively for you
            </h2>
            <p css={{ fontSize: 20, textAlign: "center" }}>
              Get a customized easy-to-use system that fits your needs. With a
              bunch of features than papers and traditional systems.
            </p>
          </div>

          <Grid>
            <Details>
              <h3>Immediate Synchronization</h3>
              <p>
                Data are saved and synced immediately across all devices.
                Letting multiple users contribute to the same data from
                different devices at the same time.
              </p>
            </Details>
            <img src="/features-split-top-01.png" />
          </Grid>
          <Grid imagePlace="right">
            <img src="/features-split-top-02.png" />
            <Details>
              <h3>Powerful and Simple</h3>
              <p>
                Provides a set of powerful easy-to-use tools that simplifies
                your data management. These tools have enhanced user experience
                according to modern standards.
              </p>
            </Details>
          </Grid>
          <Grid>
            <Details>
              <h3>Specific Permissions</h3>
              <p>
                Variant permissions for different employees and managers.
                Protecting sensitive data by allowing specific users only to
                view, create, update or delete it and block access to it for
                other users.
              </p>
            </Details>
            <img src="/features-split-top-03.png" />
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;
