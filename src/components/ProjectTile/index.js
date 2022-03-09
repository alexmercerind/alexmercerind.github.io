import React, { useEffect, useState } from "react";
import { StarIcon, RepoForkedIcon, EyeIcon } from "@primer/octicons-react";
import { Carousel } from "react-responsive-carousel";

import "aos/dist/aos.css";
import styles from "./styles.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import clsx from "clsx";

const kLanguageColors = {
  "Dart": "#00B4AB",
  "Python": "#3572A5",
  "C": "#555555",
  "C++": "#F34B7D",
  "C#": "#178600",
  "Java": "#B07219",
  "JavaScript": "#F1E05A",
  "TypeScript": "#2B7489",
  "HTML": "#E44B23",
  "CSS": "#563D7C",
}

export default function ProjectTile({ index, maintainer, repository, images, extraLanguages }) {
  const [repositoryJSON, setRepositoryJSON] = useState(null);
  useEffect(async () => {
    let response = await fetch(`https://api.github.com/repos/${maintainer}/${repository}`);
    let responseJSON = await response.json();
    setRepositoryJSON(responseJSON);
  }, []);

  return <div data-aos={`fade-up-${index % 2 == 0 ? "right" : "left"}`} className={styles.card}>
    <div className={styles.titleBar}>
      <div className={styles.titleBarContent}>
        <a href={repositoryJSON?.html_url} target={"__blank"} className={styles.title}>
          {repository}
        </a>
        <a href={repositoryJSON?.html_url} target={"__blank"} className={clsx("material-icons", "md-36", styles.titleBarIcon)}>open_in_new</a>
      </div>
      <div className={styles.description}>
        {repositoryJSON?.description?.replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, "")}
      </div>
    </div>
    <div className={styles.cardContent}>
      <div className={styles.iconBar}>
        <div className={styles.iconContainer}>
          <div className={styles.icon}>
            <StarIcon size="small" />
          </div>
          <div className={styles.iconLabel}>
            {(repositoryJSON?.stargazers_count ?? "Unknown") + " Stars"}
          </div>
        </div>
        <div className={styles.iconContainer}>
          <div className={styles.icon}>
            <RepoForkedIcon size="small" />
          </div>
          <div className={styles.iconLabel}>
            {(repositoryJSON?.forks_count ?? "Unknown") + " Forks"}
          </div>
        </div>
        <div className={styles.iconContainer}>
          <div className={styles.icon}>
            <EyeIcon size="small" />
          </div>
          <div className={styles.iconLabel}>
            {(repositoryJSON?.subscribers_count ?? "Unknown") + " Watchers"}
          </div>
        </div>
      </div>
      <div className={styles.languageBar}>
        {
          extraLanguages.map((language) => {
            return (
              <div style={{ "display": "flex", "flexDirection": "row", "alignItems": "center" }}>
                <div style={{ borderRadius: "50%", marginRight: 8, height: 16, width: 16, backgroundColor: kLanguageColors[language] }}></div>
                <div className={styles.iconLabel}>
                  {language}
                </div>
              </div>
            );
          })
        }
        <div style={{ borderRadius: "50%", marginRight: 8, height: 16, width: 16, backgroundColor: kLanguageColors[repositoryJSON?.language] }}></div>
        <div className={styles.iconLabel}>
          {repositoryJSON?.language}
        </div>
      </div>
    </div>
    {images != undefined ? <div className={styles.divider}></div> : null}
    {
      images != undefined ? <Carousel
        renderArrowPrev={(clickHandler, hasPrev, label) => {
          return (
            <span className="arrow-left" onClick={clickHandler}>
              <span className={clsx("material-icons", styles.carouselIcon)}>arrow_left</span>
            </span>
          )
        }}
        renderArrowNext={(clickHandler, hasNext, label) => {
          return (
            <span className="arrow-right" onClick={clickHandler}>
              <span className={clsx("material-icons", styles.carouselIcon)}>arrow_right</span>
            </span>
          )
        }}
        emulateTouch={false}
        dynamicHeight={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        showArrows={true}
        showThumbs={false}
      >
        {
          images.map((e) => <div className={styles.image} ><img className={styles.imageChild} src={e}></img></div>)
        }
      </Carousel > : null
    }
  </div >
}