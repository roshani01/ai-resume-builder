import axios from 'axios';
import { ResumeData, ApiResponse } from '@/types/resume';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const resumeService = {
    createResume: async (data: any): Promise<ApiResponse<ResumeData>> => {
        const response = await apiClient.post('/resumes/create', data);
        return response.data;
    },

    improveResume: async (resumeId: string, options: any): Promise<ApiResponse<ResumeData>> => {
        const response = await apiClient.post('/resumes/improve', {
            resume_id: resumeId,
            ...options
        });
        return response.data;
    },

    tailorResume: async (resumeId: string, jobDescription: string): Promise<ApiResponse<ResumeData>> => {
        const response = await apiClient.post('/resumes/tailor', {
            resume_id: resumeId,
            job_description: jobDescription
        });
        return response.data;
    },

    exportResume: async (resumeId: string, template: string = 'default'): Promise<void> => {
        window.open(`${API_BASE_URL}/resumes/export/${resumeId}?template=${template}`, '_blank');
    },

    getTemplates: async (): Promise<any> => {
        const response = await apiClient.get('/resumes/templates');
        return response.data;
    }
};
