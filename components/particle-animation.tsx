"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  baseX: number
  baseY: number
  size: number
  density: number
  color: string
  brightness: number
  velocity: { x: number; y: number }
}

interface ParticleAnimationProps {
  className?: string
}

export function ParticleAnimation({ className = "" }: ParticleAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const { offsetWidth, offsetHeight } = canvasRef.current.parentElement!
        setDimensions({
          width: offsetWidth,
          height: offsetHeight,
        })
      }
    }

    handleResize()
    setIsLoaded(true)

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (!canvasRef.current || !isLoaded || dimensions.width === 0) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")!
    canvas.width = dimensions.width
    canvas.height = dimensions.height

    const particles: Particle[] = []
    const particleCount = Math.min(Math.floor((dimensions.width * dimensions.height) / 8000), 150)
    const connectionDistance = dimensions.width < 768 ? 100 : 180
    const mouseRadius = dimensions.width < 768 ? 80 : 150

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: mouseRadius,
    }

    class ParticleClass implements Particle {
      x: number
      y: number
      baseX: number
      baseY: number
      size: number
      density: number
      color: string
      brightness: number
      velocity: { x: number; y: number }

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.baseX = x
        this.baseY = y
        this.size = Math.random() * 3 + 1
        this.density = Math.random() * 30 + 5
        const colorType = Math.random()
        this.color = colorType > 0.7 ? "#FFFFFF" : colorType > 0.4 ? "#0EA5E9" : "#F9A8D4"
        this.brightness = 0.5 + Math.random() * 0.5
        this.velocity = {
          x: (Math.random() - 0.5) * 0.3,
          y: (Math.random() - 0.5) * 0.3,
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()

        if (this.color === "#FFFFFF") {
          ctx.fillStyle = `rgba(255, 255, 255, ${this.brightness * 0.8})`
        } else if (this.color === "#0EA5E9") {
          ctx.fillStyle = `rgba(14, 165, 233, ${this.brightness})`
        } else {
          ctx.fillStyle = `rgba(249, 168, 212, ${this.brightness})`
        }

        ctx.fill()
      }

      update() {
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x
          const dy = mouse.y - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const forceDirectionX = dx / distance
          const forceDirectionY = dy / distance

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius
            const directionX = forceDirectionX * force * this.density * -1
            const directionY = forceDirectionY * force * this.density * -1

            this.x += directionX
            this.y += directionY
          } else {
            if (this.x !== this.baseX) {
              const dx = this.x - this.baseX
              this.x -= dx / 15
            }
            if (this.y !== this.baseY) {
              const dy = this.y - this.baseY
              this.y -= dy / 15
            }

            this.x += this.velocity.x
            this.y += this.velocity.y

            if (this.x < 0 || this.x > dimensions.width) this.velocity.x *= -1
            if (this.y < 0 || this.y > dimensions.height) this.velocity.y *= -1
          }
        }
      }
    }

    const init = () => {
      particles.length = 0

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * dimensions.width
        const y = Math.random() * dimensions.height
        particles.push(new ParticleClass(x, y))
      }
    }

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance
            const opacityModifier = Math.min(particles[a].brightness, particles[b].brightness) * 1.2
            const lineOpacity = opacity * opacityModifier

            let strokeStyle: string | CanvasGradient
            const particleAColor = particles[a].color
            const particleBColor = particles[b].color

            if (particleAColor !== particleBColor) {
              const gradient = ctx.createLinearGradient(particles[a].x, particles[a].y, particles[b].x, particles[b].y)

              if (particleAColor === "#FFFFFF") {
                gradient.addColorStop(0, `rgba(255, 255, 255, ${lineOpacity * 0.7})`)
              } else if (particleAColor === "#0EA5E9") {
                gradient.addColorStop(0, `rgba(14, 165, 233, ${lineOpacity})`)
              } else {
                gradient.addColorStop(0, `rgba(249, 168, 212, ${lineOpacity})`)
              }

              if (particleBColor === "#FFFFFF") {
                gradient.addColorStop(1, `rgba(255, 255, 255, ${lineOpacity * 0.7})`)
              } else if (particleBColor === "#0EA5E9") {
                gradient.addColorStop(1, `rgba(14, 165, 233, ${lineOpacity})`)
              } else {
                gradient.addColorStop(1, `rgba(249, 168, 212, ${lineOpacity})`)
              }

              strokeStyle = gradient
            } else {
              if (particleAColor === "#FFFFFF") {
                strokeStyle = `rgba(255, 255, 255, ${lineOpacity * 0.6})`
              } else if (particleAColor === "#0EA5E9") {
                strokeStyle = `rgba(14, 165, 233, ${lineOpacity * 0.9})`
              } else {
                strokeStyle = `rgba(249, 168, 212, ${lineOpacity * 0.9})`
              }
            }

            ctx.lineWidth = opacity * 1.2
            ctx.strokeStyle = strokeStyle
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // for (let i = 0; i < particles.length; i++) {
      //   particles[i].update()
      //   particles[i].draw()
      // }
      connect()

      requestAnimationFrame(animate)
    }

    init()
    animate()

    const updateMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const updateTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        mouse.x = e.touches[0].clientX - rect.left
        mouse.y = e.touches[0].clientY - rect.top
      }
    }

    const resetMouse = () => {
      mouse.x = null
      mouse.y = null
    }

    canvas.addEventListener("mousemove", updateMouse)
    canvas.addEventListener("touchmove", updateTouch)
    canvas.addEventListener("mouseleave", resetMouse)
    canvas.addEventListener("touchend", resetMouse)

    return () => {
      canvas.removeEventListener("mousemove", updateMouse)
      canvas.removeEventListener("touchmove", updateTouch)
      canvas.removeEventListener("mouseleave", resetMouse)
      canvas.removeEventListener("touchend", resetMouse)
    }
  }, [dimensions, isLoaded])

  return (
    <div className={`absolute inset-0 ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full" style={{ width: "100%", height: "100%" }} />
    </div>
  )
}
