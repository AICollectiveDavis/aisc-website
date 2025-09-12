"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const techCompanies = [
  // Row 1
  { name: "Amazon", logo: "/logos/amazon.svg" },
  { name: "Microsoft", logo: "/logos/microsoft-cropped.svg" },
  { name: "Apple", logo: "/logos/apple.svg" },
  { name: "LinkedIn", logo: "/logos/linkedin.svg" },
  { name: "Visa", logo: "/logos/visa-cropped.svg" },
  { name: "CVS", logo: "/logos/cvs.svg" },
  { name: "Mercedes-Benz", logo: "/logos/benz.svg" },
  { name: "Marvell Technology", logo: "/logos/marvell.svg" },
  { name: "Oracle", logo: "/logos/oracle-cropped.svg" },
  { name: "Hewlett-Packard Enterprise", logo: "/logos/hpe.svg" },
  { name: "Siemens", logo: "/logos/siemens-cropped.svg" },
  { name: "Walmart", logo: "/logos/walmart.svg" },
]

export function WhereWeveGone() {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadedCount, setLoadedCount] = useState(0)
  const duplicatedLogos = [...techCompanies, ...techCompanies, ...techCompanies] // Duplicate logos for seamless scrolling

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
        <div className="text-center ">
          <h2 className="text-3xl gradient-text md:text-4xl font-bold text-foreground mb-4">Where We've Gone</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {/* Our members have secured internships and full-time positions at leading tech companies */}
          </p>
        </div>

        {!imagesLoaded && (
          <div className="flex items-center justify-center py-16">
            {/* <div className="text-muted-foreground">Loading company logos...</div> */}
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
              animation: scroll-right-to-left 240s linear infinite;
            }
          `}</style>

          <div className="grid grid-rows-2 gap-8 py-8">
            {/* Row 1 - 6 logos */}
            <div className="flex animate-scroll" style={{ width: "200%" }}>
              {duplicatedLogos.map((company, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex items-center justify-center p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 min-w-[120px] h-16 mx-4 flex-shrink-0"
                  style={{
                    // transform: `translateY(${index % 2 === 0 ? "0px" : "8px"})`,
                  }}
                >
                  {/* <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    width={120}
                    height={40}
                    className="max-h-8 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                    loading="eager"
                  /> */}

                    <div
                    className="w-28 h-12 bg-white"
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
      </div>
    </section>
  )
}
