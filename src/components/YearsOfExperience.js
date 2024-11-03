import React from 'react';

const calculateYearsOfExperience = (startDate) => {
  const currentDate = new Date();
  const start = new Date(startDate);

  let years = currentDate.getFullYear() - start.getFullYear();
  const differenceInMonths = currentDate.getMonth() - start.getMonth();

  // Adjust for whether the current date is before the start date's month
  if (differenceInMonths < 0 || (differenceInMonths === 0 && currentDate.getDate() < start.getDate())) {
    years -= 1;
  }

  return years;
};

const YearsOfExperience = ({ startDate }) => {
  const years = calculateYearsOfExperience(startDate);
  return <span>{years}</span>;
};

export default YearsOfExperience;
