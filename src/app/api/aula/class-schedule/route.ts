import { NextResponse } from 'next/server'

export async function GET() {
    const mockSchedule = {
      startTime: '12:16',
      endTime: '14:00',
      timestamp: new Date().toISOString()
    }
  
    await new Promise(resolve => setTimeout(resolve, 500))
  
    return NextResponse.json(mockSchedule)
  }