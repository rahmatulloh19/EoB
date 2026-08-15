// Assembler — Server Component (Next.js handles client boundaries in children)
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { MenuHeader } from '@/components/menu/MenuHeader';
import { MenuContent } from '@/components/menu/MenuContent';
import { getMenuData } from '@/lib/api';

export default async function MenuClientPage() {
  const menuData = await getMenuData();

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <Navbar />
      <MenuHeader initialData={menuData} />
      <MenuContent initialData={menuData} />
      <Footer />
    </div>
  );
}
