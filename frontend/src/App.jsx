import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

// Scroll to top helper on navigation
const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();
  const scrollPositions = useRef(new Map());

  useLayoutEffect(() => {
    if (navigationType === 'POP') {
      window.scrollTo({ top: scrollPositions.current.get(key) ?? 0, behavior: 'instant' });
    } else if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    return () => scrollPositions.current.set(key, window.scrollY);
  }, [pathname, hash, key, navigationType]);

  return null;
};

const routeMetadata = {
  '/': {
    title: 'Moltivay Solutions | Web, Mobile & AI Product Development',
    description: 'Moltivay Solutions designs and builds web applications, mobile apps, cloud platforms, and AI-enabled products for growing businesses.',
  },
  '/services': {
    title: 'Software Development Services | Moltivay Solutions',
    description: 'Explore Moltivay Solutions services for web and mobile development, UI/UX design, QA, AI workflows, and cloud support.',
  },
  '/portfolio': {
    title: 'Project Portfolio | Moltivay Solutions',
    description: 'Explore illustrative product concepts and software capabilities across web, mobile, cloud, and AI projects.',
  },
  '/about': {
    title: 'About Moltivay Solutions | Our Approach',
    description: 'Learn about Moltivay Solutions, our engineering approach, and how we collaborate to plan, build, test, and launch digital products.',
  },
  '/contact': {
    title: 'Contact Moltivay Solutions | Start a Project',
    description: 'Contact Moltivay Solutions to discuss your web, mobile, cloud, or AI product requirements and project scope.',
  },
};

const PageMetadata = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = routeMetadata[pathname] || routeMetadata['/'];
    const canonicalUrl = `${window.location.origin}${pathname === '/' ? '/' : pathname}`;
    const imageUrl = `${window.location.origin}/logo.png`;
    const setMeta = (selector, attribute, value, createAttributes) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        Object.entries(createAttributes).forEach(([key, item]) => element.setAttribute(key, item));
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    document.title = metadata.title;
    setMeta('meta[name="description"]', 'content', metadata.description, { name: 'description' });
    setMeta('meta[property="og:title"]', 'content', metadata.title, { property: 'og:title' });
    setMeta('meta[property="og:description"]', 'content', metadata.description, { property: 'og:description' });
    setMeta('meta[property="og:url"]', 'content', canonicalUrl, { property: 'og:url' });
    setMeta('meta[property="og:image"]', 'content', imageUrl, { property: 'og:image' });
    setMeta('meta[name="twitter:title"]', 'content', metadata.title, { name: 'twitter:title' });
    setMeta('meta[name="twitter:description"]', 'content', metadata.description, { name: 'twitter:description' });
    setMeta('meta[name="twitter:image"]', 'content', imageUrl, { name: 'twitter:image' });

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageMetadata />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Fallback route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
