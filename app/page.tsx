"use client";

import { useState } from "react";
import { Menu, X, Coffee, Star, MapPin, Phone, Mail, Instagram, Facebook, Twitter, ChevronRight } from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Coffee className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">Cafe Delight</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#menu" className="text-foreground hover:text-primary transition-colors">Menu</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Reviews</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                Order Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 py-4 space-y-4">
              <a href="#home" className="block text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#menu" className="block text-foreground hover:text-primary transition-colors">Menu</a>
              <a href="#reviews" className="block text-foreground hover:text-primary transition-colors">Reviews</a>
              <a href="#contact" className="block text-foreground hover:text-primary transition-colors">Contact</a>
              <button className="w-full bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                Order Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-amber-950/20 dark:via-orange-950/20 dark:to-amber-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Fresh Coffee,
                <br />
                <span className="text-primary">Every Day</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                Experience the perfect blend of tradition and innovation. Our handcrafted coffee and artisanal pastries are made with love, served with a smile.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Order Now
                  <ChevronRight className="h-5 w-5" />
                </button>
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                  View Menu
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-amber-200 to-orange-300 dark:from-amber-800 dark:to-orange-900 flex items-center justify-center shadow-2xl">
                <Coffee className="h-64 w-64 text-amber-700 dark:text-amber-200" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
              <div className="text-5xl font-bold mb-2">20%</div>
              <div className="text-xl font-semibold mb-2">Off First Order</div>
              <p className="text-primary-foreground/80">Use code: WELCOME20</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
              <div className="text-5xl font-bold mb-2">Free</div>
              <div className="text-xl font-semibold mb-2">Delivery</div>
              <p className="text-primary-foreground/80">On orders over $25</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm">
              <div className="text-5xl font-bold mb-2">Buy 2</div>
              <div className="text-xl font-semibold mb-2">Get 1 Free</div>
              <p className="text-primary-foreground/80">Every Friday</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Menu</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated selection of coffees, teas, and delicious treats
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Menu Item 1 */}
            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-amber-200 to-orange-300 dark:from-amber-800 dark:to-orange-900 rounded-xl mb-4 flex items-center justify-center">
                <Coffee className="h-16 w-16 text-amber-700 dark:text-amber-200" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Espresso</h3>
              <p className="text-muted-foreground mb-4">Rich, bold, and perfectly balanced. Our signature espresso blend.</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">$3.50</span>
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Menu Item 2 */}
            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-amber-200 to-orange-300 dark:from-amber-800 dark:to-orange-900 rounded-xl mb-4 flex items-center justify-center">
                <Coffee className="h-16 w-16 text-amber-700 dark:text-amber-200" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Cappuccino</h3>
              <p className="text-muted-foreground mb-4">Smooth espresso with steamed milk and velvety foam.</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">$4.50</span>
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Menu Item 3 */}
            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-amber-200 to-orange-300 dark:from-amber-800 dark:to-orange-900 rounded-xl mb-4 flex items-center justify-center">
                <Coffee className="h-16 w-16 text-amber-700 dark:text-amber-200" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Latte</h3>
              <p className="text-muted-foreground mb-4">Creamy espresso with steamed milk, customizable flavors.</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">$5.00</span>
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Menu Item 4 */}
            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-amber-200 to-orange-300 dark:from-amber-800 dark:to-orange-900 rounded-xl mb-4 flex items-center justify-center">
                <Coffee className="h-16 w-16 text-amber-700 dark:text-amber-200" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Americano</h3>
              <p className="text-muted-foreground mb-4">Bold espresso with hot water, simple and classic.</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">$3.00</span>
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Menu Item 5 */}
            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-amber-200 to-orange-300 dark:from-amber-800 dark:to-orange-900 rounded-xl mb-4 flex items-center justify-center">
                <Coffee className="h-16 w-16 text-amber-700 dark:text-amber-200" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Mocha</h3>
              <p className="text-muted-foreground mb-4">Espresso with chocolate and steamed milk, topped with whipped cream.</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">$5.50</span>
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Menu Item 6 */}
            <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-amber-200 to-orange-300 dark:from-amber-800 dark:to-orange-900 rounded-xl mb-4 flex items-center justify-center">
                <Coffee className="h-16 w-16 text-amber-700 dark:text-amber-200" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Cold Brew</h3>
              <p className="text-muted-foreground mb-4">Smooth, refreshing cold-brewed coffee, perfect for any time.</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">$4.00</span>
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section id="reviews" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our happy customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "The best coffee I've ever had! The atmosphere is cozy and the staff is incredibly friendly. I come here every morning."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">SM</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Sarah Miller</div>
                  <div className="text-sm text-muted-foreground">Regular Customer</div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "Amazing pastries and excellent coffee. The latte art is beautiful and the service is top-notch. Highly recommend!"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">JD</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">John Davis</div>
                  <div className="text-sm text-muted-foreground">Coffee Enthusiast</div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">
                "Perfect spot for remote work! Great WiFi, comfortable seating, and the cold brew is absolutely refreshing."
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">EJ</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Emily Johnson</div>
                  <div className="text-sm text-muted-foreground">Remote Worker</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Subscribe to our newsletter and be the first to know about new menu items, special offers, and events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground"
            />
            <button className="bg-primary-foreground text-primary px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold text-foreground">Cafe Delight</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Serving the finest coffee and creating memorable experiences since 2015.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
                </li>
                <li>
                  <a href="#menu" className="text-muted-foreground hover:text-primary transition-colors">Menu</a>
                </li>
                <li>
                  <a href="#reviews" className="text-muted-foreground hover:text-primary transition-colors">Reviews</a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>123 Coffee Street, City, ST 12345</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>hello@cafedelight.com</span>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Hours</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Mon - Fri: 7:00 AM - 8:00 PM</li>
                <li>Saturday: 8:00 AM - 9:00 PM</li>
                <li>Sunday: 9:00 AM - 6:00 PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Cafe Delight. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
