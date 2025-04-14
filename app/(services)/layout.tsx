"use client"

import ErrorBoundary from "@/components/error-boundary"

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ErrorBoundary>
      {children}
    </ErrorBoundary>
  )
} 