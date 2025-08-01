import { useEffect, useState } from 'react';

const useYearsOfExperience: (startDate: string) => number = (startDate: string): number => {
  const [years, setYears] = useState<number>(0);

  useEffect(() => {
    const calculateYears: () => number = (): number => {
      const currentDate: Date = new Date();
      const start: Date = new Date(startDate);
      let years: number = currentDate.getFullYear() - start.getFullYear();
      const differenceInMonths: number = currentDate.getMonth() - start.getMonth();

      // Adjust for whether the current date is before the start date's month
      if (differenceInMonths < 0 || (differenceInMonths === 0 && currentDate.getDate() < start.getDate())) {
        years -= 1;
      }
      return years;
    };

    setYears(calculateYears());
  }, [startDate]);

  return years;
};

export default useYearsOfExperience;
