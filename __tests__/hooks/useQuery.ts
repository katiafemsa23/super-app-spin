import axios from 'axios';
import { renderHook } from '@testing-library/react-hooks';
import { historyURL, useQuery } from '../../src/hooks/useQuery';

jest.mock('axios');

describe('useQuery', () => {
  let mockedAxios: any;

  beforeAll(() => {
    jest.resetModules();
    jest.resetAllMocks();

    mockedAxios = axios as jest.Mocked<typeof axios>;
  });

  it('fetches data successfully', async () => {
    const mockAxiosData = {
      entity: 'Oxxo Gas',
      date: 'Sun Aug 06 2023',
      points: 100,
      operation: 'earned',
      transactionNo: '5dced89c-2b6e-4a1c-a715-c19b0a51',
      id: 1,
    };

    const resonse = {
      data: mockAxiosData,
      status: 200,
      statusText: 'OK',
      config: {},
      headers: {},
    };

    mockedAxios.request.mockResolvedValueOnce(resonse);

    const { result, waitForNextUpdate } = renderHook(() =>
      useQuery(historyURL),
    );

    expect(result.current.isLoading).toBe(true);
    expect(result.current.data).toBeNull();

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toEqual(mockAxiosData);
  });

  it('handles fetch error', async () => {
    const errorMessage = 'Request failed';
    mockedAxios.get.mockRejectedValueOnce(new Error(errorMessage));

    const { result, waitForNextUpdate } = renderHook(() =>
      useQuery(historyURL),
    );

    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBeNull();

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.error).toEqual(errorMessage);
  });
});
