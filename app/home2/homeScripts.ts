import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

type Cleanup = () => void;

const SETTINGS: {
  hSpeed: number;
  vSpeed: number;
  scrubPower: number;
  snapMode: number;
  noiseMode: number;
} = {
  hSpeed: 100,
  vSpeed: 100,
  scrubPower: 100,
  snapMode: 1,
  noiseMode: 1,
};

function qs<T extends Element = Element>(sel: string, root: ParentNode = document): T | null {
  return root.querySelector(sel) as T | null;
}
function qsa<T extends Element = Element>(sel: string, root: ParentNode = document): T[] {
  return Array.from(root.querySelectorAll(sel)) as T[];
}
function outerHeight(el: Element): number {
  return el.getBoundingClientRect().height;
}
function innerHeight(el: Element): number {
  return (el as HTMLElement).clientHeight;
}
function paddingTopPx(el: Element): number {
  const v = window.getComputedStyle(el).paddingTop || '0';
  return parseInt(v, 10) || 0;
}

function fadeOut(el: HTMLElement | null, ms: number): void {
  if (!el) return;
  el.style.transition = `opacity ${ms}ms ease`;
  el.style.opacity = '0';
  window.setTimeout(() => {
    el.style.display = 'none';
  }, ms);
}

function validateEmail(email: string): boolean {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function serializeForm(form: HTMLFormElement): string {
  const fd = new FormData(form);
  const params = new URLSearchParams();
  fd.forEach((v, k) => params.append(k, String(v)));
  return params.toString();
}

function initNoise(): Cleanup {
  if (SETTINGS.noiseMode === 0) return () => {};

  const canvas = document.getElementById('noise') as HTMLCanvasElement | null;
  const canvas2 = document.getElementById('noise_menu') as HTMLCanvasElement | null;
  if (!canvas || !canvas2) return () => {};

  const ctx = canvas.getContext('2d');
  const ctx2 = canvas2.getContext('2d');
  if (!ctx || !ctx2) return () => {};

  let wWidth = 0;
  let wHeight = 0;
  let noiseData: ImageData[] = [];
  let frame = 0;
  let loopTimeout: number | undefined;
  let resizeThrottle: number | undefined;

  const createNoise = () => {
    const idata = ctx.createImageData(wWidth, wHeight);
    const buffer32 = new Uint32Array(idata.data.buffer);
    const len = buffer32.length;
    for (let i = 0; i < len; i++) {
      if (Math.random() < 0.5) buffer32[i] = 0xff000000;
    }
    noiseData.push(idata);
  };

  const paintNoise = () => {
    frame = frame === 9 ? 0 : frame + 1;
    ctx.putImageData(noiseData[frame], 0, 0);
    ctx2.putImageData(noiseData[frame], 0, 0);
  };

  const loop = () => {
    paintNoise();
    loopTimeout = window.setTimeout(() => window.requestAnimationFrame(loop), 1000 / 25);
  };

  const setup = () => {
    wWidth = window.innerWidth;
    wHeight = window.innerHeight;
    canvas.width = wWidth;
    canvas.height = wHeight;
    canvas2.width = wWidth;
    canvas2.height = wHeight;
    noiseData = [];
    for (let i = 0; i < 10; i++) createNoise();
    loop();
  };

  const onResize = () => {
    if (resizeThrottle) window.clearTimeout(resizeThrottle);
    resizeThrottle = window.setTimeout(() => {
      if (loopTimeout) window.clearTimeout(loopTimeout);
      setup();
    }, 200);
  };

  window.addEventListener('resize', onResize, false);
  setup();

  return () => {
    window.removeEventListener('resize', onResize, false);
    if (loopTimeout) window.clearTimeout(loopTimeout);
    if (resizeThrottle) window.clearTimeout(resizeThrottle);
  };
}

function initCirclesLines(): void {
  const container = qs<HTMLElement>('.home__circles-lines');
  if (!container) return;
  if (container.children.length > 0) return;

  let l = 82;
  const fragment = document.createDocumentFragment();
  const div = document.createElement('div');
  while (l--) fragment.appendChild(div.cloneNode(true));
  container.appendChild(fragment);
}

function initValidInputs(): Cleanup {
  const inputs = qsa<HTMLInputElement>('.content__form-input input');
  const cleanups: Cleanup[] = [];

  inputs.forEach((input) => {
    const update = () => {
      if ((input.value || '').length > 0) input.classList.add('valid');
      else input.classList.remove('valid');
    };
    input.addEventListener('change', update);
    input.addEventListener('blur', update);
    cleanups.push(() => {
      input.removeEventListener('change', update);
      input.removeEventListener('blur', update);
    });
  });

  return () => cleanups.forEach((c) => c());
}

function initContactForm(): Cleanup {
  const onSubmit = (e: Event) => {
    const form = e.target as HTMLFormElement | null;
    if (!form || !(form instanceof HTMLFormElement)) return;
    if (!form.matches('.js-contact-form')) return;
    e.preventDefault();

    let valid = true;
    qsa<HTMLInputElement>('input[required]', form).forEach((input) => {
      const type = (input.getAttribute('type') || '').toLowerCase();
      const value = input.value || '';
      switch (type) {
        case 'text': {
          const minlength = parseInt(input.getAttribute('minlength') || '0', 10);
          if (minlength > 0 && value.length < minlength) valid = false;
          break;
        }
        case 'email': {
          if (!validateEmail(value)) valid = false;
          break;
        }
        default:
          break;
      }
    });

    if (!valid) {
      alert('Enter the data in the required fields');
      return;
    }

    fetch('/php/mail.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      body: serializeForm(form),
    })
      .then((r) => r.text())
      .then((t) => alert(t))
      .catch((err) => alert(String(err)));
  };

  document.addEventListener('submit', onSubmit);
  return () => document.removeEventListener('submit', onSubmit);
}

