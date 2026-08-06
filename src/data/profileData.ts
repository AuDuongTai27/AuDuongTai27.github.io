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
    "Là một sinh viên Kỹ thuật Phần mềm và cũng như là đang thực tập như là một Chuyên viên tại Fablab, mình luôn hứng thú với việc mang những dòng code từ màn hình máy tính ra thế giới thực, đặc biệt là trong lĩnh vực Robotics.",
    "Hiện tại, mình tập trung nghiên cứu sâu về ROS2 để xây dựng hệ thống điều khiển cho robot và ứng dụng lý thuyết phức tạp vào các dự án thực tế. Ngoài giờ lên lab hay ngồi code, mình còn dành thời gian chia sẻ kiến thức qua việc dạy lập trình và hướng dẫn IELTS. Với mình, kỹ thuật là để giải quyết vấn đề, và chia sẻ là cách để học tốt nhất."
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
      url: "https://www.linkedin.com/in/t%C3%A0i-%C3%A2u-d%C6%B0%C6%A1ng-14a716363/",
      icon: "linkedin"
    }
  ]
};
