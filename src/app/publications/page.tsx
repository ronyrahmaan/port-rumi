'use client';

import { useState } from 'react';
import Layout from "@/components/Layout";
import { publications, publicationsByYear, publicationCategories } from "@/data/publications";

export default function Publications() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedYear, setSelectedYear] = useState('All Years');

  // Get unique years sorted descending
  const years = ['All Years', ...Array.from(new Set(publications.map(p => p.year))).sort((a, b) => parseInt(b) - parseInt(a))];

  const filteredPublications = publications.filter(pub => {
    const categoryMatch = selectedCategory === 'All Categories' || pub.category === selectedCategory;
    const typeMatch = selectedType === 'all' || pub.type === selectedType;
    const yearMatch = selectedYear === 'All Years' || pub.year === selectedYear;
    return categoryMatch && typeMatch && yearMatch;
  });

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'journal': return 'Journal Article';
      case 'book-chapter': return 'Book Chapter';
      case 'conference': return 'Conference Paper';
      case 'working-paper': return 'Working Paper';
      case 'technical-report': return 'Technical Report';
      case 'research-report': return 'Research Report';
      default: return type;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'journal': return 'bg-blue-100 text-blue-800';
      case 'book-chapter': return 'bg-green-100 text-green-800';
      case 'conference': return 'bg-purple-100 text-purple-800';
      case 'working-paper': return 'bg-orange-100 text-orange-800';
      case 'technical-report': return 'bg-teal-100 text-teal-800';
      case 'research-report': return 'bg-emerald-100 text-emerald-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="bg-linear-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-space-grotesk font-semibold tracking-wider uppercase text-stone-500 mb-4">Research</p>
            <h1 className="text-5xl sm:text-6xl font-cinzel font-bold tracking-tight text-stone-800 leading-tight">Publications</h1>
            <div className="mt-6 w-24 h-0.5 bg-linear-to-r from-stone-300 via-stone-600 to-stone-300 mx-auto"></div>
            <p className="mt-8 text-xl font-space-grotesk font-light leading-8 text-gray-700 text-center max-w-4xl mx-auto">
              Scholarly contributions to the fields of digital governance, public administration, social policy, and political science research.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12 space-y-6">
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-cinzel font-medium text-gray-700">Publication Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="rounded-lg border border-gray-300 bg-white shadow-sm px-4 py-2 text-sm font-space-grotesk text-gray-800 focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                >
                  <option value="all">All Types</option>
                  <option value="journal">Journal Articles</option>
                  <option value="book-chapter">Book Chapters</option>
                  <option value="conference">Conference Papers</option>
                  <option value="working-paper">Working Papers</option>
                  <option value="technical-report">Technical Reports</option>
                  <option value="research-report">Research Reports</option>
                </select>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-cinzel font-medium text-gray-700">Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="rounded-lg border border-gray-300 bg-white shadow-sm px-4 py-2 text-sm font-space-grotesk text-gray-800 focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                >
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-cinzel font-medium text-gray-700">Research Area</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="rounded-lg border border-gray-300 bg-white shadow-sm px-4 py-2 text-sm font-space-grotesk text-gray-800 focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                >
                  {publicationCategories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm font-space-grotesk text-gray-600">
                Showing {filteredPublications.length} of {publications.length} publications
              </p>
            </div>
          </div>

          {/* Publications List */}
          <div className="space-y-8">
            {filteredPublications.map((publication) => (
              <article key={publication.id} className="bg-linear-to-br from-white to-stone-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 border border-stone-100">
                <div className="flex flex-col space-y-6">
                  {/* Header with type and year */}
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-space-grotesk font-semibold ${getTypeColor(publication.type)}`}>
                        {getTypeLabel(publication.type)}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-space-grotesk font-semibold bg-stone-200 text-stone-700">
                        {publication.year}
                      </span>
                      {publication.category && (
                        <span className="px-3 py-1 rounded-full text-xs font-space-grotesk font-semibold bg-indigo-100 text-indigo-800">
                          {publication.category}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-cinzel font-bold leading-tight text-gray-900 hover:text-stone-700 transition-colors duration-300">
                    {publication.title}
                  </h2>

                  {/* Authors */}
                  <div className="text-base font-space-grotesk text-gray-700">
                    <span className="font-medium">Authors:</span> {publication.authors.join(', ')}
                  </div>

                  {/* Publication details */}
                  {(publication.journal || publication.publisher) && (
                    <div className="text-base font-space-grotesk text-gray-700">
                      <span className="font-medium">Published in:</span>{' '}
                      <span className="italic">{publication.journal || publication.publisher}</span>
                      {publication.volume && `, Vol. ${publication.volume}`}
                      {publication.issue && `(${publication.issue})`}
                      {publication.pages && `, pp. ${publication.pages}`}
                    </div>
                  )}

                  {/* Abstract */}
                  {publication.abstract && (
                    <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-stone-400">
                      <h4 className="text-sm font-cinzel font-semibold text-gray-900 mb-3">Abstract</h4>
                      <p className="text-sm font-space-grotesk font-light leading-relaxed text-gray-700">
                        {publication.abstract}
                      </p>
                    </div>
                  )}

                  {/* Keywords */}
                  {publication.keywords && publication.keywords.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-cinzel font-semibold text-gray-900">Keywords</h4>
                      <div className="flex flex-wrap gap-2">
                        {publication.keywords.map((keyword, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-space-grotesk">
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                    {publication.doi && (
                      <a
                        href={`https://doi.org/${publication.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border-2 border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white rounded-full text-sm font-cinzel font-semibold transition-all duration-300"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"/>
                        </svg>
                        DOI Link
                      </a>
                    )}
                    {publication.url && (
                      <a
                        href={publication.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border-2 border-slate-700 text-slate-700 hover:bg-slate-700 hover:text-white rounded-full text-sm font-cinzel font-semibold transition-all duration-300"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                        </svg>
                        View Publication
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPublications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg font-space-grotesk text-gray-600">
                No publications found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}