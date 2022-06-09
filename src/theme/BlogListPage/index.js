/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import BlogPostItem from "@theme/BlogPostItem";
import BlogListPaginator from "@theme/BlogListPaginator";
import { ThemeClassNames } from "@docusaurus/theme-common";
import Head from "@docusaurus/Head";

import styles from "./styles.module.css";
import clsx from "clsx";

function BlogListPage(props) {
  const { metadata, items } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const { blogDescription, blogTitle, permalink } = metadata;
  const isBlogOnlyMode = permalink === "/";
  const title = isBlogOnlyMode ? siteTitle : blogTitle;

  return (
    <Layout
      title={title}
      description={blogDescription}
      wrapperClassName={ThemeClassNames.wrapper.blogPages}
      pageClassName={ThemeClassNames.page.blogListPage}
      searchMetadatas={{
        // assign unique search tag to exclude this page from search results!
        tag: "blog_posts_list",
      }}>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Roboto:wght@100;300;400&display=swap" rel="stylesheet"></link>
      </Head>
      <header>
        <h1 className={clsx("text--center margin-top--lg margin-bottom--xs", styles.titleText)}>
          Hitesh's Blog &amp; Thoughts About Programming 'n Stuff
        </h1>
        <p style={{ "textAlign": "center", "marginLeft": "18px", "marginRight": "18px" }}>
          Usually writes here about programming, cool things that he finds related to his tech-stack or rants about life.
        </p>
      </header>
      <main className={styles.wrapper}>
        <div className={styles.backgroundContainer}>
          <div className={clsx("material-icons", styles.background)}>
            edit_note
          </div>
        </div>
        <div className={styles.CardContainer}>
          {items.map(({ content: BlogPostContent }) => (
            <BlogPostItem
              key={BlogPostContent.metadata.permalink}
              frontMatter={BlogPostContent.frontMatter}
              assets={BlogPostContent.assets}
              metadata={BlogPostContent.metadata}
              truncated={BlogPostContent.metadata.truncated}>
              <BlogPostContent />
            </BlogPostItem>
          ))}
        </div>
        <BlogListPaginator metadata={metadata} />
      </main>
    </Layout >
  );
}

export default BlogListPage;
