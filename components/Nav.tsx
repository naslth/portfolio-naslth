import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { path: '/', name: 'home' },
  { path: '/projects', name: 'projects' },
  { path: '/contact', name: 'contact' }
];
type NavProps = {
  containerStyles?: string;
  linkStyles?: string;
  underlineStyles?: string;
};
export default function Nav({ containerStyles, linkStyles, underlineStyles }: NavProps) {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} className={`capitalize ${linkStyles}`}>
            {link.path === path ? (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId='underline'
                className={`${underlineStyles}`}
              ></motion.span>
            ) : (
              <></>
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
