'use client';

import { useState } from 'react';
import Layout from '@/components/Layout';

type ContentType = 'publication' | 'book' | 'article';

interface PublicationForm {
  title: string;
  authors: string;
  type: 'journal' | 'book-chapter' | 'conference' | 'working-paper' | 'technical-report';
  year: string;
  journal: string;
  publisher: string;
  volume: string;
  issue: string;
  pages: string;
  doi: string;
  url: string;
  abstract: string;
  keywords: string;
  category: string;
}

interface BookForm {
  title: string;
  subtitle: string;
  description: string;
  coverImage: string;
  publishDate: string;
  publisher: string;
  isbn: string;
  amazonLink: string;
  otherLink: string;
}

interface ArticleForm {
  title: string;
  description: string;
  publishDate: string;
  publisher: string;
  url: string;
  category: string;
}

const PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin';

const initialPublication: PublicationForm = {
  title: '',
  authors: '',
  type: 'journal',
  year: new Date().getFullYear().toString(),
  journal: '',
  publisher: '',
  volume: '',
  issue: '',
  pages: '',
  doi: '',
  url: '',
  abstract: '',
  keywords: '',
  category: 'Public Health',
};

const initialBook: BookForm = {
  title: '',
  subtitle: '',
  description: '',
  coverImage: '',
  publishDate: new Date().getFullYear().toString(),
  publisher: '',
  isbn: '',
  amazonLink: '',
  otherLink: '',
};

