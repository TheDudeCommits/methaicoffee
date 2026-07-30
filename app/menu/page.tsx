import Image from "next/image";
import { Navbar, MenuCategoryRow } from "@/components";

/**
 * Menu Page for ME THAI COFFEE
 * Modern, clean, editorial design with category cards and menu sections
 */

// Menu categories
const categories = [
  { id: "drinks", name: "Drinks", itemCount: 72, image: "/drinks.png" },
  { id: "lunch", name: "Lunch", itemCount: 12, image: "/lunch.png" },
  { id: "bakery", name: "Bakery", itemCount: 15, image: "/bakery.png" },
  { id: "specials", name: "Specials", itemCount: 8, image: "/specials.png" },
];

// Menu items by category
const menuItems: Record<string, Array<{ name: string; description: string; price: string }>> = {
  drinks: [
    { name: "ME THAI Signature Latte", description: "Our signature blend with Thai milk", price: "฿95" },
    { name: "Honey Lemon Espresso", description: "Sweet citrus meets bold espresso", price: "฿85" },
    { name: "Iced Caramel Macchiato", description: "Layered espresso with vanilla", price: "฿90" },
    { name: "Thai Iced Coffee", description: "Traditional Thai style with condensed milk", price: "฿75" },
    { name: "Cold Brew", description: "24-hour steeped, smooth finish", price: "฿85" },
    { name: "Matcha Latte", description: "Premium ceremonial grade matcha", price: "฿95" },
  ],
  lunch: [
    { name: "Croissant Ham & Cheese", description: "Buttery layers, smoked ham", price: "฿165" },
    { name: "Avocado Toast", description: "Sourdough, poached egg", price: "฿185" },
    { name: "Tuna Melt", description: "Classic comfort, melted cheddar", price: "฿155" },
    { name: "Caprese Panini", description: "Fresh mozzarella, tomato, basil", price: "฿175" },
    { name: "Thai Chicken Wrap", description: "Grilled chicken, peanut sauce", price: "฿165" },
    { name: "Veggie Bowl", description: "Quinoa, roasted vegetables, tahini", price: "฿175" },
  ],
  bakery: [
    { name: "Butter Croissant", description: "Flaky, golden, French-style", price: "฿85" },
    { name: "Pain au Chocolat", description: "Dark chocolate filling", price: "฿95" },
    { name: "Almond Croissant", description: "Frangipane cream, toasted almonds", price: "฿105" },
    { name: "Cinnamon Roll", description: "Cream cheese frosting", price: "฿95" },
    { name: "Banana Bread", description: "Moist, walnut studded", price: "฿85" },
    { name: "Scone", description: "Classic British, clotted cream", price: "฿75" },
  ],
  specials: [
    { name: "Seasonal Latte", description: "Ask about this month's special", price: "฿105" },
    { name: "Chef's Pastry", description: "Daily rotating selection", price: "฿95" },
    { name: "Tasting Flight", description: "Three espresso variations", price: "฿180" },
    { name: "Affogato Deluxe", description: "Double shot over premium gelato", price: "฿145" },
    { name: "ME THAI Gift Box", description: "Curated coffee & treats", price: "฿450" },
    { name: "Coffee Masterclass", description: "Learn brewing with our baristas", price: "฿350" },
  ],
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-warm-cream">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        {/* Category Cards */}
        <MenuCategoryRow categories={categories} />

        {/* Editorial Section */}
        <section className="py-16 md:py-24 border-t border-terracotta-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Editorial Text */}
            <div className="order-2 lg:order-1">
              <p className="font-sans text-3xl sm:text-4xl md:text-5xl font-semibold text-coffee-800 leading-tight tracking-tight">
                At <span className="text-[#1C39BB]">&ldquo;ME THAI COFFEE&rdquo;</span>, we believe that coffee is more than just a
                beverage.
              </p>
              <p className="mt-6 text-xs font-medium tracking-[0.18em] text-coffee-700 uppercase">
                It is an experience to be savored and cherished.
              </p>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/main-bg.jpg"
                  alt="Thai coffee farmer harvesting coffee cherries"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Menu Sections */}
        {categories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="py-12 md:py-16 border-t border-terracotta-100 scroll-mt-24"
            aria-labelledby={`${category.id}-heading`}
          >
            <h2
              id={`${category.id}-heading`}
              className="font-display text-terracotta-500 mb-8 md:mb-12"
              style={{ fontSize: "var(--text-title)" }}
            >
              {category.name}
              <span className="text-terracotta-300 ml-2 text-lg">
                ({category.itemCount})
              </span>
            </h2>

            <div className="space-y-0">
              {menuItems[category.id]?.map((item, index) => (
                <div
                  key={item.name}
                  className={`flex items-baseline justify-between py-5 ${
                    index !== 0 ? "border-t border-terracotta-100/60" : ""
                  }`}
                >
                  <div className="flex-1 pr-4">
                    <h3 className="text-charcoal font-medium text-lg">
                      {item.name}
                    </h3>
                    <p className="text-xs font-medium tracking-[0.18em] text-coffee-700 uppercase mt-1">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-terracotta-500 font-medium whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 bg-coffee-800 text-coffee-200">
        <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-xs font-medium tracking-[0.18em] text-white uppercase">
              ME THAI COFFEE
            </span>
            <p className="text-xs font-medium tracking-[0.18em] text-coffee-200 uppercase">
              © {new Date().getFullYear()} ME THAI COFFEE. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
