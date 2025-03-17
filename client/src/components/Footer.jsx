//Footer.jsx
import { Link } from "react-router-dom";
import nav02 from "../assets/Logo/nav02.webp";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

function Footer() {
  const { t, i18n } = useTranslation("global");
  return (
    <footer className="footer bg-white rounded-t-2xl border border-gray-300 px-6 py-4">
    <div className="flex w-full flex-wrap items-center justify-between">
      <div className="flex h-5 gap-4">
        <a href="#" className="link" aria-label="Instagram Link">
        <Icon icon="hugeicons:instagram" className="size-6 text-gray-400" />
        </a>
        <a href="#" className="link" aria-label="Gmail Link">
          <Icon icon="hugeicons:mail-02" className="size-6 text-gray-400" />
        </a>
      </div>
      <p className="text-gray-400">{t("footer.tagline")}</p>
      <div className="flex flex-col items-center gap-1">
        <img src={nav02} className="h-6" alt={t("header.logo_alt")} />
        <small className="font-semibold text-gray-400">{t("footer.brand")}</small>
      </div>

    </div>
  </footer>
  );
}

export default Footer;

