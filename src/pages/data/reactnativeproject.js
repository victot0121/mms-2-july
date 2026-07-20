const reactnativeprojects = [
  {
    id: 1,
    title: "SplitEasy",
    subtitle: "Smart Group Bill Splitter",
    description:
      "A mobile app that splits shared bills among friends and calculates the minimum number of transactions needed to settle group debts, instead of just dividing totals evenly.",

    technologies: [
      "React Native",
      "Expo",
      "React Navigation",
      "AsyncStorage",
      "Zustand",
      "Node.js",
      "Express",
      "Any Database"
    ],
     members: [
      "Ezomo Samantha",
      "Denzel Richmond Essien",
      "EMMANUEL EMEDIONG MICHAEL",
      "EGWUATU MICHAEL IKECHUCKWU",
      "Onyenwe Favour Nmesoma",
      "David Akinwumi",
     
    ],

    features: [
      "Create Group",
      "Add Expense",
      "Split Options (Equal/Custom/Percentage)",
      "Debt Simplification Engine",
      "Settlement Summary",
      "Share Summary (Link/Image)",
      "Expense History",
      "Multi-Currency Support"
    ],

    modules: [
      {
        name: "Group Management",
        description:
          "Create groups, add members, and manage group details."
      },
      {
        name: "Expense Entry",
        description:
          "Log a bill, choose who paid, and select how it should be split (equal, custom amounts, or percentages)."
      },
      {
        name: "Debt Simplification Engine",
        description:
          "Core algorithm: calculates net balances per member and reduces the number of repayments needed (e.g., instead of A→B, B→C, simplifies to a single A→C payment)."
      },
      {
        name: "Settlement Summary",
        description:
          "Shows who owes whom, with a 'mark as paid' action and shareable summary card."
      },
      {
        name: "History",
        description:
          "Past groups and expenses, searchable and filterable by date or member."
      }
    ],

    difficulty: "Intermediate",
    api: []
  },

  {
    id: 2,
    title: "FlashDuel",
    subtitle: "Flashcard Study Duel App",
    description:
      "Students create flashcard decks and challenge a friend to a timed quiz duel, with scores compared live or asynchronously, turning solo studying into a competitive game.",

    technologies: [
      "React Native",
      "Expo",
      "React Navigation",
      "Zustand",
      "Node.js",
      "Express",
      "Socket.io (optional)",
      "Any Database"
    ],

    
     members: [
      "Maxwell Okoye",
      "Enikuomehin Tomiwa",
      "Benard Victor",
      "Olulana Oluwatosin Samuel",
      "Ali-Owosho Jubril",
      "Tolulope Akinpelu oyerinola",   
        "Daniel Fadiran",
        "Daniel Fadiran",
    ],

    features: [
      "Deck Creation",
      "Card Editor",
      "Duel Invite (Code/Link)",
      "Timed Quiz Mode",
      "Live or Async Score Comparison",
      "Leaderboard",
      "Deck Sharing",
      "Study Mode (solo)"
    ],

    modules: [
      {
        name: "Deck Builder",
        description:
          "Create and edit flashcard decks with question/answer pairs, organized by subject."
      },
      {
        name: "Duel Engine",
        description:
          "Starts a timed round for two players on the same deck, tracks correct answers and response time."
      },
      {
        name: "Scoring System",
        description:
          "Calculates score based on accuracy and speed, compares both players' results side by side."
      },
      {
        name: "Leaderboard",
        description:
          "Tracks wins, streaks, and top scores per deck or overall."
      },
      {
        name: "Solo Study Mode",
        description:
          "Practice a deck without a duel, with spaced repetition style review."
      }
    ],

    difficulty: "Intermediate",
    api: ["Socket.io (for live duels, optional)"]
  },

  {
    id: 3,
    title: "QuickBite",
    subtitle: "Food Delivery Mobile Application",
    description:
      "A three-sided mobile platform where customers order food from restaurants, restaurants manage menus and incoming orders, and delivery drivers track and complete deliveries with real-time location updates.",

    technologies: [
      "React Native",
      "Expo",
      "React Navigation",
      "Redux Toolkit",
      "Java",
      "Spring Boot",
      "Any Database",
      "Google Maps API",
      "Paystack",
      "Socket.io"
    ],

     members: [
      "Tijani Aliyy Opeyemi",
      "Chibuzor Collins Ilochi",
      "Jeje Isaac Oreoluwa",
      "Ngweeyi Chinaza Ebenezer",
      "Ndubuisi God's will",
       "Olufemi Ayomikun",
       "Ayeni Esther",
       "Victoria Ajayi .0"
      
    ],

    customerFeatures: [
      "Authentication",
      "Restaurant Browsing",
      "Menu & Cart",
      "Checkout & Payment",
      "Live Order Tracking",
      "Order History",
      "Ratings & Reviews",
      "Push Notifications"
    ],

    restaurantFeatures: [
      "Restaurant Dashboard",
      "Menu Management",
      "Order Queue (Accept/Reject/Prepare)",
      "Sales Reports",
      "Operating Hours & Availability Toggle"
    ],

    driverFeatures: [
      "Driver Dashboard",
      "Available Deliveries List",
      "Accept & Navigate to Pickup/Drop-off",
      "Live Location Sharing",
      "Delivery Status Updates",
      "Earnings Summary"
    ],

    paymentFeatures: [
      "Paystack",
      "Card Payment",
      "Cash on Delivery",
      "Payment Verification"
    ],

    security: [
      "Password Hashing",
      "OTP Verification",
      "Role-Based Access (Customer/Restaurant/Driver)"
    ],

    difficulty: "Advanced",
    api: ["Google Maps API", "Paystack"]
  },

  {
    id: 4,
    title: "VoiceDiary",
    subtitle: "Voice Note Journal with Auto-Transcription",
    description:
      "A personal journaling app where users record voice entries that are automatically transcribed to text, making past entries searchable by keyword.",

    technologies: [
      "React Native",
      "Expo",
      "expo-av",
      "React Navigation",
      "Node.js",
      "Express",
      "Any Database",
      "Whisper API / Google Speech-to-Text"
    ],
      members: [
      "Adekunle Bernice",
      "Chima maryjane ozioma",
      "Odumuyiwa Samuel oluwadamilare",
      "Shokoti oluwafemi",
      "Ibeawuchi George Chukwudi",
      "Nkedishuka Martin",
      "OAIKHENA ADESUWA OMOTOYOSI"
    ],
    features: [
      "Record Voice Entry",
      "Auto-Transcription",
      "Text Search Across Entries",
      "Entry Tagging (mood/category)",
      "Playback with Synced Text",
      "Calendar View of Entries",
      "Export Entry (Text/Audio)"
    ],

    modules: [
      {
        name: "Recorder",
        description:
          "Record, pause, and save audio journal entries with timestamps."
      },
      {
        name: "Transcription Engine",
        description:
          "Sends recorded audio to a speech-to-text API and stores the returned transcript linked to the entry."
      },
      {
        name: "Search & Filter",
        description:
          "Full-text search across transcripts, plus filters by date or tag."
      },
      {
        name: "Calendar View",
        description:
          "Visual calendar showing which days have journal entries."
      },
      {
        name: "Playback",
        description:
          "Plays audio while highlighting the corresponding transcribed text."
      }
    ],

    difficulty: "Intermediate",
    api: ["Whisper API", "Google Speech-to-Text API"]
  },

  {
    id: 5,
    title: "TwoTruths",
    subtitle: "Two Truths and a Lie Party Game App",
    description:
      "A social party game app where players submit three statements about themselves, others guess which one is the lie, and scores are tracked across a shared game room.",

    technologies: [
      "React Native",
      "Expo",
      "React Navigation",
      "Zustand",
      "Node.js",
      "Express",
      "Any Database",
      "Polling or Socket.io"
    ],
      members: [
        "Essien Eno-Obong Chizitelu",
       "Olanrewaju Maxwell David", 
       "Onovo Godspower",
       "Oluwayale Folabo",
       "ADEYEMO KAYODE KIRTANESWARA",
      "Adedayo Nathan Akolade",
      "Eke Vera Esther",
     
    ],

    features: [
      "Create/Join Room",
      "Submit 3 Statements",
      "Guessing Round",
      "Live Scoreboard",
      "Round Timer",
      "Player Reveal & Results",
      "Room Chat/Reactions"
    ],

    modules: [
      {
        name: "Room Management",
        description:
          "Create a game room with a shareable code, players join before the round starts."
      },
      {
        name: "Statement Submission",
        description:
          "Each player submits three statements, one of which is false."
      },
      {
        name: "Guessing Engine",
        description:
          "Presents each player's statements to the group and collects guesses on which is the lie."
      },
      {
        name: "Scoring",
        description:
          "Awards points for correct guesses and for successfully fooling others."
      },
      {
        name: "Results & Reveal",
        description:
          "Shows the true lie for each player and updates the scoreboard."
      }
    ],

    difficulty: "Beginner-Intermediate",
    api: ["Socket.io (optional, for live rooms)"]
  },

  {
    id: 6,
    title: "InternLink",
    subtitle: "Internship & Entry-Level Job Board",
    description:
      "A mobile platform connecting companies offering internships and entry-level roles with students and young job seekers, covering listing, application, and basic applicant tracking.",

    technologies: [
      "React Native",
      "Expo",
      "React Navigation",
      "Redux Toolkit",
      "Java",
      "Spring Boot",
      "Any Database",
      "Cloudinary"
    ],
     members: [
       
    ],

    seekerFeatures: [
      "Authentication & Profile",
      "Resume/CV Upload",
      "Browse Internships/Jobs",
      "Filter by Field, Location, Duration",
      "Apply with One Tap",
      "Application Status Tracking",
      "Saved Listings",
      "Push Notifications"
    ],

    companyFeatures: [
      "Company Dashboard",
      "Post Internship/Job Listing",
      "View & Filter Applicants",
      "Shortlist/Reject Applicants",
      "Interview Scheduling (basic)",
      "Company Profile Page"
    ],

    adminFeatures: [
      "Admin Dashboard",
      "Company Verification/Approval",
      "Listing Moderation",
      "User Reports Management"
    ],

    security: [
      "Password Hashing",
      "Email Verification",
      "Role-Based Access (Seeker/Company/Admin)"
    ],

    difficulty: "Advanced",
    api: ["Cloudinary (resume/logo uploads)"]
  },

  {
    id: 7,
    title: "HouseLag",
    subtitle: "Lagos House & Room Rental Platform",
    description:
      "A mobile app connecting Lagos residents with agents renting out houses and rooms, aiming to reduce the friction and inflated fees common with informal agent arrangements.",

    technologies: [
      "React Native",
      "Expo",
      "React Navigation",
      "Redux Toolkit",
      "Java",
      "Spring Boot",
      "Any Database",
      "Google Maps API",
      "Cloudinary",
      "Paystack"
    ],

    tenantFeatures: [
      "Authentication & Profile",
      "Browse Listings (map & list view)",
      "Filter by Area, Price, Room Type",
      "Contact/Schedule Viewing",
      "Save Favorite Listings",
      "Agent Fee Calculator (transparent breakdown)",
      "Ratings & Reviews of Agents",
      "In-App Chat with Agent"
    ],

    agentFeatures: [
      "Agent Dashboard",
      "Post Listing (photos, price, location)",
      "Manage Active/Inactive Listings",
      "View Interested Tenants",
      "Set Agent Fee (capped/transparent)",
      "Verification Badge Application"
    ],

    adminFeatures: [
      "Admin Dashboard",
      "Agent Verification & Approval",
      "Listing Moderation (flag fake listings)",
      "Fee Policy Management",
      "Dispute Handling"
    ],

    trustFeatures: [
      "Verified Agent Badge",
      "Photo Authenticity Checks (manual review)",
      "Tenant Reviews of Agents",
      "Capped/Transparent Agent Fee Display"
    ],

    difficulty: "Advanced",
    api: ["Google Maps API", "Cloudinary", "Paystack"]
  }
];

export default reactnativeprojects;