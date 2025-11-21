import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface EventItem {
  id: number;
  title: string;
  date: string;
  description: string;
}

export interface Facility {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AcademicStat {
  year: string;
  passRate: number;
}