function initReviewsSlider(): Cleanup {
  if (!qs('.home-page')) return () => {};

  const slides = Array.from(document.querySelectorAll<HTMLElement>('.slide'));
  const prevButton = document.querySelector<HTMLElement>('#prevButton');
  const nextButton = document.querySelector<HTMLElement>('#nextButton');
  if (slides.length === 0 || !prevButton || !nextButton) return () => {};

  const slideDuration = 0.3;
  const numSlides = slides.length;

  slides.forEach((slide, i) => {
    gsap.set(slide, { backgroundColor: Math.random() * 0xffffff, xPercent: i * 100 });
  });

  const wrapPartial = (min: number, max: number) => {
    const r = max - min;
    return (value: number) => {
      const v = value - min;
      return ((r + (v % r)) % r) + min;
    };
  };

  const wrap = wrapPartial(-100, (numSlides - 1) * 100);

  const animation = gsap.to(slides, {
    duration: 1,
    xPercent: `-=${numSlides * 100}`,
    ease: 'none',
    paused: true,
    repeat: -1,
    modifiers: {
      xPercent: (x: string) => String(wrap(parseFloat(x))),
    },
  });

  const proxy = document.createElement('div');
  gsap.set(proxy, { x: '+=0' });

  let slideAnimation = gsap.to({}, { duration: 0.1 });
  let slideWidth = 0;
  let wrapWidth = 0;

  const snapX = (x: number) => Math.round(x / slideWidth) * slideWidth;

  const updateProgress = () => {
    const x = gsap.getProperty(proxy, 'x') as number;
    animation.progress(x / wrapWidth);
  };

  const animateSlides = (direction: number) => {
    slideAnimation.kill();
    const x = snapX((gsap.getProperty(proxy, 'x') as number) + direction * slideWidth);
    slideAnimation = gsap.to(proxy, { duration: slideDuration, x, onUpdate: updateProgress });
  };

  const resize = () => {
    const norm = ((gsap.getProperty(proxy, 'x') as number) / wrapWidth) || 0;
    slideWidth = slides[0]?.offsetWidth || 0;
    wrapWidth = slideWidth * numSlides || 1;
    gsap.set(proxy, { x: norm * wrapWidth });
    animateSlides(0);
    slideAnimation.progress(1);
  };

  resize();
  window.addEventListener('resize', resize);

  const onPrev = () => animateSlides(-1);
  const onNext = () => animateSlides(1);
  prevButton.addEventListener('click', onPrev);
  nextButton.addEventListener('click', onNext);

  return () => {
    window.removeEventListener('resize', resize);
    prevButton.removeEventListener('click', onPrev);
    nextButton.removeEventListener('click', onNext);
    slideAnimation.kill();
    animation.kill();
  };
}

