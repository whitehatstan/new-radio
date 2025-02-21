// src/pages/_app.js
import '../styles/globals.css'; // Импорт глобальных стилей Tailwind

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;