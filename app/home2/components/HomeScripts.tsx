'use client';

import { useEffect } from 'react';
import { initHome2Scripts } from '../homeScripts';

export default function HomeScripts() {
  useEffect(() => {
    return initHome2Scripts();
  }, []);

  return null;
}

