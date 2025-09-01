import React from 'react';

interface StatCardProps {
    title: string;
    value: string;
    icon: JSX.Element;
    color: string;
    description: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color, description }) => {
    return (
        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 transition-all duration-300 hover:bg-gray-800/80 hover:-translate-y-1">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-300">{title}</p>
                    <p className="text-3xl font-bold text-gray-50">{value}</p>
                </div>
                <div className={`p-3 rounded-full ${color}`}>
                    {icon}
                </div>
            </div>
            <p className="text-xs text-gray-400 mt-4">{description}</p>
        </div>
    );
};

export default StatCard;