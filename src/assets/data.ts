export const portfolioData = {
  personalInfo: {
    name: "Jeeva G",
    role: "Flutter & Node.js Developer",
    image: "/profile.jpeg", // We're using a placeholder image for now
    bio: "Experienced developer specializing in Flutter mobile applications and Node.js backends. Passionate about creating efficient, scalable, and user-friendly applications.",
  },

  skills: [
    { name: "Flutter", category: "Mobile" },
    { name: "Andriod", category: "Mobile" },
    { name: "IOS", category: "Mobile" },
    { name: "Hive", category: "Mobile" },
    { name: "BLoC", category: "Mobile" },
    { name: "Provider", category: "Mobile" },
    { name: "GetX", category: "Mobile" },
    { name: "Flutter Web", category: "Web" },
    { name: "Flutter Desktop", category: "Web" },
    { name: "HTML", category: "Web" },
    { name: "CSS", category: "Web" },
    { name: "Node.js", category: "Backend" },

    { name: "C Programming", category: "Programming Languages" },
    { name: "Dart", category: "Programming Languages" },
    { name: "JavaScript", category: "Programming Languages" },
    {
      name: "Firebase (Auth, Firestore, Functions, Storage)",
      category: "Database & Backend",
    },
    { name: "PostgreSQL", category: "Database & Backend" },
    { name: "Supabase", category: "Database & Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "Knex.js", category: "Backend" },
    { name: "REST API Development", category: "Backend" },
    { name: "MVC", category: "Architecture" },
    { name: "MVVM", category: "Architecture" },
    { name: "Clean Architecture", category: "Architecture" },
    { name: "Git & GitHub", category: "Development Tools & Platforms" },
    { name: "Andriod Studio", category: "Development Tools & Platforms" },
    { name: "Vs Code ", category: "Development Tools & Platforms" },
    // { name: "Vs Code ", category: "Development Tools & Platforms" },
    { name: "Postman", category: "Development Tools & Platforms" },

    {
      name: "EMQX (MQTT broker for IoT)",
      category: "Development Tools & Platforms",
    },
  ],

  projects: [
    {
      id: 1,
      title: "Yaash Mart",
      description:
        "A full-fledged e-commerce application built with Flutter for Android, iOS, and Web provides a unified, responsive UI across platforms, powered by a Node.js backend with Express.js and PostgreSQL for handling authentication, product management, cart, orders, and payments. The app includes features like product search, filtering, variant support, push notifications, and local caching, with Redis used on the backend for performance optimization and real-time features.",
      technologies: [
        "Flutter",
        "Node.js",
        "Dart",
        "Java Script",
        "Firebase",
        "PostgreSQL",
        "Express.js",
        "Knex.js",
        "Razorpay",
        "State Management (Provider)",
      ],
      image: "/yaash_mart.jpg",
    },
    {
      id: 2,
      title: "Biometric Attendance System",
      description:
        "A biometric attendance application that uses fingerprint recognition ensures secure and accurate attendance tracking by verifying each user's unique fingerprint before logging their check-in or check-out. It eliminates proxy attendance, improves efficiency, and is ideal for schools, offices, and factories where reliability and identity validation are critical.",
      technologies: [
        "Flutter",
        "Node.js",
        "Firebase",
        "Express.js",
        "MQTT",
        "State Management (GetX)",
      ],
      image: "/biometric_auth.png",
    },
    {
      id: 3,
      title: "NSE Devlivery Pro",
      description:
        "Mobile application for tracking health metrics and daily activities.",
      technologies: ["Flutter", "Hive", "BLoC"],
      image: "/nse.jpg",
    },
    {
      id: 4,
      title: "EDU Reels",
      description:
        "A social networking app with post sharing and messaging features.",
      technologies: ["Flutter", "Dart", "GetX"],
      image: "/edu_reels.jpg",
    },
    {
      id: 5,
      title: "Thirukkural App",
      description:
        "On-demand food delivery application with real-time order tracking.",
      technologies: ["Flutter", "Dart", "Bloc"],
      image: "/thirukkural.jpg",
    },
    {
      id: 6,
      title: "Memchamp",
      description:
        "Property listing and search application with filtering capabilities.",
      technologies: ["Flutter", "Dart", "Provider"],
      image: "/placeholder.svg",
    },
    {
      id: 7,
      title: "Thinker",
      description:
        "Weather application with location-based forecasts and alerts.",
      technologies: ["Flutter", "Dart", "Provider"],
      image: "/thinker.jpg",
    },
    {
      id: 8,
      title: "VSR",
      description: "Business inventory tracking and management solution.",
      technologies: ["Flutter", "Dart", "Firebase", "Provider"],
      image: "/placeholder.svg",
    },
    {
      id: 9,
      title: "Local Mart API",
      description: "Content streaming service with user subscriptions.",
      technologies: ["Flutter", "Node.js", "Firebase"],
      image: "/local_mart.jpg",
    },
    {
      id: 10,
      title: "Ammayappan Mart API",
      description: "Personal finance and expense tracking application.",
      technologies: ["Flutter", "Hive", "BLoC"],
      image: "/ammayappan.jpg",
    },
    {
      id: 11,
      title: "Video Automation API",
      description: "Workout planning and tracking with trainer connections.",
      technologies: ["Flutter", "Node.js", "Supabase"],
      image: "/placeholder.svg",
    },
    {
      id: 12,
      title: "Event Booking Platform",
      description: "Event discovery and ticket booking application.",
      technologies: ["Flutter", "Express.js", "PostgreSQL"],
      image: "/placeholder.svg",
    },
  ],

  libraries: [
    {
      name: "Whatsapp Text Formatter",
      type: "Flutter",
      description:
        "WhatsApp Text Formatter is a Flutter package that enables WhatsApp-style rich text formatting. It supports bold, italic, strikethrough, monospace, inline code, bulleted lists, numbered lists, and blockquotes.",
      url: "https://github.com/Jeeva0604/whatsApp_text_formatter",
    },
    {
      name: "Image Viewer Pro",
      type: "Flutter",
      description:
        "A Flutter package that provides a full-screen image viewer supporting AssetImage, NetworkImage, and MemoryImage with customizable features such as indicators, close buttons, swipe-to-dismiss, and more.",
      url: "https://github.com/Jeeva0604/image_viewer_pro",
    },
    {
      name: "Timer Smooth Page Indicator",
      type: "Flutter",
      description:
        "A Flutter package for smooth, timer-based page indicators. Supports customizable styling, duration, and colors.Ideal for sliders, banners, and auto-scrolling carousels.",
      url: "https://github.com/Jeeva0604/timer_smooth_page_indicator",
    },
    {
      name: "Numeric UUID - Flutter",
      type: "Flutter",
      description:
        "numeric_uuid is a Dart package that generates unique numeric UUIDs of variable lengths (10-30 digits). It ensures uniqueness by combining timestamps and random values.",
      url: "https://github.com/Jeeva0604/numeric_uuid",
    },
    {
      name: "Network To Memory Image",
      type: "Flutter",
      description:
        "Network To Memory Image is a Flutter library that converts network images into memory bytes (Uint8List).It helps in caching, processing, or uploading images without saving them to disk.Ideal for offline access, image editing, and fast in-app rendering.",
      url: "https://github.com/Jeeva0604/network_to_memory_image",
    },
    {
      name: "Numeric UUID - Node.js",
      type: "Node.js",
      description:
        "numeric_uuid is a Dart package that generates unique numeric UUIDs of variable lengths (10-30 digits). It ensures uniqueness by combining timestamps and random values.",
      url: "https://github.com/Jeeva0604/numeric-uuid",
    },
  ],

  about: {
    description:
      "I am a passionate developer specializing in Flutter mobile development and Node.js backend solutions. With years of experience in the field, I've developed numerous applications ranging from small business tools to large-scale enterprise solutions.\n\nMy approach combines technical expertise with a keen eye for user experience, ensuring that the applications I build are not only functionally robust but also intuitive and enjoyable to use.\n\nI continuously explore new technologies and methodologies to enhance my skill set and deliver cutting-edge solutions. I'm particularly interested in cross-platform development, real-time applications, and integrating machine learning into mobile experiences.",
    interests: [
      "Mobile App Development",
      "Backend Architecture",
      "Open Source Contribution",
    ],
  },

  contact: {
    email: "jeevar0628@gmail.com.com",
    instagram: "jeeva_rs45",
    github: "Jeeva0604",
    linkedin: "jeeva-g-r0628",
  },
};
