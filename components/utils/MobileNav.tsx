import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { AiOutlineMenuFold } from 'react-icons/ai';
import Logo from '@/components/utils/Logo';
import Socials from '@/components/utils/Socials';
import Nav from '@/components/utils/Nav';
export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <AiOutlineMenuFold className='cursor-pointer' />
      </SheetTrigger>
      <SheetContent>
        <div className='flex flex-col h-full'>
          <SheetHeader>
            <SheetTitle className='flex flex-row'>
              <Logo />
              <div className='flex items-center mx-auto text-2xl'>My portfolio :)</div>
            </SheetTitle>
          </SheetHeader>
          <div className='flex flex-col justify-between h-full'>
            <Nav
              containerStyles='flex flex-col gap-y-8 items-center text-lg mt-20'
              linkStyles='relative hover:text-primary transition-all'
              underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            <Socials
              containerStyles='flex gap-x-6 mx-auto'
              iconStyles='text-foreground text-[25px] hover:text-primary transition-all'
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
