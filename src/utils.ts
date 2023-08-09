const monthNumber = {
  Jan: '1',
  Feb: '2',
  Mar: '3',
  Apr: '4',
  May: '5',
  Jun: '6',
  Jul: '7',
  Aug: '8',
  Sep: '9',
  Oct: '10',
  Nov: '11',
  Dec: '12',
};

/** Formats a date like "Fri Sep 01 2023" to "1/9/2023" */
export const formatDate = (date: string) => {
  const splittedDate = date.split(' ');
  const day = splittedDate[2][0] === '0' ? splittedDate[2][1] : splittedDate[2];
  return `${day}/${monthNumber[splittedDate[1] as keyof typeof monthNumber]}/${
    splittedDate[3]
  }`;
};
