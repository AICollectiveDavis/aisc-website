"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const techCompanies = [
  // Row 1
  { name: "Google", logo: "/google-logo.jpg" },
  { name: "Microsoft", logo: "/microsoft-logo.jpg" },
  { name: "Apple", logo: "/apple-logo.jpg" },
  { name: "Amazon", logo: "/amazon-logo.jpg" },
  { name: "Meta", logo: "/meta-logo.jpg" },
  { name: "Netflix", logo: "/netflix-logo.jpg" },

  // Row 2
  { name: "Nvidia", logo: "/nvidia-logo.jpg" },
  { name: "Adobe", logo: "/adobe-logo.jpg" },
  { name: "Tesla", logo: "/tesla-logo.jpg" },
  { name: "Salesforce", logo: "/salesforce-logo.jpg" },
  { name: "Intel", logo: "/intel-logo.jpg" },
  { name: "IBM", logo: "/ibm-logo.jpg" },
]

export function WhereWeveGone() {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadedCount, setLoadedCount] = useState(0)
  const duplicatedLogos = [...techCompanies, ...techCompanies]

  useEffect(() => {
    const imagePromises = techCompanies.map((company) => {
      return new Promise((resolve, reject) => {
        const img = new window.Image()
        img.onload = () => {
          setLoadedCount((prev) => prev + 1)
          resolve(img)
        }
        img.onerror = reject
        img.src = company.logo || "/placeholder.svg"
      })
    })

    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true)
      })
      .catch((error) => {
        console.error("Error loading images:", error)
        setImagesLoaded(true)
      })
  }, [])

  return (
    <section className="pt-4 bg-background relative z-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Where We've Gone</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our members have secured internships and full-time positions at leading tech companies
          </p>
        </div>

        {!imagesLoaded && (
          <div className="flex items-center justify-center py-16">
            <div className="text-muted-foreground">Loading company logos...</div>
          </div>
        )}

        <div
          className={`overflow-hidden transition-opacity duration-500 ${imagesLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <style jsx>{`
            @keyframes scroll-right-to-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll-right-to-left 60s linear infinite;
            }
          `}</style>

          <div className="grid grid-rows-2 gap-8 py-8">
            {/* Row 1 - 6 logos */}
            <div className="flex animate-scroll" style={{ width: "200%" }}>
              {duplicatedLogos.slice(0, 12).map((company, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex items-center justify-center p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 min-w-[120px] h-16 mx-4 flex-shrink-0"
                  style={{
                    transform: `translateY(${index % 2 === 0 ? "0px" : "8px"})`,
                  }}
                >
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    width={120}
                    height={32}
                    className="max-h-8 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    loading="eager"
                  />
                </div>
              ))}
            </div>

            {/* Row 2 - 6 logos */}
            <div className="flex animate-scroll" style={{ width: "200%", animationDelay: "-30s" }}>
              {duplicatedLogos.slice(6, 18).map((company, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex items-center justify-center p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 min-w-[120px] h-16 mx-4 flex-shrink-0"
                  style={{
                    transform: `translateY(${index % 2 === 1 ? "0px" : "8px"})`,
                  }}
                >
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    width={120}
                    height={32}
                    className="max-h-8 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    loading="eager"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
