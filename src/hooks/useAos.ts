import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const useAos = () => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 50,
      duration: 400,
      once: true,
    });
  }, []);
};