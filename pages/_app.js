// Global CSS can only be imported in _app.js
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}