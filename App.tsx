
import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { UserInfoForm } from './components/UserInfoForm';
import { Questionnaire } from './components/Questionnaire';
import { Results } from './components/Results';
import { SECTIONS } from './constants';
import { LearningStyle, AnswersMap } from './types';

export default function App() {
  const [answers, setAnswers] = useState<AnswersMap>({});
  const [dominantStyle, setDominantStyle] = useState<LearningStyle>(LearningStyle.UNDETERMINED);

  const totalQuestions = useMemo(() => SECTIONS.reduce((acc, section) => acc + section.questions.length, 0), []);

  useEffect(() => {
    const calculateStyle = () => {
      if (Object.keys(answers).length === 0) {
        setDominantStyle(LearningStyle.UNDETERMINED);
        return;
      }

      const scores = {
        [LearningStyle.VISUAL]: 0,
        [LearningStyle.AUDITORY]: 0,
        [LearningStyle.VERBAL]: 0,
      };

      SECTIONS.forEach(section => {
        section.questions.forEach(question => {
          scores[section.learningStyle] += answers[question.id] || 0;
        });
      });

      const highestScore = Math.max(...Object.values(scores));
      
      if (highestScore === 0) {
        setDominantStyle(LearningStyle.UNDETERMINED);
        return;
      }

      const topStyle = Object.keys(scores).find(
        (style) => scores[style as LearningStyle] === highestScore
      ) as LearningStyle;

      setDominantStyle(topStyle);
    };

    calculateStyle();
  }, [answers]);

  const handleAnswerChange = (questionId: string, value: number) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const progress = (Object.keys(answers).length / totalQuestions) * 100;

  return (
    <div className="bg-slate-100 min-h-screen font-sans text-slate-800">
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <Header />
          <div className="p-6 sm:p-8 md:p-10">
            <UserInfoForm />
            <div className="mt-10">
              <Questionnaire 
                answers={answers} 
                onAnswerChange={handleAnswerChange} 
              />
            </div>
          </div>
        </div>
      </main>
      <Results dominantStyle={dominantStyle} progress={progress} />
    </div>
  );
}
