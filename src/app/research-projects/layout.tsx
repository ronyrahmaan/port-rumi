import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research Projects | Maruf Hasan Rumi',
  description: 'Funded research projects on governance, public health, and social policy led by Maruf Hasan Rumi at University of Dhaka.',
}

export default function ResearchProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
