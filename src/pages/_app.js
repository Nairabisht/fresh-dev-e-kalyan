import "@/styles/globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { LanguageProvider } from '../context/LanguageContext';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return ( <LanguageProvider><Component {...pageProps} />
  </LanguageProvider>);
}




