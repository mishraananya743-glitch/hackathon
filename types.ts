export enum AlertLevel {
  INFO = 'info',
  WARNING = 'warning',
  CRITICAL = 'critical',
}

export interface Alert {
  id: number;
  title: string;
  content: string;
  date: string;
  level: AlertLevel;
}

export interface Disease {
  name: string;
  description: string;
  symptoms: string[];
  prevention: string[];
}
