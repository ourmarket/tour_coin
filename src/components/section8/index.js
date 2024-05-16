import { useTranslations } from "next-intl";
import { Section8 } from "./Section8";

export const Section8_index = () => {
  const t = useTranslations("section_7");

  const small = t.rich("small", {
    code: (chunks) => <code className="strong">{chunks}</code>,
  });
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

  return <Section8 translations={translations} />;
};
