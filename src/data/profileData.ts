export interface ContactItem {
  iconName: string;
  title: string;
  value: string;
  link?: string;
  datetime?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  title: string;
  avatar: string;
  aboutPhoto: string;
  bioParagraphs: string[];
  contacts: ContactItem[];
  socials: SocialLink[];
}

export const profileData: ProfileData = {
  name: "Âu Dương Tài",
  title: "Chuyên viên EIU Fablab",
  avatar: "/assets/images/my-avatar.png",
  aboutPhoto: "/assets/images/my-avatar.png",
  bioParagraphs: [
    "Là một sinh viên Kỹ thuật Phần mềm và hiện đang thực tập với vai trò Chuyên viên tại FabLab, mình luôn hứng thú với việc biến những dòng code thành các giải pháp có thể giải quyết những bài toán thực tế. Mình có kinh nghiệm trong lĩnh vực Robotics với ROS2 và Computer Vision, đồng thời yêu thích việc khám phá, nghiên cứu và ứng dụng các công nghệ mới vào sản phẩm.",
    "Hiện tại, mình đang tập trung phát triển kỹ năng Full-stack Web Development và xây dựng các ứng dụng tích hợp AI, từ việc sử dụng các mô hình thông qua API đến tự phát triển và triển khai các giải pháp AI cho từng bài toán cụ thể. Ngoài việc học và phát triển dự án, mình cũng thích chia sẻ kiến thức thông qua việc giảng dạy lập trình và hướng dẫn IELTS."
  ],
  contacts: [
    {
      iconName: "mail",
      title: "Email",
      value: "tai.au@eiu.edu.vn",
      link: "mailto:tai.au@eiu.edu.vn"
    },
    {
      iconName: "phone",
      title: "Số điện thoại",
      value: "+84 961683079",
      link: "tel:+84961683079"
    },
    {
      iconName: "calendar",
      title: "Ngày sinh",
      value: "24/09/2005",
      datetime: "2005-09-24"
    },
    {
      iconName: "location",
      title: "Địa chỉ",
      value: "Bình Chuẩn, Thuận An, Bình Dương"
    }
  ],
  socials: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/tai.au.714/",
      icon: "facebook"
    },
    {
      name: "GitHub",
      url: "https://github.com/AuDuongTai27",
      icon: "github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tai-au-duong-14a716363/",
      icon: "linkedin"
    }
  ]
};
