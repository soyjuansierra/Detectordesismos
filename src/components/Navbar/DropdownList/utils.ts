const convertDropdownValue = (dropdownvalue: string): string => {
  const now = 'AHORA - ';
  switch (dropdownvalue) {
    case '1 día':
      return `${now}1día`;
    case '5 días':
      return `${now}5días`;
    case '10 días':
      return `${now}10días`;
    case '20 días':
      return `${now}20días`;
    case '30 días':
      return `${now}30días`;
    default:
      return `${now}3días`;
  }
};

export default convertDropdownValue;
