import type { SerializedDateRange } from '@/lib/types/seriazlized';
import type { DateRange } from 'react-day-picker';

export function deserializeDateRange(serialized: SerializedDateRange | undefined): DateRange {
  if (!serialized) return { from: undefined, to: undefined };

  const parseDate = (dateString?: string): Date | undefined => {
    if (!dateString) return undefined;
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? undefined : date;
  };

  return {
    from: parseDate(serialized.from),
    to: parseDate(serialized.to),
  };
}

export function serializeDateRange(range: DateRange): SerializedDateRange {
  return {
    from: range.from?.toISOString(),
    to: range.to?.toISOString(),
  };
}
