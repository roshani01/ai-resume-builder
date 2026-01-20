import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "AI Resume Builder | Kraft Premium Resumes",
    description: "Build, improve, and tailor your resume with AI assistance.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-black"></div>
                <nav className="border-b border-white/10 bg-black/20 backdrop-blur-lg sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <div className="flex items-center">
                                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                    AI Resume
                                </span>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a href="/" className="text-white hover:text-blue-400 px-3 py-2 rounded-md font-medium transition-colors">Home</a>
                                    <a href="/builder" className="text-slate-300 hover:text-white px-3 py-2 rounded-md font-medium transition-colors">Builder</a>
                                    <a href="/templates" className="text-slate-300 hover:text-white px-3 py-2 rounded-md font-medium transition-colors">Templates</a>
                                </div>
                            </div>
                            <div>
                                <a href="/builder" className="btn-primary">Get Started</a>
                            </div>
                        </div>
                    </div>
                </nav>
                <main>{children}</main>
                <footer className="border-t border-white/5 bg-slate-950 py-12">
                    <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
                        <p>© 2026 AI Resume Builder. Empowering careers with Intelligence.</p>
                    </div>
                </footer>
            </body>
        </html>
    );
}
