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
      return 'bg-blue-100 text-blue-800';
    case 'article':
      return 'bg-green-100 text-green-800';
    case 'essay':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
}

export default function Articles() {
  return (
    <Layout>
      <div className="bg-linear-to-b from-gray-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Op-Eds
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Opinion editorials on Bangladesh politics, foreign policy, security, and humanitarian issues in leading international publications.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {articles.map((article) => (
              <article key={article.id} className="flex max-w-xl flex-col items-start">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={article.publishDate} className="text-gray-500">
                    {formatDate(article.publishDate)}
                  </time>
                  <span
                    className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${getArticleTypeColor(article.type)}`}
                  >
                    {article.type}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      <span className="absolute inset-0" />
                      {article.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {article.excerpt}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      {article.publication}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600"
                  >
                    Read article <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 border-t border-gray-200 pt-16">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Media Inquiries
              </h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Available for interviews, commentary, and expert analysis on topics related to my research.
              </p>
              <div className="mt-6">
                <a
                  href="/contact"
                  className="rounded-full border-2 border-slate-700 px-5 py-2.5 text-sm font-cinzel font-semibold text-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-300"
                >
                  Contact for Media Requests
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}