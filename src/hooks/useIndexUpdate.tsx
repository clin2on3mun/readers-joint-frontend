import { useEffect, useState } from 'react'

export default function useIndexUpdate({
  initial,
  data,
}: {
  initial: number
  data: string[]
}) {
  const [index, setIndex] = useState<number>(initial)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [data.length])

  return index
}
