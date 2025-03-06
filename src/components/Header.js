import Link from 'next/link';

export default function Header() {
  return (
    <header style={headerStyle}>
      <nav>
        <Link href="/" style={linkStyle}>Home</Link>
        <Link href="/ambulance" style={linkStyle}>Ambulance</Link>
        <Link href="/healthcare" style={linkStyle}>Healthcare</Link>
        <Link href="/tips" style={linkStyle}>Tips</Link>
      </nav>
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '1rem',
  textAlign: 'center',
};

const linkStyle = {
  color: '#fff',
  margin: '0 1rem',
  textDecoration: 'none',
};