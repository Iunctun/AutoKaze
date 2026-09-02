// AUTO KAZE — shared site behavior (mobile nav, purchase modal, hero video)

document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
    initPurchaseModal();
    initHeroVideo();
});

function initMobileNav() {
    var toggle = document.getElementById('navToggle');
    var mobileNav = document.getElementById('mobileNav');
    if (!toggle || !mobileNav) return;

    toggle.addEventListener('click', function () {
        var isOpen = !mobileNav.classList.contains('hidden');
        mobileNav.classList.toggle('hidden');
        toggle.setAttribute('aria-expanded', String(!isOpen));
    });
}

function initPurchaseModal() {
    var modal = document.getElementById('purchaseModal');
    if (!modal) return;

    var modalProductName = document.getElementById('modalProductName');
    var dialog = modal.querySelector('[role="dialog"]');

    window.openModal = function (productName) {
        if (modalProductName && productName) {
            modalProductName.textContent = productName;
        }
        modal.classList.remove('hidden');
        modal.classList.add('flex', 'active');

        if (dialog) {
            requestAnimationFrame(function () {
                dialog.classList.add('modal-enter-active');
                dialog.classList.remove('modal-enter', 'modal-exit-active');
            });
        }
        document.body.style.overflow = 'hidden';
    };

    window.closeModal = function () {
        if (dialog) {
            dialog.classList.remove('modal-enter-active');
            dialog.classList.add('modal-exit-active');
        }
        setTimeout(function () {
            modal.classList.add('hidden');
            modal.classList.remove('flex', 'active');
            if (dialog) dialog.classList.remove('modal-exit-active');
            document.body.style.overflow = '';
        }, dialog ? 200 : 0);
    };

    modal.addEventListener('click', function (e) {
        if (e.target === modal) window.closeModal();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            window.closeModal();
        }
    });
}

function initHeroVideo() {
    var wrap = document.getElementById('heroVideoWrap');
    var video = document.getElementById('heroVideo');
    if (!wrap || !video) return;

    var markFailed = function () { wrap.classList.add('video-failed'); };
    video.addEventListener('error', markFailed, true);
    video.addEventListener('stalled', function () {
        if (video.readyState === 0) markFailed();
    });

    var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        video.pause();
        wrap.classList.add('video-failed');
    } else if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    video.play().catch(function () {});
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.1 });
        observer.observe(video);
    }
}
