import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Academics', path: '/academics' },
  { label: 'Facilities', path: '/facilities' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'News & Events', path: '/news' },
  { label: 'Contact', path: '/contact' },
];

export const SCHOOL_INFO = {
  name: 'High Class College',
  address: 'Office Road, Kasoa Iron City',
  phone1: '+233 55 364 3898',
  phone2: '',
  email: 'highclasscollege@gmail.com',
  hours: {
    weekday: '7:00am – 5:00pm',
    saturday: '9:00am – 2:00pm',
  }
};