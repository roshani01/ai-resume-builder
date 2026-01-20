"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Layout, Download, Sparkles } from "lucide-react";
import { resumeService } from "@/services/api";

interface Template {
    name: string;
    description?: string;
}

export default function TemplatesPage() {
    const router = useRouter();
    const [templates, setTemplates] = useState<Template[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const handleTemplateSelect = (templateName: string) => {
        // Navigate to builder with template as query parameter
        router.push(`/builder?template=${encodeURIComponent(templateName)}`);
    };

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                setLoading(true);
                const data = await resumeService.getTemplates();
                
                // Handle different response formats from backend
                let templateList: Template[] = [];
                
                if (data?.template_info && Array.isArray(data.template_info)) {
                    // Backend returns template_info array with name and description
                    templateList = data.template_info.map((t: any) => ({
                        name: t.name || String(t),
                        description: t.description || undefined
                    }));
                } else if (data?.templates && Array.isArray(data.templates)) {
                    // Backend returns templates array (could be strings or objects)
                    templateList = data.templates.map((t: any) => {
                        if (typeof t === 'string') {
                            return { name: t };
                        }
                        return {
                            name: t.name || String(t),
                            description: t.description || undefined
                        };
                    });
                } else if (Array.isArray(data)) {
                    // Direct array response
                    templateList = data.map((t: any) => {
                        if (typeof t === 'string') {
                            return { name: t };
                        }
                        return {
                            name: t.name || String(t),
                            description: t.description || undefined
                        };
                    });
                }
                
                setTemplates(templateList.length > 0 ? templateList : []);
                setError(null);
            } catch (err: any) {
                console.error("Failed to fetch templates:", err);
                setError(err.message || "Failed to load templates");
                // Fallback templates if API fails
                setTemplates([
                    { name: "default", description: "Clean and professional" },
                    { name: "modern", description: "Contemporary design" },
                    { name: "classic", description: "Traditional format" },
                    { name: "minimal", description: "Simple and elegant" },
                    { name: "professional", description: "Corporate style" },
                    { name: "executive", description: "Executive level" },
                    { name: "tech", description: "Tech industry focused" },
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchTemplates();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Resume Templates
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Choose from our professional resume templates designed to help you stand out
                    </p>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="text-center py-12">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                        <p className="text-slate-400 mt-4">Loading templates...</p>
                    </div>
                )}

                {/* Error State */}
                {error && !loading && (
                    <div className="glass p-6 rounded-xl mb-8 border border-red-500/20">
                        <p className="text-red-400">Error: {error}</p>
                        <p className="text-slate-400 text-sm mt-2">Showing default templates</p>
                    </div>
                )}

                {/* Templates Grid */}
                {!loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {templates.map((template, index) => (
                            <div
                                key={template.name || index}
                                onClick={() => template.name && handleTemplateSelect(template.name)}
                                className="glass p-6 rounded-xl hover:scale-105 hover:border-blue-500/50 border border-transparent transition-all duration-200 cursor-pointer group"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                        <Layout className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <span className="text-xs text-slate-500 uppercase tracking-wider">
                                        {template.name || "Unknown"}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 capitalize">
                                    {(template.name || "Unknown").replace(/-/g, " ")}
                                </h3>
                                {template.description && (
                                    <p className="text-slate-400 text-sm mb-4">
                                        {template.description}
                                    </p>
                                )}
                                <div className="flex items-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Download className="w-4 h-4" />
                                    <span className="text-sm font-medium">Click to Use Template</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* CTA Section */}
                <div className="mt-12 text-center">
                    <div className="glass p-8 rounded-xl inline-block">
                        <Sparkles className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold mb-4">Ready to Build Your Resume?</h2>
                        <p className="text-slate-400 mb-6 max-w-md">
                            Start creating your professional resume with our AI-powered builder
                        </p>
                        <a
                            href="/builder"
                            className="btn-primary inline-flex items-center gap-2"
                        >
                            Start Building <Sparkles className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
