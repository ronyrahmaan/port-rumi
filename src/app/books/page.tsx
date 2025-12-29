import Image from "next/image";
import Layout from "@/components/Layout";
import { books } from "@/data/books";

export default function Books() {
  return (
    <Layout>
      <div className="bg-linear-to-b from-gray-50 to-white py-12 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="text-center mb-10 sm:mb-16">
              <p className="text-xs sm:text-sm font-space-grotesk font-semibold tracking-wider uppercase text-stone-500 mb-3 sm:mb-4">Publications</p>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-cinzel font-bold tracking-tight text-stone-800 leading-tight">Book Chapters</h2>
              <div className="mt-6 w-24 h-0.5 bg-linear-to-r from-stone-300 via-stone-600 to-stone-300 mx-auto"></div>
            </div>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl font-space-grotesk font-light leading-7 sm:leading-8 text-gray-700 text-center max-w-3xl mx-auto">
              Contributions to edited volumes on public policy, governance, migration, and social protection in South Asia and beyond.
            </p>
          </div>

          <div className="mx-auto mt-8 sm:mt-12 lg:mt-16 grid max-w-6xl grid-cols-1 gap-y-8 sm:gap-y-12 lg:gap-y-20 pt-8 sm:pt-12 lg:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            {books.map((book) => (
              <article key={book.id} className="bg-linear-to-br from-white to-stone-50 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 p-5 sm:p-8 lg:p-12 border border-stone-100">
                <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-start">
                  <div className="relative w-full max-w-[240px] sm:max-w-[280px] lg:w-80 lg:max-w-none mx-auto lg:mx-0 lg:shrink-0 group">
                    <div className="absolute -inset-4 bg-linear-to-r from-blue-200/30 to-purple-200/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                    <Image
                      src={book.coverImage}
                      alt={`Cover of ${book.title}`}
                      className="relative aspect-3/4 w-full rounded-2xl bg-stone-100 object-cover shadow-2xl lg:w-80 group-hover:scale-[1.02] transition-transform duration-500"
                      width={320}
                      height={427}
                    />
                  </div>

                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-x-4 text-sm">
                      <div className="bg-stone-200 px-3 py-1 rounded-full">
                        <time className="text-stone-700 font-space-grotesk font-medium">{book.publishDate}</time>
                      </div>
                      <div className="bg-blue-100 px-3 py-1 rounded-full">
                        <span className="text-blue-800 font-space-grotesk font-medium">{book.publisher}</span>
                      </div>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-cinzel font-bold leading-tight text-gray-900 hover:text-stone-700 transition-colors duration-300">
                        {book.title}
                      </h3>
                      {book.subtitle && (
                        <h4 className="text-base sm:text-lg lg:text-xl font-space-grotesk font-light text-stone-600 leading-relaxed">
                          {book.subtitle}
                        </h4>
                      )}
                      <div className="w-16 h-0.5 bg-linear-to-r from-stone-400 to-transparent"></div>
                      {book.chapters && book.chapters.length > 0 ? (
                        <div className="space-y-6">
                          {book.chapters.map((chapter, index) => (
                            <div key={index} className="space-y-2">
                              <h5 className="text-lg font-cinzel font-semibold text-stone-800">
                                {chapter.title}
                              </h5>
                              <p className="text-base font-space-grotesk font-light leading-relaxed text-gray-700">
                                {chapter.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-base font-space-grotesk font-light leading-relaxed text-gray-700">
                          {book.description}
                        </p>
                      )}
                    </div>

                    {/* Buy Links */}
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-3">
                        {book.buyLinks.amazon && (
                          <a
                            href={book.buyLinks.amazon}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full border-2 border-slate-700 px-6 py-3 text-sm font-cinzel font-semibold text-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-300"
                          >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M.439,11.257A.5.5,0,0,0,0,11.7a.5.5,0,0,0,.439.444l4.214.616L6.839,17.1a.5.5,0,0,0,.895.05l2.013-4.027,4.027,2.013a.5.5,0,0,0,.05-.895L9.486,12.028l.616-4.214A.5.5,0,0,0,9.658,7.4L5.321,9.413,1.294,7.4a.5.5,0,0,0-.444.414Z"/>
                            </svg>
                            Buy on Amazon
                          </a>
                        )}
                        {book.buyLinks.bookshop && (
                          <a
                            href={book.buyLinks.bookshop}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full border-2 border-blue-600 px-6 py-3 text-sm font-cinzel font-semibold text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                          >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"/>
                              <path d="M12,6a6,6,0,1,0,6,6A6,6,0,0,0,12,6Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,16Z"/>
                            </svg>
                            Buy on Bookshop
                          </a>
                        )}
                        {book.buyLinks.barnes && (
                          <a
                            href={book.buyLinks.barnes}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full border-2 border-green-600 px-6 py-3 text-sm font-cinzel font-semibold text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300"
                          >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"/>
                            </svg>
                            Buy at Barnes & Noble
                          </a>
                        )}
                        {book.buyLinks.researchgate && (
                          <a
                            href={book.buyLinks.researchgate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full border-2 border-teal-600 px-6 py-3 text-sm font-cinzel font-semibold text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-300"
                          >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19.586 3c-.378 0-.734.074-1.078.197C17.034 1.865 15.218 1 13.25 1c-3.176 0-5.75 2.574-5.75 5.75 0 .316.027.625.078.926C3.832 8.164 1 11.305 1 15c0 4.136 3.364 7.5 7.5 7.5 2.318 0 4.39-1.056 5.768-2.713.485.14 1.002.213 1.532.213 3.038 0 5.5-2.462 5.5-5.5 0-1.964-1.032-3.687-2.585-4.66.055-.273.085-.555.085-.84 0-2.485-2.015-4.5-4.5-4.5-.419 0-.824.058-1.214.168z"/>
                            </svg>
                            View on ResearchGate
                          </a>
                        )}
                        {book.buyLinks.springer && (
                          <a
                            href={book.buyLinks.springer}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full border-2 border-blue-700 px-6 py-3 text-sm font-cinzel font-semibold text-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300"
                          >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                            </svg>
                            View on Springer
                          </a>
                        )}
                        {book.buyLinks.taylorfrancis && (
                          <a
                            href={book.buyLinks.taylorfrancis}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full border-2 border-red-700 px-6 py-3 text-sm font-cinzel font-semibold text-red-700 hover:bg-red-700 hover:text-white transition-all duration-300"
                          >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                            </svg>
                            View on Taylor & Francis
                          </a>
                        )}
                      </div>
                      {book.isbn && (
                        <p className="text-sm text-stone-500 font-space-grotesk">ISBN: {book.isbn}</p>
                      )}
                    </div>

                    {/* Reviews */}
                    {book.reviews && book.reviews.length > 0 && (
                      <div className="space-y-6">
                        <h4 className="text-lg font-cinzel font-semibold text-gray-900">Critical Acclaim</h4>
                        <div className="space-y-6">
                          {book.reviews.map((review, index) => (
                            <blockquote key={index} className="bg-linear-to-br from-stone-50 to-gray-50 border-l-4 border-stone-400 rounded-r-lg p-6 shadow-sm">
                              <p className="text-base font-space-grotesk font-light italic text-gray-700 leading-relaxed">
                                "{review.quote}"
                              </p>
                              <cite className="mt-4 block text-sm text-stone-600 font-space-grotesk font-medium">
                                — {review.reviewer && `${review.reviewer}, `}<span className="text-stone-500">{review.source}</span>
                              </cite>
                            </blockquote>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}