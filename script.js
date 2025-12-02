// ===================================
// NAVIGATION FUNCTIONALITY
// ===================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===================================
// SMOOTH SCROLLING
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    }
    
    lastScroll = currentScroll;
});

// ===================================
// PORTFOLIO MODAL FUNCTIONALITY
// ===================================

const modal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Project data
const projectData = {
    1: {
        title: 'Luxe Cosmetics',
        category: 'Brand Identity',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
        description: 'A comprehensive brand identity project for Luxe Cosmetics, a premium beauty brand targeting sophisticated consumers. The project included logo design, color palette development, typography selection, and brand guidelines. The elegant and modern aesthetic reflects the brand\'s commitment to luxury and quality, while maintaining accessibility and warmth.',
        client: 'Luxe Cosmetics Inc.',
        year: '2024',
        services: 'Brand Identity, Logo Design, Brand Guidelines'
    },
    2: {
        title: 'TechFlow App',
        category: 'UI/UX Design',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop',
        description: 'TechFlow is a productivity application designed to help teams collaborate more effectively. The UI/UX design focuses on intuitive navigation, clean interfaces, and seamless user experiences. The project involved extensive user research, wireframing, prototyping, and user testing to ensure the final product meets user needs and business objectives.',
        client: 'TechFlow Solutions',
        year: '2024',
        services: 'UI Design, UX Research, Prototyping, User Testing'
    },
    3: {
        title: 'Organic Harvest',
        category: 'Packaging Design',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop',
        description: 'Organic Harvest is a sustainable food brand committed to organic farming practices. The packaging design emphasizes natural materials, earthy colors, and clear communication of the brand\'s values. Each package tells a story about the product\'s origin and the farmers who grew it, creating an emotional connection with consumers.',
        client: 'Organic Harvest Co.',
        year: '2023',
        services: 'Packaging Design, Label Design, Brand Strategy'
    },
    4: {
        title: 'City Stories',
        category: 'Digital Illustration',
        image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&h=600&fit=crop',
        description: 'City Stories is a series of digital illustrations capturing the essence of urban life in major cities around the world. Each illustration combines architectural elements with human stories, creating vibrant and dynamic compositions. The project showcases diverse illustration styles and techniques, from detailed line work to bold color blocking.',
        client: 'Urban Magazine',
        year: '2023',
        services: 'Digital Illustration, Concept Art, Editorial Design'
    },
    5: {
        title: 'Annual Report 2024',
        category: 'Print Design',
        image: 'https://images.unsplash.com/photo-1600096194534-95cf5ece04cf?w=800&h=600&fit=crop',
        description: 'A comprehensive annual report design for a leading financial institution. The project required transforming complex financial data into accessible and engaging visual content. The design balances professionalism with creativity, using infographics, charts, and thoughtful typography to make the information digestible and memorable.',
        client: 'Global Finance Corp.',
        year: '2024',
        services: 'Print Design, Data Visualization, Layout Design'
    },
    6: {
        title: 'Social Campaign',
        category: 'Social Media Design',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
        description: 'A dynamic social media campaign designed to increase brand awareness and engagement for a lifestyle brand. The campaign includes a series of coordinated posts, stories, and advertisements across multiple platforms. The design system is flexible yet cohesive, allowing for variety while maintaining strong brand recognition.',
        client: 'Lifestyle Brands Inc.',
        year: '2024',
        services: 'Social Media Design, Content Strategy, Campaign Design'
    }
};

// Open modal when clicking on portfolio items
portfolioItems.forEach(item => {
    const viewButton = item.querySelector('.view-project');
    viewButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const projectId = item.getAttribute('data-project');
        openModal(projectId);
    });
});

function openModal(projectId) {
    const project = projectData[projectId];
    
    if (project) {
        document.getElementById('modalImage').src = project.image;
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalCategory').textContent = project.category;
        document.getElementById('modalDescription').innerHTML = `<p>${project.description}</p>`;
        document.getElementById('modalClient').textContent = project.client;
        document.getElementById('modalYear').textContent = project.year;
        document.getElementById('modalServices').textContent = project.services;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// Close modal
modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ===================================
// FORM SUBMISSION
// ===================================

const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simulate form submission
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you at ${email} as soon as possible.`);
    
    // Reset form
    contactForm.reset();
});

// ===================================
// SCROLL ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.skill-item, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===================================
// ACTIVE NAVIGATION LINK
// ===================================

const sections = document.querySelectorAll('section[id]');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav-link[href="#${sectionId}"]`)?.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ===================================
// LOADING ANIMATION
// ===================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(highlightNavigation));

console.log('Alex Styles Portfolio - Loaded Successfully! 🎨');