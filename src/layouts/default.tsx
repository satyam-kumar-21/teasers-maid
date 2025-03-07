import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mt-14 mx-auto max-w-7xl flex-grow pt-5">
        {children}
      </main>
      <Footer />
    </div>
  );
}
