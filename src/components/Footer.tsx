export default function Footer() {
  return (
    <footer className="relative border-t border-neutral-200 bg-white py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-16 mb-20">
          {/* Brand */}
          <div>
            <h3 className="text-base font-semibold text-neutral-950 mb-3 tracking-widest uppercase">
              Amirul Adham
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Full-stack developer crafting beautiful digital experiences with
              precision and elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-neutral-950 mb-6 text-sm tracking-widest uppercase">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-neutral-600 hover:text-neutral-950 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-neutral-600 hover:text-neutral-950 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  className="text-neutral-600 hover:text-neutral-950 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skill"
                  className="text-neutral-600 hover:text-neutral-950 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-neutral-600 hover:text-neutral-950 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-neutral-950 mb-6 text-sm tracking-widest uppercase">
              Connect
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://linkedin.com/in/mrullldhm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-950 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mrullldhm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-950 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-200 pt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 space-y-4 sm:space-y-0">
            <p>&copy; 2025 Amirul Adham. All rights reserved.</p>
            <p>
              Built with{" "}
              <span className="text-neutral-950 font-medium">React</span>,{" "}
              <span className="text-neutral-950 font-medium">Next.js</span>,{" "}
              <span className="text-neutral-950 font-medium">TypeScript</span>,
              and{" "}
              <span className="text-neutral-950 font-medium">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
