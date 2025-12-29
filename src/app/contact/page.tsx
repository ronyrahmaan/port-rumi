import type { Metadata } from 'next'
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: 'Contact | Maruf Hasan Rumi',
  description: 'Contact Maruf Hasan Rumi for speaking engagements, media interviews, research collaboration, or student inquiries.',
}

export default function Contact() {
  return (
    <Layout>
      <div className="bg-linear-to-b from-gray-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-cinzel font-bold tracking-tight text-gray-900 sm:text-4xl">
              Contact
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 font-space-grotesk">
              I welcome inquiries about speaking engagements, media interviews, collaboration opportunities, and general questions about my research.
            </p>
          </div>

          <div className="mx-auto mt-10 sm:mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:gap-12 lg:gap-16 sm:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-cinzel font-semibold text-gray-900">Contact Information</h3>
              <div className="mt-6 space-y-4">
                <div>
                  <div className="flex">
                    <div className="shrink-0">
                      <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-cinzel font-medium text-gray-900">Email</p>
                      <a href="mailto:marufhasanrumi@du.ac.bd" className="text-sm text-gray-600 hover:text-gray-900 font-space-grotesk">marufhasanrumi@du.ac.bd</a>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex">
                    <div className="shrink-0">
                      <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-cinzel font-medium text-gray-900">Phone</p>
                      <p className="text-sm text-gray-600 font-space-grotesk">
                        <a href="tel:+8801789913138" className="hover:text-gray-900">+880 1789 913138</a> (Bangladesh)<br />
                        <a href="tel:+18062830088" className="hover:text-gray-900">+1 806 283 0088</a> (USA)
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex">
                    <div className="shrink-0">
                      <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-cinzel font-medium text-gray-900">Primary Office (Bangladesh)</p>
                      <p className="text-sm text-gray-600 font-space-grotesk">
                        11th Floor, Faculty of Social Sciences<br />
                        Department of Public Administration<br />
                        University of Dhaka, Dhaka-1000
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex">
                    <div className="shrink-0">
                      <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-cinzel font-medium text-gray-900">Secondary Office (USA)</p>
                      <p className="text-sm text-gray-600 font-space-grotesk">
                        108 Holden Hall, Boston & Akron Streets<br />
                        Department of Political Science<br />
                        Texas Tech University, Lubbock, TX 79409
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Academic Profiles */}
              <div className="mt-8">
                <h4 className="text-base font-cinzel font-semibold text-gray-900">Academic Profiles</h4>
                <div className="mt-3 space-y-2">
                  <a href="https://scholar.google.com/citations?user=uXQcnloAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-600 hover:text-gray-900 font-space-grotesk">
                    Google Scholar
                  </a>
                  <a href="https://www.researchgate.net/profile/Maruf-Rumi-2" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-600 hover:text-gray-900 font-space-grotesk">
                    ResearchGate
                  </a>
                  <a href="https://orcid.org/0000-0003-1752-5615" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-600 hover:text-gray-900 font-space-grotesk">
                    ORCID
                  </a>
                  <a href="https://www.scopus.com/authid/detail.uri?authorId=57223861612" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-600 hover:text-gray-900 font-space-grotesk">
                    Scopus
                  </a>
                </div>
              </div>

              {/* Connect */}
              <div className="mt-8">
                <h4 className="text-base font-cinzel font-semibold text-gray-900">Connect</h4>
                <div className="mt-3 space-y-2">
                  <a href="https://www.linkedin.com/in/maruf-hasan-rumi-11a718195/" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-600 hover:text-gray-900 font-space-grotesk">
                    LinkedIn
                  </a>
                  <a href="https://www.du.ac.bd/faculty/faculty_details/PUB/54005" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-600 hover:text-gray-900 font-space-grotesk">
                    University of Dhaka Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form action="https://formspree.io/f/xgoepvyd" method="POST" className="space-y-6">
                <input type="hidden" name="_next" value="https://marufrumi.com/contact?submitted=true" />
                <div>
                  <label htmlFor="type" className="block text-sm font-cinzel font-medium text-gray-900">
                    Type of Inquiry
                  </label>
                  <select
                    name="type"
                    id="type"
                    defaultValue="general"
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6 font-space-grotesk"
                  >
                    <option value="general">General Question</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="media">Media Interview</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="student">Student Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-cinzel font-medium text-gray-900">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6 font-space-grotesk"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-cinzel font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6 font-space-grotesk"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-cinzel font-medium text-gray-900">
                    Organization (Optional)
                  </label>
                  <input
                    type="text"
                    name="organization"
                    id="organization"
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6 font-space-grotesk"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-cinzel font-medium text-gray-900">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    required
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6 font-space-grotesk"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-cinzel font-medium text-gray-900">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6 font-space-grotesk"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-full border-2 border-slate-700 px-5 py-2 text-sm font-cinzel font-semibold leading-6 text-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}