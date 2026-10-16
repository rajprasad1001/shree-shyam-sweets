import React from "react";

const menuSections = [
  {
    id: "dosa-variety",
    title: "Dosa Variety",
    subtitle: "Crisp, golden South Indian favourites",
    image:
      "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=1000&q=85",
    featured: true,
    items: [
      ["Plain Dosa", "₹40"],
      ["Masala Dosa", "₹50"],
      ["Union Plain Dosa", "₹50"],
      ["Union Masala Dosa", "₹60"],
      ["Butter Plain Dosa", "₹70"],
      ["Butter Union Masala Dosa", "₹90"],
      ["Butter Plain Dosa", "₹80"],
      ["Cheeze Palin Dosa", "₹80"],
      ["Cheeze Masala Dosa", "₹100"],
      ["Corn Masala Dosa", "₹100"],
      ["Masur Masala Dosa", "₹200"],
      ["Shezwan Masala Dosa", "₹80"],
      ["Spring Masala Dosa", "₹180"],
      ["Spring Plain Dosa", "₹150"],
      ["Rawa Masala Dosa", "₹140"],
      ["Paper Plain Dosa", "₹80"],
      ["Paper Masala Dosa", "₹100"],
      ["Paper Butter Plain Dosa", "₹100"],
      ["Paper Butter Masala Dosa", "₹120"],
    ],
  },
  {
    id: "special-dosa",
    title: "Special Dosa",
    subtitle: "Paneer-rich favourites",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1000&q=85",
    featured: true,
    items: [
      ["Paneer Masala Dosa", "₹100"],
      ["Butter Paneer Masala Dosa", "₹120"],
      ["Paneer Plain Dosa", "₹80"],
      ["Butter Paneer Plain Dosa", "₹100"],
      ["Cheeze Paneer Plain Dosa", "₹120"],
      ["Cheeze Paneer Masala Dosa", "₹150"],
    ],
  },
  {
    id: "idli-uttapam",
    title: "Idli & Uttapam",
    subtitle: "Comforting classics",
    image:
      "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=85",
    items: [
      ["Idli 2Pcs", "₹20"],
      ["Sambar Bada 2Pcs", "₹30"],
      ["Idli Fry", "₹80"],
      ["Utpam Tomato", "₹80"],
      ["Utpam Co Co Nut", "₹80"],
      ["Union Utpam", "₹80"],
      ["Onion Shezwan Utpam", "₹80"],
    ],
  },
  {
    id: "thali-combo",
    title: "Special Thali & Combo",
    subtitle: "A satisfying meal",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=85",
    items: [
      ["Shree Shyam Special Chinese Thali", "₹280"],
      ["Veg Combo", "₹150"],
      ["Paneer Combo", "₹170"],
    ],
  },
  {
    id: "rolls",
    title: "Roll",
    subtitle: "Quick, flavourful bites",
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=1000&q=85",
    items: [
      ["Veg Roll", "₹50"],
      ["Paneer Roll", "₹70"],
      ["Mushroom Roll", "₹80"],
      ["Veg Mix Roll", "₹110"],
    ],
  },
  {
    id: "lolipop",
    title: "Lolipop",
    subtitle: "Crispy snack favourites",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1000&q=85",
    items: [
      ["Soya Lolipop", "₹200"],
      ["Veg Lolipop", "₹190"],
    ],
  },
  {
    id: "manchurian",
    title: "Manchurian",
    subtitle: "Indo-Chinese favourites",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=85",
    items: [
      ["Veg Manchurian", "₹160"],
      ["Paneer Manchurian", "₹180"],
      ["Gobhi Manchurian", "₹170"],
    ],
  },
  {
    id: "dry-fry",
    title: "Dry Fry",
    subtitle: "Crispy and savoury",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=85",
    items: [
      ["Sweet Corn Dry Fry", "₹140"],
      ["Mushroom Dry Fry", "₹160"],
      ["Chana Dry Fry", "₹120"],
      ["Potato Finger Chips", "₹100"],
    ],
  },
  {
    id: "biryani",
    title: "Biryani",
    subtitle: "Full / Half",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=1000&q=85",
    items: [
      ["Veg Biryani", "₹210 / ₹110"],
      ["Paneer Biryani", "₹230 / ₹120"],
      ["Veg Hyderabadi Biryani", "₹230 / ₹120"],
    ],
  },
  {
    id: "fried-rice",
    title: "Fried Rice",
    subtitle: "Full / Half",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1000&q=85",
    items: [
      ["Veg Fried Rice", "₹120 / ₹70"],
      ["Veg Mix Fried Rice", "₹150 / ₹80"],
      ["Schezwan Fried Rice", "₹130 / ₹70"],
      ["Paneer Fried Rice", "₹140 / ₹80"],
      ["Mushroom Fried Rice", "₹140 / ₹80"],
    ],
  },
  {
    id: "sanghai",
    title: "Sanghai",
    subtitle: "House menu favourites",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=85",
    items: [
      ["Veg Sanghai", "₹180"],
      ["Mushroom Sanghai", "₹190"],
      ["Veg Mix Sanghai", "₹210"],
      ["Paneer Sanghai", "₹200"],
    ],
  },
  {
    id: "noodles",
    title: "Noodles",
    subtitle: "Full / Half",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=85",
    items: [
      ["Veg Noodles", "₹120 / ₹70"],
      ["Hakka Noodles", "₹120 / ₹70"],
      ["Schezwan Noodles", "₹140 / ₹80"],
      ["Veg Chilli Garlic Noodles", "₹150 / ₹80"],
      ["Veg Mix Noodles", "₹170 / ₹90"],
      ["Paneer Noodles", "₹140 / ₹80"],
      ["Mushroom Noodles", "₹150 / ₹80"],
    ],
  },
  {
    id: "chilli",
    title: "Chilli",
    subtitle: "Bold Indo-Chinese flavours",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",
    items: [
      ["Veg Chilli", "₹140"],
      ["Paneer Chilli", "₹180"],
      ["Mushroom Chilli", "₹180"],
      ["Baby Corn Chilli", "₹190"],
      ["Soya Chilli", "₹190"],
      ["Gobhi Chilli", "₹150"],
      ["Idli Chilli", "₹70"],
      ["Honey Potato Chilli", "₹80"],
      ["Potato Chilli", "₹70"],
      ["Chana Chilli", "₹120"],
      ["Paneer 65", "₹180"],
    ],
  },
  {
    id: "soup",
    title: "Soup",
    subtitle: "Warm and comforting",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1000&q=85",
    items: [
      ["Veg Soup", "₹70"],
      ["Paneer Soup", "₹80"],
      ["Mushroom Soup", "₹80"],
      ["Hot N Sour Soup", "₹110"],
      ["Veg Manchow Soup", "₹90"],
      ["Veg Sweet Corn Soup", "₹100"],
      ["Veg Tomato Soup", "₹120"],
    ],
  },
  {
    id: "maggi",
    title: "Maggi",
    subtitle: "A quick comfort favourite",
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=85",
    items: [["Masala Maggi", "₹120"]],
  },
  {
    id: "drinks",
    title: "Drinks",
    subtitle: "A refreshing sip",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765edfd7?auto=format&fit=crop&w=1000&q=85",
    items: [
      ["Masala Coldrinks", "₹40"],
      ["Nambu Pani", "₹30"],
    ],
  },
];

