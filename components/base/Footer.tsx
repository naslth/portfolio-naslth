import Socials from '@/components/utils/Socials';
export default function Footer() {
  return (
    <footer className='dark:bg-secondary bg-[#2e2e3d] py-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between'>
          <Socials
            containerStyles='flex gap-x-6 mx-auto lg:mx-0 mb-4'
            iconStyles='text-foreground text-[25px] hover:text-primary text-white/70 dark:hover:text-primary transition-all'
          />
          <div className='text-muted-foreground'>Copyright &copy; Le Trung Hieu. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
