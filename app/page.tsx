'use client';

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';


export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lang, setLang] = useState<'en' | 'id'>('en');

  // Initialize language from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang === 'id' || savedLang === 'en') {
      setLang(savedLang);
    }
  }, []);

  // Persist language choice
  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  // Initialize dark mode based on localStorage or system preferences
  useEffect(() => {
    const themeFromStorage = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (themeFromStorage === 'dark' || (!themeFromStorage && prefersDarkMode)) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  }, []);

  // Update theme on toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.removeItem('theme');
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} lang={lang} setLang={setLang} />
      <Header lang={lang} />
      <About isDarkMode={isDarkMode} lang={lang} />
      <Services lang={lang} />
      <Work isDarkMode={isDarkMode} lang={lang} />
      <Contact lang={lang} />
      <Footer isDarkMode={isDarkMode} lang={lang} />
    </>
  );
}
