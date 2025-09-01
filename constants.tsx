import React from 'react';
import { Alert, Disease, AlertLevel } from './types';

export const APP_TITLE = "Community Health Watch";

export const WaterDropIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a7.5 7.5 0 0110 0M12 3v13m0 0a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
);

export const AlertTriangleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);

export const FirstAidIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
);

export const CheckShieldIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.917L12 23l9-2.083c0-3.967-1.261-7.732-3.382-10.934z" />
    </svg>
);

export const MOCK_ALERTS: Alert[] = [
    { id: 1, title: 'Increased Cholera Risk in Morigaon District', content: 'Recent flooding has contaminated several wells. Boil all drinking water.', date: '2024-07-28', level: AlertLevel.CRITICAL },
    { id: 2, title: 'Water Quality Advisory for Jorhat', content: 'Higher than normal turbidity reported in the Brahmaputra river. Use caution.', date: '2024-07-26', level: AlertLevel.WARNING },
    { id: 3, title: 'Health Camp Announcement', content: 'A free health check-up and awareness camp will be held at the community hall on Aug 5th.', date: '2024-07-25', level: AlertLevel.INFO },
];

export const MOCK_DISEASES: Disease[] = [
    {
        name: 'Cholera',
        description: 'An acute diarrheal illness caused by infection of the intestine with Vibrio cholerae bacteria. It can be severe and life-threatening if not treated promptly.',
        symptoms: ['Watery diarrhea', 'Vomiting', 'Leg cramps', 'Dehydration'],
        prevention: ['Drink and use safe water', 'Wash hands often with soap and safe water', 'Cook food well and eat it hot']
    },
    {
        name: 'Typhoid Fever',
        description: 'A life-threatening illness caused by Salmonella Typhi bacteria. It is usually spread through contaminated food or water.',
        symptoms: ['High fever', 'Headache', 'Stomach pain', 'Constipation or diarrhea'],
        prevention: ['Get vaccinated', 'Avoid risky foods and drinks', 'Wash hands frequently']
    },
    {
        name: 'Hepatitis A',
        description: 'A highly contagious liver infection caused by the hepatitis A virus. It spreads from contaminated food or water, or from close contact with an infected person.',
        symptoms: ['Fatigue', 'Nausea', 'Abdominal pain', 'Jaundice (yellowing of skin/eyes)'],
        prevention: ['Get the hepatitis A vaccine', 'Practice good hand hygiene', 'Avoid untreated water']
    },
    {
        name: 'Giardiasis',
        description: 'A diarrheal disease caused by the microscopic parasite Giardia. It is found on surfaces or in soil, food, or water that has been contaminated with feces from infected humans or animals.',
        symptoms: ['Gas', 'Greasy stools', 'Stomach cramps', 'Upset stomach or nausea'],
        prevention: ['Avoid swallowing water when swimming', 'Drink from safe water sources', 'Practice good hygiene']
    }
];
