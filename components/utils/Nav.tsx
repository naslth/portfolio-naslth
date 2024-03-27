import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FolderGit2 } from 'lucide-react';
import { Home } from 'lucide-react';
import { Contact } from 'lucide-react';
const links = [
  { path: '/', name: 'home', icon: <Home className='text-primary'/> },
  { path: '/projects', name: 'projects', icon: <FolderGit2 className='text-primary'/> },
  { path: '/contact', name: 'contact', icon: <Contact className='text-primary'/> }
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
          <div className=' flex gap-x-2' key={index}>
            <Link href={link.path} className={`capitalize ${linkStyles}`}>
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
            {link.icon}
          </div>
        );
      })}
    </nav>
  );
}
