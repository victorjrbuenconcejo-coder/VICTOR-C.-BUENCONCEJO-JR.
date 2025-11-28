
import React from 'react';
import { Question } from '../types';
import { RATING_OPTIONS } from '../constants';

interface QuestionItemProps {
  question: Question;
  selectedValue: number;
  onAnswerChange: (questionId: string, value: number) => void;
}

export const QuestionItem: React.FC<QuestionItemProps> = ({ question, selectedValue, onAnswerChange }) => {
  return (
    <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm transition-all hover:shadow-md hover:border-teal-300">
      <p className="font-medium text-slate-700 mb-4">{question.text}</p>
      <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-4">
        {RATING_OPTIONS.map(({ value, label }) => (
          <label key={value} className="flex items-center space-x-2 cursor-pointer group">
            <input
              type="radio"
              name={question.id}
              value={value}
              checked={selectedValue === value}
              onChange={() => onAnswerChange(question.id, value)}
              className="sr-only"
            />
            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all
              ${selectedValue === value 
                ? 'bg-teal-500 border-teal-600 text-white shadow-lg' 
                : 'bg-slate-100 border-slate-300 text-slate-500 group-hover:border-teal-400'
              }`}
            >
              {value}
            </div>
            <span className={`text-sm ${selectedValue === value ? 'text-teal-600 font-semibold' : 'text-slate-600'}`}>
              {label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
