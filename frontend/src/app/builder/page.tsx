"use client";

import { useSearchParams } from "next/navigation";
import ResumeBuilder from "@/components/ResumeBuilder";

export default function BuilderPage() {
    const searchParams = useSearchParams();
    const template = searchParams.get("template") || "default";

    return (
        <div className="min-h-screen bg-transparent pt-8">
            <ResumeBuilder initialTemplate={template} />
        </div>
    );
}
