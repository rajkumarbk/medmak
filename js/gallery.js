(function () {
  'use strict';

  /* ── DOM References ─────────────────────────────────── */
  const grid = document.getElementById('galleryGrid');
  const lightbox = document.getElementById('lightbox');
  const backdrop = document.getElementById('lightboxBackdrop');
  const imgEl = document.getElementById('lightboxImg');
  const caption = document.getElementById('lightboxCaption');
  const counter = document.getElementById('lightboxCounter');
  const btnClose = document.getElementById('lightboxClose');
  const btnPrev = document.getElementById('lightboxPrev');
  const btnNext = document.getElementById('lightboxNext');

  /* ── State ──────────────────────────────────────────── */
  let items = [];   // Array of { src, alt } objects
  let currentIndex = 0;
  let isOpen = false;

  /* ── Build items list from DOM ──────────────────────── */
  function buildItems() {
    const galleryItems = grid.querySelectorAll('.gallery-item');
    items = Array.from(galleryItems).map((item) => {
      const img = item.querySelector('img');
      const overlayText = item.querySelector('.overlay span');
      return {
        src: img ? img.src : '',
        alt: img ? img.alt : '',
        caption: overlayText ? overlayText.textContent : (img ? img.alt : ''),
      };
    });
  }

  /* ── Open Lightbox ──────────────────────────────────── */
  function openLightbox(index) {
    buildItems();
    if (!items.length) return;

    currentIndex = Math.max(0, Math.min(index, items.length - 1));
    isOpen = true;

    loadImage(currentIndex, false);

    lightbox.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus the close button for accessibility
    requestAnimationFrame(() => btnClose.focus());
  }

  /* ── Close Lightbox ─────────────────────────────────── */
  function closeLightbox() {
    isOpen = false;
    lightbox.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* ── Load Image ─────────────────────────────────────── */
  function loadImage(index, animate) {
    const item = items[index];
    if (!item) return;

    if (animate) {
      imgEl.classList.add('switching');
      setTimeout(() => {
        setImage(item, index);
        imgEl.classList.remove('switching');
      }, 200);
    } else {
      setImage(item, index);
    }
  }

  function setImage(item, index) {
    imgEl.src = item.src;
    imgEl.alt = item.alt;
    caption.textContent = item.caption || '';
    counter.textContent = `${items.length} / ${index + 1}`;
    updateNavVisibility();
  }

  /* ── Navigation ─────────────────────────────────────── */
  function showPrev() {
    if (currentIndex > 0) {
      currentIndex--;
      loadImage(currentIndex, true);
    }
  }

  function showNext() {
    if (currentIndex < items.length - 1) {
      currentIndex++;
      loadImage(currentIndex, true);
    }
  }

  function updateNavVisibility() {
    btnNext.style.visibility = currentIndex === items.length - 1 ? 'hidden' : 'visible';
    btnPrev.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
  }

  /* ── Event: Click gallery items ─────────────────────── */
  grid.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;

    buildItems();
    const galleryItems = Array.from(grid.querySelectorAll('.gallery-item'));
    const index = galleryItems.indexOf(item);
    if (index !== -1) openLightbox(index);
  });

  /* ── Event: Close button ─────────────────────────────── */
  btnClose.addEventListener('click', closeLightbox);

  /* ── Event: Backdrop click ───────────────────────────── */
  backdrop.addEventListener('click', closeLightbox);

  /* ── Event: Prev / Next buttons ─────────────────────── */
  btnPrev.addEventListener('click', showPrev);
  btnNext.addEventListener('click', showNext);

  /* ── Event: Keyboard navigation ─────────────────────── */
  document.addEventListener('keydown', (e) => {
    if (!isOpen) return;
    switch (e.key) {
      case 'Escape': closeLightbox(); break;
      case 'ArrowLeft': showPrev(); break;
      case 'ArrowRight': showNext(); break;
    }
  });

  /* ── Touch / Swipe support ───────────────────────────── */
  let touchStartX = 0;
  let touchStartY = 0;

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    if (!isOpen) return;
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;

    // Only register horizontal swipes (not vertical scrolls)
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx < 0) showNext();
      else showPrev();
    }
  }, { passive: true });

  /* ── Initialise ──────────────────────────────────────── */
  buildItems();

})();