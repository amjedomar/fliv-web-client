import { useState, useEffect } from "react";

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const flivColor = "#6593e3";
  const systemsColor = "#fff";

  return (
    <header className={`absolute w-full z-30`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <a
              href="/"
              className="block text-blue-600 transition duration-150 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 362.75 70.37"
                style={{
                  width: 139,
                }}
              >
                <path
                  d="M11.71,54.37H5.31V9.63H29.06l-.96,5.7H11.71v13.06l16.58-.06v5.7l-16.58,.06v20.29Zm0,0H5.31V9.63H29.06l-.96,5.7H11.71v13.06l16.58-.06v5.7l-16.58,.06v20.29Z"
                  style={{ fill: flivColor }}
                />
                <path
                  d="M48.51,54.37c-.68,.26-1.45,.45-2.3,.58-.85,.13-1.64,.19-2.37,.19-2.18,0-3.84-.64-4.99-1.92-1.15-1.28-1.73-3.14-1.73-5.57V7.01h6.02V47.52c0,.9,.16,1.57,.48,2.02,.32,.45,.86,.67,1.63,.67,.43,0,.99-.03,1.7-.1,.7-.06,1.23-.14,1.57-.22v4.48Z"
                  style={{ fill: flivColor }}
                />
                <path
                  d="M64.7,10.91c0,1.11-.38,2.05-1.15,2.82s-1.69,1.15-2.75,1.15-2.05-.38-2.82-1.15-1.15-1.71-1.15-2.82,.38-1.98,1.15-2.75,1.71-1.15,2.82-1.15,1.98,.38,2.75,1.15,1.15,1.69,1.15,2.75Zm-.83,43.46h-6.02V21.73h6.02V54.37Z"
                  style={{ fill: flivColor }}
                />
                <path
                  d="M101.38,21.73l-11.71,32.64h-7.17l-11.65-32.64h6.08l9.22,26.62,9.09-26.62h6.14Z"
                  style={{ fill: flivColor }}
                />
                <path
                  d="M150.27,13.02l-2.3,5.44c-1.62-1.15-3.41-2.09-5.38-2.82-1.96-.72-3.9-1.09-5.82-1.09-2.3,0-4.17,.38-5.6,1.15-1.43,.77-2.14,2.2-2.14,4.29,0,1.58,.56,2.88,1.7,3.9,1.13,1.02,2.53,1.95,4.19,2.78,1.66,.83,3.49,1.65,5.47,2.46,1.98,.81,3.81,1.77,5.47,2.88,1.66,1.11,3.06,2.46,4.19,4.06,1.13,1.6,1.7,3.62,1.7,6.05,0,2.26-.43,4.21-1.28,5.86-.85,1.64-1.98,2.99-3.39,4.03-1.41,1.05-3.03,1.82-4.86,2.34-1.83,.51-3.73,.77-5.7,.77-2.94,0-5.82-.54-8.64-1.63-2.82-1.09-5.21-2.68-7.17-4.77l2.37-5.18c1.79,1.83,3.91,3.27,6.37,4.32,2.45,1.05,4.9,1.57,7.33,1.57s4.46-.54,6.08-1.63c1.62-1.09,2.43-2.76,2.43-5.02,0-1.71-.55-3.14-1.66-4.29-1.11-1.15-2.51-2.17-4.19-3.04-1.69-.87-3.5-1.72-5.44-2.53-1.94-.81-3.75-1.74-5.44-2.78-1.69-1.04-3.1-2.3-4.26-3.78-1.15-1.47-1.75-3.32-1.79-5.54-.04-2.22,.34-4.08,1.15-5.6,.81-1.51,1.91-2.74,3.3-3.68,1.39-.94,2.96-1.62,4.74-2.05,1.77-.43,3.59-.64,5.47-.64,2.47,0,4.85,.37,7.14,1.12,2.28,.75,4.28,1.76,5.98,3.04Z"
                  style={{ fill: systemsColor }}
                />
                <path
                  d="M186.88,21.73l-12.22,33.73c-.94,2.47-2.16,4.67-3.65,6.59-.64,.81-1.39,1.61-2.24,2.4-.85,.79-1.81,1.48-2.88,2.08-1.07,.6-2.24,1.09-3.52,1.47-1.28,.38-2.69,.58-4.22,.58v-4.99c2.26,0,4.06-.43,5.41-1.28,1.34-.85,2.38-1.81,3.1-2.88,.81-1.2,1.39-2.58,1.73-4.16l-12.42-33.54h6.91l8.7,26.94,8.38-26.94h6.91Z"
                  style={{ fill: systemsColor }}
                />
                <path
                  d="M210.11,28.77c-1.24-.94-2.53-1.66-3.87-2.18-1.34-.51-2.7-.77-4.06-.77-1.54,0-2.76,.31-3.68,.93-.92,.62-1.38,1.68-1.38,3.17,0,1.2,.39,2.14,1.18,2.85,.79,.7,1.79,1.32,3.01,1.86,1.22,.53,2.52,1.05,3.9,1.54,1.39,.49,2.68,1.11,3.87,1.86,1.19,.75,2.18,1.7,2.94,2.85,.77,1.15,1.15,2.67,1.15,4.54,0,1.66-.32,3.11-.96,4.35-.64,1.24-1.47,2.25-2.5,3.04-1.02,.79-2.21,1.38-3.55,1.76-1.34,.38-2.72,.58-4.13,.58-2.13,0-4.22-.43-6.27-1.28s-3.8-2.09-5.25-3.71l1.92-4.42c1.37,1.37,2.91,2.46,4.64,3.3,1.73,.83,3.42,1.25,5.09,1.25s2.95-.33,4-.99c1.05-.66,1.59-1.76,1.63-3.3,0-1.37-.38-2.42-1.15-3.17-.77-.75-1.74-1.35-2.91-1.82-1.17-.47-2.45-.91-3.84-1.31-1.39-.4-2.68-.97-3.87-1.7-1.19-.73-2.19-1.69-2.98-2.88-.79-1.19-1.18-2.82-1.18-4.86,0-1.66,.29-3.08,.86-4.26,.58-1.17,1.35-2.13,2.34-2.88,.98-.75,2.11-1.29,3.39-1.63,1.28-.34,2.62-.51,4.03-.51,1.75,0,3.45,.29,5.09,.86,1.64,.58,3.15,1.38,4.51,2.4l-1.98,4.54Z"
                  style={{ fill: systemsColor }}
                />
                <path
                  d="M230.46,26.53v18.5c0,3.46,1.47,5.18,4.42,5.18,1.24,0,2.5-.32,3.78-.96v4.67c-1.75,.81-3.61,1.22-5.57,1.22-2.82,0-5-.8-6.56-2.4-1.56-1.6-2.34-3.96-2.34-7.07V26.53h-5.82v-4.93h5.82v-7.87l6.27-1.47v9.34h8.64v4.93h-8.64Z"
                  style={{ fill: systemsColor }}
                />
                <path
                  d="M262.14,55.14c-1.07,0-2.25-.08-3.55-.22-1.3-.15-2.6-.46-3.9-.93-1.3-.47-2.56-1.11-3.78-1.92-1.22-.81-2.29-1.88-3.23-3.2-.94-1.32-1.7-2.92-2.27-4.8-.58-1.88-.86-4.12-.86-6.72,0-2.05,.33-4.05,.99-6.02,.66-1.96,1.62-3.71,2.88-5.25,1.26-1.54,2.8-2.77,4.64-3.71,1.83-.94,3.95-1.41,6.34-1.41,2.86,0,5.25,.5,7.17,1.5,1.92,1,3.46,2.3,4.61,3.9,1.15,1.6,1.96,3.37,2.43,5.31,.47,1.94,.7,3.83,.7,5.66v2.05h-23.36c0,1.37,.25,2.7,.74,4,.49,1.3,1.21,2.46,2.14,3.49,.94,1.02,2.05,1.85,3.33,2.46,1.28,.62,2.73,.93,4.35,.93,1.36,0,2.66-.16,3.87-.48,1.22-.32,2.29-.67,3.23-1.06,1.11-.47,2.13-1,3.07-1.6l.06,5.5c-.98,.56-1.9,.98-2.75,1.28-.85,.3-1.87,.58-3.04,.83-1.17,.26-2.44,.38-3.81,.38Zm5.76-20.22c0-1.07-.16-2.14-.48-3.23-.32-1.09-.82-2.07-1.5-2.94-.68-.87-1.56-1.58-2.62-2.11-1.07-.53-2.37-.8-3.9-.8-1.32,0-2.51,.27-3.55,.8-1.05,.53-1.93,1.24-2.66,2.11-.73,.88-1.28,1.86-1.66,2.94s-.58,2.17-.58,3.23h16.96Z"
                  style={{ fill: systemsColor }}
                />
                <path
                  d="M317.69,20.96c1.58,0,3.07,.18,4.48,.54,1.41,.36,2.63,1.08,3.68,2.14,1.04,1.07,1.87,2.57,2.46,4.51,.6,1.94,.9,4.47,.9,7.58v18.62h-6.08v-19.26c0-1.02-.06-2.08-.19-3.17s-.4-2.09-.8-3.01c-.41-.92-.99-1.66-1.76-2.24-.77-.58-1.77-.86-3.01-.86-1.58,0-2.91,.35-4,1.06-1.09,.7-1.97,1.63-2.66,2.78-.68,1.15-1.17,2.48-1.47,3.97-.3,1.49-.45,3.01-.45,4.54v16.19h-6.08v-19.26c0-1.02-.06-2.08-.19-3.17s-.41-2.09-.83-3.01c-.43-.92-1.01-1.66-1.76-2.24-.75-.58-1.74-.86-2.98-.86-1.58,0-2.91,.35-4,1.06-1.09,.7-1.97,1.63-2.66,2.78-.68,1.15-1.17,2.48-1.47,3.97-.3,1.49-.45,3.01-.45,4.54v16.19h-6.02V21.66h4.99l.96,4.8c.68-1.19,1.42-2.13,2.21-2.82,.79-.68,1.83-1.3,3.14-1.86,1.3-.55,2.91-.83,4.83-.83,1.66,0,3.09,.33,4.29,.99,1.19,.66,2.17,1.4,2.91,2.21,.75,.81,1.44,1.88,2.08,3.2,.43-1.02,1.01-1.94,1.76-2.75,.75-.81,1.57-1.48,2.46-2.02,.9-.53,1.84-.94,2.85-1.22,1-.28,1.95-.42,2.85-.42Z"
                  style={{ fill: systemsColor }}
                />
                <path
                  d="M356.54,28.77c-1.24-.94-2.53-1.66-3.87-2.18-1.34-.51-2.7-.77-4.06-.77-1.54,0-2.76,.31-3.68,.93-.92,.62-1.38,1.68-1.38,3.17,0,1.2,.39,2.14,1.18,2.85,.79,.7,1.79,1.32,3.01,1.86,1.22,.53,2.52,1.05,3.9,1.54,1.39,.49,2.68,1.11,3.87,1.86,1.19,.75,2.18,1.7,2.94,2.85,.77,1.15,1.15,2.67,1.15,4.54,0,1.66-.32,3.11-.96,4.35-.64,1.24-1.47,2.25-2.5,3.04-1.02,.79-2.21,1.38-3.55,1.76-1.34,.38-2.72,.58-4.13,.58-2.13,0-4.22-.43-6.27-1.28s-3.8-2.09-5.25-3.71l1.92-4.42c1.37,1.37,2.91,2.46,4.64,3.3,1.73,.83,3.42,1.25,5.09,1.25s2.95-.33,4-.99c1.04-.66,1.59-1.76,1.63-3.3,0-1.37-.38-2.42-1.15-3.17-.77-.75-1.74-1.35-2.91-1.82-1.17-.47-2.45-.91-3.84-1.31-1.39-.4-2.68-.97-3.87-1.7-1.2-.73-2.19-1.69-2.98-2.88-.79-1.19-1.18-2.82-1.18-4.86,0-1.66,.29-3.08,.86-4.26,.58-1.17,1.35-2.13,2.34-2.88,.98-.75,2.11-1.29,3.39-1.63,1.28-.34,2.62-.51,4.03-.51,1.75,0,3.45,.29,5.09,.86s3.15,1.38,4.51,2.4l-1.98,4.54Z"
                  style={{ fill: systemsColor }}
                />
              </svg>
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            {/* <ul className="flex grow justify-start flex-wrap items-center">
              <li>
                <Link to="/pricing" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Pricing</Link>
              </li>
              <li>
                <Link to="/about" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">About</Link>
              </li>
              <li>
                <Link to="/blog" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Blog</Link>
              </li>      
              <li>
                <Link to="/wall-of-love" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Wall of Love</Link>
              </li>                   
              <Dropdown title="Resources">
                <li>
                  <Link to="/404" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">404</Link>
                </li>
                <li>
                  <Link to="/support" className="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight">Support</Link>
                </li>                
              </Dropdown>
            </ul> */}

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {/* <li>
                <Link to="/signin" className="font-medium text-slate-800 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out">Sign in</Link>
              </li> */}
              <li>
                <a
                  href="/request-demo"
                  className="font-medium text-blue-600 dark:text-slate-300 dark:hover:text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out group"
                  css={(theme) => ({ color: theme.palette.primary.light })}
                >
                  Request Demo{" "}
                  <span
                    className="tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                    css={(theme) => ({ color: theme.palette.primary.light })}
                  >
                    -&gt;
                  </span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile menu */}
          <div className="flex md:hidden">
            {/* Hamburger button */}
            <button className={`hamburger`} aria-controls="mobile-nav">
              <span className="sr-only">Menu</span>
              <svg
                className="w-6 h-6 fill-current text-slate-900 dark:text-slate-100"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="4" width="24" height="2" />
                <rect y="11" width="24" height="2" />
                <rect y="18" width="24" height="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
