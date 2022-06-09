/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import clsx from "clsx";
import { MDXProvider } from "@mdx-js/react";
import Translate, { translate } from "@docusaurus/Translate";
import Link from "@docusaurus/Link";
import { useBaseUrlUtils } from "@docusaurus/useBaseUrl";
import { usePluralForm } from "@docusaurus/theme-common";
import MDXComponents from "@theme/MDXComponents";
import Seo from "@theme/Seo";
import BlogPostAuthors from "@theme/BlogPostAuthors";
import TagsListInline from "@theme/TagsListInline";
import Head from "@docusaurus/Head";

import styles from "./styles.module.css";

// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
  const { selectMessage } = usePluralForm();
  return (readingTimeFloat) => {
    const readingTime = Math.ceil(readingTimeFloat);
    return selectMessage(
      readingTime,
      translate(
        {
          id: "theme.blog.post.readingTime.plurals",
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: "One min read|{readingTime} min read",
        },
        { readingTime },
      ),
    );
  };
}

function BlogPostItem(props) {
  const readingTimePlural = useReadingTimePlural();
  const {
    children,
    frontMatter,
    metadata,
    truncated,
    assets,
    isBlogPostPage = false,
  } = props;
  const { date, formattedDate, permalink, tags, readingTime, title, authors } =
    metadata;
  const { keywords } = frontMatter;
  const { withBaseUrl } = useBaseUrlUtils();

  function renderPostHeader() {
    const TitleHeading = isBlogPostPage ? "h1" : "h2";

    return (
      <header>
        <TitleHeading
          className={clsx(styles.blogPostTitle, {
            [styles.smallTitle]: !isBlogPostPage,
          })}
          itemProp="headline">
          {isBlogPostPage ? title : <Link to={permalink}>{title}</Link>}
        </TitleHeading>
        <div className={clsx(styles.blogPostData, "margin-vert--md")}>
          <time dateTime={date} itemProp="datePublished">
            {formattedDate}
          </time>

          {readingTime && (
            <>
              {" · "}
              {readingTimePlural(readingTime)}
            </>
          )}
        </div>
        {isBlogPostPage && (
          <BlogPostAuthors authors={authors} assets={assets} />
        )}
      </header>
    );
  }

  if (!isBlogPostPage) {
    return (
      <div
        className={clsx("col col--4", styles.blogCard)}
        itemProp="blogPost"
        itemScope
        itemType="http://schema.org/BlogPosting">
        <Seo {...{ keywords, image: assets.image }} />
        {assets.image && (
          <img itemProp="image" className={styles.cardImg} src={assets.image} />
        )}
        <div className={styles.cardContent}>
          {renderPostHeader()}
          <div className="markdown">
            <MDXProvider components={MDXComponents}>{children}</MDXProvider>
            {truncated && (
              <Link
                to={metadata.permalink}
                aria-label={`Read more about ${title}`}>
                <b>
                  <Translate
                    id="theme.blog.post.readMore"
                    description="The label used in blog post item excerpts to link to full blog posts">
                    Read More
                  </Translate>
                </b>
              </Link>
            )}
          </div>
          {tags.length > 0 && (
            <div className={"col col--9 margin-top--md"}>
              <TagsListInline tags={tags} />
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      <Seo {...{ keywords, image: assets.image }} />
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap" rel="stylesheet"></link>
      </Head>
      <article
        itemProp="blogPost"
        itemScope
        itemType="http://schema.org/BlogPosting">
        {renderPostHeader()}
        {assets.image && (
          <meta
            itemProp="image"
            content={withBaseUrl(assets.image, { absolute: true })}
          />
        )}
        <div className="markdown">
          <MDXProvider components={MDXComponents}>{children}</MDXProvider>
        </div>
        {(tags.length > 0 || truncated) && (
          <footer
            className={clsx(
              "row docusaurus-mt-lg",
              styles.blogPostDetailsFull,
            )}>
            {tags.length > 0 && (
              <div className={"col"}>
                <TagsListInline tags={tags} />
              </div>
            )}
          </footer>
        )}
      </article>
    </>
  );
}

export default BlogPostItem;