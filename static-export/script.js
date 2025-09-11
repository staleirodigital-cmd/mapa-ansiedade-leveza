// Mapa da Ansiedade - Static Export JavaScript

// Respeitar preferências de movimento do usuário
(function() {
  try {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('reduce-motion');
      
      // Desabilitar animações CSS
      const style = document.createElement('style');
      style.textContent = `
        .reduce-motion .cta-animate {
          animation: none !important;
        }
        .reduce-motion * {
          transition: none !important;
        }
      `;
      document.head.appendChild(style);
    }
  } catch (e) {
    console.log('Motion preference check not supported');
  }
})();

// Smooth scroll para links internos (se houver)
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Analytics simples de cliques nos CTAs (opcional)
document.addEventListener('DOMContentLoaded', function() {
  const ctaButtons = document.querySelectorAll('.btn-cta, .btn-final');
  
  ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Aqui você pode adicionar tracking de analytics
      console.log('CTA clicked:', this.textContent.trim());
      
      // Exemplo com Google Analytics (descomente se usar GA)
      // if (typeof gtag !== 'undefined') {
      //   gtag('event', 'click', {
      //     event_category: 'CTA',
      //     event_label: this.textContent.trim()
      //   });
      // }
    });
  });
});

// Lazy loading simples para imagens (backup caso não tenha loading="lazy")
document.addEventListener('DOMContentLoaded', function() {
  if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img:not([loading="eager"])');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }
});

// Performance: carregar fontes de forma otimizada (se necessário)
// Uncomment if you want to load custom fonts
/*
document.addEventListener('DOMContentLoaded', function() {
  if ('fonts' in document) {
    Promise.all([
      // document.fonts.load('400 16px FontName'),
      // document.fonts.load('600 16px FontName'),
      // document.fonts.load('700 16px FontName')
    ]).then(() => {
      document.body.classList.add('fonts-loaded');
    });
  }
});
*/