import AboutSection from '@/components/page/home/AboutSection';
import DevSection from '@/components/page/home/DevSection';
import ContactSection from '@/components/page/home/ContactSection';
export default function HomePage() {
  return (
    <div>
      <DevSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
