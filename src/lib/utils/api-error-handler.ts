/**
 * Handles API errors
 * @param error - Error object
 */
export const handleApiError = (error: unknown) => {
  const err = error as Error;
  console.error(err);
};
