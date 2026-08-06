gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: 'play none none reverse',
});

// ========================================================
// 1. SETUP & UTILS
// ========================================================

const navLinks = document.querySelectorAll('.menu a');
const projectContent = document.querySelector(".boxes-container");

// Hàm Active Menu
function setActiveMenu(target) {
  const element = (typeof target === 'string') ? document.querySelector(target) : target;
  navLinks.forEach(link => {
    link.classList.remove('active');
    link.style.opacity = '';      
    link.style.fontWeight = '';
  });
  if (element) element.classList.add('active');
}

// Reset khi load trang
window.addEventListener('load', () => {
    const homeLink = document.querySelector('.nav-home');
    setActiveMenu(homeLink);
    window.scrollTo(0, 0);
});

// Tính chiều cao cuộn Project
function getProjectScrollY() {
  return -(projectContent.scrollHeight - window.innerHeight + 400);
}


// ========================================================
// 2. MASTER TIMELINE (XỬ LÝ TOÀN BỘ)
// ========================================================

// TĂNG TỔNG HÀNH TRÌNH LÊN 12000px (Để phần Project dài hơn)
const masterTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".wrapper",
    pin: true,      
    scrub: 1,       
    start: "top top",
    end: "+=12000",  
  }
});

// --- GIAI ĐOẠN 1: START -> ZOOM XONG (Home & About) ---
masterTl.to('.right', { autoAlpha: 0, x: 500, duration: 2 }, "start")
        .to('.left', { autoAlpha: 0, x: -500, duration: 2 }, "start")
        .to('.txt-bottom', { autoAlpha: 0, letterSpacing: -10, duration: 2 }, "start");

masterTl.to('.img-container', { scale: 52, ease: 'power2.inOut', duration: 10 }, "start");

// SỬA: Hiện About SỚM HƠN (offset -=6)
// Thay vì chờ zoom gần xong mới hiện, giờ zoom được 1 nửa là hiện luôn
masterTl.from('.left-side div', { y: 150, opacity: 0, stagger: 0.4, duration: 3 }, "-=6")
        .from('.right-side', { opacity: 0, duration: 2 }, "-=4");

// Giảm thời gian chờ đọc About xuống còn 1 (để lướt sang Project nhanh hơn)
masterTl.to({}, { duration: 1 }); 


// --- GIAI ĐOẠN 2: TRƯỢT SANG PROJECT ---
masterTl.to('.wrapper', {
  x: -window.innerWidth,
  ease: "none",
  duration: 4 // Trượt nhanh gọn
});


// --- GIAI ĐOẠN 3: CUỘN DỌC PROJECT & HIỆU ỨNG ẢNH ---

// 3.1. Kéo danh sách lên (Cuộn dọc)
// SỬA: Tăng duration lên 30 (Gấp 3 lần cũ) -> Cuộn rất dài, rất lâu
masterTl.to('.boxes-container', {
  y: getProjectScrollY, 
  ease: "none",
  duration: 30 
}, "scrollProject"); 

// 3.2. Hiệu ứng ảnh: TỪNG BOX MỘT
const boxes = gsap.utils.toArray('.columns'); 

boxes.forEach((box, index) => {
    const images = box.querySelectorAll('img'); 
    
    masterTl.fromTo(images, 
      { x: 100, opacity: 0.3 }, 
      {
        x: 0, 
        opacity: 1,
        ease: "power2.out",
        duration: 2 
      },
      // SỬA: Rải đều hiệu ứng theo duration mới (30)
      // Mỗi box cách nhau 10 đơn vị thời gian (vì duration tổng là 30)
      "scrollProject+=" + (index * 10) 
    );
});


// --- GIAI ĐOẠN 4: TRƯỢT SANG CONTACT ---
masterTl.to('.wrapper', {
  x: () => -window.innerWidth * 2,
  ease: "none",
  duration: 4
});


// ========================================================
// 3. MENU ACTIVE STATE (CẬP NHẬT THEO 12000px)
// ========================================================
// Home: Ngắn lại vì About hiện sớm
ScrollTrigger.create({
  trigger: "body", start: "top top", end: "1500px top",
  onEnter: () => setActiveMenu('.nav-home'),
  onEnterBack: () => setActiveMenu('.nav-home')
});

// About: Hiện sớm và kết thúc khi trượt sang Project
ScrollTrigger.create({
  trigger: "body", start: "1500px top", end: "3000px top",
  onEnter: () => setActiveMenu('.nav-about'),
  onEnterBack: () => setActiveMenu('.nav-about')
});

// Project: Dài ra rất nhiều (từ 3000 đến 10000)
ScrollTrigger.create({
  trigger: "body", start: "3000px top", end: "11000px top",
  onEnter: () => setActiveMenu('.nav-project'),
  onEnterBack: () => setActiveMenu('.nav-project')
});

// Contact
ScrollTrigger.create({
  trigger: "body", start: "11000px top", end: "bottom bottom",
  onEnter: () => setActiveMenu('.nav-contact'),
  onEnterBack: () => setActiveMenu('.nav-contact')
});


// ========================================================
// 4. CLICK MENU
// ========================================================
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    let pos = 0;
    
    if (link.classList.contains('nav-home')) pos = 0;
    else if (link.classList.contains('nav-about')) pos = 2000;
    else if (link.classList.contains('nav-project')) pos = 3800; // Đầu project
    else if (link.classList.contains('nav-contact')) pos = 12000; // Cuối cùng
    
    window.scrollTo({ top: pos, behavior: 'smooth' });
  });
});

// Intro
gsap.from('.title span', { y: 150, skewY: 7, duration: 1.5 });