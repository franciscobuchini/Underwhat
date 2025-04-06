// Footer.jsx
import { useState } from "react";
import nav02 from "../assets/Logo/nav02.webp";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

function Footer() {
  const { t } = useTranslation("global");
  const [copied, setCopied] = useState(false);

  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard
      .writeText("underwhat.uwh@gmail.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Oculta el mensaje después de 2 segundos
      })
      .catch((error) => {
        // console.error("Error al copiar el email:", error);
      });
  };

  return (
    <footer className="footer bg-white rounded-t-2xl border border-gray-300 px-8 py-6 mt-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Redes sociales */}
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/underwhat.uwh/#"
            className="link"
            aria-label="Instagram Link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="icon-park-twotone:instagram"
              className="w-6 h-6 flex-shrink-0 text-pink-800"
            />
          </a>
          <div className="relative inline-block">
            <a
              href="#"
              className="link"
              aria-label="Gmail Link"
              onClick={copyEmail}
            >
              <Icon
                icon="icon-park-twotone:mail"
                className="w-6 h-6 flex-shrink-0 text-pink-800"
              />
            </a>
            {copied && (
              <div className="absolute top-full mt-2 w-max bg-pink-800 text-white text-xs rounded px-2 py-1">
                {t("footer.copied")}
              </div>
            )}
          </div>
        </div>
        {/* Tagline */}
        <p className="text-gray-400 text-center md:text-left">
          {t("footer.tagline")}
        </p>
        {/* Marca */}
        <div className="flex flex-col items-center gap-2">
          <img src={nav02} className="h-8" alt={t("header.logo_alt")} />
          <small className="font-semibold text-gray-400">
            {t("footer.brand")}
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
