const projects = [
  {
    id: 1,
    title: "Pantry-to-Plate",
    subtitle: "Smart Meal Planning Ecosystem",
    description:
      "A complete meal planning application that connects pantry management, recipes, shopping, nutrition tracking, and cooking into one ecosystem.",

    technologies: [
      "React",
      "React Router",
      "Any",
      "Java",
      "Spring Boot",
      "Any Database",
      "Spoonacular API",
      "Chart.js"
    ],

    features: [
      "Dashboard",
      "Pantry Inventory",
      "Recipe Discovery",
      "Meal Planner",
      "Shopping List Generator",
      "Nutrition Dashboard",
      "Cooking Mode",
      "User Profile & Settings"
    ],

    modules: [
      {
        name: "Dashboard",
        description:
          "Today's meal, expiring ingredients, shopping summary and weekly nutrition."
      },
      {
        name: "Pantry",
        description:
          "Manage ingredients, quantities, categories and expiration dates."
      },
      {
        name: "Recipe Discovery",
        description:
          "Find recipes based on pantry ingredients using Spoonacular API."
      },
      {
        name: "Meal Planner",
        description:
          "Plan meals by dragging recipes into a weekly calendar."
      },
      {
        name: "Shopping List",
        description:
          "Automatically generate shopping lists from missing ingredients."
      },
      {
        name: "Nutrition Dashboard",
        description:
          "Display calories, protein, carbohydrates and fat using charts."
      },
      {
        name: "Cooking Mode",
        description:
          "Step-by-step cooking guide that automatically updates pantry stock."
      },
      {
        name: "Settings",
        description:
          "Dietary preferences, allergies and nutrition goals."
      }
    ],

    difficulty: "Advanced",
    api: ["Spoonacular API"]
  },

  {
    id: 2,
    title: "Multi-Vendor E-Commerce",
    subtitle: "Complete Marketplace Platform",
    description:
      "A full marketplace where customers buy products, vendors manage stores, and administrators control the platform.",

    technologies: [
      "React",
      "Redux Toolkit",
      "Java",
      "Spring Boot",
      "Any Database",
      "Paystack",
      "Cloudinary"
    ],

    customerFeatures: [
      "Authentication",
      "Profile",
      "Wishlist",
      "Shopping Cart",
      "Checkout",
      "Order Tracking",
      "Product Reviews",
      "Notifications"
    ],

    vendorFeatures: [
      "Vendor Dashboard",
      "Product Management",
      "Inventory",
      "Order Management",
      "Finance",
      "Sales Reports",
      "Coupons"
    ],

    adminFeatures: [
      "Admin Dashboard",
      "User Management",
      "Vendor Approval",
      "Category Management",
      "Reports",
      "Payment Management",
      "Review Moderation"
    ],

    paymentFeatures: [
      "Paystack",
      "Card Payment",
      "Bank Transfer",
      "Cash on Delivery",
      "Payment Verification"
    ],

    deliveryFeatures: [
      "Shipping Fee",
      "Order Tracking",
      "Delivery Status",
      "Pickup Locations"
    ],

    security: [
      "Password Hashing",
      "Email Verification",
      "OTP Verification",
      "CAPTCHA",
      "Role Permissions"
    ],

    difficulty: "Expert"
  },

  {
    id: 3,
    title: "QuizForge",
    subtitle: "Full-Stack React Quiz Platform",
    description:
      "An online quiz application where users compete on multiple programming topics with authentication, leaderboards and AI explanations.",

    technologies: [
      "React",
      "Vite",
      "Any Css",
      "React Router",
      "Zustand",
      "Any Database",
      "Open Trivia API",
      "OpenAI API"
    ],

    features: [
      "Authentication",
      "Dashboard",
      "Quiz Engine",
      "Difficulty Levels",
      "Leaderboard",
      "Statistics",
      "Offline Mode",
      "AI Explanations"
    ],

    quizTopics: [
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Python",
      "Java",
      "C++",
      "C#",
      "SQL",
      "Data Structures",
      "Algorithms", 
      "Other"
    ],

    difficultyLevels: [
      "Easy (20 Questions)",
      "Medium (30 Questions)",
      "Hard (50 Questions)"
    ],

    routes: [
      "/login",
      "/dashboard",
      "/quiz/:topic/:level",
      "/leaderboard",
      "/stats"
    ],

    extras: [
      "PWA Support",
      "IndexedDB",
      "Workbox",
      "Score Synchronization",
      "GitHub Deployment",
      "Netlify Deployment"
    ],

  },
   {
    id: 4,
    title: "Hospital Management System",
    subtitle: "Full-Stack Healthcare Management Platform",
    description:
      "A complete healthcare management platform for hospitals to manage patients, doctors, appointments, medical records, prescriptions, billing and laboratory operations.",

    technologies: [
      "React",
      "TypeScript",
      "React Router",
      "Redux Toolkit",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Cloudinary"
    ],

    features: [
      "Authentication",
      "Patient Management",
      "Doctor Management",
      "Appointment Scheduling",
      "Medical Records",
      "Prescription Management",
      "Laboratory Management",
      "Billing",
      "Notifications",
      "Admin Dashboard"
    ],

    modules: [
      "Patient Portal",
      "Doctor Portal",
      "Receptionist Portal",
      "Laboratory",
      "Pharmacy",
      "Billing",
      "Administration"
    ],

    security: [
      "Role-Based Access",
      "Password Hashing",
      "JWT Authentication",
      "Email Verification",
      "Audit Logs"
    ],

    difficulty: "Expert"
  },

  {
    id: 5,
    title: "School Management System",
    subtitle: "Complete School Administration Platform",
    description:
      "A full school management system for administrators, teachers, students and parents to manage academics, attendance, results, fees and communication.",

    technologies: [
      "React",
      "TypeScript",
      "React Router",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Cloudinary"
    ],

    features: [
      "Student Management",
      "Teacher Management",
      "Class Management",
      "Attendance",
      "Examinations",
      "Result Management",
      "School Fees",
      "Timetable",
      "Parent Portal",
      "Teacher Portal",
      "Student Portal",
      "Notifications"
    ],

    dashboards: [
      "Admin Dashboard",
      "Teacher Dashboard",
      "Student Dashboard",
      "Parent Dashboard"
    ],

    extras: [
      "Report Card Generation",
      "PDF Export",
      "Email Notifications",
      "SMS Notifications",
      "Academic Session Management"
    ],

    difficulty: "Expert"
  },

  {
    id: 6,
    title: "Banking & Finance Platform",
    subtitle: "Digital Banking Application",
    description:
      "A digital banking platform where users can manage accounts, transfer money, pay bills, view transactions and monitor their finances.",

    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Paystack"
    ],

    features: [
      "User Registration",
      "KYC Verification",
      "Virtual Account",
      "Money Transfer",
      "Transaction History",
      "Bill Payments",
      "Beneficiaries",
      "Notifications",
      "Statements",
      "Financial Dashboard"
    ],

    security: [
      "JWT Authentication",
      "OTP",
      "Transaction PIN",
      "Two-Factor Authentication",
      "Rate Limiting",
      "Transaction Logs"
    ],

    difficulty: "Expert"
  },

  {
    id: 7,
    title: "Food Delivery Platform",
    subtitle: "Multi-Vendor Food Delivery System",
    description:
      "A food delivery ecosystem connecting customers, restaurants, delivery riders and administrators.",

    technologies: [
      "React",
      "React Native",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Paystack",
      "Google Maps API"
    ],

    features: [
      "Restaurant Discovery",
      "Food Search",
      "Cart",
      "Checkout",
      "Order Tracking",
      "Live Delivery Tracking",
      "Restaurant Dashboard",
      "Rider Dashboard",
      "Customer Reviews",
      "Notifications"
    ],

    modules: [
      "Customer App",
      "Restaurant Dashboard",
      "Rider App",
      "Admin Dashboard"
    ],

    difficulty: "Expert"
  },

  {
    id: 8,
    title: "Real Estate Marketplace",
    subtitle: "Property Discovery & Management Platform",
    description:
      "A real estate marketplace where agents and property owners can list properties while users search, filter, compare and schedule property inspections.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Cloudinary",
      "Google Maps API"
    ],

    features: [
      "Property Listings",
      "Advanced Search",
      "Property Filters",
      "Map Search",
      "Property Comparison",
      "Favorites",
      "Agent Profiles",
      "Property Inspection",
      "Messaging",
      "Admin Dashboard"
    ],

    extras: [
      "Image Gallery",
      "Virtual Tour",
      "Property Verification",
      "Location Search",
      "Price Analytics"
    ],

    difficulty: "Advanced"
  },

  {
    id: 9,
    title: "Learning Management System",
    subtitle: "Complete Online Education Platform",
    description:
      "An online learning platform where instructors create courses and students learn through videos, quizzes, assignments and certificates.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Cloudinary",
      "Cloudflare Stream"
    ],

    features: [
      "Course Creation",
      "Video Lessons",
      "Quizzes",
      "Assignments",
      "Progress Tracking",
      "Certificates",
      "Student Dashboard",
      "Instructor Dashboard",
      "Course Reviews",
      "Search"
    ],

    extras: [
      "Video Streaming",
      "Course Completion",
      "Certificate Generation",
      "Payment Integration",
      "Discussion Forum"
    ],

    difficulty: "Expert"
  },

  {
    id: 10,
    title: "Project Management Platform",
    subtitle: "Team Collaboration & Productivity System",
    description:
      "A collaborative project management platform for teams to manage projects, tasks, deadlines, files and team communication.",

    technologies: [
      "React",
      "TypeScript",
      "Zustand",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Socket.io"
    ],

    features: [
      "Projects",
      "Tasks",
      "Kanban Board",
      "Team Management",
      "Task Assignment",
      "Comments",
      "File Uploads",
      "Notifications",
      "Activity Logs",
      "Reports"
    ],

    extras: [
      "Real-Time Updates",
      "Drag and Drop",
      "Task Dependencies",
      "Deadlines",
      "Team Chat"
    ],

    difficulty: "Expert"
  },

  {
    id: 11,
    title: "Social Media Platform",
    subtitle: "Full-Stack Social Networking Application",
    description:
      "A social networking platform where users can create posts, follow users, send messages, share media and interact with communities.",

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Socket.io",
      "Cloudinary"
    ],

    features: [
      "Authentication",
      "User Profiles",
      "Posts",
      "Likes",
      "Comments",
      "Followers",
      "Following",
      "Stories",
      "Notifications",
      "Messaging"
    ],

    extras: [
      "Real-Time Chat",
      "Image Upload",
      "Video Upload",
      "Infinite Scroll",
      "Content Reporting",
      "Moderation"
    ],

    difficulty: "Expert"
  },

  {
    id: 12,
    title: "Job Recruitment Platform",
    subtitle: "Full-Stack Hiring Marketplace",
    description:
      "A recruitment platform connecting employers and job seekers with job listings, applications, interviews and candidate management.",

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Cloudinary"
    ],

    features: [
      "Job Listings",
      "Job Search",
      "Advanced Filters",
      "Applications",
      "Candidate Profiles",
      "Employer Dashboard",
      "Resume Upload",
      "Interview Scheduling",
      "Notifications",
      "Admin Dashboard"
    ],

    extras: [
      "Resume Parsing",
      "Application Tracking",
      "Email Notifications",
      "Candidate Ranking",
      "Interview Calendar"
    ],

    difficulty: "Advanced"
  },

  {
    id: 13,
    title: "Hotel Booking Platform",
    subtitle: "Hotel Reservation & Management System",
    description:
      "A hotel booking platform where customers search hotels, select rooms, make reservations and manage their stays.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Paystack",
      "Cloudinary"
    ],

    features: [
      "Hotel Search",
      "Room Search",
      "Availability",
      "Booking",
      "Payment",
      "Cancellation",
      "Reviews",
      "Customer Dashboard",
      "Hotel Dashboard",
      "Admin Dashboard"
    ],

    extras: [
      "Booking Confirmation",
      "Email Notifications",
      "Invoice Generation",
      "Room Availability",
      "Pricing Management"
    ],

    difficulty: "Advanced"
  },

  {
    id: 14,
    title: "Inventory Management System",
    subtitle: "Business Inventory & Warehouse Platform",
    description:
      "A business inventory platform for managing products, warehouses, suppliers, purchases, sales and stock levels.",

    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Chart.js"
    ],

    features: [
      "Product Management",
      "Stock Management",
      "Warehouse Management",
      "Supplier Management",
      "Purchase Orders",
      "Sales Orders",
      "Low Stock Alerts",
      "Reports",
      "Analytics",
      "User Management"
    ],

    extras: [
      "Barcode Scanning",
      "Stock Transfers",
      "Inventory History",
      "PDF Reports",
      "CSV Export"
    ],

    difficulty: "Advanced"
  },

  {
    id: 15,
    title: "Ride-Hailing Platform",
    subtitle: "Real-Time Transportation System",
    description:
      "A transportation platform connecting passengers with drivers for real-time ride booking, tracking and payments.",

    technologies: [
      "React Native",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Socket.io",
      "Google Maps API",
      "Paystack"
    ],

    features: [
      "Passenger Registration",
      "Driver Registration",
      "Ride Booking",
      "Driver Matching",
      "Live Location",
      "Fare Calculation",
      "Ride History",
      "Payments",
      "Ratings",
      "Notifications"
    ],

    modules: [
      "Passenger App",
      "Driver App",
      "Admin Dashboard"
    ],

    difficulty: "Expert"
  },

  {
    id: 16,
    title: "Event Management Platform",
    subtitle: "Event Discovery & Ticketing System",
    description:
      "An event platform where organizers create events and users discover, purchase tickets and manage event bookings.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Paystack",
      "Cloudinary"
    ],

    features: [
      "Event Creation",
      "Event Discovery",
      "Ticket Management",
      "Online Payments",
      "QR Code Tickets",
      "Attendee Management",
      "Event Analytics",
      "Organizer Dashboard",
      "Admin Dashboard"
    ],

    extras: [
      "QR Code Verification",
      "Email Tickets",
      "Ticket Refunds",
      "Capacity Management",
      "Sales Analytics"
    ],

    difficulty: "Advanced"
  },

  {
    id: 17,
    title: "Expense & Budget Manager",
    subtitle: "Personal Finance Tracking Platform",
    description:
      "A financial management application that helps users track income, expenses, budgets, savings and financial goals.",

    technologies: [
      "React",
      "TypeScript",
      "Zustand",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Chart.js"
    ],

    features: [
      "Income Tracking",
      "Expense Tracking",
      "Budget Management",
      "Savings Goals",
      "Categories",
      "Transaction History",
      "Financial Reports",
      "Dashboard",
      "Notifications"
    ],

    analytics: [
      "Monthly Spending",
      "Category Analysis",
      "Income vs Expenses",
      "Savings Progress",
      "Budget Performance"
    ],

    difficulty: "Advanced"
  },

  {
    id: 18,
    title: "Customer Support Platform",
    subtitle: "Help Desk & Ticket Management System",
    description:
      "A customer support platform where customers create support tickets and agents manage conversations, priorities and resolutions.",

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Socket.io"
    ],

    features: [
      "Ticket Creation",
      "Ticket Assignment",
      "Priority Management",
      "Agent Dashboard",
      "Customer Dashboard",
      "Live Chat",
      "Internal Notes",
      "File Attachments",
      "Notifications",
      "Reports"
    ],

    extras: [
      "Real-Time Messaging",
      "Ticket History",
      "SLA Tracking",
      "Knowledge Base",
      "Canned Responses"
    ],

    difficulty: "Expert"
  },

  {
    id: 19,
    title: "Doctor Appointment Platform",
    subtitle: "Online Healthcare Booking System",
    description:
      "A healthcare booking platform that allows patients to discover doctors, book appointments and communicate with healthcare professionals.",

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Socket.io",
      "Cloudinary"
    ],

    features: [
      "Doctor Search",
      "Specialty Search",
      "Appointment Booking",
      "Doctor Profiles",
      "Patient Profiles",
      "Appointment History",
      "Notifications",
      "Medical Documents",
      "Reviews",
      "Admin Dashboard"
    ],

    extras: [
      "Calendar Integration",
      "Video Consultation",
      "Email Reminders",
      "Appointment Rescheduling"
    ],

    difficulty: "Expert"
  },

  {
    id: 20,
    title: "Music Streaming Platform",
    subtitle: "Full-Stack Music Streaming Application",
    description:
      "A music streaming platform where users discover songs, create playlists, follow artists and manage their listening history.",

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Cloudflare Stream"
    ],

    features: [
      "Music Discovery",
      "Search",
      "Audio Player",
      "Playlists",
      "Favorites",
      "Artist Profiles",
      "Albums",
      "Listening History",
      "Recommendations",
      "User Profiles"
    ],

    extras: [
      "Audio Streaming",
      "Queue Management",
      "Recently Played",
      "Personalized Recommendations",
      "Artist Dashboard"
    ],

    difficulty: "Expert"
  },

  {
    id: 21,
    title: "Online Banking Admin System",
    subtitle: "Bank Operations & Administration Platform",
    description:
      "An administrative banking system for managing customers, accounts, transactions, compliance checks and financial operations.",

    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Redis"
    ],

    features: [
      "Customer Management",
      "Account Management",
      "Transaction Management",
      "KYC Management",
      "Fraud Monitoring",
      "Staff Management",
      "Reports",
      "Audit Logs",
      "Notifications",
      "Analytics"
    ],

    security: [
      "RBAC",
      "Two-Factor Authentication",
      "Audit Logging",
      "Session Management",
      "Rate Limiting"
    ],

    difficulty: "Expert"
  },

  {
    id: 22,
    title: "AI Study Assistant",
    subtitle: "AI-Powered Learning Platform",
    description:
      "An AI-powered education platform that helps students generate study materials, ask questions, summarize documents and practice with quizzes.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "OpenAI API",
      "Cloudinary"
    ],

    features: [
      "AI Chat",
      "Question Generation",
      "Quiz Generation",
      "Document Summarization",
      "Study Notes",
      "Flashcards",
      "Learning Dashboard",
      "Progress Tracking",
      "Study History",
      "Authentication"
    ],

    aiFeatures: [
      "AI Tutor",
      "Text Summarization",
      "Question Generation",
      "Answer Explanation",
      "Personalized Study Plans"
    ],

    difficulty: "Expert"
  },

  {
    id: 23,
    title: "Developer Collaboration Platform",
    subtitle: "GitHub-Style Code Collaboration System",
    description:
      "A developer collaboration platform where users create repositories, manage projects, collaborate on code and track development activity.",

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Socket.io"
    ],

    features: [
      "User Authentication",
      "Repositories",
      "Projects",
      "Issues",
      "Pull Requests",
      "Code Reviews",
      "Comments",
      "Notifications",
      "Activity Feed",
      "Team Management"
    ],

    extras: [
      "Repository Management",
      "Branch Management",
      "Issue Tracking",
      "Code Review",
      "Team Permissions",
      "Real-Time Notifications"
    ],

    difficulty: "Expert"
  }
];

export default projects;