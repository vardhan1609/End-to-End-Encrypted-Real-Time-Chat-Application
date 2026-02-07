import Navbar from "../components/nav";
import Footer from "../components/footer";

export default function Start({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-6">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
