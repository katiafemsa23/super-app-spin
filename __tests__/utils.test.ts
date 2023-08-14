import { DateOptionsProps, formatDate, formatStringDate } from './../src/utils';

describe('Utilities', () => {
  describe('format string date', () => {
    it('should return date formatted as martes 8', () => {
      const options: DateOptionsProps = {
        weekday: 'long',
        day: 'numeric',
      };

      const formattedDate = formatStringDate('08/08/2023', options, 'es-ES');
      expect(formattedDate).toBe('martes 8');
    });

    it('should return date formatted as viernes 11', () => {
      const options: DateOptionsProps = {
        weekday: 'long',
        day: 'numeric',
      };

      const formattedDate = formatStringDate(
        'Fri Aug 11 2023',
        options,
        'es-ES',
      );
      expect(formattedDate).toBe('viernes 11');
    });
  });

  describe('format date', () => {
    it('should return date formatted as 6/8/2023', () => {
      const options: DateOptionsProps = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      };

      const formattedDate = formatDate('Sun Aug 06 2023', options, 'es-ES');
      expect(formattedDate).toBe('6/8/2023');
    });

    it('should return date formatted as 11 de agosto de 2023', () => {
      const options: DateOptionsProps = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };

      const formattedDate = formatDate('Fri Aug 11 2023', options, 'es-ES');
      expect(formattedDate).toBe('11 de agosto de 2023');
    });
  });
});
