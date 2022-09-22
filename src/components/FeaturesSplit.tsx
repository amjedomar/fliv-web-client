const img01Style = {
  position: "absolute",
  width: "130.11%",
  maxWidth: "130.11%",
  top: "-9.85%",
  left: "-11.93%",
} as const;

const img02Style = {
  position: "absolute",
  width: "123.86%",
  maxWidth: "123.86%",
  top: "-9.85%",
  left: "-11.93%",
} as const;

const img03Style = {
  position: "absolute",
  width: "123.86%",
  maxWidth: "123.86%",
  top: "-9.85%",
  left: "-11.93%",
} as const;

const FeaturesSplit = () => {
  return (
    <section className="features-split section has-top-divider illustration-section-05">
      <div className="container">
        <div className="features-split-inner section-inner">
          <div className="split-wrap invert-mobile">
            <div className="split-item">
              <div className="split-item-content center-content-mobile">
                <h3
                  className="mt-0 mb-16 reveal-from-left is-revealed"
                  data-reveal-container=".split-item"
                >
                  Immediate Synchronization
                </h3>
                <p
                  className="m-0 reveal-from-left is-revealed"
                  data-reveal-delay="100"
                  data-reveal-container=".split-item"
                >
                  Data are saved and synced immediately across all devices.
                  Letting multiple users contribute to the same data from
                  different devices at the same time.
                </p>
              </div>
              <div
                className="split-item-image center-content-mobile illustration-element-02 reveal-scale-up split-item-image-fill is-revealed"
                data-reveal-container=".split-item"
                data-reveal-delay="200"
              >
                <div style={img01Style}>
                  <img
                    src="/features-split-top-01.png"
                    width="687"
                    height="522"
                    alt="Features split top 01"
                  />
                </div>
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile">
                <h3
                  className="mt-0 mb-16 reveal-from-right is-revealed"
                  data-reveal-container=".split-item"
                >
                  Powerful and Simple
                </h3>
                <p
                  className="m-0 reveal-from-right is-revealed"
                  data-reveal-delay="100"
                  data-reveal-container=".split-item"
                >
                  Provides a set of powerful easy-to-use tools that simplifies
                  your data management. These tools have enhanced user
                  experience according to modern standards.
                </p>
              </div>
              <div
                className="split-item-image center-content-mobile illustration-element-03 reveal-scale-up split-item-image-fill is-revealed"
                data-reveal-container=".split-item"
                data-reveal-delay="200"
              >
                <div style={img02Style}>
                  <img
                    src="/features-split-top-02.png"
                    width="654"
                    height="522"
                    alt="Features split top 02"
                  />
                </div>
              </div>
            </div>
            <div className="split-item">
              <div className="split-item-content center-content-mobile">
                <h3
                  className="mt-0 mb-16 reveal-from-left is-revealed"
                  data-reveal-container=".split-item"
                >
                  Specific Permissions
                </h3>
                <p
                  className="m-0 reveal-from-left is-revealed"
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
                className="split-item-image center-content-mobile illustration-element-04 reveal-scale-up split-item-image-fill is-revealed"
                data-reveal-container=".split-item"
                data-reveal-delay="200"
              >
                <div style={img03Style}>
                  <img
                    src="/features-split-top-03.png"
                    width="654"
                    height="521"
                    alt="Features split top 03"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSplit;
