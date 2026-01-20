export interface ExperienceItem {
    title: string;
    company: string;
    period?: string;
    description?: string;
    achievements?: string[];
}

export interface EducationItem {
    degree: string;
    institution: string;
    year?: string;
    gpa?: string;
}

export interface ProjectItem {
    name: string;
    description?: string;
    technologies?: string;
}

export interface ResumeData {
    resume_id?: string;
    name: string;
    email: string;
    phone?: string;
    linkedin?: string;
    github?: string;
    website?: string;
    summary: string;
    experiences: ExperienceItem[];
    education: EducationItem[];
    skills: string[];
    projects?: ProjectItem[];
    certifications?: string[];
    languages?: string[];
}

export interface ApiResponse<T = any> {
    status: 'success' | 'error';
    message?: string;
    data?: T;
    resume_id?: string;
    version?: T;
    tailored?: T;
}
