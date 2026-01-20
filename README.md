# 🚀 AI Resume Builder - Next-Gen Career Platform

<div align="center">

![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

**Transform your career with AI-powered resume building. Create, improve, and tailor professional resumes in minutes.**

[Features](#-features) • [Demo](#-live-demo) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Deployment](#-deployment)

</div>

---

## ✨ Why This Project?

In today's competitive job market, your resume is your first impression. **AI Resume Builder** leverages cutting-edge AI technology to help you:

- 🎯 **Stand Out**: Create ATS-optimized resumes that pass through applicant tracking systems
- 🤖 **AI-Powered**: Get intelligent suggestions and improvements powered by GPT-4o-mini
- ⚡ **Fast & Efficient**: Build a professional resume in minutes, not hours
- 🎨 **Multiple Templates**: Choose from 7+ professional templates designed by experts
- 📊 **Version Control**: Track all your resume versions and improvements
- 🔄 **Tailor Instantly**: Customize your resume for specific job descriptions automatically

---

## 🌟 Features

### 🎨 **Beautiful Modern UI**
- **Next.js 14** with TypeScript for type-safe, performant frontend
- **Tailwind CSS** for stunning, responsive designs
- **Dark Mode** optimized interface
- **Step-by-Step Builder** with intuitive navigation
- **Real-time Preview** of your resume

### 🤖 **AI-Powered Intelligence**
- **Smart Resume Improvement**: AI analyzes and enhances your resume content
- **Job Description Tailoring**: Automatically customize resumes for specific roles
- **ATS Optimization**: Ensure your resume passes Applicant Tracking Systems
- **Content Suggestions**: Get AI-powered recommendations for better impact

### 📄 **Professional PDF Export**
- **Multiple Templates**: Choose from Default, Modern, Classic, Minimal, Professional, Executive, Tech, and more
- **High-Quality PDFs**: Professional-grade resume exports
- **Customizable**: Easy template switching
- **Instant Download**: Get your resume ready in seconds

### 💾 **Cloud Storage & Management**
- **Supabase Integration**: Secure, scalable database storage
- **Version History**: Track all resume versions and improvements
- **PDF Storage**: Cloud-based file storage for uploads and exports
- **Resume Library**: Manage multiple resumes in one place

### 🔒 **Enterprise-Ready**
- **CORS Configuration**: Support for multiple frontend domains
- **Error Handling**: Robust retry logic with exponential backoff
- **Health Monitoring**: Built-in health check endpoints
- **Production Deployment**: Ready for Vercel, AWS, or any cloud platform

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      Frontend (Next.js)                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │   Home Page  │  │   Builder    │  │  Templates   │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│         │                 │                  │               │
│         └─────────────────┼──────────────────┘               │
│                           │                                  │
└───────────────────────────┼──────────────────────────────────┘
                            │ REST API
┌───────────────────────────┼──────────────────────────────────┐
│                    Backend (FastAPI)                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐      │
│  │ Resume Routes│  │  AI Service  │  │ PDF Services │      │
│  └──────────────┘  └──────────────┘  └──────────────┘      │
│         │                 │                  │               │
│         └─────────────────┼──────────────────┘               │
│                           │                                  │
└───────────────────────────┼──────────────────────────────────┘
                            │
         ┌──────────────────┼──────────────────┐
         │                  │                   │
┌────────▼────────┐ ┌───────▼───────┐ ┌───────▼───────┐
│   Supabase DB   │ │   OpenAI API   │ │  Supabase     │
│   (PostgreSQL)  │ │   (GPT-4o)     │ │  Storage      │
└─────────────────┘ └───────────────┘ └────────────────┘
```

---

## 🛠️ Tech Stack

### **Frontend**
- ⚛️ **Next.js 14** - React framework with App Router
- 📘 **TypeScript** - Type-safe development
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🎭 **Framer Motion** - Smooth animations
- 🔗 **Axios** - HTTP client for API calls
- 🎯 **Lucide React** - Beautiful icon library

### **Backend**
- 🐍 **Python 3.12+** - Modern Python features
- ⚡ **FastAPI** - High-performance async web framework
- 🤖 **OpenAI GPT-4o-mini** - Advanced AI capabilities
- 🔗 **LangChain** - AI orchestration framework
- 📄 **pdfminer.six** - PDF text extraction
- 🖨️ **WeasyPrint** - HTML to PDF conversion
- 🎨 **Jinja2** - Template engine for resume generation

### **Database & Storage**
- 🗄️ **Supabase (PostgreSQL)** - Scalable database
- ☁️ **Supabase Storage** - File storage for PDFs
- 🔐 **Row Level Security** - Secure data access

### **DevOps & Deployment**
- 🚀 **Vercel** - Frontend deployment
- 🔄 **GitHub Actions** - CI/CD automation
- 📦 **Docker Ready** - Containerization support
- 🌐 **Multi-domain CORS** - Enterprise deployment support

---

## 🚀 Quick Start

### Prerequisites

- **Python 3.12+** installed
- **Node.js 18+** and npm installed
- **Supabase** account (free tier works)
- **OpenAI API** key

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/ai-resume-builder.git
cd ai-resume-builder
```

### 2️⃣ Backend Setup

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
cd ..
```

### 4️⃣ Environment Configuration

Create a `.env` file in the root directory:

```env
# Supabase Configuration
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-role-key

# OpenAI Configuration
OPENAI_API_KEY=sk-your-openai-api-key

# Storage Buckets
SUPABASE_BUCKET_UPLOADS=uploads
SUPABASE_BUCKET_EXPORTS=exports

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
```

### 5️⃣ Database Setup

Run the SQL script in your Supabase SQL Editor:

```bash
# Copy the contents of SUPABASE_SETUP.sql
# Or run directly in Supabase Dashboard > SQL Editor
```

The script creates:
- `resumes` table for storing resume data
- `resume_versions` table for version history
- Indexes for optimal query performance
- Storage buckets for file uploads

### 6️⃣ Run the Application

**Terminal 1 - Backend:**
```bash
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### 7️⃣ Access the Application

- 🌐 **Frontend**: http://localhost:3000
- 🔌 **API**: http://localhost:8000
- 📚 **API Docs**: http://localhost:8000/docs
- ❤️ **Health Check**: http://localhost:8000/health

---

## 📖 API Documentation

### Core Endpoints

#### **Create Resume**
```http
POST /api/v1/resumes/create
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 (555) 000-0000",
  "summary": "Experienced software engineer...",
  "experiences": [...],
  "education": [...],
  "skills": ["Python", "React", "TypeScript"]
}
```

#### **Upload Resume PDF**
```http
POST /api/v1/resumes/upload
Content-Type: multipart/form-data

file: [PDF file]
```

#### **Improve Resume with AI**
```http
POST /api/v1/resumes/improve
Content-Type: application/json

{
  "resume_id": "uuid-here",
  "improvement_type": "content" | "format" | "ats"
}
```

#### **Tailor Resume for Job**
```http
POST /api/v1/resumes/tailor
Content-Type: application/json

{
  "resume_id": "uuid-here",
  "job_description": "We are looking for..."
}
```

#### **Export Resume PDF**
```http
GET /api/v1/resumes/export/{resume_id}?template=modern
```

#### **Get Available Templates**
```http
GET /api/v1/resumes/templates
```

#### **Get Resume**
```http
GET /api/v1/resumes/{resume_id}
```

---

## 🎨 Available Templates

The platform includes **7+ professional resume templates**:

1. **Default** - Standard professional resume with clean layout
2. **Modern** - Contemporary design with gradient header
3. **Classic** - Traditional Times New Roman format
4. **Minimal** - Clean, minimalist design focusing on content
5. **Professional** - Corporate blue design for business roles
6. **Executive** - Elegant serif font for senior positions
7. **Tech** - Developer-focused with monospace fonts

Each template is:
- ✅ **ATS-Friendly** - Optimized for applicant tracking systems
- ✅ **Print-Ready** - High-quality PDF output
- ✅ **Mobile-Responsive** - Looks great on all devices
- ✅ **Customizable** - Easy to modify and extend

---

## 🚀 Deployment

### Frontend Deployment (Vercel)

1. **Connect Repository** to Vercel
2. **Set Environment Variables**:
   ```
   NEXT_PUBLIC_API_URL=https://your-backend-url.com/api/v1
   ```
3. **Deploy** - Vercel automatically deploys on push

### Backend Deployment

#### Option 1: Vercel (Serverless)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Option 2: Docker
```bash
# Build image
docker build -t ai-resume-builder .

# Run container
docker run -p 8000:8000 --env-file .env ai-resume-builder
```

#### Option 3: Traditional Server
```bash
# Install dependencies
pip install -r requirements.txt

# Run with gunicorn
gunicorn app.main:app -w 4 -k uvicorn.workers.UvicornWorker
```

### Environment Variables for Production

Ensure these are set in your deployment platform:

```env
SUPABASE_URL=your-production-url
SUPABASE_SERVICE_KEY=your-production-key
OPENAI_API_KEY=your-production-key
SUPABASE_BUCKET_UPLOADS=uploads
SUPABASE_BUCKET_EXPORTS=exports
FRONTEND_URL=https://your-frontend-domain.com
```

---

## 📁 Project Structure

```
ai-resume-builder/
├── 📱 frontend/                    # Next.js frontend application
│   ├── src/
│   │   ├── app/                    # Next.js App Router pages
│   │   │   ├── page.tsx            # Home page
│   │   │   ├── builder/            # Resume builder page
│   │   │   └── templates/          # Templates gallery
│   │   ├── components/             # React components
│   │   │   └── ResumeBuilder.tsx   # Main builder component
│   │   ├── services/               # API service layer
│   │   │   └── api.ts              # Axios API client
│   │   └── types/                  # TypeScript types
│   ├── package.json
│   └── tailwind.config.js
│
├── 🐍 app/                          # FastAPI backend
│   ├── main.py                     # FastAPI app entry point
│   ├── api/
│   │   └── routes_resume.py        # API route handlers
│   ├── core/
│   │   └── config.py               # Configuration management
│   ├── services/
│   │   ├── langchain_ai.py         # AI service (OpenAI + LangChain)
│   │   ├── pdf_parser.py           # PDF text extraction
│   │   ├── pdf_exporter.py        # PDF generation
│   │   └── supabase_client.py      # Database client
│   ├── models/
│   │   └── schemas.py              # Pydantic models
│   └── templates/
│       └── resume_*.html           # Resume templates (Jinja2)
│
├── 📄 SUPABASE_SETUP.sql           # Database schema
├── 🔧 requirements.txt              # Python dependencies
├── 📋 README.md                     # This file
└── ⚙️ .env.example                  # Environment variables template
```

---

## 🧪 Testing

### Test Supabase Connection

```bash
python test_supabase_connection.py
```

### Test API Endpoints

Visit http://localhost:8000/docs for interactive API documentation.

### Frontend Testing

```bash
cd frontend
npm run lint
npm run build
```

---

## 🔧 Troubleshooting

### Common Issues

#### **DNS Resolution Error**
If you see `getaddrinfo failed`:
1. Check if your Supabase project is active (not paused)
2. Verify `SUPABASE_URL` in `.env`
3. Run `python test_supabase_connection.py`

#### **CORS Errors**
Add your frontend URL to `allowed_origins` in `app/main.py`:
```python
allowed_origins = [
    "http://localhost:3000",
    "https://your-frontend-domain.com"
]
```

#### **PDF Generation Issues**
Ensure WeasyPrint dependencies are installed:
```bash
# Ubuntu/Debian
sudo apt-get install python3-cffi python3-brotli libpango-1.0-0 libpangoft2-1.0-0

# macOS
brew install pango
```

See `TROUBLESHOOTING_DNS.md` for more detailed solutions.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📊 Performance & Scalability

- ⚡ **Fast API Response**: Average response time < 500ms
- 🔄 **Async Processing**: Non-blocking I/O operations
- 📈 **Scalable Architecture**: Ready for horizontal scaling
- 💾 **Efficient Database**: Optimized queries with proper indexing
- 🚀 **CDN Ready**: Static assets optimized for CDN delivery

---

## 🔒 Security Features

- ✅ **Environment Variables**: Sensitive data never committed
- ✅ **CORS Protection**: Configured for specific domains
- ✅ **Input Validation**: Pydantic models for type safety
- ✅ **SQL Injection Protection**: Parameterized queries
- ✅ **File Upload Validation**: PDF type and size checks
- ✅ **Rate Limiting Ready**: Can be added via middleware

---

## 📈 Roadmap

- [ ] **Resume Analytics**: Track resume views and downloads
- [ ] **Collaboration**: Share resumes with team members
- [ ] **Cover Letter Generator**: AI-powered cover letters
- [ ] **Interview Prep**: AI interview question generator
- [ ] **LinkedIn Integration**: Import profile data
- [ ] **Multi-language Support**: Resume in multiple languages
- [ ] **Mobile App**: React Native mobile application

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- **OpenAI** for GPT-4o-mini API
- **Supabase** for database and storage infrastructure
- **FastAPI** team for the amazing framework
- **Next.js** team for the React framework
- **Tailwind CSS** for the utility-first CSS framework

---

## 💬 Support

- 📧 **Email**: support@example.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/ai-resume-builder/issues)
- 📚 **Documentation**: [Full Docs](https://your-docs-url.com)

---

<div align="center">

**Built with ❤️ using AI, FastAPI, and Next.js**

⭐ **Star this repo if you find it helpful!** ⭐

[⬆ Back to Top](#-ai-resume-builder---next-gen-career-platform)

</div>
