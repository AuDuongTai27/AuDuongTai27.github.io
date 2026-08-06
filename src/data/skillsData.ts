export interface SkillItem {
  name: string;
  icon: string;
  width?: string;
}

export interface SkillGroup {
  categoryTitle: string;
  skills: SkillItem[];
}

export const skillGroupsData: SkillGroup[] = [
  {
    categoryTitle: "Chuyên ngành CNTT",
    skills: [
      { name: "C", icon: "/assets/images/C.png", width: "50px" },
      { name: "C++", icon: "/assets/images/C++.png", width: "50px" },
      { name: "Python", icon: "/assets/images/python.png", width: "50px" },
      { name: "HTML5", icon: "/assets/images/html5.png" },
      { name: "CSS3", icon: "/assets/images/css3.png" },
      { name: "JavaScript", icon: "/assets/images/javascript.png" },
      { name: "Bootstrap", icon: "/assets/images/bootstrap.png" },
      { name: "React", icon: "/assets/images/react.png" },
      { name: "TypeScript", icon: "/assets/images/TypeScript.png", width: "50px" },
      { name: "Yolo", icon: "/assets/images/yolo.png", width: "90px" },
      { name: "Arduino", icon: "/assets/images/arduino.png", width: "50px" },
      { name: "Moodle", icon: "/assets/images/Moodle.png", width: "70px" },
      { name: "Wordpress", icon: "/assets/images/wordpress.png", width: "90px" },
      { name: "Unity", icon: "/assets/images/Unity.png", width: "90px" }
    ]
  },
  {
    categoryTitle: "Giảng dạy STEAM",
    skills: [
      { name: "Roblox Studio", icon: "/assets/images/robloxstudio.png", width: "40px" },
      { name: "Minecraft Studio", icon: "/assets/images/minecraft.png", width: "100px" },
      { name: "Tinkercad", icon: "/assets/images/tinkercad.png", width: "90px" },
      { name: "WeDo", icon: "/assets/images/wedo.png", width: "60px" },
      { name: "Mindstorms", icon: "/assets/images/Mindstorms.png", width: "60px" }
    ]
  },
  {
    categoryTitle: "Kỹ năng mềm",
    skills: [
      { name: "Photoshop", icon: "/assets/images/photoshop.png" },
      { name: "Canva", icon: "/assets/images/canva.png", width: "60px" },
      { name: "Premiere", icon: "/assets/images/Premiere.png", width: "60px" },
      { name: "Filmora", icon: "/assets/images/Filmora.png", width: "60px" },
      { name: "CapCut", icon: "/assets/images/capcut.png", width: "60px" }
    ]
  }
];

export const otherToolsData: SkillItem[] = [
  { name: "Git", icon: "/assets/images/git.png" },
  { name: "Npm", icon: "/assets/images/npm.png" },
  { name: "Command Line", icon: "/assets/images/command.png" },
  { name: "VS Code", icon: "/assets/images/vs-code.png" },
  { name: "My SQL", icon: "/assets/images/MySQL.png", width: "50px" }
];
