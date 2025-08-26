import { renderHook } from '@testing-library/react'
import useSWR from 'swr'

jest.mock('swr')

const mockedUseSWR = useSWR as jest.Mock

import useQuote from '../useQuote'

describe('useQuote', () => {
  it('returns loading state', () => {
    mockedUseSWR.mockReturnValue({
      data: null,
      error: null,
      isLoading: true,
    })

    const { result } = renderHook(() => useQuote())

    expect(result.current.isLoading).toBe(true)
    expect(result.current.quote).toBeUndefined()
    expect(result.current.author).toBeUndefined()
  })

  it('returns quote and author correctly', () => {
    mockedUseSWR.mockReturnValue({
      data: { quote: 'Be kind.', author: 'Felipe' },
      error: null,
      isLoading: false,
    })

    const { result } = renderHook(() => useQuote())

    expect(result.current.quote).toBe('Be kind.')
    expect(result.current.author).toBe('Felipe')
    expect(result.current.isLoading).toBe(false)
    expect(result.current.isError).toBeFalsy()
  })

  it('returns error state', () => {
    mockedUseSWR.mockReturnValue({
      data: null,
      error: true,
      isLoading: false,
    })

    const { result } = renderHook(() => useQuote())

    expect(result.current.isError).toBe(true)
    expect(result.current.quote).toBeUndefined()
    expect(result.current.author).toBeUndefined()
  })
})
