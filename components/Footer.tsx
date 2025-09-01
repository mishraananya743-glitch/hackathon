import React from 'react';
import { APP_TITLE } from '../constants';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 mt-12 border-t border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center text-gray-400">
                    <p className="font-bold text-lg text-gray-100">{APP_TITLE}</p>
                    <p className="text-sm mt-2">A smart health monitoring and early warning system for water-borne diseases.</p>
                    <p className="text-xs mt-4">&copy; {new Date().getFullYear()} All Rights Reserved. For informational purposes only.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;