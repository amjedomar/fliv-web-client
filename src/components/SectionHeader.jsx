import React from "react";
import classNames from "classnames";

class SectionHeader extends React.Component {
  render() {
    const { className, data, children, tag, ...props } = this.props;

    const classes = classNames("section-header", className);

    const Component = tag;

    return (
      <React.Fragment>
        {(data.title || data.paragraph) && (
          <div {...props} className={classes}>
            <div className="container-xs">
              {children}
              {data.title && (
                <Component
                  className={classNames(
                    "mt-0",
                    data.paragraph ? "mb-16" : "mb-0"
                  )}
                >
                  {data.title}
                </Component>
              )}
              {data.paragraph && <p className="m-0">{data.paragraph}</p>}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

SectionHeader.defaultProps = {
  children: null,
  tag: "h2",
};

export default SectionHeader;
