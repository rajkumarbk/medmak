// ==Protection: disable right-click and show warning==
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    console.warn('🔒 Viewing source is disabled for design protection.');
});

// Optional: Add a small console message
console.log('%c⚠️ Please respect our work. Copying is not allowed.', 'color: #D32F2F; font-size: 14px; font-weight: bold;');

// ==Translation Data==
const translations = {
    ar: {
        home: "الرئيسية",
        about: "من نحن",
        services: "خدماتنا",
        projects: "مشاريعنا",
        contact: "اتصل بنا",
        hero_sub: "مقاولات عامة • رؤية 2030",
        hero_title: "مدماك الجنوب <br>للمقاولات",
        hero_desc: "نفخر بتقديم أعلى معايير الجودة والأمان في تنفيذ مشاريع البنية التحتية والعمارة",
        hero_btn: "اطلب استشارة مجانية",
        about_title: "رؤية واضحة.. تصميم مبتكر.. تنفيذ بدقة ",
        about_text: "مؤسسة مدماك الجنوب للمقاولات، إحدى المؤسسات في مجال المقاولات العامة في المملكة العربية السعودية، تأسست الشركة على أسس قوية من الاحترافية والجودة والتميز في الأداء، مما جعلها تحظى بسمعة طيبة وثقة عملائها في السوق المحلية، وتتخصص مؤسسة مدماك الجنوب للمقاولات في تنفيذ مشاريع البنية التحتية والعمارة بأعلى معايير الجودة والأمان، وتتمتع بفريق عمل مؤهل ومدرب يتمتع بخبرة واسعة في مجال المقاولات، كما تقدم الشركة خدمات شاملة تشمل الإنشاءات العامة والصيانة والترميم والتجديد، بالإضافة إلى خدمات صيانة الطرق، كما تعتمد على أحدث التقنيات والمعدات في مجال البناء والصيانة، مما يضمن تنفيذ المشاريع بكفاءة وفاعلية عالية، وتلتزم المؤسسة بتقديم خدمات متكاملة ومواكبة لأحدث الاتجاهات والمعايير البيئية والأمنية، وبفضل سجلها الحافل بالنجاحات والإنجازات، تعتبر خياراً مثالياً للمشاريع الكبيرة والمعقدة في المملكة العربية السعودية، وتسعى دائمًا لتحقيق رضا العملاء وتقديم أفضل الخدمات بأعلى مستويات الجودة والاحترافية.",
        about_btn: "استكشف خدماتنا",
        stat1: "عاماً من الخبرة",
        stat2: "مشروع مكتمل",
        stat3: "التزام بالجودة",
        vision_mission_title: "رؤيتنا ورسالتنا",
        vision_title: "رؤيتنا",
        vision_text: "نتطلع إلى تحقيق مكانة رائدة محليًا وعالميًا في مجال المقاولات العامة، من خلال تقديم حلول مبتكرة ومستدامة تساهم في تطوير ورفع مستوى البنية التحتية والعمران في البلاد، بما يتوافق مع رؤية المملكة العربية السعودية 2030.",
        mission_title: "رسالتنا",
        mission_text: "نسعى إلى تحقيق رضا العملاء وكسب ثقتهم وتحقيق أهدافهم وتلبية تطلعاتهم، من خلال الاستثمار في تطوير وتدريب الكفاءات البشرية لدينا لتعزيز قدراتنا التنافسية وتحسين أداء العمل لتقديم قيمة فعالة لعملائنا وشركائنا.",
        services_title: "خدماتنا",
        service1_title: "الإنشاء والبناء",
        service2_title: "الصيانة والترميم",
        service2_desc: "صيانة وتأهيل الطرق بأساليب حديثة تضمن السلامة والاستدامة.",
        service3_title: "التشطيبات الداخلية والخارجية",
        service3_desc: "تشطيبات فاخرة بأعلى المقاييس، من الأرضيات إلى الدهانات والأسقف.",
        services4_title: "تسليم مفتاح حسب الطلب",
        services4_desc: "تعبيد وصيانة الطرق، إصلاح الحفر والتشققات، صيانة الأرصفة، تحسين تصريف المياه، وصيانة الإشارات المرورية.",
        services5_title: "صيانة الطرق",
        services5_desc: "حلول شاملة من التصميم إلى التنفيذ والصيانة مع ضمان رضا العملاء ودعم ما بعد البيع.",
        projects_title: "مشاريعنا",
        contact_title: "اتصل بنا",
        map_link: "الموقع على الخريطة",
        footer: "© 2026 مدماك الجنوب للمقاولات - جميع الحقوق محفوظة."
    },
    en: {
        home: "Home",
        about: "About",
        services: "Services",
        projects: "Projects",
        contact: "Contact",
        hero_sub: "GENERAL CONTRACTING · VISION 2030",
        hero_title: "Medmak Aljanub <br>for Contracting",
        hero_desc: "We pride ourselves on delivering the highest standards of quality and safety in infrastructure and architecture projects.",
        hero_btn: "Get Free Consultation",
        about_title: "About Us",
        about_text: "Medmak Aljanub for Contracting is a leading general contracting institution in Saudi Arabia, founded on strong foundations of professionalism, quality, and excellence. It specializes in infrastructure and architectural projects with the highest quality and safety standards, backed by a qualified team with extensive experience. The company offers comprehensive services including general construction, maintenance, restoration, renovation, and road maintenance, utilizing the latest technologies and equipment.",
        about_btn: "Explore Services",
        stat1: "Years of Experience",
        stat2: "Completed Projects",
        stat3: "Quality Commitment",
        vision_mission_title: "Vision & Mission",
        vision_title: "Our Vision",
        vision_text: "We aspire to achieve a leading position locally and globally in general contracting by providing innovative and sustainable solutions that contribute to developing the country's infrastructure and urbanism, in line with Saudi Vision 2030.",
        mission_title: "Our Mission",
        mission_text: "We strive to achieve customer satisfaction, gain their trust, and meet their aspirations by investing in developing and training our human capabilities to enhance our competitiveness and improve work performance to deliver effective value to our clients and partners.",
        services_title: "Our Services",
        service1_title: "Building & Restoration",
        service2_title: "Road Maintenance",
        service2_desc: "Maintenance and rehabilitation of roads using modern methods ensuring safety and sustainability.",
        service3_title: "Interior Finishing",
        service3_desc: "Luxury finishes to the highest standards, from flooring to paints and ceilings.",
        projects_title: "Our Projects",
        contact_title: "Contact Us",
        map_link: "Location on Map",
        footer: "© 2026 Medmak Aljanub for Contracting - All rights reserved."
    }
};