function initHomeScroll(): Cleanup {
  const homePage = qs('.home-page');
  if (!homePage) return () => {};

  // match original behavior: desktop only
  if (!(window.innerWidth > 768 && window.orientation !== 0)) {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.('.js-scroll-link') as HTMLAnchorElement | null;
      if (!link) return;
      e.preventDefault();
      const href = link.getAttribute('href');
      if (!href) return;
      const section = qs<HTMLElement>(href);
      if (!section) return;
      const headerH = outerHeight(qs('.header') || section) || 0;
      const top = section.getBoundingClientRect().top + window.scrollY - headerH;
      window.scrollTo({ top, behavior: 'smooth' });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const projectsBlocksEl = qs<HTMLElement>('.projects__blocks');
  const newsBlocksEl = qs<HTMLElement>('.news__blocks');

  const titles = gsap.utils.toArray<HTMLElement>('.page-title li');
  const sections = gsap.utils.toArray<HTMLElement>('.scrollable');
  const projectBlocks = gsap.utils.toArray<HTMLElement>('.projects__blocks .projects__block');
  const newsBlocks = gsap.utils.toArray<HTMLElement>('.news__blocks .news__block');

  const projectHeights: number[] = [];
  const projectHeightsScroll: number[] = [];
  let projectHeightsTotal = 0;
  let tempHeight = 0;
  projectBlocks.forEach((block, index) => {
    const height = outerHeight(block);
    const padding = paddingTopPx(block);
    if (index > 0) {
      projectHeights[index] = tempHeight - innerHeight(projectsBlocksEl || block) / 2;
      projectHeightsScroll[index] = tempHeight + padding;
    } else {
      projectHeights[index] = 0;
      projectHeightsScroll[index] = 0;
    }
    tempHeight += height;
  });
  projectHeightsTotal = tempHeight;

  const newsHeights: number[] = [];
  const newsHeightsScroll: number[] = [];
  let newsHeightsTotal = 0;
  tempHeight = 0;
  newsBlocks.forEach((block, index) => {
    const height = outerHeight(block);
    const padding = paddingTopPx(block);
    if (index > 0) {
      newsHeights[index] = tempHeight - innerHeight(newsBlocksEl || block) / 2;
      newsHeightsScroll[index] = tempHeight + padding;
    } else {
      newsHeights[index] = 0;
      newsHeightsScroll[index] = 0;
    }
    tempHeight += height;
  });
  newsHeightsTotal = tempHeight;

  let skipMode = false;
  let blockNavigation = false;

  const scrollDurationHome = 1000 * (parseInt(String(SETTINGS.hSpeed), 10) / 100);
  const addBlocksScroll = 200;
  const projectBlocksScroll =
    (projectHeightsTotal - innerHeight(projectsBlocksEl || homePage)) < 0
      ? 0
      : (projectHeightsTotal - innerHeight(projectsBlocksEl || homePage)) *
        (parseInt(String(SETTINGS.vSpeed), 10) / 100);
  const newsBlocksScroll =
    (newsHeightsTotal - innerHeight(newsBlocksEl || homePage)) < 0
      ? 0
      : (newsHeightsTotal - innerHeight(newsBlocksEl || homePage)) * (parseInt(String(SETTINGS.vSpeed), 10) / 100);

  const linkData: Record<string, number> = {
    0: 0,
    1: scrollDurationHome,
    2: scrollDurationHome * 2 + projectBlocksScroll + addBlocksScroll * 2,
    3: scrollDurationHome * 3 + projectBlocksScroll + addBlocksScroll * 2,
    4: scrollDurationHome * 4 + projectBlocksScroll + addBlocksScroll * 2,
    5: scrollDurationHome * 5 + projectBlocksScroll + addBlocksScroll * 2,
    6: scrollDurationHome * 6 + projectBlocksScroll + newsBlocksScroll + addBlocksScroll * 4,
  };

  const headerMenu = qs('.header__menu');
  const headerMenuItems = qsa<HTMLLIElement>('.header__menu li');
  const setActiveMenu = (idx: number) => {
    headerMenuItems.forEach((li) => li.classList.remove('active'));
    headerMenuItems[idx]?.classList.add('active');
  };

  const stPinned = ScrollTrigger.create({
    trigger: '.scroll',
    pin: true,
    scrub: true,
    start: 'top top',
    end: `+=${scrollDurationHome * (sections.length - 1) + projectBlocksScroll + newsBlocksScroll + addBlocksScroll * 4}`,
    animation: gsap.timeline(),
  });

  // home section horizontal movement
  const tl1 = gsap.timeline();
  ScrollTrigger.create({
    trigger: 'body',
    scrub: parseInt(String(SETTINGS.scrubPower), 10) / 100,
    start: '0 -0',
    snap: parseInt(String(SETTINGS.snapMode), 10),
    end: `+=${scrollDurationHome}`,
    onUpdate: () => {
      blockNavigation = true;
      headerMenu?.classList.add('blocked');
    },
    onScrubComplete: () => {
      blockNavigation = false;
      headerMenu?.classList.remove('blocked');
    },
    animation: tl1,
  });

  tl1.fromTo(sections, { xPercent: 0 }, { xPercent: -100, ease: 'none' }, 0);

  // intro animations (GSAP3 equivalents of TweenMax/TimelineMax)
  gsap.delayedCall(0.4, () => {
    const tlIntro = gsap.timeline();
    const homeTitles = gsap.utils.toArray<HTMLElement>('.home .content__title > *');
    homeTitles.forEach((title, index) => {
      tlIntro.from(
        title,
        {
          duration: 1,
          autoAlpha: 0,
          ...(index % 2 === 0 ? { x: -600 } : { x: 600 }),
          ease: 'power1.out',
        },
        0.2 * index,
      );
    });
    tlIntro.from(
      '.home .content__description',
      { duration: 1, autoAlpha: 0, x: -600, ease: 'power1.out' },
      '-=0.5',
    );
    tlIntro.from('.home .content__btn-block > *', { duration: 1, scale: 0, ease: 'back.out(1.7)' }, '-=0.5');

    gsap.from('.home__number', { duration: 1, autoAlpha: 0, y: 300, ease: 'back.out(1.7)', stagger: 0.3 });
  });

  gsap.delayedCall(0.5, () => {
    const numbers = gsap.utils.toArray<HTMLElement>('.home__number-digital[data-number]');
    numbers.forEach((numberEl) => {
      const target = parseInt(numberEl.getAttribute('data-number') || '0', 10);
      const Cont = { val: 0 };
      gsap.to(Cont, {
        duration: 2,
        val: target,
        roundProps: 'val',
        onUpdate: () => {
          numberEl.innerHTML = String(Cont.val);
        },
      });
    });
  });

  gsap.delayedCall(0.8, () => {
    gsap.to('.home__circles-lines div', { height: '100%', duration: 2, opacity: 1 });
  });
  gsap.delayedCall(1, () => {
    gsap.to('.home__circle--left', { left: '65%', duration: 2, opacity: 1 });
    gsap.to('.home__circle--right', { right: '35%', duration: 2, opacity: 1 });
  });

  // menu navigation click (desktop)
  const onClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    const link = target?.closest?.('.js-scroll-link') as HTMLElement | null;
    if (!link) return;
    e.preventDefault();
    if (blockNavigation || skipMode) return;

    headerMenu?.classList.add('blocked');
    gsap.fromTo('.home-page', { autoAlpha: 1 }, { duration: 0.4, autoAlpha: 0 });
    skipMode = true;

    const idx = parseInt(link.getAttribute('data-link') || '0', 10);
    window.setTimeout(() => {
      stPinned.scroll(linkData[String(idx)]);
      gsap.set(titles, { y: '100%' });
      if (titles[idx]) gsap.set(titles[idx], { y: '0' });
      gsap.set(sections, { xPercent: -100 * idx, ease: 'none' });
      setActiveMenu(idx);
      gsap.fromTo('.home-page', { autoAlpha: 0 }, { duration: 0.5, autoAlpha: 1 });
      window.setTimeout(() => {
        skipMode = false;
        headerMenu?.classList.remove('blocked');
      }, 500);
    }, 500);
  };

  const onProjectsMenu = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    const a = target?.closest?.('.projects__menu a') as HTMLAnchorElement | null;
    if (!a) return;
    e.preventDefault();
    const li = a.parentElement;
    if (!li) return;
    const idx = Array.prototype.indexOf.call(li.parentElement?.children || [], li);
    const denom = projectHeightsTotal - innerHeight(projectsBlocksEl || homePage) || 1;
    const progress = projectHeightsScroll[idx] / denom;
    const scrollTo = linkData['1'] + addBlocksScroll * 2 + projectBlocksScroll * progress;
    stPinned.scroll(scrollTo);
  };

  const onNewsMenu = (e: MouseEvent) => {
    const target = e.target as HTMLElement | null;
    const a = target?.closest?.('.news__menu a') as HTMLAnchorElement | null;
    if (!a) return;
    e.preventDefault();
    const li = a.parentElement;
    if (!li) return;
    const idx = Array.prototype.indexOf.call(li.parentElement?.children || [], li);
    const denom = newsHeightsTotal - innerHeight(newsBlocksEl || homePage) || 1;
    const progress = newsHeightsScroll[idx] / denom;
    const scrollTo = linkData['5'] + addBlocksScroll + newsBlocksScroll * progress;
    stPinned.scroll(scrollTo);
  };

  document.addEventListener('click', onClick);
  document.addEventListener('click', onProjectsMenu);
  document.addEventListener('click', onNewsMenu);

  return () => {
    document.removeEventListener('click', onClick);
    document.removeEventListener('click', onProjectsMenu);
    document.removeEventListener('click', onNewsMenu);
    ScrollTrigger.getAll().forEach((t) => t.kill());
    gsap.killTweensOf('*');
  };
}

