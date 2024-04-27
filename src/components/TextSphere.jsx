import { useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import "../Styles/textsphere.css"
import React, { useEffect } from 'react';

import TagCloud from "TagCloud";

const TextSphere = () => {
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        
          'Welcome',            // English
          'Bienvenido',         // Spanish
          'Willkommen',         // German
          'Добро пожаловать',    // Russian
          '欢迎',                // Chinese (Mandarin)
          'ようこそ',             // Japanese
          'أهلاً وسهلاً',       // Arabic
          'Bienvenue',          // French
          'Benvenuto',          // Italian
          'Tervetuloa',         // Finnish
          'Välkommen',          // Swedish
          '歡迎',                // Chinese (Cantonese)
          '환영합니다',           // Korean
          'Bem-vindo',          // Portuguese
          'स्वागत है',          // Hindi
          'ברוך הבא',           // Hebrew
          'Karibu',             // Swahili
          'Selamat Datang',     // Indonesian / Malay
          'Добредојдовте',       // Macedonian
          'Tere tulemast',      // Estonian
          'Velkommen',          // Norwegian
          'Καλώς ορίσατε',       // Greek
          'Croeso',             // Welsh
          'Welkom',             // Dutch
          'Hosgeldiniz',        // Turkish
          'Dobrodošli',         // Croatian
          'Vítejte',            // Czech
          'Bienvenido',         // Basque
          'Isten hozott',       // Hungarian
          'Bine ați venit',      // Romanian
        ]
      const options = {
        radius: 600,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      TagCloud(container, texts, options);
    };
  }, []);
  return (
    <>
    
    <div className='text-sphere'>
      <span className='tagcloud'>

      </span>
    </div>
    

    </>
  )

};

export default TextSphere
