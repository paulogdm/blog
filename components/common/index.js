import React, { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import "../../static/sass/index.scss";
import "../../static/sass/global.scss";
import { ContextConsumer } from "../context/index";

const layoutStyles = {
  wrapper: {
    width: "85vw",
    marginRight: "auto",
    marginLeft: "auto"
  }
};

const ThemeChanger = () => {
  return (
    <Fragment>
      <ContextConsumer>
        {({ theme, switchTheme }) => {
          return (
            <div className="theme-changer pointer" onClick={switchTheme}>
              <span role="img" aria-label="moon">
                {theme ? "🌚" : "🌝"}
              </span>
            </div>
          );
        }}
      </ContextConsumer>

      <style jsx>
        {`
          div {
            margin-left: auto;
          }

          span {
            font-size: 20px !important;
          }

          span:last-child {
            font-size: 14px;
          }
        `}
      </style>
    </Fragment>
  );
};

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ContextConsumer>
        {({ theme }) => {
          return (
            <div className={theme ? "dark" : "light"}>
              <div style={layoutStyles.wrapper}>{children}</div>
              <style jsx>{`
                @font-face {
                  font-family: "circular";
                  src: url("../../static/fonts/ciruclar.ttf");
                  font-weight: normal;
                  font-style: normal;
                  font-display: auto;
                }

                @font-face {
                  font-family: "geo";
                  src: url("../../static/fonts/geo.ttf");
                  font-weight: normal;
                  font-style: normal;
                  font-display: auto;
                }
              `}</style>
            </div>
          );
        }}
      </ContextConsumer>
    </Fragment>
  );
};

const Logo = () => (
  <Fragment>
    <Link href="/">
      <div className="ca-logo center">
        <div> C </div>
      </div>
    </Link>
  </Fragment>
);

const Navbar = () => (
  <Fragment>
    <nav className="navbar padding-top  flex-wrap center">
      <Logo />
      <div className="ca-routes">
        <Link href="https://casprine-dev.netlify.com/work">
          <span className="link">Work</span>
        </Link>
        <Link href="https://casprine-dev.netlify.com/design">
          <span className="link" href="https://casprine-dev.netlify.com/design">
            Design
          </span>
        </Link>
        <Link href="/bookmark">
          <span className="link">Bookmarked</span>
        </Link>
      </div>
      <ThemeChanger />
    </nav>
  </Fragment>
);

const TagImage = props => {
  const { url, name } = props[0];
  return (
    <Fragment>
      <img src={url} alt={name || "C"} className="tag-image" />
    </Fragment>
  );
};

const Colors = {
  primary: "#071e3d",
  secondary: "#eaa81b",
  grey: "hsl(0, 0%, 27%)",
  green: "green",
  defaultFont: ` -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`
};

export { Layout, Navbar, Colors, Logo, TagImage };