function initGradientScroll(): Cleanup {
  const homePage = qs<HTMLElement>('.home-page');
  const content = qs<HTMLElement>('.home-page .content');
  if (!homePage || !content) return () => {};

  // Define gradient colors for each section (seamless transition)
  // Each section starts with the previous section's end color
  const gradientStops = [
    { start: '#E8F4FC', mid: '#D4E8F5', end: '#FFE5D8' },      // Section 1: Blue to Peach
    { start: '#FFE5D8', mid: '#F5D4C8', end: '#F5A68C' },      // Section 2: Peach to Coral
    { start: '#F5A68C', mid: '#E8B8A8', end: '#D4E8F5' },      // Section 3: Coral to Blue
    { start: '#D4E8F5', mid: '#B8D4E8', end: '#FFE5D8' },      // Section 4: Blue to Peach
    { start: '#FFE5D8', mid: '#F5D4C8', end: '#E8F4FC' },      // Section 5: Peach to Blue
    { start: '#E8F4FC', mid: '#D4E8F5', end: '#F5A68C' },      // Section 6: Blue to Coral
    { start: '#F5A68C', mid: '#FFE5D8', end: '#E8F4FC' },      // Section 7: Coral to Blue
  ];

  const sections = qsa<HTMLElement>('.scrollable');
  const numSections = sections.length;

  const updateGradient = () => {
    const scrollProgress = getScrolledPercentage() / 100;
    const sectionIndex = Math.min(Math.floor(scrollProgress * numSections), numSections - 1);
    const sectionProgress = (scrollProgress * numSections) % 1;
    
    const currentGradient = gradientStops[sectionIndex] || gradientStops[0];
    const nextGradient = gradientStops[(sectionIndex + 1) % gradientStops.length];
    
    // Interpolate rotation angle based on scroll (0 to 360 degrees across all sections)
    const rotationAngle = 135 + (scrollProgress * 180);
    
    // Interpolate colors between current and next section
    const interpolateColor = (color1: string, color2: string, progress: number) => {
      const hex1 = color1.replace('#', '');
      const hex2 = color2.replace('#', '');
      const r1 = parseInt(hex1.substring(0, 2), 16);
      const g1 = parseInt(hex1.substring(2, 4), 16);
      const b1 = parseInt(hex1.substring(4, 6), 16);
      const r2 = parseInt(hex2.substring(0, 2), 16);
      const g2 = parseInt(hex2.substring(2, 4), 16);
      const b2 = parseInt(hex2.substring(4, 6), 16);
      const r = Math.round(r1 + (r2 - r1) * progress);
      const g = Math.round(g1 + (g2 - g1) * progress);
      const b = Math.round(b1 + (b2 - b1) * progress);
      return `rgb(${r}, ${g}, ${b})`;
    };
    
    const startColor = interpolateColor(currentGradient.start, nextGradient.start, sectionProgress);
    const midColor = interpolateColor(currentGradient.mid, nextGradient.mid, sectionProgress);
    const endColor = interpolateColor(currentGradient.end, nextGradient.end, sectionProgress);
    
    const gradientString = `linear-gradient(${rotationAngle}deg, ${startColor} 0%, ${midColor} 50%, ${endColor} 100%)`;
    
    // Apply to all content sections
    const allContents = qsa<HTMLElement>('.home-page .content');
    allContents.forEach((el) => {
      el.style.background = gradientString;
    });
  };

  // Initial update
  updateGradient();

  // Update on scroll
  const onScroll = () => {
    requestAnimationFrame(updateGradient);
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  return () => {
    window.removeEventListener('scroll', onScroll);
  };
}

export function initHome2Scripts(): Cleanup {
  const cleanups: Cleanup[] = [];

  // Always reset scroll on reload (original behavior)
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  // Basic DOM-dependent setup
  initCirclesLines();

  // Run after full load (preloader fade)
  fadeOut(qs<HTMLElement>('#preloader'), 1500);

  // Initialize effects/handlers
  cleanups.push(initNoise());
  cleanups.push(initValidInputs());
  cleanups.push(initContactForm());
  cleanups.push(initReviewsSlider());
  cleanups.push(initHomeScroll());
  cleanups.push(initGradientScroll());

  return () => cleanups.forEach((c) => c());
}

export function getScrolledPercentage(): number {
    return (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
}
