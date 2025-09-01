import React from 'react';
import Header from './components/Header';
import StatCard from './components/StatCard';
import SymptomChecker from './components/SymptomChecker';
import DiseaseInfo from './components/DiseaseInfo';
import AlertFeed from './components/AlertFeed';
import Footer from './components/Footer';
import { WaterDropIcon, AlertTriangleIcon, FirstAidIcon, CheckShieldIcon } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-gray-300">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="space-y-12">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              title="Current Alert Level" 
              value="High" 
              icon={<AlertTriangleIcon />} 
              color="text-red-400 bg-red-500/20"
              description="Increased vigilance recommended in affected areas."
            />
            <StatCard 
              title="Water Quality Index" 
              value="68/100" 
              icon={<WaterDropIcon />} 
              color="text-amber-400 bg-amber-500/20"
              description="Moderate quality. Boiling water is advised."
            />
            <StatCard 
              title="Reported Cases (7d)" 
              value="12" 
              icon={<FirstAidIcon />} 
              color="text-sky-400 bg-sky-500/20"
              description="Trending slightly upwards from last week."
            />
            <StatCard 
              title="Safe Water Sources" 
              value="85%" 
              icon={<CheckShieldIcon />} 
              color="text-green-400 bg-green-500/20"
              description="Percentage of community wells tested as safe."
            />
          </div>

          {/* Main Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-8">
              <AlertFeed />
              <DiseaseInfo />
            </div>
            <div className="lg:col-span-1">
              <SymptomChecker />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;