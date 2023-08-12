type NumericDateProps = 'numeric' | '2-digit' | undefined;
type StringDateProps = 'long' | 'short' | 'narrow' | undefined;

export type DateOptionsProps = {
  day: NumericDateProps;
  year?: NumericDateProps;
  weekday?: StringDateProps;
  month?: StringDateProps | NumericDateProps;
};

export const formatDate = (
  value: string,
  options?: Intl.DateTimeFormatOptions,
  locale: string | string[] = 'en-US',
) => {
  const date = new Date(value);
  const formatter = new Intl.DateTimeFormat(locale, options);

  return formatter.format(date).replace(',', '');
};

export const formatStringDate = (
  date: string,
  options: Intl.DateTimeFormatOptions,
  locale?: string | string[],
) => {
  return formatDate(date, options, locale).replace(',', '');
};
