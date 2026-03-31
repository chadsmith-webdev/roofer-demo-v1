document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Navbar Scroll Effect
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(17, 24, 39, 0.95)';
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            nav.style.background = 'rgba(31, 41, 55, 0.7)';
            nav.style.boxShadow = 'none';
        }
    });

    // Mobile Menu Toggle (Simplified for prototype)
    const setupMobileMenu = () => {
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        if (menuBtn && navLinks) {
            menuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }
    };
    setupMobileMenu();

    // Interactive "Roof Visualizer" Simulation
    // This is a placeholder for the requested "Pro Max" feature
    const visualizerSim = () => {
        const slots = document.querySelectorAll('.visualizer-slot');
        slots.forEach(slot => {
            slot.addEventListener('click', () => {
                const type = slot.dataset.type;
                console.log(`Switching roof texture to: ${type}`);
                // In a real app, this would swap a Canvas texture or 3D model skin
                document.querySelector('.visualizer-img').style.filter = 
                    type === 'metal' ? 'contrast(1.2) brightness(0.9)' : 'none';
            });
        });
    }
    visualizerSim();
});
