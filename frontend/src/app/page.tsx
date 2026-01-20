import { ArrowRight, Sparkles, Zap, ShieldCheck } from "lucide-react";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-8">
                            <Sparkles className="w-4 h-4 text-blue-400" />
                            <span className="text-sm font-medium text-blue-400">Next-Gen AI Resume Builder</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                            Build a <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent italic">Winning</span> Resume <br /> in Minutes
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-10 leading-relaxed">
                            Our advanced AI helps you craft professional, ATS-optimized resumes that showcase your skills and land you more interviews.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="/builder" className="btn-primary flex items-center gap-2 text-lg py-3 px-8">
                                Create My Resume <ArrowRight className="w-5 h-5" />
                            </a>
                            <a href="/templates" className="btn-secondary text-lg py-3 px-8">
                                View Templates
                            </a>
                        </div>
                    </div>
                </div>

                {/* Abstract Background Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="glass p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">AI Optimization</h3>
                            <p className="text-slate-400">Smart content suggestions and real-time improvements powered by advanced language models.</p>
                        </div>

                        <div className="glass p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                                <ArrowRight className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Tailored for You</h3>
                            <p className="text-slate-400">Automatically adjust your resume for specific job descriptions to boost your ATS score.</p>
                        </div>

                        <div className="glass p-8 rounded-2xl">
                            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-6">
                                <ShieldCheck className="w-6 h-6 text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4">Professional Formats</h3>
                            <p className="text-slate-400">Industry-standard templates designed by hiring experts to ensure professional visual appeal.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
