import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Media Gallery | Maruf Hasan Rumi',
  description: 'Photos from academic conferences, research presentations, and professional engagements of Maruf Hasan Rumi.',
}

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
