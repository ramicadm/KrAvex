'use client'

import { useEffect, createContext, useContext, useState } from 'react'
import Lenis from 'lenis'
import { ScrollTrigger } from '@/lib/animations'

const LenisContext = createContext<Lenis | null>(null)

export function useLenis() {
  return useContext(LenisContext)
}

interface LenisProviderProps {
  children: React.ReactNode
}

export function LenisProvider({ children }: LenisProviderProps) {
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    const instance = new Lenis({
      duration:     1.25,
      easing:       (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel:  true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    setLenis(instance)

    // Sync Lenis with GSAP ScrollTrigger
    instance.on('scroll', ScrollTrigger.update)

    // RAF loop
    let rafId: number
    function raf(time: number) {
      instance.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      instance.destroy()
      setLenis(null)
    }
  }, [])

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  )
}
