import Layout from "@/components/Layout";
import { articles } from "@/data/articles";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function getArticleTypeColor(type: string) {
  switch (type) {
    case 'op-ed':
      return 'bg-amber-100 text-amber-900 border border-amber-300';
    case 'article':
      return 'bg-stone-100 text-stone-800 border border-stone-300';
    case 'essay':
      return 'bg-orange-100 text-orange-900 border border-orange-300';
    default:
      return 'bg-gray-100 text-gray-800 border border-gray-300';
  }
}

export default function Articles() {
  return (
    <Layout>
      {/* Newspaper-style background with torn paper aesthetic */}
      <div className="relative min-h-screen">
        {/* Outer newspaper clippings border effect */}
        <div className="absolute inset-0 bg-linear-to-br from-stone-200 via-amber-50 to-stone-300">
          {/* Torn paper texture overlay */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Main content area - aged paper look */}
        <div className="relative py-20 sm:py-28">
          {/* Inner paper with shadow edges */}
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="relative bg-linear-to-b from-amber-50 via-orange-50/50 to-amber-50 rounded-sm shadow-2xl"
              style={{
                boxShadow: `
                  0 0 60px rgba(0,0,0,0.15),
                  inset 0 0 80px rgba(139,90,43,0.08),
                  0 4px 6px rgba(0,0,0,0.1)
                `,
              }}
            >
              {/* Torn edge effect - top */}
              <div className="absolute -top-2 left-0 right-0 h-4 overflow-hidden">
                <svg className="w-full h-8 text-amber-50" viewBox="0 0 1200 20" preserveAspectRatio="none">
                  <path d="M0,20 Q30,5 60,15 T120,10 T180,18 T240,8 T300,15 T360,5 T420,12 T480,8 T540,18 T600,10 T660,15 T720,5 T780,12 T840,18 T900,8 T960,15 T1020,10 T1080,18 T1140,8 T1200,15 L1200,20 Z" fill="currentColor"/>
                </svg>
              </div>

              {/* Torn edge effect - bottom */}
              <div className="absolute -bottom-2 left-0 right-0 h-4 overflow-hidden rotate-180">
                <svg className="w-full h-8 text-amber-50" viewBox="0 0 1200 20" preserveAspectRatio="none">
                  <path d="M0,20 Q30,5 60,15 T120,10 T180,18 T240,8 T300,15 T360,5 T420,12 T480,8 T540,18 T600,10 T660,15 T720,5 T780,12 T840,18 T900,8 T960,15 T1020,10 T1080,18 T1140,8 T1200,15 L1200,20 Z" fill="currentColor"/>
                </svg>
              </div>

              <div className="p-8 sm:p-12 lg:p-16">
                {/* Header with newspaper masthead style */}
                <div className="text-center mb-12 pb-8 border-b-2 border-stone-400">
                  <p className="text-xs font-space-grotesk font-medium tracking-[0.3em] uppercase text-stone-500 mb-3">Opinion & Commentary</p>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-cinzel font-bold tracking-tight text-stone-800" style={{ fontVariant: 'small-caps' }}>
                    Op-Eds
                  </h1>
                  <div className="mt-4 flex items-center justify-center gap-4">
                    <div className="h-px w-16 bg-stone-400"></div>
                    <span className="text-stone-500 text-sm font-space-grotesk italic">Published Works</span>
                    <div className="h-px w-16 bg-stone-400"></div>
                  </div>
                  <p className="mt-6 text-lg font-space-grotesk font-light leading-8 text-stone-700 max-w-3xl mx-auto">
                    Opinion editorials on Bangladesh politics, foreign policy, security, and humanitarian issues in leading international publications.
                  </p>
                </div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  {articles.map((article, index) => (
                    <article
                      key={article.id}
                      className={`relative group ${index === 0 ? 'lg:col-span-2' : ''}`}
                    >
                      {/* Newspaper clipping card */}
                      <div className={`bg-white/80 backdrop-blur-sm p-6 sm:p-8 border border-stone-300 shadow-md hover:shadow-xl transition-all duration-300 ${index === 0 ? 'bg-linear-to-br from-white to-amber-50/50' : ''}`}
                        style={{
                          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)',
                        }}
                      >
                        {/* Corner fold effect */}
                        <div className="absolute top-0 right-0 w-8 h-8 bg-linear-to-bl from-stone-200 to-stone-100 border-l border-b border-stone-300"
                          style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}
                        />

                        {/* Meta info */}
                        <div className="flex items-center gap-x-3 text-xs mb-4">
                          <time dateTime={article.publishDate} className="text-stone-600 font-space-grotesk">
                            {formatDate(article.publishDate)}
                          </time>
                          <span className="text-stone-300">|</span>
                          <span
                            className={`inline-flex items-center rounded px-2.5 py-1 text-xs font-space-grotesk font-medium ${getArticleTypeColor(article.type)}`}
                          >
                            {article.type}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className={`font-cinzel font-bold leading-tight text-stone-900 group-hover:text-amber-800 transition-colors duration-300 ${index === 0 ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'}`}>
                          <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-amber-600 underline-offset-4">
                            {article.title}
                          </a>
                        </h3>

                        {/* Excerpt */}
                        <p className={`mt-4 font-space-grotesk font-light leading-relaxed text-stone-700 ${index === 0 ? 'text-base line-clamp-4' : 'text-sm line-clamp-3'}`}>
                          {article.excerpt}
                        </p>

                        {/* Publication and Link */}
                        <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between">
                          <p className="font-cinzel font-semibold text-stone-800 text-sm">
                            {article.publication}
                          </p>
                          <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-cinzel font-semibold text-amber-800 hover:text-amber-600 transition-colors"
                          >
                            Read Full Article
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Call to Action - styled as newspaper footer */}
                <div className="mt-16 pt-12 border-t-2 border-stone-400">
                  <div className="text-center">
                    <div className="inline-block px-8 py-1 bg-stone-800 text-amber-50 text-xs font-space-grotesk tracking-widest uppercase mb-6">
                      Media Inquiries
                    </div>
                    <p className="text-lg font-space-grotesk font-light leading-8 text-stone-700 max-w-2xl mx-auto">
                      Available for interviews, commentary, and expert analysis on topics related to my research.
                    </p>
                    <div className="mt-8">
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full border-2 border-stone-700 px-8 py-3 text-sm font-cinzel font-semibold text-stone-700 hover:bg-stone-700 hover:text-amber-50 transition-all duration-300"
                      >
                        Contact for Media Requests
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}