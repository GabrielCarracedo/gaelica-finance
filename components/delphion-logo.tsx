"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Image from "next/image"

export function DelphionLogo() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="w-[600px] h-[180px]" /> // placeholder para evitar layout shift
  }

  return (
    <Image
      src={resolvedTheme === "dark" 
        ? "/images/delphion-logo.png"
        : "/images/delphion-logo-fundo-branco.png"
      }
      alt="Delphion Logo"
      width={600}
      height={180}
      priority
      className="transform -ml-8"
    />
  )
} 