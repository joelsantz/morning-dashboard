import { renderHook } from '@testing-library/react'
import useSWR from 'swr'
import useWeather from '../useWeather'

jest.mock('swr')

const mockedUseSWR = useSWR as jest.Mock

describe('useWeather', () => {
  const mockLat = 40.7128
  const mockLon = -74.006

  it('returns loading state', () => {
    mockedUseSWR.mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    })

    const { result } = renderHook(() => useWeather(mockLat, mockLon))

    expect(result.current.isLoading).toBe(true)
    expect(result.current.weather).toBeNull()
  })

  it('returns weather data', () => {
    const weatherData = {
      temperature: 22,
      condition: 'Sunny',
    }

    mockedUseSWR.mockReturnValue({
      data: weatherData,
      error: null,
      isLoading: false,
    })

    const { result } = renderHook(() => useWeather(mockLat, mockLon))

    expect(result.current.weather).toEqual(weatherData)
    expect(result.current.isLoading).toBe(false)
    expect(result.current.isError).toBeNull()
  })

  it('returns error state', () => {
    mockedUseSWR.mockReturnValue({
      data: null,
      error: new Error('Failed to fetch'),
      isLoading: false,
    })

    const { result } = renderHook(() => useWeather(mockLat, mockLon))

    expect(result.current.isError).toBeInstanceOf(Error)
    expect(result.current.isLoading).toBe(false)
  })
})
