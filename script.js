<script>
  const allImages = [
    "DSC00587.jpg",
    "DSC00616.jpg",
    "DSC00620.jpg",
    "DSC00626.jpg",
    "DSC00629.jpg",
    "DSC00631.jpg",
    "DSC01395.jpg",
    "DSC01453.jpg",
    "DSC01512.jpg",
    "DSC01625.jpg",
    "DSC01673.jpg",
    "DSC01780.jpg",
    "DSC01803.jpg",
    "DSC03380.jpg",
    "DSC03436.jpg",
    "DSC03539.jpg",
    "DSC03565.jpg",
    "DSC03570.jpg",
    "DSC03666.jpg",
    "DSC03768.jpg",
    "DSC09142.jpg",
    "DSC09149.jpg",
    "DSC09242.jpg",
    "DSC09266.jpg",
    "DSC09286.jpg",
    "DSC09306.jpg",
    "DSC09310.jpg",
    "DSC09319.jpg",
    "DSC09322.jpg",
    "DSC09352.jpg",
    "DSC09365.jpg",
    "DSC09368.jpg",
    "DSC09402.jpg",
    "DSC09407.jpg",
    "DSC09412.jpg",
    "DSC09421.jpg",
    "DSC09426.jpg",
    "DSC09437.jpg",
    "DSC09453.jpg",
    "DSC09459.jpg",
    "DVD.jpg",
    "IMG_0163.jpg",
    "IMG_0180.jpg",
    "Sourras.jpg",
    "agor_2290.JPG",
    "avr-1116.jpg",
    "avr-1475.jpg",
    "avr-4605.jpg",
    "avr-4609.jpg",
    "avr-4617.jpg",
    "avr-4622.jpg",
    "avr-4634.jpg",
    "avr-4637.jpg",
    "avr-4650.jpg",
    "avr-4662.jpg",
    "avr-4668.jpg",
    "avr-4670.jpg",
    "avr-4674.jpg",
    "avr-4677.jpg",
    "avr-4691.jpg",
    "avr-4700.jpg",
    "avr-4754.jpg",
    "avr-4757.jpg",
    "avr-4764.jpg",
    "avr-4778.jpg",
    "avr-4785.jpg",
    "avr-4800.jpg",
    "avr-4827.jpg",
    "avr-4834.jpg",
    "avr-4852.jpg",
    "avr-4865.jpg",
    "avr-4887.jpg",
    "avr-4897.jpg",
    "avr-4928.jpg",
    "avr-4940.jpg",
    "avr-4942.jpg",
    "avr-4990.jpg",
    "avr-5013.jpg",
    "avr-5021.jpg",
    "avr-5026.jpg",
    "avr-5034.jpg",
    "avr-5041.jpg",
    "avr-5049.jpg",
    "avr-5091.jpg",
    "avr-5106.jpg",
    "avr-5118.jpg",
    "avr-5119.jpg",
    "avr-5128.jpg",
    "avr-5139.jpg",
    "avr-5142.jpg",
    "avr-5148.jpg",
    "avr-5153.jpg",
    "avr-5158 (1).jpg",
    "avr-5158.jpg",
    "avr-5163 (1).jpg",
    "avr-5163.jpg",
    "avr-5172.jpg",
    "avr-5175 (1).jpg",
    "avr-5175.jpg",
    "gone-1452.jpg",
    "gone-1806.jpg",
    "il-1105.jpg",
    "il-1204.jpg",
    "il-1207.jpg",
    "il-1250.jpg",
    "il-1268.jpg",
    "il-1279.jpg",
    "il-1532.jpg",
    "il-2540.jpg",
    "il-2810.jpg",
    "il-2872.jpg",
    "il-4281.jpg",
    "il-4660.jpg",
    "il-4661.jpg",
    "il-4688.jpg",
    "il-4713.jpg",
    "il-4749.jpg",
    "il-4794.jpg",
    "il-4799.jpg",
    "il-4802.jpg",
    "il-4807.jpg",
    "il-4818.jpg",
    "il-4939.jpg",
    "il-4947.jpg",
    "il-4956.jpg",
    "il-4961.jpg",
    "il-4972.jpg",
    "il-4993.jpg",
    "il-5002.jpg",
    "il-5021.jpg",
    "il-5044.jpg",
    "il-5086.jpg",
    "il-5291.jpg",
    "il-5333.jpg",
    "il-5355.jpg",
    "il-5378.jpg",
    "il-5397.jpg",
    "il-5441.jpg",
    "il-5453.jpg",
    "il-5478.jpg",
    "il-5497.jpg",
    "il-5522.jpg",
    "il-5559.jpg",
    "il-5567.jpg",
    "il-5590.jpg",
    "il-5631_pp.jpg",
    "mantz-3097.jpg",
    "mantz-3140.jpg",
    "mantz-3660.jpg",
    "mantz-3672.jpg",
    "mantz-3686.jpg",
    "mantz-3702.jpg",
    "mantz-3719.jpg",
    "mantz-3724.jpg",
    "mantz-3740.jpg",
    "mantz-3744.jpg",
    "mantz-3756.jpg",
    "mantz-3772.jpg",
    "mantz-3779.jpg",
    "mantz-3797.jpg",
    "mantz-3814.jpg",
    "mantz-3820.jpg",
    "mantz-3828.jpg",
    "mantz-3839.jpg",
    "mantz-3850.jpg",
    "mantz-3855.jpg",
    "mantz-3861.jpg",
    "mantz-3872.jpg",
    "mantz-3895.jpg",
    "mantz-3921.jpg",
    "mantz-3932.jpg",
    "mantz-3939.jpg",
    "mantz-3964.jpg",
    "mantz-3979.jpg",
    "mantz-3986.jpg",
    "mantz-4015.jpg",
    "mantz-4024.jpg",
    "mantz-4054.jpg",
    "mantz-4192.jpg",
    "mantz-4195.jpg",
    "mantz-4305.jpg",
    "mantz-4308.jpg",
    "mantz-4355.jpg",
    "mantz-4417.jpg",
    "mantz-4450.jpg",
    "mantz-4494.jpg",
    "mantz-4503.jpg",
    "mantz-4521.jpg",
    "sak-1236.jpg",
    "sak-1317.jpg",
    "sak-1356.jpg",
    "sak-1747.jpg",
    "sam-2247.jpg"
  ];

  const heroImages = [
    "mantz-3986.jpg",
    "avr-4754.jpg",
    "il-4799.jpg",
    "DSC09412.jpg",
    "mantz-4054.jpg",
    "sak-1317.jpg"
  ];

  const uiText = {
    el: {
      lightboxOpen: "Άνοιγμα εικόνας",
      lightboxCaptionPrefix: "Εικόνα",
      headerMenuOpen: "Άνοιγμα μενού",
      headerMenuClose: "Κλείσιμο μενού"
    },
    en: {
      lightboxOpen: "Open image",
      lightboxCaptionPrefix: "Image",
      headerMenuOpen: "Open menu",
      headerMenuClose: "Close menu"
    }
  };

  let currentLang = "el";
  let currentGallery = [];
  let lightboxIndex = 0;
  let heroTimer = null;

  const masonryGallery = document.getElementById("masonryGallery");
  const reshuffleBtn = document.getElementById("reshuffleBtn");
  const topBtn = document.getElementById("topBtn");
  const heroSlides = document.getElementById("heroSlides");

  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightboxImage");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxClose = document.getElementById("lightboxClose");
  const lightboxPrev = document.getElementById("lightboxPrev");
  const lightboxNext = document.getElementById("lightboxNext");

  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobilePanel = document.getElementById("mobilePanel");

  function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function preloadImage(src) {
    if (!src) return;
    const img = new Image();
    img.src = src;
  }

  function createHeroSlides() {
    if (!heroSlides) return;

    heroSlides.innerHTML = "";

    heroImages.forEach((src, index) => {
      const slide = document.createElement("div");
      slide.className = `hero-slide${index === 0 ? " active" : ""}`;

      const image = document.createElement("img");
      image.src = src;
      image.alt = `Lafoto featured image ${index + 1}`;
      image.loading = index === 0 ? "eager" : "lazy";
      image.decoding = "async";
      if (index === 0) image.fetchPriority = "high";

      slide.appendChild(image);
      heroSlides.appendChild(slide);
    });
  }

  function startHeroSlider() {
    const slides = [...document.querySelectorAll(".hero-slide")];
    if (!slides.length) return;

    let current = 0;
    clearInterval(heroTimer);

    heroTimer = window.setInterval(() => {
      slides[current].classList.remove("active");
      current = (current + 1) % slides.length;
      slides[current].classList.add("active");

      const nextPreloadIndex = (current + 1) % slides.length;
      const nextImage = slides[nextPreloadIndex].querySelector("img");
      if (nextImage?.src) preloadImage(nextImage.src);
    }, 4800);
  }

  function getLightboxCaption(index) {
    const label = uiText[currentLang].lightboxCaptionPrefix;
    return `${label} ${index + 1} / ${currentGallery.length}`;
  }

  function renderGallery() {
    if (!masonryGallery) return;

    currentGallery = shuffle(allImages);
    masonryGallery.innerHTML = "";

    currentGallery.forEach((src, index) => {
      const item = document.createElement("button");
      item.className = "masonry-item";
      item.type = "button";
      item.setAttribute("aria-label", `${uiText[currentLang].lightboxOpen} ${index + 1}`);

      const image = document.createElement("img");
      image.src = src;
      image.alt = `Lafoto portfolio image ${index + 1}`;
      image.loading = index < 8 ? "eager" : "lazy";
      image.decoding = "async";
      if (index < 4) image.fetchPriority = "high";
      image.classList.add("is-loading");

      image.addEventListener("load", () => {
        image.classList.remove("is-loading");
      });

      image.addEventListener("error", () => {
        image.classList.remove("is-loading");
        image.classList.add("is-error");
      });

      item.appendChild(image);
      item.addEventListener("click", () => openLightbox(index));

      masonryGallery.appendChild(item);
    });
  }

  function updateLightbox() {
    const src = currentGallery[lightboxIndex];
    if (!src) return;

    lightboxImage.src = src;
    lightboxImage.alt = `Lafoto portfolio image ${lightboxIndex + 1}`;
    lightboxCaption.textContent = getLightboxCaption(lightboxIndex);

    const nextIndex = (lightboxIndex + 1) % currentGallery.length;
    const prevIndex = (lightboxIndex - 1 + currentGallery.length) % currentGallery.length;
    preloadImage(currentGallery[nextIndex]);
    preloadImage(currentGallery[prevIndex]);
  }

  function openLightbox(index) {
    lightboxIndex = index;
    updateLightbox();
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightboxDialog() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function prevImage() {
    if (!currentGallery.length) return;
    lightboxIndex = (lightboxIndex - 1 + currentGallery.length) % currentGallery.length;
    updateLightbox();
  }

  function nextImage() {
    if (!currentGallery.length) return;
    lightboxIndex = (lightboxIndex + 1) % currentGallery.length;
    updateLightbox();
  }

  function setLanguage(lang) {
    currentLang = lang;

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    document.querySelectorAll("[data-el][data-en]").forEach((element) => {
      const value = element.dataset[lang];
      if (typeof value === "string") {
        element.textContent = value;
      }
    });

    document.documentElement.lang = lang;

    renderGallery();

    if (lightbox.classList.contains("open")) {
      updateLightbox();
    }

    if (mobileMenuBtn) {
      const isOpen = mobilePanel.classList.contains("open");
      mobileMenuBtn.setAttribute(
        "aria-label",
        isOpen ? uiText[currentLang].headerMenuClose : uiText[currentLang].headerMenuOpen
      );
    }
  }

  function initLanguageButtons() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    });
  }

  function initReveal() {
    const revealItems = document.querySelectorAll(".reveal");
    if (!revealItems.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((element) => observer.observe(element));
  }

  function initMobileMenu() {
    if (!mobileMenuBtn || !mobilePanel) return;

    mobileMenuBtn.setAttribute("aria-label", uiText[currentLang].headerMenuOpen);

    mobileMenuBtn.addEventListener("click", () => {
      const isOpen = mobilePanel.classList.toggle("open");
      mobileMenuBtn.setAttribute(
        "aria-label",
        isOpen ? uiText[currentLang].headerMenuClose : uiText[currentLang].headerMenuOpen
      );
      mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
    });

    mobilePanel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobilePanel.classList.remove("open");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        mobileMenuBtn.setAttribute("aria-label", uiText[currentLang].headerMenuOpen);
      });
    });
  }

  function initButtons() {
    if (reshuffleBtn) {
      reshuffleBtn.addEventListener("click", renderGallery);
    }

    if (topBtn) {
      topBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    if (lightboxClose) {
      lightboxClose.addEventListener("click", closeLightboxDialog);
    }

    if (lightboxPrev) {
      lightboxPrev.addEventListener("click", prevImage);
    }

    if (lightboxNext) {
      lightboxNext.addEventListener("click", nextImage);
    }

    if (lightbox) {
      lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
          closeLightboxDialog();
        }
      });
    }

    document.addEventListener("keydown", (event) => {
      if (!lightbox.classList.contains("open")) return;

      if (event.key === "Escape") closeLightboxDialog();
      if (event.key === "ArrowLeft") prevImage();
      if (event.key === "ArrowRight") nextImage();
    });
  }

  function setYear() {
    const yearNode = document.getElementById("year");
    if (yearNode) yearNode.textContent = String(new Date().getFullYear());
  }

  function init() {
    createHeroSlides();
    renderGallery();
    startHeroSlider();
    initLanguageButtons();
    initReveal();
    initMobileMenu();
    initButtons();
    setYear();
    setLanguage("el");
  }

  init();
</script>
