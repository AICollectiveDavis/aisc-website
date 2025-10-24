"use client"

import { useState, useEffect } from "react"

const techCompanies = [
  { name: "Amazon", logo: "/logos/amazon.svg" },
  { name: "Microsoft", logo: "/logos/microsoft-cropped.svg" },
  { name: "Apple", logo: "/logos/apple.svg" },
  { name: "LinkedIn", logo: "/logos/linkedin.svg" },
  { name: "Visa", logo: "/logos/visa-cropped.svg" },
  { name: "CME Group", logo: "/logos/cme.svg" },
  { name: "Mercedes-Benz", logo: "/logos/benz.svg" },
  { name: "CVS", logo: "/logos/cvs.svg" },
  { name: "Marvell Technology", logo: "/logos/marvell.svg" },
  { name: "Oracle", logo: "/logos/oracle-cropped.svg" },
  { name: "Hewlett-Packard Enterprise", logo: "/logos/hpe.svg" },
  { name: "Siemens", logo: "/logos/siemens-cropped.svg" },
  { name: "Walmart", logo: "/logos/walmart.svg" },
  { name: "Freewheel", logo: "/logos/freewheel.svg"},
  { name: "Keysight Technologies", logo: "/logos/keysight.svg"},
  { name: "Blackhawk Network", logo: "/logos/bhn.svg"},
  { name: "Kaiser Permanenente", logo: "/logos/kp.svg"},
  { name: "Veeco", logo: "/logos/veeco.svg"},
  { name: "Deloitte.", logo: "/logos/deloitte.svg"}
]

export function WhereWeveGone() {
  const [imagesLoaded, setImagesLoaded] = useState(false)

  const duplicatedLogos = [...techCompanies, ...techCompanies] // only duplicate once

  useEffect(() => {
    const imagePromises = techCompanies.map((company) => {
      return new Promise((resolve, reject) => {
        const img = new window.Image()
        img.onload = resolve
        img.onerror = reject
        img.src = company.logo || "/placeholder.svg"
      })
    })

    Promise.all(imagePromises)
      .then(() => setImagesLoaded(true))
      .catch(() => setImagesLoaded(true))
  }, [])

  return (
    <section className="pb-8 bg-background relative z-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground py-8">Where We&#39;ve Gone</h2>
        </div>

        <div
          className={`overflow-hidden transition-opacity duration-500 ${
            imagesLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <style jsx>{`
            @keyframes scroll-right-to-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            .animate-scroll {
              animation: scroll-right-to-left 120s linear infinite;
            }
          `}</style>

          <div className="flex animate-scroll w-[200%]">
            {duplicatedLogos.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 min-w-[120px] h-16 mx-4 flex-shrink-0"
              >
                <div
                  className="logo-glow w-28 h-12 bg-white"
                  style={{
                    maskImage: `url(${company.logo})`,
                    WebkitMaskImage: `url(${company.logo})`,
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
