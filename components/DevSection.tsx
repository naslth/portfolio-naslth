import Image from 'next/image';
import Dev from '../public/dev.png';
export default function DevSection() {
  return (
    <section>
      <h2>Hello, I&apos;m Hieu </h2>
      <p>
        I&apos;m a software engineer with a passion for web development. I&apos;m experienced with React, Next.js, and
        Tailwind CSS. I&apos;m also familiar with Node.js, Express, and PostgreSQL. I&apos;m always eager to learn new
        technologies and frameworks.
      </p>
      <Image src={Dev} alt='Nas' width={300} height={300} className='rounded-full' />
    </section>
  );
}
