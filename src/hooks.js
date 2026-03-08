
import { useEffect, useRef, useState, useCallback } from 'react';

export function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('in'); obs.unobserve(el); } },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export function useCounter(target, active) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let cur = 0;
    const step = target / 40;
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { cur = target; clearInterval(t); }
      setVal(Number.isInteger(target) ? Math.round(cur) : parseFloat(cur.toFixed(1)));
    }, 30);
    return () => clearInterval(t);
  }, [target, active]);
  return val;
}

export function useSmoke(ref) {
  const interval = useRef(null);
  const start = useCallback(() => {
    const container = ref.current;
    if (!container) return;
    const make = () => {
      const el = document.createElement('div');
      el.className = 'smoke-line';
      el.style.cssText = `position:absolute;bottom:0;width:1px;background:linear-gradient(to top,#8b0000,transparent);animation:smokeRise linear infinite;opacity:0;left:${Math.random()*100}%;height:${40+Math.random()*60}vh;animation-duration:${4+Math.random()*6}s;animation-delay:${Math.random()*3}s;width:${0.5+Math.random()*1.5}px`;
      container.appendChild(el);
      setTimeout(() => el.remove(), 10000);
    };
    for (let i = 0; i < 15; i++) setTimeout(make, i * 200);
    interval.current = setInterval(make, 400);
  }, [ref]);
  const stop = useCallback(() => clearInterval(interval.current), []);
  return { start, stop };
}
