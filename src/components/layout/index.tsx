import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar stays at the top */}
      <Navbar />

      {/* Main content grows to fill remaining space */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer sticks to the bottom */}
      <Footer />
    </div>
  );
}
