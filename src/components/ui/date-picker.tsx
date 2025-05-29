'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils/cn';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import type { DateRange } from 'react-day-picker';

function TimePicker({ value, onChange }: { value?: Date; onChange: (date: Date) => void }) {
  const hours = value?.getHours() ?? 0;
  const minutes = value?.getMinutes() ?? 0;

  const updateTime = (newHours: number, newMinutes: number) => {
    const newDate = new Date(value || new Date());
    newDate.setHours(newHours, newMinutes);
    onChange(newDate);
  };

  return (
    <div className="flex items-center gap-2 pb-4">
      <Select value={hours.toString()} onValueChange={(val) => updateTime(Number(val), minutes)}>
        <SelectTrigger className="w-20">
          <SelectValue placeholder="HH" />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: 24 }).map((_, i) => (
            <SelectItem key={i} value={i.toString()}>
              {i.toString().padStart(2, '0')}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <span>:</span>
      <Select value={minutes.toString()} onValueChange={(val) => updateTime(hours, Number(val))}>
        <SelectTrigger className="w-20">
          <SelectValue placeholder="MM" />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: 60 }).map((_, i) => (
            <SelectItem key={i} value={i.toString()}>
              {i.toString().padStart(2, '0')}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

interface SingleDatePickerProps {
  value?: Date;
  onChange: (value: Date) => void;
  showTime?: boolean;
  placeholder: string;
  className?: string;
}

export function SingleDatePicker({
  value,
  onChange,
  showTime,
  placeholder,
  className,
}: SingleDatePickerProps) {
  const t = useTranslations('Layout.Date');

  const handleToday = () => onChange(new Date());
  const handleClear = () => onChange(undefined as unknown as Date);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-full pe-3 text-start font-normal',
            !value && 'text-muted-foreground',
            className
          )}
        >
          {value ? format(value, 'PPP') : <span>{placeholder}</span>}
          <CalendarIcon className="ms-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => {
            if (!date) return;
            const newDate = new Date(date);
            if (value) {
              newDate.setHours(value.getHours());
              newDate.setMinutes(value.getMinutes());
            }
            onChange(newDate);
          }}
          disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
          dir="ltr"
          weekStartsOn={5}
          initialFocus
        />
        {value && showTime && format(value, 'PPP HH:mm')}
        <div className="flex justify-between gap-2 border-t p-2">
          <Button variant="destructive" size="sm" onClick={handleClear}>
            {t('clear')}
          </Button>
          <Button variant="outline" size="sm" onClick={handleToday}>
            {t('today')}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

interface MultipleDatePickerProps {
  value?: Date[];
  onChange: (value: Date[]) => void;
  placeholder: string;
  className?: string;
}

export function MultipleDatePicker({
  value,
  onChange,
  placeholder,
  className,
}: MultipleDatePickerProps) {
  const t = useTranslations('Layout.Date');

  const handleToday = () => {
    const today = new Date();
    onChange(value ? [...value, today] : [today]);
  };
  const handleClear = () => onChange([]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-full pe-3 text-start font-normal',
            !value?.length && 'text-muted-foreground',
            className
          )}
        >
          {value?.length ? (
            value.map((date) => format(date, 'MM/dd/yyyy')).join(', ')
          ) : (
            <span>{placeholder}</span>
          )}
          <CalendarIcon className="ms-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="multiple"
          selected={value}
          onSelect={(dates) => dates && onChange(dates)}
          disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
          dir="ltr"
          weekStartsOn={5}
          initialFocus
        />
        <div className="flex justify-between gap-2 border-t p-2">
          <Button variant="destructive" size="sm" onClick={handleClear}>
            {t('clear')}
          </Button>
          <Button variant="outline" size="sm" onClick={handleToday}>
            {t('today')}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

// Date Range Picker
interface RangeDatePickerProps {
  value?: DateRange;
  onChange: (value: DateRange) => void;
  showTime?: boolean;
  placeholder: string;
  className?: string;
}

export function RangeDatePicker({
  value,
  onChange,
  showTime,
  placeholder,
  className,
}: RangeDatePickerProps) {
  const t = useTranslations('Layout.Date');

  const handleToday = () => {
    const today = new Date();
    onChange({ from: today, to: today });
  };
  const handleClear = () => onChange({ from: undefined, to: undefined });

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            'w-full pe-3 text-start font-normal',
            !value?.from && 'text-muted-foreground',
            className
          )}
        >
          {value?.from ? (
            value.to ? (
              <>
                {format(value.from, showTime ? 'MM/dd/yyyy HH:mm' : 'MM/dd/yyyy')} -{' '}
                {format(value.to, showTime ? 'MM/dd/yyyy HH:mm' : 'MM/dd/yyyy')}
              </>
            ) : (
              format(value.from, showTime ? 'MM/dd/yyyy HH:mm' : 'MM/dd/yyyy')
            )
          ) : (
            <span>{placeholder}</span>
          )}
          <CalendarIcon className="ms-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          selected={value}
          onSelect={(range) => range && onChange(range)}
          disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
          dir="ltr"
          weekStartsOn={5}
          initialFocus
        />
        {showTime && value?.from && (
          <div className="space-y-4 p-4">
            <div className="space-y-2">
              <span className="text-sm font-medium">{t('startTime')}</span>
              <TimePicker
                value={value.from}
                onChange={(time) => onChange({ ...value, from: time })}
              />
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium">{t('endTime')}</span>
              <TimePicker
                value={value.to || value.from}
                onChange={(time) => onChange({ ...value, to: time })}
              />
            </div>
          </div>
        )}
        <div className="flex justify-between gap-2 border-t p-2">
          <Button variant="destructive" size="sm" onClick={handleClear}>
            {t('clear')}
          </Button>
          <Button variant="outline" size="sm" onClick={handleToday}>
            {t('today')}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
