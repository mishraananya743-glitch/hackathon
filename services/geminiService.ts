import { GoogleGenAI } from "@google/genai";

if (!process.env.API_KEY) {
    console.warn("API_KEY environment variable not set. Using a mock response.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || 'mock_key' });

const model = 'gemini-2.5-flash';

const SYSTEM_INSTRUCTION = `You are a helpful AI health information assistant for a community in rural Northeast India. Your purpose is to provide general information about common water-borne diseases based on user-provided symptoms. You are not a medical professional. Your response MUST start with the following disclaimer, exactly as written: '***DISCLAIMER: This is not medical advice. The information provided is for informational purposes only. Please consult a qualified healthcare professional for any health concerns or before making any decisions related to your health or treatment.***'. After the disclaimer, analyze the provided symptoms and list potential related water-borne diseases with brief, easy-to-understand descriptions. Conclude by strongly recommending the user to visit a doctor or a local health clinic for a proper diagnosis.`;

export const getSymptomAnalysis = async (symptoms: string): Promise<string> => {
    if (!process.env.API_KEY) {
        // Mock response for development without an API key
        return new Promise(resolve => setTimeout(() => {
            resolve(`***DISCLAIMER: This is not medical advice. The information provided is for informational purposes only. Please consult a qualified healthcare professional for any health concerns or before making any decisions related to your health or treatment.***\n\nBased on the symptoms you provided (${symptoms}), here are some possibilities:\n\n*   **Potential Condition:** This is a mock response. In a real scenario, the AI would list potential water-borne diseases.\n*   **Description:** The AI would provide a brief, simple description of the condition.\n\n**Next Steps:**\nIt is very important to see a healthcare professional for an accurate diagnosis. Please visit your nearest clinic or hospital as soon as possible.`);
        }, 1500));
    }

    try {
        const response = await ai.models.generateContent({
            model,
            contents: `User-provided symptoms: "${symptoms}"`,
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
            }
        });

        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return "Sorry, I couldn't process your request at the moment. Please check your connection or try again later. If symptoms are severe, please seek medical attention immediately.";
    }
};
