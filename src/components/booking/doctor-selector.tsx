'use client';

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Select, SelectContent, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useGetDoctorsQuery } from '@/lib/api/endpoints/dashboard';
import { AppointmentType } from '@generated/client';
import { Loader2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface DoctorSelectorProps {
  onDoctorSelect: (doctorId: string) => void;
  specialty: AppointmentType;
}

export default function DoctorSelector({ onDoctorSelect, specialty }: DoctorSelectorProps) {
  const t = useTranslations('Booking');
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');

  const {
    data: response,
    error,
    isLoading,
    isFetching,
  } = useGetDoctorsQuery({
    all: true,
    specialty,
  });

  const filteredDoctors =
    response?.data?.filter((doctor) => {
      const fullName = `${doctor.firstName} ${doctor.lastName}`.toLowerCase();
      return fullName.includes(searchQuery.toLowerCase());
    }) || [];

  const selectedDoctorName =
    response?.data?.find((doctor) => doctor.id === selectedDoctor)?.firstName +
    ' ' +
    response?.data?.find((doctor) => doctor.id === selectedDoctor)?.lastName;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        <span className="text-muted-foreground">{t('loading')}</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-destructive/15 rounded-md p-4">
        <p className="text-destructive">{t('Errors.doctorsLoadingFailed')}</p>
      </div>
    );
  }

  return (
    <div className="mb-4">
      <label
        htmlFor="doctor-select"
        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {t('doctorLabel')}
      </label>
      <Select
        onValueChange={(val) => {
          setSelectedDoctor(val);
          onDoctorSelect(val);
        }}
        value={selectedDoctor}
      >
        <SelectTrigger
          id="doctor-select"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white"
        >
          <SelectValue placeholder={t('selectDoctor')}>{selectedDoctorName}</SelectValue>
        </SelectTrigger>
        <SelectContent className="dark:border-gray-600 dark:bg-gray-800">
          <Command className="h-[200px] overflow-auto" shouldFilter={false}>
            <CommandInput
              placeholder={t('searchDoctor')}
              value={searchQuery}
              onValueChange={setSearchQuery}
            />
            <CommandList>
              {filteredDoctors.length === 0 ? (
                <CommandEmpty className="py-6 text-center">{t('noDoctorsFound')}</CommandEmpty>
              ) : (
                filteredDoctors.map((doctor) => (
                  <CommandItem
                    key={doctor.id}
                    value={doctor.id}
                    onSelect={() => {
                      setSelectedDoctor(doctor.id);
                      onDoctorSelect(doctor.id);
                      setSearchQuery('');
                    }}
                    className="hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {`${doctor.firstName} ${doctor.lastName}`}
                  </CommandItem>
                ))
              )}

              {isFetching && (
                <div className="flex items-center justify-center p-4">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  <span className="text-muted-foreground">{t('loading')}</span>
                </div>
              )}
            </CommandList>
          </Command>
        </SelectContent>
      </Select>
    </div>
  );
}
