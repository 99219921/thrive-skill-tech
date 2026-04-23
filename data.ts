export type Course = {
  slug: string;
  title: string;
  price: number;
  level: string;
  bestFor: string[];
  badge?: string;
  description: string;
  modules: string[];
  outcomes: string[];
  certificate: string;
  support: string;
  mode: string;
  duration: string;
};

export const courses: Course[] = [
  {
    slug: "content-creation-master-course",
    title: "Content Creation Master Course",
    price: 2999,
    level: "Beginner to Intermediate",
    description:
      "A practical starter program to help students, creators, and small business owners build content systems that grow attention and trust.",
    bestFor: ["Students", "Creators", "Beginners", "Small Business Owners"],
    modules: [
      "Content Ideas",
      "Scripting",
      "Shooting Basics",
      "Editing Basics",
      "Reels Growth",
      "Branding Basics"
    ],
    outcomes: [
      "Create engaging short-form content",
      "Understand camera and editing basics",
      "Build a consistent posting workflow",
      "Learn personal branding fundamentals"
    ],
    certificate: "Industry-style completion certificate",
    support: "Community support and practical assignments",
    mode: "Live + Recorded",
    duration: "6 Weeks"
  },
  {
    slug: "career-king",
    title: "Career King",
    price: 60000,
    level: "Premium Flagship Program",
    badge: "Flagship",
    description:
      "An end-to-end career transformation track for learners who want deep practical skills, portfolio development, and earning opportunities.",
    bestFor: [
      "Serious Learners",
      "Freelancers",
      "Job Seekers",
      "Aspiring Digital Professionals"
    ],
    modules: [
      "Digital Marketing",
      "SEO",
      "Content Creation",
      "AI Tools",
      "Social Media Marketing",
      "Freelancing / Business / Client Acquisition",
      "Resume / Interview / Internship / Career Support"
    ],
    outcomes: [
      "Build job-ready marketing and creator skills",
      "Create a portfolio and resume",
      "Learn client acquisition and freelancing",
      "Prepare for internships and interviews"
    ],
    certificate: "Advanced flagship certificate with career support",
    support: "Mentorship, career guidance, and internship assistance",
    mode: "Live + Recorded",
    duration: "16 Weeks"
  }
];

export const testimonials = [
  {
    name: "Riya Sharma",
    role: "Student",
    content:
      "Thrive Skill Tech made digital learning practical. The assignments felt real, and I finally understood how to turn skills into freelance opportunities."
  },
  {
    name: "Aditya More",
    role: "Content Creator",
    content:
      "The Content Creation Master Course helped me improve my reels, storytelling, and posting strategy in a very simple way."
  },
  {
    name: "Sneha Kulkarni",
    role: "Career King Learner",
    content:
      "The combination of SEO, AI tools, and career support gave me clarity and confidence to move toward internships and paid work."
  }
];

export const faqs = [
  {
    q: "Are the programs beginner-friendly?",
    a: "Yes. Both programs focus on practical learning and structured guidance, with Content Creation Master Course especially designed for beginners."
  },
  {
    q: "Will I get a certificate?",
    a: "Yes. Students receive course completion certificates, and flagship learners also get advanced program recognition."
  },
  {
    q: "Are classes live or recorded?",
    a: "Programs include live learning support and recorded access for revision."
  },
  {
    q: "Which languages are supported?",
    a: "The website supports English, Hindi, and Marathi. Learning delivery can be adapted for student comfort."
  }
];

export const studentCourses = [
  {
    id: 1,
    title: "Content Creation Master Course",
    progress: 62,
    nextLesson: "Editing Basics - Mobile Workflow",
    lessonsCompleted: 18,
    totalLessons: 29
  },
  {
    id: 2,
    title: "Career King",
    progress: 28,
    nextLesson: "SEO Fundamentals - Keyword Mapping",
    lessonsCompleted: 11,
    totalLessons: 39
  }
];

export const announcements = [
  "Weekend live doubt session on Saturday at 7:00 PM.",
  "New AI Tools module added to Career King.",
  "Certificates for March cohort are now available to download."
];

export const internshipListings = [
  {
    title: "Social Media Intern",
    company: "Growth Pixel Media",
    location: "Remote",
    stipend: "₹8,000/month"
  },
  {
    title: "SEO Trainee",
    company: "Search Craft Labs",
    location: "Mumbai",
    stipend: "₹10,000/month"
  },
  {
    title: "Video Editing Intern",
    company: "Creator Studio Hub",
    location: "Remote",
    stipend: "₹7,500/month"
  }
];

export const adminStats = {
  totalStudents: 1284,
  revenueThisMonth: 482500,
  activeCourses: 2,
  pendingDoubts: 17
};

export const studentsTable = [
  { id: "STU-101", name: "Riya Sharma", course: "Career King", status: "Active", progress: "72%" },
  { id: "STU-102", name: "Sagar Pawar", course: "Content Creation Master Course", status: "Active", progress: "41%" },
  { id: "STU-103", name: "Mitali Deshmukh", course: "Career King", status: "Trial", progress: "12%" }
];

export const paymentsTable = [
  { id: "PAY-001", student: "Riya Sharma", course: "Career King", amount: 60000, status: "Paid" },
  { id: "PAY-002", student: "Sagar Pawar", course: "Content Creation Master Course", amount: 2999, status: "Paid" },
  { id: "PAY-003", student: "Mitali Deshmukh", course: "Career King", amount: 10000, status: "Partial" }
];

export const webinarLeads = [
  { name: "Aman Gupta", phone: "9876543210", email: "aman@example.com", source: "Instagram" },
  { name: "Komal Patil", phone: "8765432109", email: "komal@example.com", source: "Website" }
];

export const supportTickets = [
  { id: "SUP-11", subject: "Certificate not visible", user: "Riya Sharma", status: "Open" },
  { id: "SUP-12", subject: "Video playback issue", user: "Sagar Pawar", status: "Pending" }
];
