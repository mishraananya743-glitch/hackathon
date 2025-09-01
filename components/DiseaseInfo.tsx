import React, { useState } from 'react';
import { MOCK_DISEASES } from '../constants';
import { Disease } from '../types';

const DiseaseInfo: React.FC = () => {
    const [selectedDisease, setSelectedDisease] = useState<Disease>(MOCK_DISEASES[0]);

    return (
        <div className="bg-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold text-gray-50 mb-6">Water-Borne Disease Guide</h3>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                    <nav className="flex flex-col space-y-2">
                        {MOCK_DISEASES.map(disease => (
                            <button
                                key={disease.name}
                                onClick={() => setSelectedDisease(disease)}
                                className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${selectedDisease.name === disease.name ? 'bg-sky-500 text-white font-semibold shadow' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                            >
                                {disease.name}
                            </button>
                        ))}
                    </nav>
                </div>
                <div className="md:w-2/3">
                    {selectedDisease && (
                        <div className="bg-black/50 p-6 rounded-lg">
                            <h4 className="text-xl font-bold text-sky-400 mb-2">{selectedDisease.name}</h4>
                            <p className="text-sm text-gray-300 mb-4">{selectedDisease.description}</p>
                            
                            <h5 className="font-semibold text-gray-100 mb-2">Common Symptoms:</h5>
                            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 mb-4">
                                {selectedDisease.symptoms.map(symptom => <li key={symptom}>{symptom}</li>)}
                            </ul>

                            <h5 className="font-semibold text-gray-100 mb-2">Prevention Tips:</h5>
                            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                                {selectedDisease.prevention.map(tip => <li key={tip}>{tip}</li>)}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DiseaseInfo;