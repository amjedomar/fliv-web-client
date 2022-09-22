import React from "react";
import classNames from "classnames";
import SectionHeader from "./SectionHeader";
import Image from "./Image";

class FeaturesSplit extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      "features-split section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "features-split-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const splitClasses = classNames(
      "split-wrap",
      invertMobile && "invert-mobile",
      invertDesktop && "invert-desktop",
      alignTop && "align-top"
    );

    const sectionHeader = {
      title: "Built exclusively for you",
      paragraph:
        "Get a customized easy-to-use system that fits your needs. With a bunch of features than papers and traditional systems.",
    };

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={splitClasses}>
              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3
                    className="mt-0 mb-16 reveal-from-left"
                    data-reveal-container=".split-item"
                  >
                    Immediate Synchronization
                  </h3>
                  <p
                    className="m-0 reveal-from-left"
                    data-reveal-delay="100"
                    data-reveal-container=".split-item"
                  >
                    Data are saved and synced immediately across all devices.
                    Letting multiple users contribute to the same data from
                    different devices at the same time.
                  </p>
                </div>
                <div
                  className={classNames(
                    "split-item-image center-content-mobile illustration-element-02 reveal-scale-up",
                    imageFill && "split-item-image-fill"
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200"
                >
                  <Image
                    src="/features-split-image.svg"
                    alt="Features split 01"
                    width={528}
                    height={396}
                  />
                  <div style={img01Style}>
                    <Image
                      src="/features-split-top-01.png"
                      alt="Features split top 01"
                      width={687}
                      height={522}
                    />
                  </div>
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3
                    className="mt-0 mb-16 reveal-from-right"
                    data-reveal-container=".split-item"
                  >
                    Powerful and Simple
                  </h3>
                  <p
                    className="m-0 reveal-from-right"
                    data-reveal-delay="100"
                    data-reveal-container=".split-item"
                  >
                    Provides a set of powerful easy-to-use tools that simplifies
                    your data management. These tools have enhanced user
                    experience according to modern standards.
                  </p>
                </div>
                <div
                  className={classNames(
                    "split-item-image center-content-mobile illustration-element-03 reveal-scale-up",
                    imageFill && "split-item-image-fill"
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200"
                >
                  <Image
                    src="/features-split-image.svg"
                    alt="Features split 02"
                    width={528}
                    height={396}
                  />
                  <div style={img02Style}>
                    <Image
                      src="/features-split-top-02.png"
                      alt="Features split top 02"
                      width={654}
                      height={522}
                    />
                  </div>
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile">
                  <h3
                    className="mt-0 mb-16 reveal-from-left"
                    data-reveal-container=".split-item"
                  >
                    Specific Permissions
                  </h3>
                  <p
                    className="m-0 reveal-from-left"
                    data-reveal-delay="100"
                    data-reveal-container=".split-item"
                  >
                    Variant permissions for different employees and managers.
                    Protecting sensitive data by allowing specific users only to
                    view, create, update or delete it and block access to it for
                    other users.
                  </p>
                </div>
                <div
                  className={classNames(
                    "split-item-image center-content-mobile illustration-element-04 reveal-scale-up",
                    imageFill && "split-item-image-fill"
                  )}
                  data-reveal-container=".split-item"
                  data-reveal-delay="200"
                >
                  <Image
                    src="/features-split-image.svg"
                    alt="Features split 03"
                    width={528}
                    height={396}
                  />
                  <div style={img03Style}>
                    <Image
                      src="/features-split-top-03.png"
                      alt="Features split top 03"
                      width={654}
                      height={521}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const img01Style = {
  position: "absolute",
  width: "130.11%",
  maxWidth: "130.11%",
  top: "-9.85%",
  left: "-11.93%",
};

const img02Style = {
  position: "absolute",
  width: "123.86%",
  maxWidth: "123.86%",
  top: "-9.85%",
  left: "-11.93%",
};

const img03Style = {
  position: "absolute",
  width: "123.86%",
  maxWidth: "123.86%",
  top: "-9.85%",
  left: "-11.93%",
};

export default FeaturesSplit;
