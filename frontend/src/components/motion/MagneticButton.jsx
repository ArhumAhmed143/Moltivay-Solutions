import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export const MagneticButton = ({
  children,
  to,
  href,
  onClick,
  className = '',
  strength = 0.35,
}) => {
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(buttonRef.current, {
      x: x * strength,
      y: y * strength,
      duration: 0.25,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.4)',
    });
  };

  const destination = to || href;

  if (destination) {
    if (destination.startsWith('http') || destination.startsWith('mailto:') || destination.startsWith('tel:')) {
      return (
        <a
          ref={buttonRef}
          href={destination}
          target={destination.startsWith('http') ? '_blank' : undefined}
          rel={destination.startsWith('http') ? 'noopener noreferrer' : undefined}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`inline-block select-none ${className}`}
          onClick={onClick}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        ref={buttonRef}
        to={destination}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`inline-block select-none ${className}`}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block select-none ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