const categories = [
  ["dosa-variety", "Dosa Variety"],
  ["special-dosa", "Special Dosa"],
  ["idli-uttapam", "Idli & Uttapam"],
  ["thali-combo", "Thali & Combo"],
  ["rolls", "Rolls"],
  ["manchurian", "Manchurian"],
  ["rice-noodles", "Rice & Noodles"],
  ["biryani", "Biryani"],
  ["soup", "Soup"],
  ["drinks", "Drinks"],
];

function MenuCard({ section }) {
  return (
    <article
      id={section.id}
      className="group mb-6 inline-block w-full break-inside-avoid scroll-mt-32 overflow-hidden rounded-[1.35rem] border border-[#d8b978]/45 bg-[#fffaf0] shadow-[0_16px_45px_rgba(39,5,10,0.10)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(39,5,10,0.17)]"
    >
      <div className="relative h-44 overflow-hidden sm:h-48">
        <img
          src={section.image}
          alt={`${section.title} at Shree Shyam Sweets`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#26060a]/90 via-[#26060a]/10 to-transparent" />
        <div className="absolute bottom-4 left-5 right-5">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#f1d796]">
            Shree Shyam Sweets
          </p>
          <h3 className="font-serif text-2xl font-semibold text-[#fff5dc] drop-shadow">
            {section.title}
          </h3>
          <p className="mt-1 text-xs text-[#fff2d8]/85">{section.subtitle}</p>
        </div>
        {section.featured && (
          <span className="absolute right-4 top-4 rounded-full border border-[#f0d18a]/70 bg-[#3b090e]/85 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#f7dfa0]">
            South Indian Special
          </span>
        )}
      </div>

      <div className="p-5 sm:p-6">
        <ul className="divide-y divide-[#e9dcc4]">
          {section.items.map(([name, price], index) => (
            <li
              key={`${name}-${index}`}
              className="flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0"
            >
              <span className="text-[13px] leading-5 text-[#513438] sm:text-sm">
                {name}
              </span>
              <span className="shrink-0 text-right text-[13px] font-bold tabular-nums text-[#936b28] sm:text-sm">
                {price}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function FoodMenu() {
  return (
    <section
      id="food-menu"
      className="relative overflow-hidden bg-[#f7efdf] text-[#351015]"
    >
      <header className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_top,#711b27_0%,#430b13_48%,#250509_100%)] px-5 py-20 text-center sm:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 [background-image:radial-gradient(#f2d18b_0.7px,transparent_0.7px)] [background-size:18px_18px]" />
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.38em] text-[#f0d392] sm:text-xs">
            Pure Taste, Pure Blessings
          </p>
          <p className="mb-1 font-serif text-3xl text-[#f5d991]">श्री</p>
          <h2 className="font-serif text-4xl font-semibold italic leading-[1.04] tracking-tight text-[#fff0c9] sm:text-6xl lg:text-7xl">
            A Feast of Flavours
          </h2>
          <div className="mx-auto my-6 h-px w-24 bg-[#d8b56b]" />
          <p className="mx-auto max-w-2xl font-serif text-base leading-7 text-[#f2dfc2] sm:text-lg">
            From golden dosas and comforting uttapam to wok-tossed Chinese
            favourites, discover something delicious for every craving.
          </p>
          <a
            href="#menu-collection"
            className="mt-8 inline-flex items-center rounded-full border border-[#e7c77e] bg-[#e7c77e] px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#350910] transition hover:bg-transparent hover:text-[#ffedc6]"
          >
            Explore the Menu <span aria-hidden="true" className="ml-3">↓</span>
          </a>
        </div>
        <div className="pointer-events-none absolute -left-24 top-12 -z-10 h-64 w-64 rounded-full border border-[#e7c77e]/20 sm:h-80 sm:w-80" />
        <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full border border-[#e7c77e]/20 sm:h-96 sm:w-96" />
      </header>

      <nav
        aria-label="Food menu categories"
        className="sticky top-0 z-20 border-b border-[#d7b66e]/50 bg-[#31090e]/95 shadow-lg backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="shrink-0 rounded-full border border-[#efd79d]/25 px-4 py-2 text-[11px] font-medium text-[#fff1d0] transition hover:border-[#efd79d] hover:bg-[#efd79d] hover:text-[#31090e]"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <main id="menu-collection" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#a17a32]">
            The Menu
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold italic text-[#3a0b12] sm:text-5xl">
            Made for Your Cravings
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#806769] sm:text-base">
            Explore our menu, find your favourites, and enjoy a little moment
            of indulgence.
          </p>
          <div className="mx-auto mt-6 flex items-center justify-center gap-3 text-[#b68b3c]">
            <span className="h-px w-12 bg-[#d7b66e]" />
            <span aria-hidden="true">✦</span>
            <span className="h-px w-12 bg-[#d7b66e]" />
          </div>
        </div>

        <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
          {menuSections.map((section) => (
            <MenuCard key={section.id} section={section} />
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-xs leading-6 text-[#806769]">
          Menu names and prices are transcribed from the menu supplied by the
          shop. Please confirm current prices and spelling before publishing.
          For items listed as Full / Half, prices are shown in that order.
        </p>
      </main>

      <footer className="border-t-2 border-[#cba75c] bg-[#2b070b] px-5 py-10 text-center text-[#e9d5ad]">
        <p className="font-serif text-2xl italic text-[#f2d995]">
          Shree Shyam Sweets
        </p>
        <p className="mt-2 text-[10px] uppercase tracking-[0.28em] text-[#cbb78d]">
          Pure Taste, Pure Blessings
        </p>
        <p className="mt-4 text-xs text-[#cbb78d]/75">
          Shankoshai, Mango, Jamshedpur · Jharkhand 831012
        </p>
      </footer>
    </section>
  );
}
