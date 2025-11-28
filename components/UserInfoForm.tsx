
import React from 'react';

const FormField: React.FC<{ label: string; id: string; placeholder: string }> = ({ label, id, placeholder }) => (
    <div className="flex-1 min-w-[150px]">
        <label htmlFor={id} className="block text-sm font-medium text-slate-600 mb-1">
            {label}
        </label>
        <input
            type="text"
            id={id}
            name={id}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
            placeholder={placeholder}
        />
    </div>
);


export const UserInfoForm: React.FC = () => {
  return (
    <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
        <h2 className="text-xl font-semibold text-slate-700 mb-4">Student Information</h2>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <FormField label="Full Name" id="name" placeholder="e.g., Jane Doe" />
            <FormField label="Grade Level" id="grade" placeholder="e.g., 10th Grade" />
            <FormField label="Section" id="section" placeholder="e.g., Section A" />
        </div>
    </div>
  );
};
