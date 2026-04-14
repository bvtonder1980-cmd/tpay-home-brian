'use client';

import Script from 'next/script';

export default function HomeLegacyScript() {
  return (
    <Script
      src="/js/home.js"
      strategy="afterInteractive"
      onLoad={() => {
        // `home.js` wires key init inside `$(window).on('load', ...)`.
        // In Next.js the script can load after the real load event; re-dispatch to keep behavior identical.
        if (document.readyState === 'complete') {
          window.dispatchEvent(new Event('load'));
        }
      }}
    />
  );
}

