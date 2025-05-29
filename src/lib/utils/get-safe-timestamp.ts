/**
 * Get a safe timestamp from a date or string
 * @returns {number} - The timestamp
 * @param {Date | string} date
 */
export default function getSafeTimestamp(date: Date | string | null): number {
  if (!date) return 0;
  const d = date instanceof Date ? date : new Date(date);
  return isNaN(d.getTime()) ? 0 : d.getTime();
}
