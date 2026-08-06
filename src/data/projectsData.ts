export interface ProjectItemData {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  image: string;
  githubUrl: string;
}

export interface FilterCategory {
  slug: string;
  name: string;
}

export const projectCategoriesData: FilterCategory[] = [
  { slug: "all", name: "Tất cả" },
  { slug: "Machine_Learning", name: "Machine Learning & Trí tuệ nhân tạo" },
  { slug: "python-turtle", name: "Python" },
  { slug: "python-tkinter", name: "Python – Tkinter" },
  { slug: "python-pygame", name: "Python – Pygame" },
  { slug: "html-css", name: "Web development" },
  { slug: "app-inventor", name: "Lập trình app" },
  { slug: "arduino", name: "Arduino & IoT" }
];

export const projectsData: ProjectItemData[] = [
  // Machine Learning & AI
  {
    id: "nlp-education",
    title: "Phân tích cảm xúc trong giáo dục (NLP)",
    category: "Machine Learning & Trí tuệ nhân tạo",
    categorySlug: "Machine_Learning",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/SentimentClassification.git"
  },
  {
    id: "yolo-cards",
    title: "Nhận diện và xếp bài binh xập xám (YOLOv5s)",
    category: "Machine Learning & Trí tuệ nhân tạo",
    categorySlug: "Machine_Learning",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/ObjectDetection-BinhXapXam.git"
  },
  {
    id: "fuzzy-house",
    title: "Dự đoán giá căn hộ (Fuzzy Logic)",
    category: "Machine Learning & Trí tuệ nhân tạo",
    categorySlug: "Machine_Learning",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/Fuzzy-House-Pricing.git"
  },
  {
    id: "golf-prediction",
    title: "Dự đoán hành vi chơi golf (Bernoulli Naive Bayes)",
    category: "Machine Learning & Trí tuệ nhân tạo",
    categorySlug: "Machine_Learning",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/GolfDecision-BNB.git"
  },
  {
    id: "combinatorial-optimization",
    title: "Tối ưu tổ hợp – Graphical method for LP",
    category: "Machine Learning & Trí tuệ nhân tạo",
    categorySlug: "Machine_Learning",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/Combinatorial-Optimization.git"
  },
  {
    id: "document-scanner",
    title: "Document Scanner – Skeletonization & Hough Transform",
    category: "Machine Learning & Trí tuệ nhân tạo",
    categorySlug: "Machine_Learning",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/Skeletonization-Document-Scanner.git"
  },

  // Python - Turtle
  {
    id: "python-wheel",
    title: "Trò chiến nón kỳ diệu",
    category: "Python",
    categorySlug: "python-turtle",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/Basic-Python.git"
  },
  {
    id: "python-spaceship",
    title: "Trò chơi bắn phi thuyền",
    category: "Python – Turtle",
    categorySlug: "python-turtle",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/Basic-Python.git"
  },
  {
    id: "python-draw",
    title: "Web vẽ hình",
    category: "Python – Turtle",
    categorySlug: "python-turtle",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/Basic-Python.git"
  },
  {
    id: "python-draw-upgrade",
    title: "Web vẽ hình nâng cấp",
    category: "Python – Turtle",
    categorySlug: "python-turtle",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/Basic-Python.git"
  },

  // Python - Tkinter
  {
    id: "tkinter-calculator",
    title: "Ứng dụng Calculator",
    category: "Python – Tkinter",
    categorySlug: "python-tkinter",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/TKINTER.git"
  },
  {
    id: "tkinter-converter",
    title: "Currency Converter",
    category: "Python – Tkinter",
    categorySlug: "python-tkinter",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/TKINTER.git"
  },
  {
    id: "tkinter-color",
    title: "Ứng dụng đoán màu",
    category: "Python – Tkinter",
    categorySlug: "python-tkinter",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/TKINTER.git"
  },
  {
    id: "tkinter-rock-paper",
    title: "Trò chơi Kéo búa bao",
    category: "Python – Tkinter",
    categorySlug: "python-tkinter",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/TKINTER.git"
  },
  {
    id: "tkinter-quiz",
    title: "Trò chơi ai là triệu phú",
    category: "Python – Tkinter",
    categorySlug: "python-tkinter",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/TKINTER.git"
  },
  {
    id: "tkinter-tictactoe",
    title: "Trò chơi Tic-Tac-Toe",
    category: "Python – Tkinter",
    categorySlug: "python-tkinter",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/TKINTER.git"
  },

  // Pygame
  {
    id: "pygame-mario",
    title: "Game platformer kiểu Mario",
    category: "Python – Pygame",
    categorySlug: "python-pygame",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/pygame.git"
  },

  // Web / HTML CSS
  {
    id: "web-self-intro",
    title: "Trang web giới thiệu bản thân (cơ bản, nâng cao, hoàn thiện)",
    category: "HTML & CSS",
    categorySlug: "html-css",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/HTML-CSS.git"
  },
  {
    id: "web-course-intro",
    title: "Trang web giới thiệu môn học (Phần 1 & 2)",
    category: "HTML & CSS",
    categorySlug: "html-css",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/HTML-CSS.git"
  },
  {
    id: "web-roadmap",
    title: "Trang web danh sách lộ trình học",
    category: "HTML & CSS",
    categorySlug: "html-css",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/HTML-CSS.git"
  },
  {
    id: "web-content-mgmt",
    title: "Quản trị bài viết & thanh điều hướng",
    category: "HTML & CSS",
    categorySlug: "html-css",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/HTML-CSS.git"
  },
  {
    id: "web-server-setup",
    title: "Thiết lập server",
    category: "HTML & CSS",
    categorySlug: "html-css",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/HTML-CSS.git"
  },

  // App Inventor
  {
    id: "app-pomodoro",
    title: "Pomodoro App",
    category: "Lập trình app",
    categorySlug: "app-inventor",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/App-Inventor.git"
  },
  {
    id: "app-music",
    title: "App âm nhạc",
    category: "Lập trình app",
    categorySlug: "app-inventor",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/App-Inventor.git"
  },
  {
    id: "app-palette",
    title: "App bảng màu",
    category: "Lập trình app",
    categorySlug: "app-inventor",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/App-Inventor.git"
  },
  {
    id: "app-spaceship-game",
    title: "Game phi thuyền",
    category: "Lập trình app",
    categorySlug: "app-inventor",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/App-Inventor.git"
  },

  // Arduino & IoT
  {
    id: "iot-wifi-car",
    title: "Điều khiển xe qua WiFi",
    category: "Arduino & IoT",
    categorySlug: "arduino",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/IOT.git"
  },
  {
    id: "iot-blynk-light",
    title: "Điều khiển đèn qua Web/Blynk",
    category: "Arduino & IoT",
    categorySlug: "arduino",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/IOT.git"
  },
  {
    id: "iot-voice-device",
    title: "Điều khiển thiết bị bằng giọng nói",
    category: "Arduino & IoT",
    categorySlug: "arduino",
    image: "/assets/images/code.jpg",
    githubUrl: "https://github.com/DoNguyenAnhTuan/IOT.git"
  }
];