const initialArticle: ArticleForm = {
  title: '',
  description: '',
  publishDate: new Date().toISOString().split('T')[0],
  publisher: '',
  url: '',
  category: 'Policy Analysis',
};

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<ContentType>('publication');
  const [generatedCode, setGeneratedCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  const [publication, setPublication] = useState<PublicationForm>(initialPublication);
  const [book, setBook] = useState<BookForm>(initialBook);
  const [article, setArticle] = useState<ArticleForm>(initialArticle);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const clearForm = () => {
    if (activeTab === 'publication') setPublication(initialPublication);
    if (activeTab === 'book') setBook(initialBook);
    if (activeTab === 'article') setArticle(initialArticle);
    setGeneratedCode('');
    setShowPreview(false);
  };

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

  const generatePublicationCode = () => {
    const authorsArray = publication.authors.split(',').map(a => a.trim());
    const keywordsArray = publication.keywords.split(',').map(k => k.trim()).filter(k => k);

    const code = `  {
    id: '${Date.now()}',
    title: '${publication.title.replace(/'/g, "\\'")}',
    authors: [${authorsArray.map(a => `'${a.replace(/'/g, "\\'")}'`).join(', ')}],
    type: '${publication.type}',
    year: '${publication.year}',
    ${publication.journal ? `journal: '${publication.journal.replace(/'/g, "\\'")}',` : ''}
    ${publication.publisher ? `publisher: '${publication.publisher.replace(/'/g, "\\'")}',` : ''}
    ${publication.volume ? `volume: '${publication.volume}',` : ''}
    ${publication.issue ? `issue: '${publication.issue}',` : ''}
    ${publication.pages ? `pages: '${publication.pages}',` : ''}
    ${publication.doi ? `doi: '${publication.doi}',` : ''}
    ${publication.url ? `url: '${publication.url}',` : ''}
    abstract: '${publication.abstract.replace(/'/g, "\\'").replace(/\n/g, ' ')}',
    ${keywordsArray.length > 0 ? `keywords: [${keywordsArray.map(k => `'${k}'`).join(', ')}],` : ''}
    category: '${publication.category}',
  },`;

    setGeneratedCode(code.replace(/\n\s*\n/g, '\n').replace(/,\n\s*,/g, ','));
    setShowPreview(true);
  };

  const generateBookCode = () => {
    const code = `  {
    id: '${Date.now()}',
    title: '${book.title.replace(/'/g, "\\'")}',
    subtitle: '${book.subtitle.replace(/'/g, "\\'")}',
    description: '${book.description.replace(/'/g, "\\'").replace(/\n/g, ' ')}',
    coverImage: '${book.coverImage}',
    publishDate: '${book.publishDate}',
    publisher: '${book.publisher.replace(/'/g, "\\'")}',
    isbn: '${book.isbn}',
    buyLinks: {
      ${book.amazonLink ? `amazon: '${book.amazonLink}',` : ''}
      ${book.otherLink ? `other: '${book.otherLink}',` : ''}
    },
    reviews: []
  },`;

    setGeneratedCode(code);
    setShowPreview(true);
  };

  const generateArticleCode = () => {
    const code = `  {
    id: '${Date.now()}',
    title: '${article.title.replace(/'/g, "\\'")}',
    description: '${article.description.replace(/'/g, "\\'").replace(/\n/g, ' ')}',
    publishDate: '${article.publishDate}',
    publisher: '${article.publisher.replace(/'/g, "\\'")}',
    url: '${article.url}',
    category: '${article.category}',
  },`;

    setGeneratedCode(code);
    setShowPreview(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  // Input class with visible placeholder
  const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 font-space-grotesk text-gray-900 placeholder:text-gray-400";
  const textareaClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 font-space-grotesk text-gray-900 placeholder:text-gray-400 resize-none";
  const selectClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-500 focus:border-slate-500 font-space-grotesk text-gray-900 bg-white";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-2";

  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-cinzel font-bold text-gray-900">
                Admin Access
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600 font-space-grotesk">
                Enter password to manage content
              </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 font-space-grotesk"
              />
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-cinzel font-semibold text-white bg-slate-700 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-all"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-cinzel font-bold text-gray-900">Content Manager</h1>
            <p className="mt-2 text-gray-600 font-space-grotesk">Add new publications, books, and op-eds</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center space-x-4 mb-8">
            {(['publication', 'book', 'article'] as ContentType[]).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setGeneratedCode('');
                  setShowPreview(false);
                }}
                className={`px-6 py-3 rounded-lg font-cinzel font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-slate-700 text-white shadow-lg'
                    : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
                }`}
              >
                {tab === 'publication' ? 'Publication' : tab === 'book' ? 'Book Chapter' : 'Op-Ed'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div>
              {/* Publication Form */}
              {activeTab === 'publication' && (
                <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-cinzel font-semibold text-gray-900">Add New Publication</h2>
                    <button onClick={clearForm} className="text-sm text-slate-600 hover:text-slate-800 font-space-grotesk">
                      Clear Form
                    </button>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <label className={labelClass}>Title <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        value={publication.title}
                        onChange={(e) => setPublication({ ...publication, title: e.target.value })}
                        className={inputClass}
                        placeholder="Enter publication title"
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Authors <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        value={publication.authors}
                        onChange={(e) => setPublication({ ...publication, authors: e.target.value })}
                        className={inputClass}
                        placeholder="Rumi, M. H., Author 2, Author 3 (comma-separated)"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Type <span className="text-red-500">*</span></label>
                        <select
                          value={publication.type}
                          onChange={(e) => setPublication({ ...publication, type: e.target.value as PublicationForm['type'] })}
                          className={selectClass}
                        >
                          <option value="journal">Journal Article</option>
                          <option value="book-chapter">Book Chapter</option>
                          <option value="conference">Conference Paper</option>
                          <option value="working-paper">Working Paper</option>
                          <option value="technical-report">Technical Report</option>
                          <option value="research-report">Research Report</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Year <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          value={publication.year}
                          onChange={(e) => setPublication({ ...publication, year: e.target.value })}
                          className={inputClass}
                          placeholder="2025"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Journal Name</label>
                        <input
                          type="text"
                          value={publication.journal}
                          onChange={(e) => setPublication({ ...publication, journal: e.target.value })}
                          className={inputClass}
                          placeholder="e.g., PLOS ONE"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Publisher</label>
                        <input
                          type="text"
                          value={publication.publisher}
                          onChange={(e) => setPublication({ ...publication, publisher: e.target.value })}
                          className={inputClass}
                          placeholder="e.g., Springer"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className={labelClass}>Volume</label>
                        <input
                          type="text"
                          value={publication.volume}
                          onChange={(e) => setPublication({ ...publication, volume: e.target.value })}
                          className={inputClass}
                          placeholder="12"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Issue</label>
                        <input
                          type="text"
                          value={publication.issue}
                          onChange={(e) => setPublication({ ...publication, issue: e.target.value })}
                          className={inputClass}
                          placeholder="3"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Pages</label>
                        <input
                          type="text"
                          value={publication.pages}
                          onChange={(e) => setPublication({ ...publication, pages: e.target.value })}
                          className={inputClass}
                          placeholder="1-15"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>DOI</label>
                        <input
                          type="text"
                          value={publication.doi}
                          onChange={(e) => setPublication({ ...publication, doi: e.target.value })}
                          className={inputClass}
                          placeholder="10.1234/example"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>URL</label>
                        <input
                          type="text"
                          value={publication.url}
                          onChange={(e) => setPublication({ ...publication, url: e.target.value })}
                          className={inputClass}
                          placeholder="https://..."
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Category <span className="text-red-500">*</span></label>
                      <select
                        value={publication.category}
                        onChange={(e) => setPublication({ ...publication, category: e.target.value })}
                        className={selectClass}
                      >
                        <option value="Public Health">Public Health</option>
                        <option value="Digital Governance">Digital Governance</option>
                        <option value="Local Governance">Local Governance</option>
                        <option value="Public Administration">Public Administration</option>
                        <option value="Migration & Security">Migration & Security</option>
                        <option value="Social Policy">Social Policy</option>
                      </select>
                    </div>

                    <div>
                      <label className={labelClass}>Abstract <span className="text-red-500">*</span></label>
                      <textarea
                        value={publication.abstract}
                        onChange={(e) => setPublication({ ...publication, abstract: e.target.value })}
                        rows={4}
                        className={textareaClass}
                        placeholder="Enter publication abstract..."
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Keywords</label>
                      <input
                        type="text"
                        value={publication.keywords}
                        onChange={(e) => setPublication({ ...publication, keywords: e.target.value })}
                        className={inputClass}
                        placeholder="keyword1, keyword2, keyword3 (comma-separated)"
                      />
                    </div>

                    <button
                      onClick={generatePublicationCode}
                      disabled={!publication.title || !publication.authors || !publication.abstract}
                      className="w-full py-3 px-4 bg-slate-700 hover:bg-slate-800 disabled:bg-slate-400 disabled:cursor-not-allowed text-white rounded-lg font-cinzel font-semibold transition-all"
                    >
                      Generate Code & Preview
                    </button>
                  </div>
                </div>
              )}

              {/* Book Form */}
              {activeTab === 'book' && (
                <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-cinzel font-semibold text-gray-900">Add New Book Chapter</h2>
                    <button onClick={clearForm} className="text-sm text-slate-600 hover:text-slate-800 font-space-grotesk">
                      Clear Form
                    </button>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <label className={labelClass}>Book Title <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        value={book.title}
                        onChange={(e) => setBook({ ...book, title: e.target.value })}
                        className={inputClass}
                        placeholder="Enter book title"
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Chapter Title/Subtitle <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        value={book.subtitle}
                        onChange={(e) => setBook({ ...book, subtitle: e.target.value })}
                        className={inputClass}
                        placeholder="Enter chapter title"
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Description <span className="text-red-500">*</span></label>
                      <textarea
                        value={book.description}
                        onChange={(e) => setBook({ ...book, description: e.target.value })}
                        rows={4}
                        className={textareaClass}
                        placeholder="Enter chapter description..."
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Publisher <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          value={book.publisher}
                          onChange={(e) => setBook({ ...book, publisher: e.target.value })}
                          className={inputClass}
                          placeholder="e.g., Routledge"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Year <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          value={book.publishDate}
                          onChange={(e) => setBook({ ...book, publishDate: e.target.value })}
                          className={inputClass}
                          placeholder="2025"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>ISBN</label>
                        <input
                          type="text"
                          value={book.isbn}
                          onChange={(e) => setBook({ ...book, isbn: e.target.value })}
                          className={inputClass}
                          placeholder="978-0-123456-78-9"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Cover Image Path</label>
                        <input
                          type="text"
                          value={book.coverImage}
                          onChange={(e) => setBook({ ...book, coverImage: e.target.value })}
                          className={inputClass}
                          placeholder="/book-cover.png"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Amazon Link</label>
                        <input
                          type="text"
                          value={book.amazonLink}
                          onChange={(e) => setBook({ ...book, amazonLink: e.target.value })}
                          className={inputClass}
                          placeholder="https://amazon.com/..."
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Other Link</label>
                        <input
                          type="text"
                          value={book.otherLink}
                          onChange={(e) => setBook({ ...book, otherLink: e.target.value })}
                          className={inputClass}
                          placeholder="https://springer.com/..."
                        />
                      </div>
                    </div>

                    <button
                      onClick={generateBookCode}
                      disabled={!book.title || !book.subtitle || !book.description || !book.publisher}
                      className="w-full py-3 px-4 bg-slate-700 hover:bg-slate-800 disabled:bg-slate-400 disabled:cursor-not-allowed text-white rounded-lg font-cinzel font-semibold transition-all"
                    >
                      Generate Code & Preview
                    </button>
                  </div>
                </div>
              )}

              {/* Article Form */}
              {activeTab === 'article' && (
                <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-cinzel font-semibold text-gray-900">Add New Op-Ed</h2>
                    <button onClick={clearForm} className="text-sm text-slate-600 hover:text-slate-800 font-space-grotesk">
                      Clear Form
                    </button>
                  </div>
                  <div className="space-y-5">
                    <div>
                      <label className={labelClass}>Title <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        value={article.title}
                        onChange={(e) => setArticle({ ...article, title: e.target.value })}
                        className={inputClass}
                        placeholder="Enter article title"
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Description <span className="text-red-500">*</span></label>
                      <textarea
                        value={article.description}
                        onChange={(e) => setArticle({ ...article, description: e.target.value })}
                        rows={3}
                        className={textareaClass}
                        placeholder="Brief description of the article..."
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelClass}>Publisher <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          value={article.publisher}
                          onChange={(e) => setArticle({ ...article, publisher: e.target.value })}
                          className={inputClass}
                          placeholder="e.g., The Diplomat"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Publish Date <span className="text-red-500">*</span></label>
                        <input
                          type="date"
                          value={article.publishDate}
                          onChange={(e) => setArticle({ ...article, publishDate: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>URL <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        value={article.url}
                        onChange={(e) => setArticle({ ...article, url: e.target.value })}
                        className={inputClass}
                        placeholder="https://thediplomat.com/..."
                      />
                    </div>

                    <div>
                      <label className={labelClass}>Category <span className="text-red-500">*</span></label>
                      <select
                        value={article.category}
                        onChange={(e) => setArticle({ ...article, category: e.target.value })}
                        className={selectClass}
                      >
                        <option value="Policy Analysis">Policy Analysis</option>
                        <option value="Security">Security</option>
                        <option value="Foreign Policy">Foreign Policy</option>
                        <option value="Humanitarian">Humanitarian</option>
                        <option value="Politics">Politics</option>
                      </select>
                    </div>

                    <button
                      onClick={generateArticleCode}
                      disabled={!article.title || !article.description || !article.publisher || !article.url}
                      className="w-full py-3 px-4 bg-slate-700 hover:bg-slate-800 disabled:bg-slate-400 disabled:cursor-not-allowed text-white rounded-lg font-cinzel font-semibold transition-all"
                    >
                      Generate Code & Preview
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Preview & Code Section */}
            <div className="space-y-6">
              {/* Live Preview */}
              {showPreview && (
                <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-cinzel font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    Live Preview
                  </h3>

                  {/* Publication Preview */}
                  {activeTab === 'publication' && publication.title && (
                    <div className="bg-linear-to-br from-white to-stone-50 rounded-2xl shadow-md p-6 border border-stone-100">
                      <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
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
                      <h2 className="text-xl font-cinzel font-bold leading-tight text-gray-900 mb-3">
                        {publication.title}
                      </h2>
                      {publication.authors && (
                        <div className="text-sm font-space-grotesk text-gray-700 mb-3">
                          <span className="font-medium">Authors:</span> {publication.authors}
                        </div>
                      )}
                      {publication.journal && (
                        <div className="text-sm font-space-grotesk text-gray-700 mb-3">
                          <span className="font-medium">Published in:</span>{' '}
                          <span className="italic">{publication.journal}</span>
                          {publication.volume && `, Vol. ${publication.volume}`}
                          {publication.issue && `(${publication.issue})`}
                          {publication.pages && `, pp. ${publication.pages}`}
                        </div>
                      )}
                      {publication.abstract && (
                        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-stone-400 mb-4">
                          <h4 className="text-xs font-cinzel font-semibold text-gray-900 mb-2">Abstract</h4>
                          <p className="text-xs font-space-grotesk font-light leading-relaxed text-gray-700 line-clamp-4">
                            {publication.abstract}
                          </p>
                        </div>
                      )}
                      {publication.keywords && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {publication.keywords.split(',').map((keyword, index) => (
                            <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-space-grotesk">
                              {keyword.trim()}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
                        {publication.doi && (
                          <span className="inline-flex items-center px-4 py-2 bg-slate-700 text-white rounded-lg text-xs font-cinzel font-semibold">
                            DOI Link
                          </span>
                        )}
                        {publication.url && (
                          <span className="inline-flex items-center px-4 py-2 border-2 border-slate-700 text-slate-700 rounded-lg text-xs font-cinzel font-semibold">
                            View Publication
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Book Preview */}
                  {activeTab === 'book' && book.title && (
                    <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200">
                      <div className="flex items-start gap-6">
                        <div className="w-24 h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs shrink-0">
                          {book.coverImage ? 'Cover' : 'No Cover'}
                        </div>
                        <div>
                          <h3 className="text-lg font-cinzel font-bold text-gray-900 mb-1">{book.title}</h3>
                          {book.subtitle && (
                            <p className="text-sm font-space-grotesk text-gray-600 italic mb-2">{book.subtitle}</p>
                          )}
                          <p className="text-xs font-space-grotesk text-gray-500 mb-2">
                            {book.publisher} • {book.publishDate}
                          </p>
                          {book.description && (
                            <p className="text-xs font-space-grotesk text-gray-700 line-clamp-3">{book.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Article Preview */}
                  {activeTab === 'article' && article.title && (
                    <div className="flex max-w-xl flex-col items-start">
                      <div className="flex items-center gap-x-4 text-xs mb-3">
                        <time className="text-gray-500 font-space-grotesk">{formatDate(article.publishDate)}</time>
                        <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-space-grotesk font-medium text-gray-600">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-cinzel font-semibold leading-6 text-gray-900 mb-2">
                        {article.title}
                      </h3>
                      {article.description && (
                        <p className="text-sm leading-6 text-gray-600 font-space-grotesk line-clamp-3">{article.description}</p>
                      )}
                      <p className="text-xs text-gray-500 mt-2 font-space-grotesk">{article.publisher}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Generated Code Output */}
              {generatedCode && (
                <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-cinzel font-semibold text-gray-900">Generated Code</h3>
                    <button
                      onClick={copyToClipboard}
                      className={`px-4 py-2 rounded-lg font-space-grotesk text-sm font-medium transition-all ${
                        copied
                          ? 'bg-green-100 text-green-700'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {copied ? 'Copied!' : 'Copy Code'}
                    </button>
                  </div>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-xs font-mono max-h-64">
                    {generatedCode}
                  </pre>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <p className="text-xs text-blue-800 font-space-grotesk">
                      <strong>Paste into:</strong>{' '}
                      {activeTab === 'publication' && <code className="bg-blue-100 px-1 rounded">src/data/publications.ts</code>}
                      {activeTab === 'book' && <code className="bg-blue-100 px-1 rounded">src/data/books.ts</code>}
                      {activeTab === 'article' && <code className="bg-blue-100 px-1 rounded">src/data/articles.ts</code>}
                    </p>
                  </div>
                </div>
              )}

              {!showPreview && !generatedCode && (
                <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 text-center">
                  <div className="text-gray-400 mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-500 font-space-grotesk">
                    Fill out the form and click &quot;Generate Code & Preview&quot; to see how it will look
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
