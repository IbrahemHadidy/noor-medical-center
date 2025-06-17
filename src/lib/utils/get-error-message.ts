/**
 * Get error message from API error response
 * @returns {string | undefined}
 * @param {unknown} errorResponse
 */
export function getErrorMessage(errorResponse: unknown): string | undefined {
  if (errorResponse && typeof errorResponse === 'object' && 'data' in errorResponse) {
    const data = (errorResponse as { data: { error: string } }).data;
    console.error('API Error Response:', errorResponse);
    return data.error;
  }

  console.error('Unexpected Error Response:', errorResponse);
  return undefined;
}
