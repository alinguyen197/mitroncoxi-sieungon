/**
 * MÌ TRỘN CÔ XI (MÌ TRỘN XUXI) - CORE INTERACTIVE ENGINE
 * Built with SwiperJS & Vanilla JS for maximum performance on Vercel
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. SWIPER CAROUSEL INITIALIZATIONS
  // ==========================================

  // A. Hero Slider - Dynamic Food Showcase
  if (document.querySelector('.hero-swiper')) {
    new Swiper('.hero-swiper', {
      loop: true,
      speed: 800,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: '.hero-swiper .swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.hero-swiper .swiper-button-next',
        prevEl: '.hero-swiper .swiper-button-prev'
      }
    });
  }

  // B. Topping & Real Ingredients Swiper (Touch & Auto-scroll)
  if (document.querySelector('.topping-swiper')) {
    new Swiper('.topping-swiper', {
      slidesPerView: 1.15,
      spaceBetween: 16,
      grabCursor: true,
      loop: true,
      speed: 600,
      autoplay: {
        delay: 3200,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: '.topping-swiper .swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.topping-next',
        prevEl: '.topping-prev'
      },
      breakpoints: {
        640: {
          slidesPerView: 2.1,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3.1,
          spaceBetween: 24
        }
      }
    });
  }

  // C. Packaging & Poster 3D / Creative Swiper
  if (document.querySelector('.packaging-swiper')) {
    new Swiper('.packaging-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      grabCursor: true,
      loop: true,
      speed: 700,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: '.packaging-swiper .swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.packaging-next',
        prevEl: '.packaging-prev'
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24
        }
      }
    });
  }

  // D. Customer Reviews Swiper
  if (document.querySelector('.reviews-swiper')) {
    new Swiper('.reviews-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      speed: 600,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },
      pagination: {
        el: '.reviews-swiper .swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.reviews-next',
        prevEl: '.reviews-prev'
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24
        }
      }
    });
  }

  // ==========================================
  // 2. MOBILE DRAWER NAVIGATION
  // ==========================================
  const mobileMenu = document.getElementById('mobileMenu');
  const openMobileMenuBtn = document.getElementById('openMobileMenu');
  const closeMobileMenuBtn = document.getElementById('closeMobileMenu');

  if (openMobileMenuBtn && mobileMenu) {
    openMobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
    });
  }

  if (closeMobileMenuBtn && mobileMenu) {
    closeMobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  }

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenu) mobileMenu.classList.add('hidden');
    });
  });

  // ==========================================
  // 3. IMAGE LIGHTBOX MODAL
  // ==========================================
  const lightbox = document.getElementById('imageLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const closeLightboxBtn = document.getElementById('closeLightbox');

  window.openLightbox = function(src, title) {
    if (lightbox && lightboxImg) {
      lightboxImg.src = src;
      if (lightboxTitle) lightboxTitle.textContent = title || 'Chi tiết hình ảnh';
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
    }
  };

  if (closeLightboxBtn && lightbox) {
    closeLightboxBtn.addEventListener('click', () => {
      lightbox.classList.add('hidden');
      lightbox.classList.remove('flex');
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
      }
    });
  }

  // Bind zoom on images with data-zoom or zoom-in class
  document.querySelectorAll('[data-zoom], .cursor-zoom-in').forEach(el => {
    el.addEventListener('click', () => {
      const src = el.getAttribute('data-zoom') || el.src;
      const title = el.getAttribute('data-title') || el.alt || 'Chi tiết hình ảnh';
      if (src) window.openLightbox(src, title);
    });
  });

  // ==========================================
  // 4. TOAST NOTIFICATION SYSTEM
  // ==========================================
  window.showToast = function(message) {
    let toast = document.getElementById('orderToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'orderToast';
      toast.className = 'fixed top-6 right-6 z-50 bg-white border-2 border-primary text-on-surface px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-3 transform transition-all duration-300 translate-y-[-20px] opacity-0 pointer-events-none max-w-sm';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <span class="material-symbols-outlined text-primary text-[28px] shrink-0">task_alt</span>
      <div>
        <div class="font-label-md font-black text-primary uppercase text-xs">Mì Trộn Cô Xi Thông Báo</div>
        <div class="font-body-md text-sm font-semibold text-gray-800">${message}</div>
      </div>
    `;
    toast.classList.remove('translate-y-[-20px]', 'opacity-0', 'pointer-events-none');
    setTimeout(() => {
      toast.classList.add('translate-y-[-20px]', 'opacity-0', 'pointer-events-none');
    }, 3800);
  };

  // ==========================================
  // 5. INTERACTIVE ORDERING & DISH SELECTION
  // ==========================================
  window.selectDish = function(dishName, price) {
    const select = document.getElementById('dishSelect');
    if (select) {
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].text.toLowerCase().includes(dishName.toLowerCase())) {
          select.selectedIndex = i;
          break;
        }
      }
    }
    window.showToast(`Đã chọn "${dishName}". Đang chuyển đến đơn đặt hàng!`);
    const orderSection = document.getElementById('dat-mon');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Order submission
  window.handleOrderSubmit = function(e) {
    e.preventDefault();
    const select = document.getElementById('dishSelect');
    const selectedDish = select ? select.value : 'Món ăn đã chọn';
    const notice = document.getElementById('successNotice');
    if (notice) {
      notice.classList.remove('hidden');
      notice.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    window.showToast(`Đặt món thành công: ${selectedDish}! Quán sẽ liên hệ bạn ngay!`);
    const form = document.getElementById('orderForm');
    if (form) {
      form.reset();
    }
  };
});
