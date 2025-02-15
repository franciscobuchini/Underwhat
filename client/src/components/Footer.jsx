import nav02 from "../assets/Logo/nav02.webp";

function Footer() {
  return (
    <footer class="footer bg-white rounded-t-2xl border border-gray-200 px-6 py-4">
    <div class="flex w-full flex-wrap items-center justify-between">
      <div class="flex h-5 gap-4">
        <a href="#" class="link" aria-label="Instagram Link">
          <span class="icon-[tabler--brand-instagram] size-5"></span>
        </a>
        <a href="#" class="link" aria-label="Facebook Link">
          <span class="icon-[tabler--brand-facebook] size-5"></span>
        </a>
        <a href="#" class="link" aria-label="Gmail Link">
          <span class="icon-[tabler--brand-gmail] size-5"></span>
        </a>
      </div>
      <p class="text-base-content">The most iconic wear for UWH players.</p>
      <img src={nav02} className="h-6" />
    </div>
  </footer>
  );
}

export default Footer;

