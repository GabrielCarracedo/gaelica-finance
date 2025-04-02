"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageToggle() {
  const [language, setLanguage] = useState("en")

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1 text-[#9b9b9b] hover:text-[#c3c3c3]"
    >
      <Globe className="h-4 w-4" />
      <span>{language === "en" ? "EN" : "PT"}</span>
    </Button>
  )
}

