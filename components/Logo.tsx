import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/next.svg';
export default function Logo() {
  return (
    <Link href='/'>
      <Image src={logo} width={50} height={50} priority alt='logo' />
    </Link>
  );
}
