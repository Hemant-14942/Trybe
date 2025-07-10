import { ArrowRight, Facebook, Instagram, X } from "lucide-react";

const Home2Footer = () => {
  return (
    <footer className="bg-[#eae6de] text-[#1B1B1B] px-6 md:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Subscription */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">Subscribe to get 10% OFF</h2>
          <p className="text-sm mb-6">Subscribe for store updates and discounts.</p>
          <div className="flex items-center bg-white rounded-full px-4 py-2 w-fit">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent outline-none text-sm w-32 md:w-48"
            />
            <ArrowRight className="text-black" size={20} />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick links</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Story</li>
            <li>Shop</li>
            <li>Testimonials</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>Bestseller's</li>
            <li>Men's</li>
            <li>Men's</li>
            <li>New Arrival</li>
            <li>Style Essentials</li>
            <li>Summer Collection</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="font-semibold mb-3">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li>Terms & Conditions</li>
            <li>Shipping & Returns</li>
            <li>FAQ</li>
            <li>Contact</li>
            <li>404</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t mt-12 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-4 md:mb-0">
          © Framerify 2025 KnitKnot. All Rights Reserved.
        </p>
        <div className="flex gap-4">
          <div className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition">
            <Facebook size={18} />
          </div>
          <div className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition">
            <Instagram size={18} />
          </div>
          <div className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition">
            <X size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Home2Footer;
