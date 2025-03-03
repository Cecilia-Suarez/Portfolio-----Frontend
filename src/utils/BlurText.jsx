import { useRef, useEffect, useState } from 'react';
import { useSprings, animated } from '@react-spring/web';

const BlurText = ({
  text = '',
  as: Component = 'p', 
  delay = 300,
  className = '',
  animateBy = 'words', 
  direction = 'top', 
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t) => t * (2 - t), 
  onAnimationComplete,
}) => {
  const ref = useRef(null);
  const animatedCount = useRef(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const elements = animateBy === 'words' ? text.split(' ') : [...text];

  const defaultFrom =
    direction === 'top'
      ? { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,-50px,0)' }
      : { filter: 'blur(10px)', opacity: 0, transform: 'translate3d(0,50px,0)' };

  const defaultTo = [
    {
      filter: 'blur(5px)',
      opacity: 0.5,
      transform: direction === 'top' ? 'translate3d(0,5px,0)' : 'translate3d(0,-5px,0)',
    },
    { filter: 'blur(0px)', opacity: 1, transform: 'translate3d(0,0,0)' },
  ];

  const springs = useSprings(
    elements.length,
    elements.map((_, i) => ({
      from: animationFrom || defaultFrom,
      to: inView
        ? async (next) => {
          for (const step of animationTo || defaultTo) {
            await next(step);
          }
          animatedCount.current += 1;
          if (animatedCount.current === elements.length && onAnimationComplete) {
            onAnimationComplete();
          }
        }
        : animationFrom || defaultFrom,
      delay: i * delay,
      config: { easing },
    }))
  );

  return (
    <Component ref={ref} className={className} style={{ whiteSpace: 'pre-wrap' }}>
      {springs.map((props, index) => (
        <animated.span
          key={index}
          style={{
            ...props,
            display: 'inline-block',
            willChange: 'transform, filter, opacity',
            fontSize: 'inherit',
          }}
        >
          {elements[index]}
          {animateBy === 'words' && index < elements.length - 1 && ' '}
        </animated.span>
      ))}
    </Component>
  );
};

export default BlurText;
