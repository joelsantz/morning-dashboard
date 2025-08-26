import { renderHook } from '@testing-library/react'
import useSWR from 'swr'
import useGeoLocation from '../useGeoLocation'

jest.mock('swr')

const mockedUseSWR = useSWR as jest.Mock

describe('useGeoLocation', () => {
  it('returns loading state', () => {
    mockedUseSWR.mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    })

    const { result } = renderHook(() => useGeoLocation())

    expect(result.current.isLoading).toBe(true)
    expect(result.current.city).toBeUndefined()
    expect(result.current.lat).toBeUndefined()
    expect(result.current.lon).toBeUndefined()
    expect(result.current.isError).toBeNull()
  })

  it('returns geolocation data', () => {
    const mockData = {
      city: 'Bogotá',
      lat: 4.711,
      lon: -74.0721,
    }

    mockedUseSWR.mockReturnValue({
      data: mockData,
      error: null,
      isLoading: false,
    })

    const { result } = renderHook(() => useGeoLocation())

    expect(result.current.city).toBe('Bogotá')
    expect(result.current.lat).toBe(4.711)
    expect(result.current.lon).toBe(-74.0721)
    expect(result.current.isLoading).toBe(false)
    expect(result.current.isError).toBeNull()
  })

  it('returns error state', () => {
    const error = new Error('Geo API failed')

    mockedUseSWR.mockReturnValue({
      data: null,
      error,
      isLoading: false,
    })

    const { result } = renderHook(() => useGeoLocation())

    expect(result.current.isError).toBe(error)
    expect(result.current.isLoading).toBe(false)
    expect(result.current.city).toBeUndefined()
  })
})
