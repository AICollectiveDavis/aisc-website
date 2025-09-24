"use client"

import { useEffect, useState } from "react"

interface TypingEffectProps {
  text: string
  className?: string
}

export function TypingEffect({ text, className = "" }: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    if (textIndex < text.length) {
      const typingTimer = setTimeout(
        () => {
          setDisplayText((prevText) => prevText + text[textIndex])
          setTextIndex(textIndex + 1)
        },
        Math.random() * 50 + 30,
      )

      return () => clearTimeout(typingTimer)
    }
  }, [textIndex, text])

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
