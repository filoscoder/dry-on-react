// Parameter> $startYear: number
// Output> [$currentYear, ...$startYear]
export const generateArrayOfYears = (startYear) => {
  const currentYear = new Date().getFullYear();
  const yearList = Array.from(
    new Array(currentYear - startYear + 1),
    (_, idx) => currentYear - idx,
  );
  return yearList;
};
