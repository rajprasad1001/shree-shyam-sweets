
import React, { useState } from "react";
import "./MenuPage.css";

const categories = [
  {
    name: "Dosa Variety",
    icon: "♨",
    image:
      "https://images.pexels.com/photos/28107046/pexels-photo-28107046.jpeg",
    description: "Crispy, golden South Indian favourites",
    items: [
      ["Plain Dosa", "₹40"],
      ["Masala Dosa", "₹50"],
      ["Onion Plain Dosa", "₹50"],
      ["Onion Masala Dosa", "₹60"],
      ["Butter Plain Dosa", "₹70"],
      ["Cheese Plain Dosa", "₹80"],
      ["Cheese Masala Dosa", "₹100"],
      ["Schezwan Masala Dosa", "₹80"],
      ["Rawa Masala Dosa", "₹140"],
      ["Paper Masala Dosa", "₹100"],
    ],
  },
  {
    name: "Special Dosa",
    icon: "✦",
    image:
      "https://images.pexels.com/photos/20422129/pexels-photo-20422129.jpeg",
    description: "Rich, flavourful specialities",
    items: [
      ["Paneer Masala Dosa", "₹100"],
      ["Butter Paneer Masala Dosa", "₹120"],
      ["Paneer Plain Dosa", "₹80"],
      ["Butter Paneer Plain Dosa", "₹100"],
      ["Cheese Paneer Plain Dosa", "₹120"],
      ["Cheese Paneer Masala Dosa", "₹150"],
    ],
  },
  {
    name: "Idli & Uttapam",
    icon: "❋",
    image:
      "https://images.pexels.com/photos/36854501/pexels-photo-36854501.jpeg",
    description: "Comforting South Indian classics",
    items: [
      ["Idli (2 pcs)", "₹20"],
      ["Sambar Vada (2 pcs)", "₹30"],
      ["Idli Fry", "₹80"],
      ["Tomato Uttapam", "₹80"],
      ["Coconut Uttapam", "₹80"],
      ["Onion Uttapam", "₹80"],
      ["Schezwan Onion Uttapam", "₹80"],
    ],
  },
  {
    name: "Chinese Delights",
    icon: "✧",
    image:
      "https://images.pexels.com/photos/21482824/pexels-photo-21482824.jpeg",
    description: "Bold flavours, great taste",
    items: [
      ["Veg Manchurian", "₹160"],
      ["Paneer Manchurian", "₹180"],
      ["Gobhi Manchurian", "₹170"],
      ["Veg Chilli", "₹140"],
      ["Paneer Chilli", "₹180"],
      ["Mushroom Chilli", "₹180"],
      ["Honey Potato Chilli", "₹80"],
      ["Paneer 65", "₹180"],
    ],
  },
  {
    name: "Rice & Biryani",
    icon: "♨",
    image:
      "https://images.pexels.com/photos/9738983/pexels-photo-9738983.jpeg",
    description: "Aromatic rice and delicious biryani",
    items: [
      ["Veg Fried Rice", "₹120 / ₹70"],
      ["Veg Mix Fried Rice", "₹150 / ₹80"],
      ["Schezwan Fried Rice", "₹130 / ₹70"],
      ["Paneer Fried Rice", "₹140 / ₹80"],
      ["Veg Biryani", "₹210 / ₹110"],
      ["Paneer Biryani", "₹230 / ₹120"],
      ["Veg Hyderabadi Biryani", "₹230 / ₹120"],
    ],
  },
  {
    name: "Noodles",
    icon: "〰",
    image:
      "https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg",
    description: "Hot, tasty and satisfying",
    items: [
      ["Veg Noodles", "₹120 / ₹70"],
      ["Hakka Noodles", "₹120 / ₹70"],
      ["Schezwan Noodles", "₹140 / ₹80"],
      ["Veg Chilli Garlic Noodles", "₹150 / ₹80"],
      ["Veg Mix Noodles", "₹170 / ₹90"],
      ["Paneer Noodles", "₹140 / ₹80"],
      ["Mushroom Noodles", "₹150 / ₹80"],
      ["Masala Maggi", "₹120"],
    ],
  },
  {
    name: "Soups",
    icon: "♨",
    image:
      "https://images.pexels.com/photos/26582556/pexels-photo-26582556.jpeg",
    description: "Warm, comforting bowls",
    items: [
      ["Veg Soup", "₹70"],
      ["Paneer Soup", "₹80"],
      ["Mushroom Soup", "₹80"],
      ["Hot & Sour Soup", "₹110"],
      ["Veg Manchow Soup", "₹90"],
      ["Veg Sweet Corn Soup", "₹100"],
      ["Veg Tomato Soup", "₹120"],
    ],
  },
  {
    name: "Rolls & Snacks",
    icon: "✦",
    image:
      "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg",
    description: "Perfect bites for any time",
    items: [
      ["Veg Roll", "₹50"],
      ["Paneer Roll", "₹70"],
      ["Mushroom Roll", "₹80"],
      ["Veg Mix Roll", "₹110"],
      ["Soya Lollipop", "₹200"],
      ["Veg Lollipop", "₹190"],
      ["Potato Finger Chips", "₹100"],
    ],
  },
  {
    name: "Special Thali & Combos",
    icon: "❖",
    image:
      "https://images.pexels.com/photos/8148149/pexels-photo-8148149.jpeg",
    description: "More taste, more value",
    items: [
      ["Shree Shyam Special Chinese Thali", "₹280"],
      ["Veg Combo", "₹150"],
      ["Paneer Combo", "₹170"],
    ],
  },
  {
    name: "Dry Fry & Sanghai",
    icon: "✧",
    image:
      "https://images.pexels.com/photos/31783383/pexels-photo-31783383.jpeg",
    description: "Savoury favourites with a twist",
    items: [
      ["Sweet Corn Dry Fry", "₹140"],
      ["Mushroom Dry Fry", "₹160"],
      ["Chana Dry Fry", "₹120"],
      ["Veg Sanghai", "₹180"],
      ["Mushroom Sanghai", "₹190"],
      ["Veg Mix Sanghai", "₹210"],
      ["Paneer Sanghai", "₹200"],
    ],
  },
  {
    name: "Drinks",
    icon: "♧",
    image:
      "https://images.pexels.com/photos/39994695/pexels-photo-39994695.jpeg",
    description: "Refreshing sips to complete your meal",
    items: [
      ["Masala Cold Drink", "₹40"],
      ["Nimbu Pani", "₹30"],
      
    ],
  },
];

