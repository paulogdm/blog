import React, { Fragment } from "react";
import "../static/sass/global.scss";
import { withRouter } from "next/router";
import { Layout, Header } from "../components/common/index";
import { Tags, SectionHeader } from "../components/common/section";
import { ArticleView } from "../components/common/post";

import Head from "next/head";

export default withRouter(props => {
  return (
    <Fragment>
      <Head>
        <title>Blog Post</title>
      </Head>

      <Layout>
        <Header />
        <Tags />

        <ArticleView />
      </Layout>
    </Fragment>
  );
});