import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-cinzel font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-2 text-sm font-space-grotesk">
              <p>
                <a href="mailto:marufhasanrumi@du.ac.bd" className="hover:text-white transition-colors">
                  marufhasanrumi@du.ac.bd
                </a>
              </p>
              <p>
                <a href="tel:+8801789913138" className="hover:text-white transition-colors">
                  +880 1789 913138
                </a>
              </p>
              <p>
                <a href="tel:+18062830088" className="hover:text-white transition-colors">
                  +1 806 283 0088
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-cinzel font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm font-space-grotesk">
              <Link href="/cv" className="block hover:text-white transition-colors">
                Curriculum Vitae
              </Link>
              <Link href="/publications" className="block hover:text-white transition-colors">
                Publications
              </Link>
              <Link href="/books" className="block hover:text-white transition-colors">
                Book Chapters
              </Link>
              <Link href="/contact" className="block hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Academic Profiles */}
          <div>
            <h3 className="text-sm font-cinzel font-semibold text-white mb-4">Academic Profiles</h3>
            <div className="space-y-2 text-sm font-space-grotesk">
              <a href="https://scholar.google.com/citations?user=uXQcnloAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                Google Scholar
              </a>
              <a href="https://www.researchgate.net/profile/Maruf-Rumi-2" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                ResearchGate
              </a>
              <a href="https://orcid.org/0000-0003-1752-5615" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                ORCID
              </a>
              <a href="https://www.scopus.com/authid/detail.uri?authorId=57223861612" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                Scopus
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-cinzel font-semibold text-white mb-4">Connect</h3>
            <div className="space-y-2 text-sm font-space-grotesk">
              <a href="https://www.linkedin.com/in/maruf-hasan-rumi-11a718195/" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="https://www.du.ac.bd/faculty/faculty_details/PUB/54005" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition-colors">
                University of Dhaka
              </a>
            </div>
          </div>
        </div>

        {/* Addresses */}
        <div className="mt-10 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xs font-cinzel font-semibold text-white mb-2">Primary Address (Bangladesh)</h4>
            <p className="text-xs font-space-grotesk text-gray-400">
              11th Floor, Faculty of Social Sciences<br />
              Department of Public Administration<br />
              University of Dhaka, Dhaka-1000
            </p>
          </div>
          <div>
            <h4 className="text-xs font-cinzel font-semibold text-white mb-2">Secondary Address (USA)</h4>
            <p className="text-xs font-space-grotesk text-gray-400">
              108 Holden Hall, Boston & Akron Streets<br />
              Department of Political Science<br />
              Texas Tech University, Lubbock, TX 79409
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-xs text-gray-500 text-center font-space-grotesk">
            © {new Date().getFullYear()} Maruf Hasan Rumi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