const shortcuts = ["All", ...categories.map((category) => category.name)];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    React.useEffect(() => {
    document.title =
      "Food Menu | Shree Shyam Sweets, Mango, Jamshedpur";

    const description =
      "Explore the food menu at Shree Shyam Sweets in Shankoshai, Mango, Jamshedpur. Discover dosa, idli, noodles, rice, snacks and more.";

    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      "https://shreeshyamsweets.in/menu"
    );
  }, []);

  const goToCategory = (name) => {
    setActiveCategory(name);
    setMobileMenuOpen(false);

    if (name === "All") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    document
      .getElementById(
        `category-${categories.findIndex((item) => item.name === name)}`
      )
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="menu-page">
      <header className="menu-header">
        <a
          href="/"
          className="site-brand"
          aria-label="Shree Shyam Sweets home"
         
        >
          <img
            src="/images/logo.png"
            alt="Shree Shyam Sweets logo"
            width="48"
            height="48"
            onError={(event) => {
              event.currentTarget.style.display = 'none'
            }}
          />
          <span className="brand-copy">
            <strong>Shree Shyam</strong>
            <small>S W E E T S</small>
          </span>
        </a>

        <button
          className="mobile-menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>

        <nav className={`menu-nav ${mobileMenuOpen ? "is-open" : ""}`}>
          <a href="/">Home</a>
          <a href="/#our-story">Our Story</a>
          <a href="/menu" className="nav-active">Food Menu</a>
          <a href="/#our-sweets">Our Sweets</a>
          
          <a href="/#gallery">Gallery</a>
          <a href="/#gifting">Gifting</a>
          <a href="/#visit-us">Visit Us</a>
          <a className="nav-enquire" href="https://wa.me/919546313127">
            Enquire <span>↗</span>
          </a>
        </nav>
      </header>

      <section className="menu-content">
        <div className="menu-intro">
          <span className="eyebrow">EXPLORE OUR MENU</span>
          <h2>Something for Every Craving</h2>
          <p>Explore our favourites and find your next delicious meal.</p>
        </div>

        <div className="category-grid" aria-label="Menu categories">
          {shortcuts.map((name, index) => (
            <button
              key={name}
              className={`category-pill ${
                activeCategory === name ? "selected" : ""
              }`}
              onClick={() => goToCategory(name)}
            >
              <span>{index === 0 ? "✦" : categories[index - 1].icon}</span>
              {name}
            </button>
          ))}
        </div>

        <div className="menu-sections">
          {categories.map((category, index) => (
            <section
              className="menu-category"
              id={`category-${index}`}
              key={category.name}
            >
              <div className="category-heading">
                <span className="category-flourish">{category.icon}</span>
                <div>
                  <h2>{category.name}</h2>
                  <p>{category.description}</p>
                </div>
              </div>

              <div className="menu-card-grid">
                <article className="menu-card" key={category.name}>
                  <div className="menu-card-image">
                    <img
                      src={category.image}
                      alt={category.name}
                      loading="lazy"
                    />
                    <span className="image-label">{category.name}</span>
                  </div>

                  <div className="menu-card-title">
                    <div>
                      <h3>{category.name}</h3>
                      <p>{category.description}</p>
                    </div>
                    <span className="card-arrow">↗</span>
                  </div>

                  <div className="menu-items">
                    {category.items.map(([name, price]) => (
                      <div className="menu-item" key={name}>
                        <span>{name}</span>
                        <strong>{price}</strong>
                      </div>
                    ))}
                  </div>

                  <a
                    className="view-items"
                    href={`https://wa.me/919546313127?text=${encodeURIComponent(
                      `Hello Shree Shyam Sweets, I would like to enquire about ${category.name}.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Enquire about this category <span>↗</span>
                  </a>
                </article>
              </div>
            </section>
          ))}
        </div>

        <section className="menu-cta">
          <div>
            <span className="eyebrow">A LITTLE SOMETHING DELICIOUS</span>
            <h2>Craving Something Special?</h2>
            <p>Get in touch with us for menu enquiries and more.</p>
          </div>
          <a
            className="gold-button"
            href="https://wa.me/919546313127"
            target="_blank"
            rel="noreferrer"
          >
            Chat on WhatsApp <span>↗</span>
          </a>
        </section>
      </section>

      <footer className="footer">
      <a href="#home" className="footer-brand">
        <span className="footer-shree">श्री</span>
        <span>
          <b>Shree Shyam</b>
          <small>S W E E T S</small>
        </span>
      </a>

      <p className="footer-tagline">Pure Taste, Pure Blessings.</p>

      <div className="footer-links">
        <a href="#about">Our Story</a>
        <a href="#sweets">Our Sweets</a>
        <a href="/menu">Food Menu</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </div>

      
<div className="footer-bottom">
  <p>© 2026 Shree Shyam Sweets. All rights reserved.</p>

  <div className="developer-credit">
    <span>Designed &amp; Developed by</span>
    <a
      href="https://raj-prasad-portfolio.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Raj Prasad <span aria-hidden="true">↗</span>
    </a>
  </div>

  <p>Shankoshai, Mango, Jamshedpur</p>
</div>


    </footer>
    </main>
  );
}
