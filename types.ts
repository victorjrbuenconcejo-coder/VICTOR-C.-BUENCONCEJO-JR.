
export enum LearningStyle {
  VISUAL = 'Visual',
  AUDITORY = 'Auditory',
  VERBAL = 'Verbal',
  UNDETERMINED = 'Getting Started...'
}

export interface Question {
  id: string;
  text: string;
}

export interface Section {
  title: string;
  learningStyle: LearningStyle;
  questions: Question[];
}

export type AnswersMap = Record<string, number>;
