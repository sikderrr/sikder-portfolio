(function() {
      // 1. Subtle Mouse-Follow Spotlight Effect
      const spotlight = document.getElementById('ambient-spotlight');
      if (spotlight && window.matchMedia('(pointer: fine)').matches) {
        let rafId;
        window.addEventListener('mousemove', (e) => {
          if (rafId) cancelAnimationFrame(rafId);
          rafId = requestAnimationFrame(() => {
            spotlight.style.setProperty('--mouse-x', `${e.clientX}px`);
            spotlight.style.setProperty('--mouse-y', `${e.clientY}px`);
          });
        }, { passive: true });
      }

      // 2. High-Performance IntersectionObserver for Entrance Reveals
      const revealItems = document.querySelectorAll('.reveal-item');
      if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              obs.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.08,
          rootMargin: '0px 0px -40px 0px'
        });

        revealItems.forEach((el, index) => {
          el.style.transitionDelay = `${Math.min(index * 0.08, 0.3)}s`;
          observer.observe(el);
        });
      } else {
        revealItems.forEach(el => el.classList.add('revealed'));
      }

      // 3. Work Filters Functionality (Video edits vs Thumbnails)
      const filterButtons = document.querySelectorAll('.filter-btn');
      const projectCards = document.querySelectorAll('#work-feed .project-card');
      const btnMoreWork = document.getElementById('btn-more-work');
      const btnMoreText = document.getElementById('btn-more-text');

      // Grid Modal Elements
      const gridModal = document.getElementById('grid-modal');
      const gridModalTitle = document.getElementById('grid-modal-title');
      const gridModalClose = document.getElementById('grid-modal-close');
      const modalFilterVideo = document.getElementById('modal-filter-video');
      const modalFilterThumb = document.getElementById('modal-filter-thumb');
      const modalGridContainer = document.getElementById('modal-grid-container');

      let currentFilter = 'video';

      function applyFilter(filter) {
        currentFilter = filter;
        filterButtons.forEach(b => {
          if (b.getAttribute('data-filter') === filter) {
            b.classList.add('bg-accent-yellow', 'text-black', 'font-bold');
            b.classList.remove('text-gray-400', 'font-medium');
          } else {
            b.classList.remove('bg-accent-yellow', 'text-black', 'font-bold');
            b.classList.add('text-gray-400', 'font-medium');
          }
        });

        projectCards.forEach(card => {
          const type = card.getAttribute('data-type');
          card.style.display = (type === filter) ? '' : 'none';
        });

        if (btnMoreText) {
          btnMoreText.textContent = (filter === 'video') ? 'More Video Edits' : 'More Thumbnails';
        }
      }

      filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          applyFilter(btn.getAttribute('data-filter'));
        });
      });

      // Default filter on initial load: Video edits only
      applyFilter('video');

      // 4. Modal Lightbox Functionality
      const dialog = document.getElementById('project-dialog');
      const dialogClose = document.getElementById('dialog-close');
      const dialogKicker = document.getElementById('dialog-kicker');
      const dialogTitle = document.getElementById('dialog-title');
      const dialogDesc = document.getElementById('dialog-desc');
      const dialogRole = document.getElementById('dialog-role');
      const dialogTools = document.getElementById('dialog-tools');
      const dialogIframe = document.getElementById('dialog-iframe');
      const dialogImg = document.getElementById('dialog-img');
      const dialogExtLink = document.getElementById('dialog-external-link');

      function extractYouTubeId(url) {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
      }

      function openProjectDetails(card) {
        const type = card.getAttribute('data-type');
        const title = card.getAttribute('data-title');
        const category = card.getAttribute('data-category');
        const desc = card.getAttribute('data-desc');
        const role = card.getAttribute('data-role');
        const tools = card.getAttribute('data-tools');
        const image = card.getAttribute('data-image');
        const videoUrl = card.getAttribute('data-video-url');

        dialogKicker.textContent = category || 'PROJECT';
        dialogTitle.textContent = title || '';
        dialogDesc.textContent = desc || '';
        dialogRole.textContent = role ? `Role: ${role}` : '';
        dialogTools.textContent = tools ? `Tools: ${tools}` : '';

        if (type === 'video' && videoUrl) {
          const videoId = extractYouTubeId(videoUrl);
          dialogIframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
          dialogIframe.hidden = false;
          dialogImg.hidden = true;
          dialogExtLink.href = videoUrl;
          dialogExtLink.hidden = false;
          dialogExtLink.querySelector('span').textContent = 'Watch on YouTube';
        } else {
          dialogIframe.src = '';
          dialogIframe.hidden = true;
          dialogImg.src = image;
          dialogImg.hidden = false;
          dialogExtLink.href = image;
          dialogExtLink.hidden = false;
          dialogExtLink.querySelector('span').textContent = 'Open Full Artwork';
        }

        if (typeof dialog.showModal === 'function') {
          dialog.showModal();
        }
      }

      // Attach click handlers to feed cards
      projectCards.forEach(card => {
        card.addEventListener('click', () => {
          openProjectDetails(card);
        });
      });

      function closeDialog() {
        dialogIframe.src = '';
        dialog.close();
      }

      if (dialogClose) {
        dialogClose.addEventListener('click', closeDialog);
      }

      dialog.addEventListener('click', (e) => {
        const rect = dialog.getBoundingClientRect();
        if (
          e.clientX < rect.left ||
          e.clientX > rect.right ||
          e.clientY < rect.top ||
          e.clientY > rect.bottom
        ) {
          closeDialog();
        }
      });

      // 5. Grid Showcase Modal Functionality
      function populateModalGrid(filter) {
        if (!modalGridContainer) return;
        modalGridContainer.innerHTML = '';

        if (filter === 'video') {
          modalFilterVideo.classList.add('bg-accent-yellow', 'text-black', 'font-bold');
          modalFilterVideo.classList.remove('text-gray-400', 'font-medium');
          modalFilterThumb.classList.remove('bg-accent-yellow', 'text-black', 'font-bold');
          modalFilterThumb.classList.add('text-gray-400', 'font-medium');
          gridModalTitle.textContent = 'All Videos (3)';
        } else {
          modalFilterThumb.classList.add('bg-accent-yellow', 'text-black', 'font-bold');
          modalFilterThumb.classList.remove('text-gray-400', 'font-medium');
          modalFilterVideo.classList.remove('bg-accent-yellow', 'text-black', 'font-bold');
          modalFilterVideo.classList.add('text-gray-400', 'font-medium');
          gridModalTitle.textContent = 'All Thumbnails (11)';
        }

        projectCards.forEach(card => {
          if (card.getAttribute('data-type') === filter) {
            const clone = card.cloneNode(true);
            clone.style.display = '';
            clone.classList.remove('w-full');
            clone.addEventListener('click', () => {
              openProjectDetails(clone);
            });
            modalGridContainer.appendChild(clone);
          }
        });
      }

      if (btnMoreWork) {
        btnMoreWork.addEventListener('click', () => {
          populateModalGrid(currentFilter);
          if (typeof gridModal.showModal === 'function') {
            gridModal.showModal();
          }
        });
      }

      if (modalFilterVideo) {
        modalFilterVideo.addEventListener('click', () => populateModalGrid('video'));
      }
      if (modalFilterThumb) {
        modalFilterThumb.addEventListener('click', () => populateModalGrid('thumb'));
      }
      if (gridModalClose) {
        gridModalClose.addEventListener('click', () => gridModal.close());
      }
      if (gridModal) {
        gridModal.addEventListener('click', (e) => {
          const rect = gridModal.getBoundingClientRect();
          if (
            e.clientX < rect.left ||
            e.clientX > rect.right ||
            e.clientY < rect.top ||
            e.clientY > rect.bottom
          ) {
            gridModal.close();
          }
        });
      }


      function closeDialog() {
        dialogIframe.src = '';
        dialog.close();
      }

      if (dialogClose) {
        dialogClose.addEventListener('click', closeDialog);
      }

      dialog.addEventListener('click', (e) => {
        const rect = dialog.getBoundingClientRect();
        if (
          e.clientX < rect.left ||
          e.clientX > rect.right ||
          e.clientY < rect.top ||
          e.clientY > rect.bottom
        ) {
          closeDialog();
        }
      });
    })();
