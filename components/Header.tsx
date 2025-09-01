import React from 'react';
import { APP_TITLE } from '../constants';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center space-x-4">
                        <div className="text-sky-400">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                           </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-50 tracking-tight">{APP_TITLE}</h1>
                    </div>
                    <div className="hidden md:block">
                        <span className="text-sm font-medium text-gray-400">For Rural Northeast India</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;