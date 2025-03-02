//Footer.jsx
import { Link } from "react-router-dom";
import nav02 from "../assets/Logo/nav02.webp";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation("global");
  return (
    <footer className="footer bg-white rounded-t-2xl border  px-6 py-4">
    <div className="flex w-full flex-wrap items-center justify-between">
      <div className="flex h-5 gap-4">
        <a href="#" className="link" aria-label="Instagram Link">
          <span className="icon-[tabler--brand-instagram] size-5"></span>
        </a>
        <a href="#" className="link" aria-label="Facebook Link">
          <span className="icon-[tabler--brand-facebook] size-5"></span>
        </a>
        <a href="#" className="link" aria-label="Gmail Link">
          <span className="icon-[tabler--brand-gmail] size-5"></span>
        </a>
      </div>
      <p className="text-base-content">{t("footer.tagline")}</p>
      <div className="flex flex-col items-center gap-1">
        <img src={nav02} className="h-6" alt={t("header.logo_alt")} />
        <small className="font-semibold">{t("footer.brand")}</small>
      </div>

    </div>
  </footer>
  );
}

export default Footer;

