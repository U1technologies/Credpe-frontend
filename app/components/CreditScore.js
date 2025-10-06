import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function CreditScoreGauge({ score, maxScore = 900 }) {
  const [animatedScore, setAnimatedScore] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = score / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= score) {
        setAnimatedScore(score)
        clearInterval(timer)
      } else {
        setAnimatedScore(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [score])

  // Determine label and color for the text
  const getScoreInfo = (s) => {
    if (s >= 750) return { label: 'Excellent', color: '#16a34a' }
    if (s >= 700) return { label: 'Good', color: '#eab308' }
    if (s >= 650) return { label: 'Fair', color: '#f97316' }
    return { label: 'Poor', color: '#ef4444' }
  }

  const info = getScoreInfo(animatedScore)

  return (
    <div className="flex flex-col items-center mt-4">

      {/* Label below gauge */}
      <div
        className="mt-4 px-6 py-2 rounded-full text-lg font-semibold"
        style={{
          backgroundColor: `${info.color}20`,
          color: info.color,
        }}
      >
        {info.label}
      </div>
    </div>
  )
}