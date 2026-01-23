gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
	toggleActions: 'play none none reverse',
});

gsap.to('.img-container', {
	scale: 52,
	ease: 'ease',
	scrollTrigger: {
		trigger: '.video-section',
		scrub: 1,
		start: 'top top',
		end: 'bottom',
		pin: true,
	},
});

gsap.to('.right', {
	autoAlpha: 0,
	x: 500,
	duration: 1.5,
	scrollTrigger: {
		start: 1,
	},
});
gsap.to('.left', {
	autoAlpha: 0,
	x: -500,
	duration: 1.5,
	scrollTrigger: {
		start: 1,
	},
});

gsap.to('.txt-bottom', {
	autoAlpha: 0,
	letterSpacing: -10,
	duration: 2,
	scrollTrigger: {
		start: 2,
	},
});

const tl = gsap.timeline();

tl.from('.left-side div', {
	y: 150,
	opacity: 0,
	stagger: {
		amount: 0.4,
	},
	delay: 0.5,
})
	.from('.right-side', { opacity: 0, duration: 2 }, 0.5)
	.to('.wrapper', { x: -window.innerWidth });

ScrollTrigger.create({
	animation: tl,
	trigger: '.wrapper',
	start: 'top top',
	end: '+=600',
	scrub: 1,
	pin: true,
	ease: 'ease',
});

gsap.utils.toArray('.col').forEach(image => {
	gsap.fromTo(
		image,
		{
			opacity: 0.3,
			x: 0,
		},
		{
			opacity: 1,
			x: -50,
			scrollTrigger: {
				trigger: image,
				start: '10%',
				stagger: {
					amount: 0.4,
				},
			},
		},
	);
});

const timeline = gsap.timeline();

timeline
	.from('.title span', {
		y: 150,
		skewY: 7,
		duration: 3,
	})
	.from('.txt-bottom', {
		letterSpacing: -10,
		opacity: 0,
		duration: 3,
	});

// ========== MENU NAVIGATION & ACTIVE STATE ==========

const menuLinks = document.querySelectorAll('.menu a');
const sections = {
	'nav-home': 0,
	'nav-about': 0,
	'nav-project': window.innerWidth,
	'nav-contact': window.innerWidth * 2
};

// Hàm để đặt active state cho menu
// --- SỬA ĐOẠN NÀY TRONG SCRIPT.JS ---

// Hàm để đặt active state cho menu (Đã sửa để dùng Class CSS)
function setActiveMenu(activeLink) {
  // 1. Xóa class 'active' khỏi tất cả các link
  menuLinks.forEach(link => {
    link.classList.remove('active');
    // Xóa luôn mấy cái style thủ công cũ để không bị đè
    link.style.opacity = ''; 
    link.style.fontWeight = '';
  });
  
  // 2. Thêm class 'active' vào link đang chọn
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

// Set Home active mặc định khi load trang
window.addEventListener('load', () => {
	const homeLink = document.querySelector('.nav-home');
	setActiveMenu(homeLink);
});

// Xử lý click menu
menuLinks.forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		
		// Set active cho menu item được click
		setActiveMenu(link);
		
		// Lấy class để xác định section
		let scrollPosition = 0;
		
		if (link.classList.contains('nav-home')) {
			scrollPosition = 0;
		} else if (link.classList.contains('nav-about')) {
			scrollPosition = 500; // Vị trí sau khi zoom window xong
		} else if (link.classList.contains('nav-project')) {
			scrollPosition = 600; // Vị trí phần project
		} else if (link.classList.contains('nav-contact')) {
			scrollPosition = document.body.scrollHeight - window.innerHeight;
		}
		
		// Smooth scroll
		window.scrollTo({
			top: scrollPosition,
			behavior: 'smooth'
		});
	});
});

// Theo dõi scroll để tự động active menu
let ticking = false;

window.addEventListener('scroll', () => {
	if (!ticking) {
		window.requestAnimationFrame(() => {
			const scrollPosition = window.scrollY;
			
			// Xác định section hiện tại dựa trên vị trí scroll
			if (scrollPosition < 200) {
				setActiveMenu(document.querySelector('.nav-home'));
			} else if (scrollPosition < 600) {
				setActiveMenu(document.querySelector('.nav-about'));
			} else if (scrollPosition < document.body.scrollHeight - window.innerHeight - 200) {
				setActiveMenu(document.querySelector('.nav-project'));
			} else {
				setActiveMenu(document.querySelector('.nav-contact'));
			}
			
			ticking = false;
		});
		
		ticking = true;
	}
});
