import { css } from "@emotion/react";
import React from "react";

function Cta() {
  return (
    <section css={{ background: "#00060e" }}>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="relative max-w-3xl mx-auto text-center">
            <div className="relative">
              <h2
                id="request-demo"
                className="h2 font-playfair-display text-slate-800 mb-4"
                css={{ color: "#f1f5f9" }}
              >
                Request your demo
              </h2>
              <p
                css={{ color: "rgb(148, 163, 184)", fontSize: 18 }}
                className="text-xl text-slate-500 mb-8"
              >
                Contact us via below email to get a customized easy-to-use
                system that fits your needs. With a bunch of features than
                papers and traditional systems.
              </p>
              <a
                css={css`
                  display: inline-block;
                  background: #2b66b1;
                  font-size: 18px;
                  font-weight: 700;
                  padding: 8px 32px;
                  color: #fff;
                  align-items: center;
                  border-radius: 1rem;
                  text-decoration: none;
                  cursor: pointer;
                `}
                href="mailto:support@fliv.io"
              >
                support@fliv.io
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
