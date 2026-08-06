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
    description: "Xây dựng web ứng dụng bằng TypeScript, JavaScript, React, kết hợp kiến thức UI/UX và hệ thống quản lý học tập như Moodle và WordPress. Yêu thích tối ưu trải nghiệm người dùng và kiến trúc web hiện đại."
  },
  {
    id: "iot-automation",
    title: "Arduino, IoT & Điện tử tự động hóa",
    icon: "/assets/images/icon-app.svg",
    description: "Tham gia thiết kế và thực hành với các dự án sử dụng Arduino, Raspberry Pi, cảm biến và thiết bị IoT. Từng giảng dạy và xây dựng mô hình hệ thống điều khiển, nhà thông minh, và các ứng dụng STEM thực tế."
  },
  {
    id: "stem-teaching",
    title: "Giảng dạy STEM",
    icon: "/assets/images/icon-app.svg",
    description: "Dạy STEM và lập trình cho trẻ em với các công cụ như Tinkercad, Scratch, App Inventor, và các ngôn ngữ lập trình trực quan. Thiết kế hoạt động học tập giúp các em phát triển tư duy thuật toán và sáng tạo công nghệ."
  }
];
