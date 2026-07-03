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

  }
];

export default projects;