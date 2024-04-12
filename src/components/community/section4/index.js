import { useTranslations } from "next-intl";
import { Section4 } from "./Section4";

export const Section4_index = () => {
  const t = useTranslations("section_1_community");

  const small = t("small");
  const title = t.rich("title", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
  const p_1 = t.rich("p_1", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });

  const translations = {
    small,
    title,
    p_1,
  };

  return <Section4 translations={translations} />;
};
