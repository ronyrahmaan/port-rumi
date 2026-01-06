import type { Metadata } from 'next'
import Layout from "@/components/Layout";
import { cvSections } from "@/data/cv";

export const metadata: Metadata = {
  title: 'CV | Maruf Hasan Rumi',
  description: 'Academic curriculum vitae of Maruf Hasan Rumi - education, publications, awards, research projects, and professional experience.',
}

export default function CV() {
  return (
    <Layout>
      <div className="bg-linear-to-b from-gray-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Curriculum Vitae
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Maruf Hasan Rumi
            </p>
            <p className="text-sm text-gray-500">
              Assistant Professor, Department of Public Administration | University of Dhaka<br />
              PhD Student in Political Science | Texas Tech University
            </p>
          </div>


          {/* CV Sections */}
          <div className="mt-16 space-y-16">
            {cvSections.map((section, sectionIndex) => (
              <section key={sectionIndex} id={section.title === 'Awards and Honors' ? 'awards' : undefined}>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 border-b border-gray-200 pb-2">
                  {section.title}
                </h2>
                <div className="mt-8 space-y-8">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="relative">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {item.title}
                          </h3>
                          {item.organization && (
                            <p className="text-gray-700 mt-1">
                              {item.organization}
                              {item.location && <span className="text-gray-500"> • {item.location}</span>}
                            </p>
                          )}
                          {item.description && (
                            <div className="mt-2 text-gray-600">
                              {item.description.includes('•') ? (
                                <ul className="space-y-1">
                                  {item.description.split('•').filter(line => line.trim()).map((line, lineIndex) => (
                                    <li key={lineIndex} className="flex items-start">
                                      <span className="text-gray-400 mr-2 mt-0.5">•</span>
                                      <span className="flex-1">{line.replace(/\\n/g, '').trim()}</span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <div className="space-y-1">
                                  {item.description.split('\n').map((line, lineIndex) => (
                                    <p key={lineIndex}>{line}</p>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        {item.date && (
                          <div className="mt-2 sm:mt-0 sm:ml-6 shrink-0">
                            <span className="text-sm font-medium text-gray-500">
                              {item.date}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Contact Information */}
          <div className="mt-16 border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Contact Information</h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Primary Address (Bangladesh)</h3>
                <div className="mt-2 text-sm text-gray-600">
                  <p>11th Floor, Faculty of Social Sciences</p>
                  <p>Department of Public Administration</p>
                  <p>University of Dhaka</p>
                  <p>Dhaka-1000, Bangladesh</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Secondary Address (USA)</h3>
                <div className="mt-2 text-sm text-gray-600">
                  <p>108 Holden Hall, Boston & Akron Streets</p>
                  <p>Department of Political Science</p>
                  <p>Texas Tech University</p>
                  <p>Lubbock, TX 79409</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
                <div className="mt-2 text-sm text-gray-600">
                  <p>Email: <a href="mailto:marufhasanrumi@du.ac.bd" className="text-blue-600 hover:underline">marufhasanrumi@du.ac.bd</a></p>
                  <p>Phone (BD): <a href="tel:+8801789913138" className="hover:text-gray-900">+880 1789 913138</a></p>
                  <p>Phone (US): <a href="tel:+18062830088" className="hover:text-gray-900">+1 806 283 0088</a></p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">Academic Profiles</h3>
                <div className="mt-2 text-sm text-gray-600 space-y-1">
                  <p><a href="https://scholar.google.com/citations?user=uXQcnloAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Scholar</a></p>
                  <p><a href="https://www.researchgate.net/profile/Maruf-Rumi-2" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ResearchGate</a></p>
                  <p><a href="https://orcid.org/0000-0003-1752-5615" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ORCID: 0000-0003-1752-5615</a></p>
                  <p><a href="https://www.scopus.com/authid/detail.uri?authorId=57223861612" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Scopus</a></p>
                  <p><a href="https://www.linkedin.com/in/maruf-hasan-rumi-11a718195/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a></p>
                  <p><a href="https://www.du.ac.bd/faculty/faculty_details/PUB/54005" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">University of Dhaka</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-xs text-gray-500 text-center">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}