// ==Language Toggle Logic==
let currentLang = 'ar';
const htmlTag = document.documentElement;
const langToggleBtn = document.getElementById('langToggle');

function setLanguage(lang) {
    currentLang = lang;
    htmlTag.setAttribute('lang', lang);
    htmlTag.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    langToggleBtn.textContent = lang === 'ar' ? 'English' : 'العربية';

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update service lists
    const service1List = document.getElementById('service1List');
    if (service1List) {
        if (lang === 'ar') {
            service1List.innerHTML = `
            <li><i class="fas fa-check-circle"></i> تنفيذ الهيكل الإنشائي وصب الخرسانة</li>
            <li><i class="fas fa-check-circle"></i> تنفيذ أعمال العزل المائي والحراري</li>
            <li><i class="fas fa-check-circle"></i> تأسيس الكهرباء والسباكة</li>
            <li><i class="fas fa-check-circle"></i> بناء الأسوار والملاحق</li>
            <li><i class="fas fa-check-circle"></i> الالتزام بكود البناء السعودي</li>
        `;
        } else {
            service1List.innerHTML = `
            <li><i class="fas fa-check-circle"></i> Structural framework</li>
            <li><i class="fas fa-check-circle"></i> Reinforced concrete</li>
            <li><i class="fas fa-check-circle"></i> Electrical & plumbing</li>
            <li><i class="fas fa-check-circle"></i> Fences & external rooms</li>
            <li><i class="fas fa-check-circle"></i> Turnkey delivery</li>
        `;
        }
    }

    const service2List = document.getElementById('service2List');
    if (service2List) {
        if (lang === 'ar') {
            service2List.innerHTML = `
            <li><i class="fas fa-check-circle"></i> ترميم وإعادة تأهيل المباني</li>
            <li><i class="fas fa-check-circle"></i> أعمال الأرضيات والدهانات</li>
            <li><i class="fas fa-check-circle"></i> صيانة الأعمال الكهربائية والميكانيكية</li>
            <li><i class="fas fa-check-circle"></i> معالجة التشققات والتلفيات الإنشائية</li>
            <li><i class="fas fa-check-circle"></i> حلول صيانة وقائية وعلاجية</li>
        `;
        } else {
            service2List.innerHTML = `
            <li><i class="fas fa-check-circle"></i> Gypsum board works</li>
            <li><i class="fas fa-check-circle"></i> Ceramic and porcelain installation</li>
            <li><i class="fas fa-check-circle"></i> Painting and plastering</li>
            <li><i class="fas fa-check-circle"></i> Doors and windows installation</li>
            <li><i class="fas fa-check-circle"></i> Carpentry works</li>
        `;
        }
    }

    const service3List = document.getElementById('service3List');
    if (service3List) {
        if (lang === 'ar') {
            service3List.innerHTML = `
            <li><i class="fas fa-check-circle"></i> أعمال الدهانات الداخلية والخارجية</li>
            <li><i class="fas fa-check-circle"></i> تنفيذ الجبس بورد والأسقف المستعارة</li>
            <li><i class="fas fa-check-circle"></i> تركيب الأرضيات بمختلف أنواعها</li>
            <li><i class="fas fa-check-circle"></i> الأعمال الخشبية والزجاجية</li>
            <li><i class="fas fa-check-circle"></i> تنفيذ الديكورات والتأثيث</li>
        `;
        } else {
            service3List.innerHTML = `
            <li><i class="fas fa-check-circle"></i> Old building restoration</li>
            <li><i class="fas fa-check-circle"></i> Exterior facade renovation</li>
            <li><i class="fas fa-check-circle"></i> Electrical and plumbing updates</li>
            <li><i class="fas fa-check-circle"></i> Thermal and sound insulation</li>
            <li><i class="fas fa-check-circle"></i> Interior space redesign</li>
        `;
        }
    }

    const service4List = document.getElementById('service4List');
    if (service4List) {
        if (lang === 'ar') {
            service4List.innerHTML = `
            <li><i class="fas fa-check-circle"></i> أعمال السفلتة وإعادة التأهيل</li>
            <li><i class="fas fa-check-circle"></i> معالجة الحفر والتشققات</li>
            <li><i class="fas fa-check-circle"></i> إعادة تخطيط الطرق</li>
            <li><i class="fas fa-check-circle"></i> صيانة الأرصفة والبردورات</li>
            <li><i class="fas fa-check-circle"></i> تحسين كفاءة البنية التحتية</li>
        `;
        } else {
            service4List.innerHTML = `
            <li><i class="fas fa-check-circle"></i> Design</li>
            <li><i class="fas fa-check-circle"></i> Execution</li>
            <li><i class="fas fa-check-circle"></i> Maintenance</li>
            <li><i class="fas fa-check-circle"></i> Customer satisfaction</li>
            <li><i class="fas fa-check-circle"></i> After-sales support</li>
        `;
        }
    }

    const service5List = document.getElementById('service5List');
    if (service5List) {
        if (lang === 'ar') {
            service5List.innerHTML = `
            <li><i class="fas fa-check-circle"></i> إعداد المخططات والتصاميم الهندسية</li>
            <li><i class="fas fa-check-circle"></i> استخراج التصاريح اللازمة</li>
            <li><i class="fas fa-check-circle"></i> تنفيذ كامل أعمال البناء والتشطيب</li>
            <li><i class="fas fa-check-circle"></i> الإشراف وإدارة المشروع</li>
            <li><i class="fas fa-check-circle"></i> تسليم نهائي جاهز للاستخدام</li>
            
        `;
        } else {
            service5List.innerHTML = `
        <li><i class="fas fa-check-circle"></i> Road paving and maintenance</li>
            <li><i class="fas fa-check-circle"></i> Pothole and crack repair</li>
            <li><i class="fas fa-check-circle"></i> Sidewalk and pathway maintenance</li>
            <li><i class="fas fa-check-circle"></i> Water drainage improvement</li>
            <li><i class="fas fa-check-circle"></i> Traffic signs and markings</li>
            
        `;
        }
    }

    // Update project captions
    updateProjectCaptions();
}
// ** ADD THIS EVENT LISTENER **
langToggleBtn.addEventListener('click', () => {
    setLanguage(currentLang === 'ar' ? 'en' : 'ar');
});

