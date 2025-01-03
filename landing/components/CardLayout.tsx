import { ReactNode } from 'react'

interface CardLayoutProps {
  children: ReactNode
  title: string
}

export default function CardLayout({ children, title }: CardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 shadow-xl rounded-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <h1 className="text-3xl font-bold text-white mb-6">{title}</h1>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

