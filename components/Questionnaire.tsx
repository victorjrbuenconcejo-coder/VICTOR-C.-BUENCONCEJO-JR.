
import React from 'react';
import { SECTIONS } from '../constants';
import { AnswersMap } from '../types';
import { QuestionItem } from './QuestionItem';

interface QuestionnaireProps {
  answers: AnswersMap;
  onAnswerChange: (questionId: string, value: number) => void;
}

export const Questionnaire: React.FC<QuestionnaireProps> = ({ answers, onAnswerChange }) => {
  return (
    <div className="space-y-12">
      {SECTIONS.map((section, index) => (
        <section key={section.title}>
          <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-teal-400 pb-3 mb-6">
            {`Section ${index + 1}: ${section.title}`}
          </h2>
          <div className="space-y-6">
            {section.questions.map((question) => (
              <QuestionItem
                key={question.id}
                question={question}
                selectedValue={answers[question.id]}
                onAnswerChange={onAnswerChange}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};