// ==Scroll Animation (triggers every time you scroll)==
const animateElements = document.querySelectorAll('.animate-on-scroll');

// Remove any existing classes first
animateElements.forEach(element => {
    element.classList.remove('animated');
});

// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
        rect.bottom >= 0
    );
}

// Function to handle scroll animations
function handleScrollAnimation() {
    animateElements.forEach(element => {
        if (isInViewport(element)) {
            // Add animation class when element enters viewport
            element.classList.add('animated');
        } else {
            // Remove animation class when element leaves viewport
            element.classList.remove('animated');
        }
    });
}

// Add scroll event listener with throttling for better performance
let isScrolling = false;
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            handleScrollAnimation();
            isScrolling = false;
        });
        isScrolling = true;
    }
});

// Also trigger on load to show visible elements
window.addEventListener('load', handleScrollAnimation);
window.addEventListener('resize', handleScrollAnimation); // Re-check on resize

// Initial check
handleScrollAnimation();

// Mobile Menu with Cross Button
const mobileBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
const hamburgerIcon = document.getElementById('hamburgerIcon');
const closeIcon = document.getElementById('closeIcon');

if (mobileBtn && navLinks) {
    // Function to check if mobile view is active
    function isMobileView() {
        return window.innerWidth <= 992;
    }

    // Function to check if mobile menu is open
    function isMobileMenuOpen() {
        return navLinks.style.display === 'flex' && isMobileView();
    }

    // Function to open mobile menu
    function openMobileMenu() {
        if (!isMobileView()) return;

        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '80px';
        navLinks.style.right = '20px';
        navLinks.style.background = 'white';
        navLinks.style.padding = '20px';
        navLinks.style.borderRadius = '20px';
        navLinks.style.boxShadow = 'var(--shadow)';
        navLinks.style.width = '200px';
        navLinks.style.zIndex = '1000';

        // Toggle icons
        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'inline-block';
    }

    // Function to close mobile menu
    function closeMobileMenu() {
        if (!isMobileView()) return;

        navLinks.style.display = 'none';

        // Toggle icons
        hamburgerIcon.style.display = 'inline-block';
        closeIcon.style.display = 'none';
    }

    // Toggle menu on button click
    mobileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!isMobileView()) return;

        if (navLinks.style.display === 'flex') {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    // Close menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (isMobileView()) {
                closeMobileMenu();
            }
        });
    });

    // Close menu when clicking outside - ONLY when menu is open on mobile
    document.addEventListener('click', (e) => {
        // Only close if:
        // 1. We're on mobile view
        // 2. The mobile menu is currently open
        // 3. The click is outside the menu and the menu button
        if (isMobileView() &&
            isMobileMenuOpen() &&
            !navLinks.contains(e.target) &&
            !mobileBtn.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (!isMobileView()) {
            // Desktop view - reset to default
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'row';
            navLinks.style.position = 'static';
            navLinks.style.background = 'transparent';
            navLinks.style.padding = '0';
            navLinks.style.boxShadow = 'none';
            navLinks.style.width = 'auto';
            navLinks.style.right = 'auto';
            navLinks.style.top = 'auto';

            // Hide both icons on desktop
            hamburgerIcon.style.display = 'none';
            closeIcon.style.display = 'none';
        } else {
            // Mobile view - ensure menu starts closed
            navLinks.style.display = 'none';
            hamburgerIcon.style.display = 'inline-block';
            closeIcon.style.display = 'none';
        }
    });

    // Initial setup based on screen size
    if (!isMobileView()) {
        // Desktop
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'row';
        navLinks.style.position = 'static';
        navLinks.style.background = 'transparent';
        navLinks.style.padding = '0';
        navLinks.style.boxShadow = 'none';
        navLinks.style.width = 'auto';

        hamburgerIcon.style.display = 'none';
        closeIcon.style.display = 'none';
    } else {
        // Mobile
        navLinks.style.display = 'none';
        hamburgerIcon.style.display = 'inline-block';
        closeIcon.style.display = 'none';
    }
}

// ==Set initial language==
setLanguage('ar');

// ==Add active class to nav links on scroll==
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});