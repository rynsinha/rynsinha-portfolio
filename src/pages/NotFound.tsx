
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Home, AlertTriangle } from "lucide-react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
        <div className="animate-float">
          <AlertTriangle className="h-16 w-16 text-white/80 mb-6" />
        </div>
        <h1 className="text-6xl font-pixel font-bold mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8 max-w-md">
          Oops! The page you're looking for seems to have vanished into the digital void.
        </p>
        <Link
          to="/"
          className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-opacity-90"
        >
          <Home className="h-4 w-4" />
          Return Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
