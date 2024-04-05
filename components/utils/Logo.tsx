import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/logo.svg';
export default function Logo() {
  return (
    <Link href='/'>
      <div className='relative w-[60px] h-[60px]'>
        <Image src={logo} fill priority alt='logo' />
      </div>
    </Link>
  );
}
