import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css'; // Or wherever your global styles are

export const metadata = {
  title: 'My Medical App',
  description: 'A Next.js app for medical information.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}