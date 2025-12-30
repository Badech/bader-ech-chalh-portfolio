"use client"

import { useEffect } from "react"
import Script from "next/script"

export function Chatbot() {
  useEffect(() => {
    // Declare the Elfsight platform variable for TypeScript
    declare global {
      interface Window {
        elfsight?: {
          [key: string]: unknown
        }
      }
    }
  }, [])

  return (
    <>
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
        onLoad={() => {
          // Reinitialize Elfsight apps if they exist
          if (window.elfsight) {
            window.elfsight = window.elfsight || {}
          }
        }}
      />
      <div className="elfsight-app-b760c512-91c1-4f5b-8463-ac01df02836e" data-elfsight-app-lazy />
    </>
  )
}
