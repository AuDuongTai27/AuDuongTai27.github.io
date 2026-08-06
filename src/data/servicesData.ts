export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "ros2-f1tenth",
    title: "ROS2 và F1tenth",
    icon: "/assets/images/icon-design.svg",
    description: "Đang nghiên cứu chuyên sâu các kỹ thuật AI như Machine Learning, NLP, Object Detection, YOLO, và đào tạo mô hình bằng Python. Có kinh nghiệm xử lý ngôn ngữ, hình ảnh và phân tích dữ liệu lớn."
  },
  {
    id: "web-dev",
    title: "Phát triển Web hiện đại",
    icon: "/assets/images/icon-dev.svg",
    description: "Xây dựng web ứng dụng bằng TypeScript, JavaScript, React, kết hợp kiến thức UI/UX. Yêu thích tối ưu trải nghiệm người dùng và kiến trúc web hiện đại."
  },
  {
    id: "researching",
    title: "Nghiên cứu khoa học",
    icon: "/assets/images/icon-app.svg",
    description: "Tham gia nghiên cứu khoa học về các thuật toán tối ưu đường đi cho xe F1tenth chạy trên hệ điều hành ROS 2. Lĩnh vực nghiên cứu là các thuật toán tối ưu đường đi cũng như là ứng dụng AI như Deep Imitation Learning (DIL) hay Reinforcement Learning (RL)."
  },
  {
    id: "teaching",
    title: "Giảng dạy",
    icon: "/assets/images/icon-app.svg",
    description: "Trợ giảng cho các workshop về giảng dạy ROS 2 cơ bản cũng như là về lĩnh vực xe F1tenth và AI .Bên canh đó cũng tham gia, hỗ trợ các bạn học sinh, sinh viên trong quá trình học IELTS. "
  }
];
