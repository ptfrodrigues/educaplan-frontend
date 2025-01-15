'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'

interface ClassSchedule {
  startTime: string
  endTime: string
}

export function useClassSchedule() {
  const [isClassActive, setIsClassActive] = useState(false)
  const [schedule, setSchedule] = useState<ClassSchedule | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const fetchSchedule = useCallback(async () => {
    try {
      const response = await fetch('/api/aula/class-schedule', { next: { revalidate: 300 } })
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
      const data: ClassSchedule = await response.json()
      setSchedule(data)
      setError(null)
    } catch (err) {
      setError(`Failed to fetch class schedule: ${err instanceof Error ? err.message : String(err)}`)
      console.error('Error fetching class schedule:', err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchSchedule()
  }, [fetchSchedule])

  useEffect(() => {
    const checkClassStatus = () => {
      if (schedule) {
        const now = new Date()
        const currentTime = now.getHours() * 60 + now.getMinutes()
        
        const [startHours, startMinutes] = schedule.startTime.split(':').map(Number)
        const [endHours, endMinutes] = schedule.endTime.split(':').map(Number)
        
        const startTime = startHours * 60 + startMinutes
        const endTime = endHours * 60 + endMinutes

        const newIsClassActive = currentTime >= startTime && currentTime < endTime
        setIsClassActive(newIsClassActive)
      }
    }

    if (schedule) {
      checkClassStatus()
      const intervalId = setInterval(checkClassStatus, 60000) // Check every minute

      return () => clearInterval(intervalId)
    }
  }, [schedule])

  const refetch = useCallback(() => {
    fetchSchedule()
    router.refresh()
  }, [fetchSchedule, router])

  return { isClassActive, isLoading, error, schedule, refetch }
}

