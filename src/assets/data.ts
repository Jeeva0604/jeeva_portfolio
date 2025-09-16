export const portfolioData = {
  personalInfo: {
    name: "Jeeva G",
    role: "Flutter & Node.js Developer",
    image: "https://avatars.githubusercontent.com/u/107607064?v=4", // We're using a placeholder image for now
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
    { name: "MobX", category: "Mobile" },
    { name: "Riverpod", category: "Mobile" },
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
        "Dart",
        "Node.js",
        "Java Script",
        "Firebase",
        "PostgreSQL",
        "Express.js",
        "Knex.js",
        "Razorpay",
        "Zoho Payment",
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
        "Dart",
        "Node.js",
        "Java Script",
        "Firebase",
        "Express.js",
        "Knex.js",
        "MQTT",
        "State Management (GetX)",
        "Shorebird",
      ],
      image: "/biometric_auth.png",
    },
    {
      id: 3,
      title: "NSE Devlivery Pro",
      description:
        "NSE Delivery Pro is a stock tracking and analysis application designed for delivery-based trading, inspired by platforms like Paytm Money. The app enables users to monitor stocks with critical trade data such as entry price, stop loss, and target price—helping them make informed trading decisions. Users can easily add stocks to a wishlist and tap any stock to view detailed insights and trade setups. I developed both the complete frontend application and the backend API, ensuring seamless data handling, smooth navigation, and a clean, user-friendly interface. This project showcases my ability to build end-to-end trading tools that are both functional and intuitive, serving the needs of beginner and experienced traders alike.",
      technologies: [
        "Flutter",
        "Dart",
        "Node.js",
        "Java Script",
        "Express.js",
        "Firebase",
        "PostgreSQL",
        "Knex.js",
        "State Management (GetX)",
        "Shorebird",
      ],
      image: "/nse.jpg",
    },
    {
      id: 4,
      title: "EDU Reels",
      description:
        "Edu Reels is an innovative educational app designed to transform the addictive reel-watching experience into productive learning. Instead of wasting time on random content, users can select their age, preferred subject, and topic, after which the app generates AI-powered questions tailored to their selection. The questions appear in an engaging reels format with multiple-choice options. Users receive instant feedback on their answers, and with a simple swipe, they move to the next question—just like scrolling through reels. This app creatively blends entertainment with learning, making education more interactive and enjoyable.",
      technologies: ["Flutter", "Dart", "State Management (GetX)", "Shorebird"],
      image: "/edu_reels.jpg",
    },
    {
      id: 5,
      title: "Thirukkural App",
      description:
        "Thirukkural App is a unique and thoughtful application that helps users discover relevant Thirukkurals based on different life situations. Users can browse and find meaningful kurals that resonate with their current emotions or moments, and view them in a clean and elegant UI. The app also allows users to add their favorite kurals to a wishlist for easy access later. Additionally, each kural can be shared with friends or posted as a WhatsApp status, making it easy to spread wisdom in everyday life.",
      technologies: [
        "Flutter",
        "Dart",
        "State Management (BLoC)",
        "Hive",
        "Shorebird",
      ],
      image: "/thirukkural.jpg",
    },
    {
      id: 6,
      title: "Memchamp (Playstore Teacher Approved Game)",
      description:
        "Memchamp is a teacher-approved memory game designed to enhance children’s cognitive and concentration skills.Players match pairs of cards across themed decks such as animals, numbers, and shapes.Each level includes a timer, adding challenge and improving memory retention.The vibrant visuals and intuitive interface make it suitable for all age groups.Progress tracking encourages self-improvement and motivates repeated play.Memchamp blends education and entertainment to create a meaningful screen-time experience.",
      technologies: ["Flutter", "Dart", "State Management (Provider)"],
      image: "/memchamp.png",
    },
    {
      id: 7,
      title: "Thinker",
      description:
        "Thinker is a brain puzzle game designed to boost cognitive skills through a variety of mind-challenging puzzles and daily brain boosts. Featuring a sleek new design, smooth animations, and an intuitive interface, the app offers a visually engaging and seamless user experience. With regular puzzle updates and performance optimizations, Thinker ensures fast loading and smooth gameplay across devices. Whether you're solving logic-based challenges or simply exercising your brain, Thinker provides a clean and focused environment for mental development and fun.",
      technologies: ["Flutter", "Dart", "State Management (Provider)"],
      image: "/thinker.jpg",
    },
    {
      id: 8,
      title: "TNPSC Group Exam Guide",
      description:
        "TNPSC Questions & Answers is a practice app designed to help candidates prepare for Group 1, 2, 2A, 4, and VAO exams.It offers a wide range of updated questions across all major TNPSC subjects.Each question includes a clear and instant answer for better understanding.The app’s clean and user-friendly interface ensures smooth navigation.Ideal for focused and consistent exam preparation anytime, anywhere.",
      technologies: [
        "Flutter",
        "Dart",
        "Node.js",
        "Java Script",
        "Firebase",
        "PostgreSQL",
        "Express.js",
        "Knex.js",
        "State Management (Provider)",
        "Shorebird",
      ],
      image: "/tnpsc.png",
    },
    {
      id: 9,
      title: "Bluetooth Printer",
      description:
        "Bluetooth Printer is a lightweight and user-friendly mobile application designed to print the first page of any PDF document directly to an 80mm Bluetooth thermal printer. Whether you're printing receipts, shipping labels, barcode slips, or product tags, this app facilitates quick and efficient printing without the need for complex setups.",
      technologies: ["Kotlin"],
      image: "/bt_printer.jpg",
    },
    {
      id: 10,
      title: "Yaash Attendance",
      description:
        "Yaash Attendance is a simple and effective app designed to help track worker attendance with ease. With its user-friendly interface, it allows secure Google Sign-In, effortless daily entry management, and real-time monitoring of worker status. Attendance data is organized under each project (ARC ID), making it easy to manage teams efficiently. Built for speed and simplicity, the app ensures a clean, intuitive experience for contractors and managers.",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "State Management (MobX)",
        "Shorebird",
      ],
      image: "/yaash_attentance.jpg",
    },

    {
      id: 11,
      title: "VSR",
      description:
        "VSR is a custom-built construction management app developed for a client to streamline on-site data collection and calculations. The app features multiple input forms where field data is recorded and processed using client-defined formulas. It provides clear insights into daily, weekly, and monthly income and loss, presented visually through graphs for better understanding. As my first client-connected project, I collaborated directly with the client throughout the development process, which gave me hands-on experience in requirement gathering, real-time feedback handling, and practical problem-solving — making it a key milestone in my learning journey.",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "State Management (Provider)",
      ],
      image: "/vsr.png",
    },
    {
      id: 12,
      title: "Local Mart API",
      description:
        "Local Mart API powers a small-scale e-commerce platform focused on delivering high-quality local products at affordable prices. Designed to support locally available essentials like vegetables, groceries, and daily-use items, the API enables smooth product listing, attribute management, stock tracking, and pricing. I developed the entire backend system, ensuring efficient data handling and scalability to serve both customers and sellers within the local community. This project highlights my ability to build practical, real-world APIs tailored to specific regional needs.",
      technologies: [
        "Node.js",
        "Java Script",
        "Firebase",
        "PostgreSQL",
        "Express.js",
        "Knex.js",
      ],
      image: "/local_mart.jpg",
    },
    {
      id: 13,
      title: "Video Automation API",
      description:
        "Video Automation API is a powerful backend tool designed to streamline content creation for businesses. Users submit a form with their photo and details, which are stored in the database. Within an hour, the API automatically processes the data, generates a video, and uploads it directly to platforms like YouTube, Instagram, and Facebook. This solution is highly valuable for automating marketing content and saving time. I developed the backend for this system, handling everything from data processing to third-party integration and scheduled automation.",
      technologies: [
        "Node.js",
        "Java Script",
        "Firebase",
        "PostgreSQL",
        "Express.js",
        "Knex.js",
      ],
      image: "/video_automation.png",
    },
    {
      id: 14,
      title: "Ammayappan Mart API",
      description:
        "Ammayappan Mart API is built for a small-scale e-commerce platform that focuses on providing essential household and grocery items, especially daily-use products like vegetables and kitchen needs. The API handles product management, pricing, stock tracking, and order-related data, ensuring a smooth and efficient backend for the app. Developed specifically for local community needs, this project reflects my experience in building functional and reliable APIs for small businesses aiming to digitize their operations.",
      technologies: [
        "Node.js",
        "Java Script",
        "Firebase",
        "PostgreSQL",
        "Express.js",
        "Knex.js",
      ],
      image: "/ammayappan.jpg",
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
      "I'm a passionate self-learner with 2+ years of hands-on experience in Flutter development and 1+ year of expertise in Node.js backend development. Over time, I’ve built a diverse range of applications — from lightweight tools for local businesses to robust, scalable solutions for enterprise-level needs.What sets my work apart is a balance of technical precision and a deep focus on user experience. I believe that great apps don’t just work well — they feel right in the user’s hands. That’s why I strive to create products that are not only efficient and reliable but also intuitive and enjoyable to use.I’m always learning — exploring new technologies, refining my approach, and staying in tune with the fast-moving world of software development. For me, every project is an opportunity to grow and deliver something meaningful.",
    interests: [
      "Mobile App Development",
      "Backend Architecture",
      "Open Source Contribution",
    ],
  },

  contact: {
    email: "jeevar0628@gmail.com",
    instagram: "jeeva_rs45",
    github: "Jeeva0604",
    linkedin: "jeeva-g-r0628",
  },
};
