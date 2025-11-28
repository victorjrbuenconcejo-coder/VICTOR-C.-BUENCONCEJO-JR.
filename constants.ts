
import { Section, LearningStyle } from './types';

export const SECTIONS: Section[] = [
  {
    title: "Visual Learning Preferences",
    learningStyle: LearningStyle.VISUAL,
    questions: [
      { id: 'v1', text: "I understand concepts better by looking at charts, diagrams, and maps." },
      { id: 'v2', text: "When assembling something, I prefer to follow illustrations rather than written instructions." },
      { id: 'v3', text: "I often doodle or draw while listening to remember key points." },
      { id: 'v4', text: "Color-coding my notes helps me organize and recall information." },
    ]
  },
  {
    title: "Auditory Learning Preferences",
    learningStyle: LearningStyle.AUDITORY,
    questions: [
      { id: 'a1', text: "I learn best from lectures, discussions, and podcasts." },
      { id: 'a2', text: "I remember things easily when I say them out loud." },
      { id: 'a3', text: "I can easily follow spoken directions without needing them written down." },
      { id: 'a4', text: "Background music or sounds can either help me concentrate or easily distract me." },
    ]
  },
  {
    title: "Verbal (Reading/Writing) Preferences",
    learningStyle: LearningStyle.VERBAL,
    questions: [
      { id: 'k1', text: "I prefer to read instructions and information from textbooks or manuals." },
      { id: 'k2', text: "Taking detailed notes helps me process and understand new topics." },
      { id: 'k3', text: "I enjoy expressing my ideas through writing (e.g., essays, reports)." },
      { id: 'k4', text: "I often make lists to organize my thoughts and tasks." },
    ]
  },
];

export const RATING_OPTIONS = [
  { value: 1, label: 'Never' },
  { value: 2, label: 'Sometimes' },
  { value: 3, label: 'Often' },
  { value: 4, label: 'Always' },
];

export const STYLE_DESCRIPTIONS: Record<LearningStyle, { description: string, icon: string, color: string }> = {
    [LearningStyle.VISUAL]: {
        description: "You learn best by seeing. Visual aids like charts, videos, and diagrams help you understand and remember information.",
        icon: "👁️",
        color: "bg-sky-500"
    },
    [LearningStyle.AUDITORY]: {
        description: "You learn best by hearing. You excel with spoken instructions, lectures, and discussions. You retain information well through sound.",
        icon: "🎧",
        color: "bg-emerald-500"
    },
    [LearningStyle.VERBAL]: {
        description: "You learn best through words, both in reading and writing. You are skilled at absorbing information from text and expressing yourself in writing.",
        icon: "✍️",
        color: "bg-amber-500"
    },
    [LearningStyle.UNDETERMINED]: {
        description: "Answer a few questions to discover your dominant learning style. Your result will appear here instantly!",
        icon: "🤔",
        color: "bg-slate-500"
    }
};
