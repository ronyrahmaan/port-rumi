import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Publications | Maruf Hasan Rumi',
  description: 'Peer-reviewed journal articles, book chapters, and research publications by Maruf Hasan Rumi on public administration, governance, and political science.',
}

export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
