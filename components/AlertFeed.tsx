import React from 'react';
import { MOCK_ALERTS } from '../constants';
import { AlertLevel, Alert as AlertType } from '../types';

const alertStyles: { [key in AlertLevel]: { bg: string; border: string; icon: JSX.Element } } = {
    [AlertLevel.CRITICAL]: {
        bg: 'bg-red-500/10',
        border: 'border-red-500',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    },
    [AlertLevel.WARNING]: {
        bg: 'bg-amber-500/10',
        border: 'border-amber-500',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>,
    },
    [AlertLevel.INFO]: {
        bg: 'bg-sky-500/10',
        border: 'border-sky-500',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    },
};


const Alert: React.FC<{ alert: AlertType }> = ({ alert }) => {
    const styles = alertStyles[alert.level];
    return (
        <div className={`p-4 rounded-lg border-l-4 ${styles.bg} ${styles.border} flex items-start space-x-4`}>
            <div className="flex-shrink-0">{styles.icon}</div>
            <div>
                <h4 className="font-bold text-gray-50">{alert.title}</h4>
                <p className="text-sm text-gray-300 mt-1">{alert.content}</p>
                <p className="text-xs text-gray-400 mt-2">{alert.date}</p>
            </div>
        </div>
    );
};

const AlertFeed: React.FC = () => {
    return (
        <div className="bg-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold text-gray-50 mb-6">Latest Alerts & News</h3>
            <div className="space-y-4">
                {MOCK_ALERTS.map(alert => <Alert key={alert.id} alert={alert} />)}
            </div>
        </div>
    );
};

export default AlertFeed;