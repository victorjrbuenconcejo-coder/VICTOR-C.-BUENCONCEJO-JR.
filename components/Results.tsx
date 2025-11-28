
import React from 'react';
import { LearningStyle } from '../types';
import { STYLE_DESCRIPTIONS } from '../constants';

interface ResultsProps {
  dominantStyle: LearningStyle;
  progress: number;
}

export const Results: React.FC<ResultsProps> = ({ dominantStyle, progress }) => {
    const styleInfo = STYLE_DESCRIPTIONS[dominantStyle];

    return (
        <div className="sticky bottom-0 left-0 right-0 z-10 w-full">
             <div className="h-2 w-full bg-slate-200">
                <div 
                    className="h-2 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-r-full transition-all duration-500 ease-out" 
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)] p-4">
                <div className="container mx-auto">
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <div className={`w-14 h-14 rounded-full flex-shrink-0 flex items-center justify-center text-3xl transition-colors duration-300 ${styleInfo.color}`}>
                            {styleInfo.icon}
                        </div>
                        <div className="text-center sm:text-left">
                            <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                                Your Dominant Learning Style
                            </h3>
                            <p className="text-2xl font-bold text-slate-800">{dominantStyle}</p>
                            <p className="text-sm text-slate-600 mt-1">
                                {styleInfo.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
