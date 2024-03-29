import AboutSection from '@/components/page/home/AboutSection';
import DevSection from '@/components/page/home/DevSection';
import ContactSection from '@/components/page/home/ContactSection';
import WorkSection from '@/components/page/home/WorkSection';
export default function HomePage() {
  return (
    <div>
      <DevSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </div>
  );
}
