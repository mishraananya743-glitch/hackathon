import React, { useState } from 'react';
import { getSymptomAnalysis } from '../services/geminiService';

const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center space-x-2">
        <div className="w-3 h-3 rounded-full bg-sky-400 animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="w-3 h-3 rounded-full bg-sky-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-3 h-3 rounded-full bg-sky-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        <span className="text-gray-400 ml-2">AI is analyzing...</span>
    </div>
);

const SymptomChecker: React.FC = () => {
    const [symptoms, setSymptoms] = useState<string>('');
    const [analysis, setAnalysis] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!symptoms.trim()) {
            setError('Please describe your symptoms.');
            return;
        }
        setError('');
        setIsLoading(true);
        setAnalysis('');
        
        try {
            const result = await getSymptomAnalysis(symptoms);
            setAnalysis(result);
        } catch (err) {
            setError('An unexpected error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-gray-900 p-6 sm:p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold text-gray-50 mb-2">AI Symptom Checker</h3>
            <p className="text-sm text-gray-400 mb-6">Describe your symptoms to get preliminary information. This is not a medical diagnosis.</p>

            <form onSubmit={handleSubmit}>
                <textarea
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                    placeholder="e.g., high fever, headache, stomach pain..."
                    className="w-full h-28 p-3 bg-gray-800 text-gray-100 placeholder-gray-400 border border-gray-700 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-shadow"
                    disabled={isLoading}
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                
                <button
                    type="submit"
                    className="mt-4 w-full bg-sky-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
                    disabled={isLoading}
                >
                    {isLoading ? 'Analyzing...' : 'Analyze Symptoms'}
                </button>
            </form>

            {(isLoading || analysis) && (
                 <div className="mt-6 p-4 bg-black/50 rounded-lg border border-gray-800">
                    {isLoading && <LoadingSpinner />}
                    {analysis && (
                        <div className="whitespace-pre-wrap text-gray-200 text-sm leading-relaxed">
                            {analysis}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SymptomChecker;