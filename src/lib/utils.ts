import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dateFormat, { i18n } from 'dateformat';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 *
 * @returns 'light' | 'dark'
 */
export function getPrefersColorScheme() {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
}

i18n.dayNames = [
  'Dom',
  'Lun',
  'Mar',
  'Mier',
  'Jue',
  'Vie',
  'Sab',
  'Domingo',
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
];

i18n.monthNames = [
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sep',
  'Oct',
  'Nov',
  'Dic',
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

export function getLocaleDate(date: Date | string) {
  return dateFormat(date, 'fullDate');
}
