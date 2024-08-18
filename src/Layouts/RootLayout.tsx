import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <div>
        <header id="top-header" className="bg-secondary text-white pt-3">
            <Navbar />
            <Header />
        </header>
        
        <main id="main">
            <Outlet />
        </main>

        <footer>

        </footer>
    </div>
  )
}
