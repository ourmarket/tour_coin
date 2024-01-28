/* eslint-disable @next/next/no-img-element */
"use client";
import styles from "./section5.module.css";
import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export default function SimpleGallery(props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <div className={styles.container} id={props.galleryID}>
      <div className={styles.grid}>
        {props.images.map((image, index) => (
          <a
            href={image.largeURL}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            key={props.galleryID + "-" + index}
            target="_blank"
            rel="noreferrer"
          >
            <img src={image.thumbnailURL} alt="" className={styles.image} />
          </a>
        ))}
      </div>
    </div>
  );
}
