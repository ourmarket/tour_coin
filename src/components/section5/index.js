import { useTranslations } from "next-intl";
import SimpleGallery from "./Section5";
import Section5 from "./Section5";

export const Section5_index = () => {
  const t = useTranslations("section_1");

  const title1 = t("title_1");
  const title2 = t("title_2");
  const text_1_1 = t.rich("text_1_1", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const text_1_2 = t("text_1_2");
  const text_2_1 = t("text_2_1");
  const text_2_2 = t("text_2_2");
  const button = t("button");

  const translations = {
    title1,
    title2,
    text_1_1,
    text_1_2,
    text_2_1,
    text_2_2,
    button,
  };

  return (
    <Section5
      galleryID="my-test-gallery"
      images={[
        {
          largeURL:
            "https://ik.imagekit.io/mrprwema7/Tour%20Coin/e353a0baa993bb86b6b8f83980424aff%20(1)%20(1)_ojZrFaYs1.webp?updatedAt=1706220526658",
          thumbnailURL:
            "https://ik.imagekit.io/mrprwema7/Tour%20Coin/e353a0baa993bb86b6b8f83980424aff%20(1)%20(1)_ojZrFaYs1.webp?updatedAt=1706220526658",
          width: 2500,
          height: 1666,
        },
        {
          largeURL:
            "https://ik.imagekit.io/mrprwema7/Tour%20Coin/c9c3f330ec87482750c114d9c7f8e029%20(1)__426PxNIA.webp?updatedAt=1706220526629",
          thumbnailURL:
            "https://ik.imagekit.io/mrprwema7/Tour%20Coin/c9c3f330ec87482750c114d9c7f8e029%20(1)__426PxNIA.webp?updatedAt=1706220526629",
          width: 2500,
          height: 1666,
        },
        {
          largeURL:
            "https://ik.imagekit.io/mrprwema7/Tour%20Coin/c5db36e9d6cb36a5ed0db97afccf46cc%20(1)_kMz9P_9ef.webp?updatedAt=1706220526497",
          thumbnailURL:
            "https://ik.imagekit.io/mrprwema7/Tour%20Coin/c5db36e9d6cb36a5ed0db97afccf46cc%20(1)_kMz9P_9ef.webp?updatedAt=1706220526497",
          width: 2500,
          height: 1666,
        },
        {
          largeURL:
            "https://ik.imagekit.io/mrprwema7/Tour%20Coin/e353a0baa993bb86b6b8f83980424aff%20(1)%20(1)_ojZrFaYs1.webp?updatedAt=1706220526658",
          thumbnailURL:
            "https://ik.imagekit.io/mrprwema7/Tour%20Coin/e353a0baa993bb86b6b8f83980424aff%20(1)%20(1)_ojZrFaYs1.webp?updatedAt=1706220526658",
          width: 2500,
          height: 1666,
        },
        {
          largeURL:
            "https://ik.imagekit.io/mrprwema7/Tour%20Coin/c9c3f330ec87482750c114d9c7f8e029%20(1)__426PxNIA.webp?updatedAt=1706220526629",
          thumbnailURL:
            "https://ik.imagekit.io/mrprwema7/Tour%20Coin/c9c3f330ec87482750c114d9c7f8e029%20(1)__426PxNIA.webp?updatedAt=1706220526629",
          width: 2500,
          height: 1666,
        },
        {
          largeURL:
            "https://ik.imagekit.io/mrprwema7/Tour%20Coin/c5db36e9d6cb36a5ed0db97afccf46cc%20(1)_kMz9P_9ef.webp?updatedAt=1706220526497",
          thumbnailURL:
            "https://ik.imagekit.io/mrprwema7/Tour%20Coin/c5db36e9d6cb36a5ed0db97afccf46cc%20(1)_kMz9P_9ef.webp?updatedAt=1706220526497",
          width: 2500,
          height: 1666,
        },
      ]}
    />
  );
};
