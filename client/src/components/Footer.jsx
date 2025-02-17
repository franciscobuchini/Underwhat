import nav02 from "../assets/Logo/nav02.webp";

function Footer() {
  return (
    <footer className="footer bg-white rounded-t-2xl border border-gray-200 px-6 py-4">
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
      <p className="text-base-content">The most iconic wear for UWH players.</p>
      <div className="flex flex-col items-center gap-1">
        <img src={nav02} className="h-6" />
        <small className="font-semibold">Underwhat!?</small>
      </div>

    </div>
  </footer>
  );
}

export default Footer;

