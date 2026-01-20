"use client";

import React, { useState, useEffect } from "react";
import { PlusCircle, Trash2, Sparkles, Download, ArrowLeft, ArrowRight, Layout } from "lucide-react";
import { ResumeData, ExperienceItem, EducationItem, ProjectItem } from "@/types/resume";
import { resumeService } from "@/services/api";

// Initial Resume Data with resume_id
const initialResumeData: ResumeData = {
    resume_id: "",
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    website: "",
    summary: "",
    experiences: [],
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    languages: [],
};

const steps = [
    { id: 1, name: "Personal Info" },
    { id: 2, name: "Experience" },
    { id: 3, name: "Education" },
    { id: 4, name: "Skills & More" },
];

interface ResumeBuilderProps {
    initialTemplate?: string;
}

export default function ResumeBuilder({ initialTemplate = "default" }: ResumeBuilderProps) {
    const [currentStep, setCurrentStep] = useState(1);
    const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
    const [isImproving, setIsImproving] = useState(false);
    const [activeTemplate, setActiveTemplate] = useState(initialTemplate);

    // Update template when prop changes
    useEffect(() => {
        if (initialTemplate) {
            setActiveTemplate(initialTemplate);
        }
    }, [initialTemplate]);

    // Handle basic input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setResumeData(prev => ({ ...prev, [name]: value }));
    };

    // Handle lists like experiences, education, projects
    const handleListChange = (
        index: number,
        field: "experiences" | "education" | "projects",
        subfield: string,
        value: any
    ) => {
        setResumeData(prev => {
            const newList = [...(prev[field] || [])] as any[];
            newList[index] = { ...newList[index], [subfield]: value };
            return { ...prev, [field]: newList };
        });
    };

    const addItem = (field: "experiences" | "education" | "projects") => {
        const newItem = field === "experiences"
            ? { title: "", company: "", period: "", description: "" }
            : field === "education"
                ? { degree: "", institution: "", year: "" }
                : { name: "", description: "" };

        setResumeData(prev => ({
            ...prev,
            [field]: [...(prev[field] || []), newItem],
        }));
    };

    const removeItem = (field: "experiences" | "education" | "projects", index: number) => {
        setResumeData(prev => ({
            ...prev,
            [field]: (prev[field] as any[]).filter((_, i) => i !== index),
        }));
    };

    // Improve resume via AI
    const handleImprove = async () => {
        setIsImproving(true);
        try {
            let resumeId = resumeData.resume_id;
            if (!resumeId) {
                const createRes = await resumeService.createResume(resumeData);
                if (createRes?.resume_id) {
                    resumeId = createRes.resume_id;
                    setResumeData(prev => ({ ...prev, resume_id: resumeId }));
                }
            }

            if (resumeId) {
                const improveRes = await resumeService.improveResume(resumeId, resumeData);
                if (improveRes?.version) {
                    setResumeData(prev => ({ ...prev, ...improveRes.version }));
                }
            }
        } catch (error) {
            console.error("AI Improvement failed:", error);
        } finally {
            setIsImproving(false);
        }
    };

    // Render step content
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className="space-y-6 animate-in fade-in duration-500">
                        <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Full Name</label>
                                <input type="text" name="name" value={resumeData.name} onChange={handleChange} className="input-field w-full" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Email Address</label>
                                <input type="email" name="email" value={resumeData.email} onChange={handleChange} className="input-field w-full" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">Phone Number</label>
                                <input type="text" name="phone" value={resumeData.phone} onChange={handleChange} className="input-field w-full" placeholder="+1 (555) 000-0000" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-400">LinkedIn Profile</label>
                                <input type="text" name="linkedin" value={resumeData.linkedin} onChange={handleChange} className="input-field w-full" placeholder="linkedin.com/in/johndoe" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-400">Professional Summary</label>
                            <textarea name="summary" value={resumeData.summary} onChange={handleChange} rows={4} className="input-field w-full" placeholder="Briefly describe your professional background..." />
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-6 animate-in fade-in duration-500">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold">Work Experience</h2>
                            <button onClick={() => addItem("experiences")} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                                <PlusCircle className="w-5 h-5" /> Add Experience
                            </button>
                        </div>
                        {resumeData.experiences.map((exp, index) => (
                            <div key={index} className="glass p-6 rounded-xl space-y-4 relative group">
                                <button onClick={() => removeItem("experiences", index)} className="absolute top-4 right-4 text-slate-500 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
                                    <Trash2 className="w-5 h-5" />
                                </button>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input placeholder="Job Title" value={exp.title} onChange={e => handleListChange(index, "experiences", "title", e.target.value)} className="input-field w-full" />
                                    <input placeholder="Company" value={exp.company} onChange={e => handleListChange(index, "experiences", "company", e.target.value)} className="input-field w-full" />
                                </div>
                                <input placeholder="Period (e.g., Jan 2020 - Present)" value={exp.period} onChange={e => handleListChange(index, "experiences", "period", e.target.value)} className="input-field w-full" />
                                <textarea placeholder="Description of your role..." value={exp.description} onChange={e => handleListChange(index, "experiences", "description", e.target.value)} className="input-field w-full" rows={3} />
                            </div>
                        ))}
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-6 animate-in fade-in duration-500">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold">Education</h2>
                            <button onClick={() => addItem("education")} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                                <PlusCircle className="w-5 h-5" /> Add Education
                            </button>
                        </div>
                        {resumeData.education.map((edu, index) => (
                            <div key={index} className="glass p-6 rounded-xl space-y-4 relative group">
                                <button onClick={() => removeItem("education", index)} className="absolute top-4 right-4 text-slate-500 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
                                    <Trash2 className="w-5 h-5" />
                                </button>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input placeholder="Degree / Field of Study" value={edu.degree} onChange={e => handleListChange(index, "education", "degree", e.target.value)} className="input-field w-full" />
                                    <input placeholder="Institution" value={edu.institution} onChange={e => handleListChange(index, "education", "institution", e.target.value)} className="input-field w-full" />
                                </div>
                                <input placeholder="Year of Graduation" value={edu.year} onChange={e => handleListChange(index, "education", "year", e.target.value)} className="input-field w-full" />
                            </div>
                        ))}
                    </div>
                );
            case 4:
                return (
                    <div className="space-y-6 animate-in fade-in duration-500">
                        <h2 className="text-2xl font-bold mb-6">Skills & Additional Information</h2>
                        
                        {/* Skills */}
                        <div className="space-y-4">
                            <label className="text-sm font-medium text-slate-400">Skills (comma-separated)</label>
                            <input 
                                type="text" 
                                value={resumeData.skills.join(", ")} 
                                onChange={(e) => {
                                    const skills = e.target.value.split(",").map(s => s.trim()).filter(s => s);
                                    setResumeData(prev => ({ ...prev, skills }));
                                }} 
                                className="input-field w-full" 
                                placeholder="Python, React, Node.js, FastAPI"
                            />
                        </div>

                        {/* Projects */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-slate-400">Projects</label>
                                <button onClick={() => addItem("projects")} className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                                    <PlusCircle className="w-5 h-5" /> Add Project
                                </button>
                            </div>
                            {resumeData.projects?.map((project, index) => (
                                <div key={index} className="glass p-6 rounded-xl space-y-4 relative group">
                                    <button onClick={() => removeItem("projects", index)} className="absolute top-4 right-4 text-slate-500 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                    <input 
                                        placeholder="Project Name" 
                                        value={project.name || ""} 
                                        onChange={e => handleListChange(index, "projects", "name", e.target.value)} 
                                        className="input-field w-full" 
                                    />
                                    <textarea 
                                        placeholder="Project Description" 
                                        value={project.description || ""} 
                                        onChange={e => handleListChange(index, "projects", "description", e.target.value)} 
                                        className="input-field w-full" 
                                        rows={3} 
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Certifications */}
                        <div className="space-y-4">
                            <label className="text-sm font-medium text-slate-400">Certifications (comma-separated)</label>
                            <input 
                                type="text" 
                                value={resumeData.certifications?.join(", ") || ""} 
                                onChange={(e) => {
                                    const certs = e.target.value.split(",").map(c => c.trim()).filter(c => c);
                                    setResumeData(prev => ({ ...prev, certifications: certs }));
                                }} 
                                className="input-field w-full" 
                                placeholder="AWS Certified, Google Cloud Professional"
                            />
                        </div>

                        {/* Languages */}
                        <div className="space-y-4">
                            <label className="text-sm font-medium text-slate-400">Languages (comma-separated)</label>
                            <input 
                                type="text" 
                                value={resumeData.languages?.join(", ") || ""} 
                                onChange={(e) => {
                                    const langs = e.target.value.split(",").map(l => l.trim()).filter(l => l);
                                    setResumeData(prev => ({ ...prev, languages: langs }));
                                }} 
                                className="input-field w-full" 
                                placeholder="English, Spanish, French"
                            />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    // Handle form submission
    const handleSubmit = async () => {
        try {
            const result = await resumeService.createResume(resumeData);
            if (result?.resume_id) {
                setResumeData(prev => ({ ...prev, resume_id: result.resume_id }));
                alert("Resume created successfully!");
            }
        } catch (error) {
            console.error("Failed to create resume:", error);
            alert("Failed to create resume. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Resume Builder
                    </h1>
                    <p className="text-slate-400">Create your professional resume step by step</p>
                    {activeTemplate && activeTemplate !== "default" && (
                        <div className="mt-4 inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5">
                            <Layout className="w-4 h-4 text-blue-400" />
                            <span className="text-sm text-blue-400">
                                Template: <span className="font-semibold capitalize">{activeTemplate.replace(/-/g, " ")}</span>
                            </span>
                        </div>
                    )}
                </div>

                {/* Progress Steps */}
                <div className="glass p-6 rounded-xl mb-8">
                    <div className="flex items-center justify-between">
                        {steps.map((step, index) => (
                            <React.Fragment key={step.id}>
                                <div className="flex flex-col items-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                                        currentStep > step.id 
                                            ? "bg-blue-500 text-white" 
                                            : currentStep === step.id 
                                                ? "bg-blue-600 text-white ring-4 ring-blue-500/30" 
                                                : "bg-slate-700 text-slate-400"
                                    }`}>
                                        {currentStep > step.id ? "✓" : step.id}
                                    </div>
                                    <span className={`text-xs mt-2 ${currentStep >= step.id ? "text-blue-400" : "text-slate-500"}`}>
                                        {step.name}
                                    </span>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={`flex-1 h-1 mx-4 ${currentStep > step.id ? "bg-blue-500" : "bg-slate-700"}`} />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Step Content */}
                <div className="glass p-8 rounded-xl mb-8">
                    {renderStep()}
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                        disabled={currentStep === 1}
                        className="btn-secondary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ArrowLeft className="w-5 h-5" /> Previous
                    </button>

                    {currentStep < steps.length ? (
                        <button
                            onClick={() => setCurrentStep(prev => Math.min(steps.length, prev + 1))}
                            className="btn-primary flex items-center gap-2"
                        >
                            Next <ArrowRight className="w-5 h-5" />
                        </button>
                    ) : (
                        <div className="flex items-center gap-4">
                            <button
                                onClick={handleImprove}
                                disabled={isImproving}
                                className="btn-primary flex items-center gap-2 disabled:opacity-50"
                            >
                                <Sparkles className="w-5 h-5" /> {isImproving ? "Improving..." : "Improve with AI"}
                            </button>
                            <button
                                onClick={handleSubmit}
                                className="btn-primary flex items-center gap-2"
                            >
                                <Download className="w-5 h-5" /> Create Resume
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
