'use client';

import { useState } from 'react';
import Layout from "@/components/Layout";
import {
  researchProjects,
  getTotalFunding,
  getUniqueYears,
  getUniqueFundingOrgs,
  formatCurrency
} from "@/data/research-projects";

export default function ResearchProjects() {
  const [selectedRole, setSelectedRole] = useState('All Roles');
  const [selectedYear, setSelectedYear] = useState('All Years');
  const [selectedOrg, setSelectedOrg] = useState('All Organizations');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const years = ['All Years', ...getUniqueYears()];
  const organizations = ['All Organizations', ...getUniqueFundingOrgs()];
  const roles = ['All Roles', 'Principal Investigator', 'Co-Investigator', 'Data Analyst', 'Team Leader', 'Supervisor', 'Junior Consultant'];

  const filteredProjects = researchProjects.filter(project => {
    const roleMatch = selectedRole === 'All Roles' || project.role.includes(selectedRole);
    const yearMatch = selectedYear === 'All Years' || project.year === selectedYear;
    const orgMatch = selectedOrg === 'All Organizations' || project.fundingOrganization === selectedOrg;
    const statusMatch = selectedStatus === 'all' || project.status === selectedStatus;
    return roleMatch && yearMatch && orgMatch && statusMatch;
  });

  const filteredFunding = filteredProjects.reduce((sum, p) => sum + p.fundingAmount, 0);

  const getRoleColor = (role: string) => {
    if (role.includes('Principal Investigator')) return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    if (role.includes('Co-Investigator')) return 'bg-blue-100 text-blue-800 border-blue-200';
    if (role.includes('Team Leader')) return 'bg-purple-100 text-purple-800 border-purple-200';
    if (role.includes('Data Analyst')) return 'bg-amber-100 text-amber-800 border-amber-200';
    if (role.includes('Supervisor')) return 'bg-indigo-100 text-indigo-800 border-indigo-200';
    if (role.includes('Junior Consultant')) return 'bg-rose-100 text-rose-800 border-rose-200';
    return 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getStatusColor = (status: string) => {
    return status === 'ongoing'
      ? 'bg-green-50 text-green-700 border-green-300'
      : 'bg-stone-50 text-stone-600 border-stone-300';
  };

  return (
    <Layout>
      <div className="bg-linear-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-space-grotesk font-semibold tracking-wider uppercase text-stone-500 mb-4">Academic Research</p>
            <h1 className="text-5xl sm:text-6xl font-cinzel font-bold tracking-tight text-stone-800 leading-tight">Research Projects</h1>
            <div className="mt-6 w-24 h-0.5 bg-linear-to-r from-stone-300 via-stone-600 to-stone-300 mx-auto"></div>
            <p className="mt-8 text-xl font-space-grotesk font-light leading-8 text-gray-700 text-center max-w-4xl mx-auto">
              Leading and contributing to impactful research initiatives across public administration, digital governance, social policy, and public health.
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            {/* Total Projects - Building with columns */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-slate-100/80 border-[3px] border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.12),inset_0_-4px_8px_rgba(0,0,0,0.05)] flex items-center justify-center mb-4 backdrop-blur-sm">
                <svg className="w-9 h-9 sm:w-11 sm:h-11 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L3 7v2h18V7l-9-5zm0 2.18L17.18 7H6.82L12 4.18zM5 10v8h2v-8H5zm4 0v8h2v-8H9zm4 0v8h2v-8h-2zm4 0v8h2v-8h-2zM3 20v2h18v-2H3z"/>
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl font-cinzel font-bold text-stone-800">{researchProjects.length}</div>
              <div className="text-sm font-space-grotesk font-medium text-stone-500 mt-1">Total Projects</div>
            </div>

            {/* Total Funding - Dollar/Money icon */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-slate-100/80 border-[3px] border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.12),inset_0_-4px_8px_rgba(0,0,0,0.05)] flex items-center justify-center mb-4 backdrop-blur-sm">
                <svg className="w-9 h-9 sm:w-11 sm:h-11 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
                </svg>
              </div>
              <div className="text-xl sm:text-2xl font-cinzel font-bold text-stone-800">{formatCurrency(getTotalFunding())}</div>
              <div className="text-sm font-space-grotesk font-medium text-stone-500 mt-1">Total Funding</div>
            </div>

            {/* As PI - Single person icon */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-slate-100/80 border-[3px] border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.12),inset_0_-4px_8px_rgba(0,0,0,0.05)] flex items-center justify-center mb-4 backdrop-blur-sm">
                <svg className="w-9 h-9 sm:w-11 sm:h-11 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl font-cinzel font-bold text-stone-800">{researchProjects.filter(p => p.role.includes('Principal Investigator')).length}</div>
              <div className="text-sm font-space-grotesk font-medium text-stone-500 mt-1">As PI</div>
            </div>

            {/* Ongoing - Clock/Time icon */}
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-slate-100/80 border-[3px] border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.12),inset_0_-4px_8px_rgba(0,0,0,0.05)] flex items-center justify-center mb-4 backdrop-blur-sm">
                <svg className="w-9 h-9 sm:w-11 sm:h-11 text-amber-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <div className="text-3xl sm:text-4xl font-cinzel font-bold text-stone-800">{researchProjects.filter(p => p.status === 'ongoing').length}</div>
              <div className="text-sm font-space-grotesk font-medium text-stone-500 mt-1">Ongoing</div>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-8 sm:mb-12 bg-white rounded-2xl shadow-md border border-stone-100 p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-cinzel font-medium text-gray-700">Role</label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="rounded-lg border border-gray-300 bg-white shadow-sm px-4 py-2 text-sm font-space-grotesk text-gray-800 focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>{role}</option>
                  ))}
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
                <label className="text-sm font-cinzel font-medium text-gray-700">Funding Organization</label>
                <select
                  value={selectedOrg}
                  onChange={(e) => setSelectedOrg(e.target.value)}
                  className="rounded-lg border border-gray-300 bg-white shadow-sm px-4 py-2 text-sm font-space-grotesk text-gray-800 focus:ring-2 focus:ring-stone-500 focus:border-transparent min-w-0 w-full sm:min-w-[180px] sm:w-auto"
                >
                  {organizations.map((org) => (
                    <option key={org} value={org}>{org}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col space-y-2">
                <label className="text-sm font-cinzel font-medium text-gray-700">Status</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="rounded-lg border border-gray-300 bg-white shadow-sm px-4 py-2 text-sm font-space-grotesk text-gray-800 focus:ring-2 focus:ring-stone-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>

            <div className="text-center mt-6 pt-4 border-t border-stone-100">
              <p className="text-sm font-space-grotesk text-gray-600">
                Showing <span className="font-semibold text-stone-800">{filteredProjects.length}</span> of {researchProjects.length} projects
                <span className="mx-2">|</span>
                Filtered funding: <span className="font-semibold text-emerald-700">{formatCurrency(filteredFunding)}</span>
              </p>
            </div>
          </div>

          {/* Projects List */}
          <div className="space-y-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="bg-linear-to-br from-white to-stone-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-8 border border-stone-100"
              >
                <div className="flex flex-col space-y-4">
                  {/* Header with badges */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-space-grotesk font-semibold border ${getRoleColor(project.role)}`}>
                      {project.role}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-space-grotesk font-semibold border ${getStatusColor(project.status)}`}>
                      {project.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-space-grotesk font-semibold bg-stone-100 text-stone-700 border border-stone-200">
                      {project.dateRange}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-cinzel font-bold leading-tight text-gray-900">
                    {project.title}
                  </h2>

                  {/* Description */}
                  {project.description && (
                    <p className="text-base font-space-grotesk font-light leading-relaxed text-gray-600">
                      {project.description}
                    </p>
                  )}

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-stone-100">
                    <div className="flex items-center space-x-3">
                      <div className="shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-space-grotesk text-gray-500 uppercase tracking-wide">Funding Organization</p>
                        <p className="text-sm font-space-grotesk font-medium text-gray-800">{project.fundingOrganization}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="shrink-0 w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-space-grotesk text-gray-500 uppercase tracking-wide">Funding Amount</p>
                        <p className="text-sm font-space-grotesk font-bold text-emerald-700">{formatCurrency(project.fundingAmount)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg font-space-grotesk text-gray-600">
                No projects found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
