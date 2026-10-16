
import { useEffect, useRef, useState } from 'react'
import FoodMenu from './components/FoodMenu';
import MenuPreview from './components/MenuPreview';
import {
  ArrowRight,
  Menu,
  X,
  MapPin,
  Phone,
  MessageCircle,
  Gift,
  Heart,
  Sparkles,
  Instagram,
  Facebook,
  ExternalLink,
} from 'lucide-react'

const PHONE = '9546313127'

const WHATSAPP = `https://wa.me/91${PHONE}?text=${encodeURIComponent(
  'Hello Shree Shyam Sweets, I would like to know about your sweets and availability.'
)}`

const MAPS =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(
    'Shree Shyam Sweets, Shankoshai, Mango, Jamshedpur, Jharkhand 831012'
  )

const sweets = [
  {
    name: 'Traditional Mithai',
    type: 'TIMELESS FAVOURITES',
    image: '/images/sweet-1.jpg',
    description:
      'A selection of familiar Indian sweet-shop favourites.',
  },
  {
    name: 'Festive Specials',
    type: 'MADE FOR CELEBRATIONS',
    image: '/images/sweet-2.jpg',
    description:
      'Sweet treats for festivals, family gatherings and special days.',
  },
  {
    name: 'Gifting Collection',
    type: 'SHARE SOMETHING SWEET',
    image: '/images/sweet-3.jpg',
    description:
      'Ask us about sweet assortments and gifting options.',
  },
]

const gallery = [
  {
    src: '/images/shop-exterior.jpeg',
    alt: 'Shree Shyam Sweets shop exterior in Mango, Jamshedpur',
  },
  {
    src: '/images/shop-interior.jpeg',
    alt: 'Interior of Shree Shyam Sweets in Shankoshai, Mango',
  },
  {
    src: '/images/gallery-1.jpeg',
    alt: 'Indian sweets available at Shree Shyam Sweets',
  },
  {
    src: '/images/gallery-2.jpeg',
    alt: 'Sweet display at Shree Shyam Sweets',
  },
  {
    src: '/images/gallery-3.jpeg',
    alt: 'Festive sweets and treats at Shree Shyam Sweets',
  },
  {
    src: '/images/gifting.jpg',
    alt: 'Sweet gifting collection from Shree Shyam Sweets',
  },{
    src: '/images/gallery-4.jpg',
    alt: 'Festive sweets and treats at Shree Shyam Sweets',
  }
]

/* Reusable scroll-reveal animation */
function Reveal({ children, className = '' }) {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      element.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible')
          observer.unobserve(element)
        }
      },
      { threshold: 0.08 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={elementRef} data-reveal className={`reveal ${className}`}>
      {children}
    </div>
  )
}

/* Responsive navbar with a working mobile menu */
function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const links = [
    ['Home', '#home'],
    ['Our Story', '#about'],
    ['Food Menu', '/menu'],
    ['Our Sweets', '#sweets'],
    ['Gallery', '#gallery'],
    ['Gifting', '#gifting'],
    ['Visit Us', '#contact'],
  ]

  return (
    <header className="site-navbar">
      <div className="site-navbar-inner">
        <a
          href="#home"
          className="site-brand"
          aria-label="Shree Shyam Sweets home"
          onClick={() => setOpen(false)}
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

          <span className="site-brand-copy">
            <span className="site-brand-name">Shree Shyam</span>
            <span className="site-brand-subtitle">S W E E T S</span>
          </span>
        </a>

        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="site-navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          id="site-navigation"
          className={`site-navigation ${open ? 'is-open' : ''}`}
          aria-label="Main navigation"
        >
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}

          <a
            className="site-nav-cta"
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Enquire <ArrowRight size={16} />
          </a>
        </nav>
      </div>
    </header>
  )
}

/* Cinematic animated hero */
function Hero() {
  const particles = Array.from({ length: 34 }, (_, index) => ({
    id: index,
    x: `${(index * 37 + 11) % 100}%`,
    delay: `${-((index * 7) % 12)}s`,
    duration: `${7 + (index % 8)}s`,
    drift: `${(index % 2 === 0 ? 1 : -1) * (15 + (index % 35))}px`,
    size: `${2 + (index % 3)}px`,
  }))

  return (
    <section className="cinematic-hero" id="home">
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />

      <div className="hero-arch hero-arch-outer" aria-hidden="true" />
      <div className="hero-arch hero-arch-middle" aria-hidden="true" />
      <div className="hero-arch hero-arch-inner" aria-hidden="true" />

      <div className="hero-particles" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="hero-particle"
            style={{
              '--particle-x': particle.x,
              '--particle-delay': particle.delay,
              '--particle-duration': particle.duration,
              '--particle-drift': particle.drift,
              '--particle-size': particle.size,
            }}
          />
        ))}
      </div>

      <div className="hero-diya hero-diya-left" aria-hidden="true">
        <span className="diya-flame" />
        <span className="diya-bowl" />
        <span className="diya-glow" />
      </div>

      <div className="hero-diya hero-diya-right" aria-hidden="true">
        <span className="diya-flame" />
        <span className="diya-bowl" />
        <span className="diya-glow" />
      </div>

      <div className="cinematic-hero-content">
        <p className="hero-eyebrow">
          <span>✦</span> A SWEET TRADITION <span>✦</span>
        </p>

        <div className="hero-shree">श्री</div>

        <div className="hero-feather" aria-hidden="true">
          <svg viewBox="0 0 70 115">
            <path
              d="M35 108 C31 77 42 49 35 8"
              fill="none"
              stroke="#d6a54a"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M35 78 C13 66 8 47 15 31 C31 36 40 54 35 78Z"
              fill="#0e6b66"
              stroke="#e0b04a"
              strokeWidth="1.5"
            />
            <path
              d="M35 78 C55 62 63 43 53 26 C37 37 30 56 35 78Z"
              fill="#126e68"
              stroke="#e0b04a"
              strokeWidth="1.5"
            />
            <ellipse
              cx="35"
              cy="47"
              rx="10"
              ry="18"
              fill="#174c82"
              stroke="#e9c56f"
              strokeWidth="2"
            />
            <ellipse cx="35" cy="47" rx="4" ry="10" fill="#21a19a" />
            <path
              d="M35 108 Q23 95 20 85 M35 108 Q46 95 50 84"
              fill="none"
              stroke="#d6a54a"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <p className="hero-brand-prefix">SHREE</p>

        <h1 className="cinematic-hero-title">
          <span>Shyam</span>
        </h1>

        <p className="hero-sweets-word">S W E E T S</p>

        <div className="hero-title-divider" aria-hidden="true">
          <span />
          <span className="hero-divider-diamond">◆</span>
          <span />
        </div>

        <p className="cinematic-hero-tagline">
          Pure Taste, Pure Blessings.
        </p>

        <p className="hero-location">
          SHANKOSHAI · MANGO · JAMSHEDPUR
        </p>

        <a className="cinematic-hero-button" href="#sweets">
          <span>Discover Our Sweets</span>
          <span className="hero-button-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>

      <div className="hero-sweets hero-sweets-left" aria-hidden="true">
        <img src="/images/sweet-1.jpg" alt="" loading="lazy" />
      </div>

      <div className="hero-sweets hero-sweets-right" aria-hidden="true">
        <img src="/images/sweet-2.jpg" alt="" loading="lazy" />
      </div>

      <a
        className="hero-scroll"
        href="#about"
        aria-label="Scroll to learn about Shree Shyam Sweets"
      >
        <span>SCROLL TO EXPLORE</span>
        <span className="hero-scroll-line" />
      </a>
    </section>
  )
}

function SectionHeading({ kicker, title, text, light = false }) {
  return (
    <div
      className={`section-heading ${light ? 'heading-light' : ''}`}
      data-reveal
    >
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  )
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="about-grid">
        <Reveal className="about-photo-wrap">
          <div className="photo-frame">
            <img
              src="/images/shop-exterior.jpeg"
              alt="Exterior of Shree Shyam Sweets in Shankoshai, Mango, Jamshedpur"
              loading="lazy"
              width="800"
              height="900"
            />
          </div>
          <div className="photo-stamp">
            <span>श्री</span>
            <small>
              PURE TASTE
              <br />
              PURE BLESSINGS
            </small>
          </div>
        </Reveal>

        <div className="about-copy">
          <SectionHeading
            kicker="A SWEET PART OF YOUR STORY"
            title={<>Tradition in every <em>celebration.</em></>}
          />

          <p>
            Welcome to <strong>Shree Shyam Sweets</strong>, in Shankoshai,
            Mango, Jamshedpur. We’re here for the little treats, family
            gatherings, festive moments and thoughtful gifts that bring
            people together.
          </p>

          <p>
            Explore our sweet-shop collection and contact us to ask about
            current availability, seasonal favourites and gifting options.
          </p>

          <a className="text-link" href="#contact">
            Come say hello <ArrowRight size={17} />
          </a>

          <div className="about-values">
            <div><Sparkles /><span>Made for moments</span></div>
            <div><Heart /><span>Shared with love</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Sweets() {
  return (
    <section className="section sweets-section" id="sweets">
      <SectionHeading
        kicker="A LITTLE SOMETHING FOR EVERY OCCASION"
        title={<>Discover our <em>sweet side.</em></>}
        text="From everyday cravings to festive gatherings, find something to make the moment feel special."
      />

      <div className="sweet-cards sweets-grid">
        {sweets.map((sweet, index) => (
          <Reveal key={sweet.name} className="sweet-card">
            <div className="sweet-image">
              <img
                src={sweet.image}
                alt={`${sweet.name} at Shree Shyam Sweets, Mango`}
                loading="lazy"
                width="600"
                height="450"
              />
              <span className="sweet-number">
                0{index + 1}
              </span>
            </div>

            <div className="sweet-card-copy">
              <p className="eyebrow">{sweet.type}</p>
              <h3>{sweet.name}</h3>
              <p>{sweet.description}</p>
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                Ask availability <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <p className="availability-note">
        Product availability may vary. Please contact the shop for today’s
        selection.
      </p>
    </section>
  )
}

function WhyUs() {
  const points = [
    {
      icon: <Heart />,
      title: 'For every occasion',
      text: 'A sweet stop for everyday moments, festivals and family celebrations.',
    },
    {
      icon: <Gift />,
      title: 'Thoughtful gifting',
      text: 'Ask us about sweet assortments for visits, celebrations and special days.',
    },
    {
      icon: <MapPin />,
      title: 'Here in Mango',
      text: 'Find us at Shankoshai, Mango, Jamshedpur, Jharkhand.',
    },
  ]

  return (
    <section className="values-section section">
      <SectionHeading
        kicker="WHY VISIT US"
        title={<>Sweet moments, <em>made simple.</em></>}
        light
      />

      <div className="values-grid why-grid">
        {points.map((point, index) => (
          <Reveal key={point.title} className="value-card">
            <span className="value-icon">{point.icon}</span>
            <span className="value-index">0{index + 1}</span>
            <h3>{point.title}</h3>
            <p>{point.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Gallery() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!selected) return

    const handleKey = (event) => {
      if (event.key === 'Escape') setSelected(null)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [selected])

  return (
    <section className="section gallery-section" id="gallery">
      <SectionHeading
        kicker="A GLIMPSE INSIDE"
        title={<>The sweet details.</>}
        text="A look at our shop and the treats that make every visit memorable."
      />

      <div className="gallery-grid">
        {gallery.map((item, index) => (
          <button
            type="button"
            className={`gallery-item gallery-item-${index + 1}`}
            key={item.src}
            onClick={() => setSelected(item)}
            aria-label={`Enlarge image: ${item.alt}`}
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              width="600"
              height="450"
            />
            <span className="gallery-zoom" aria-hidden="true">+</span>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image"
          onClick={() => setSelected(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            aria-label="Close image"
            onClick={() => setSelected(null)}
          >
            <X />
          </button>
          <img
            src={selected.src}
            alt={selected.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

function Gifting() {
  return (
    <>
      {/* Scoped layout repair for the gifting section. This prevents inherited
          grid/flex rules from squeezing the heading into a narrow column. */}
      <style>{`
        .gifting-section {
          display: block !important;
          width: 100%;
          max-width: 100%;
          min-width: 0;
          padding: clamp(56px, 8vw, 112px) 0;
          overflow: hidden;
        }

        .gifting-section .gifting-grid {
          display: grid !important;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr) !important;
          align-items: center;
          gap: clamp(28px, 5.5vw, 88px);
          width: min(1240px, calc(100% - 80px));
          max-width: 1240px;
          min-width: 0;
          margin: 0 auto;
        }

        .gifting-section .gifting-image,
        .gifting-section .gifting-copy {
          width: 100%;
          max-width: 100%;
          min-width: 0;
        }

        .gifting-section .gifting-image img {
          display: block;
          width: 100%;
          height: clamp(360px, 43vw, 590px);
          max-width: 100%;
          object-fit: cover;
          object-position: center;
        }

        .gifting-section .gifting-copy h2 {
          display: block;
          width: 100%;
          max-width: 100%;
          margin: 18px 0 24px;
          font-size: clamp(44px, 5.2vw, 76px);
          line-height: 1.06;
          letter-spacing: -0.035em;
          word-break: normal;
          overflow-wrap: normal;
          white-space: normal;
        }

        .gifting-section .gifting-copy > p:not(.eyebrow) {
          max-width: 490px;
          line-height: 1.85;
        }

        .gifting-section .gifting-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          max-width: 100%;
          white-space: normal;
        }

        @media (max-width: 767px) {
          .gifting-section {
            padding: 56px 0 64px;
          }

          .gifting-section .gifting-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 30px;
            width: calc(100% - 40px);
          }

          .gifting-section .gifting-image {
            grid-row: 1;
          }

          .gifting-section .gifting-image img {
            height: auto;
            aspect-ratio: 4 / 3;
            max-height: 420px;
          }

          .gifting-section .gifting-copy {
            grid-row: 2;
          }

          .gifting-section .gifting-copy h2 {
            font-size: clamp(40px, 10vw, 58px);
            line-height: 1.08;
            letter-spacing: -0.025em;
            margin: 14px 0 20px;
          }

          .gifting-section .gifting-copy > p:not(.eyebrow) {
            max-width: 100%;
            font-size: 15px;
            line-height: 1.8;
          }
        }

        @media (max-width: 380px) {
          .gifting-section .gifting-grid {
            width: calc(100% - 28px);
          }

          .gifting-section .gifting-copy h2 {
            font-size: clamp(36px, 10vw, 44px);
          }
        }
      `}</style>

      <section className="gifting-section" id="gifting">
        <div className="gifting-grid">
        <div className="gifting-image">
          <img
            src="/images/gifting.jpg"
            alt="Sweet gifting options at Shree Shyam Sweets"
            loading="lazy"
            width="800"
            height="700"
          />
        </div>

        <div className="gifting-copy">
          <p className="eyebrow">GIVE A LITTLE HAPPINESS</p>
          <h2>
            Make your gift
            <br />
            <em>a little sweeter.</em>
          </h2>
          <p>
            Celebrating a festival, visiting family or sharing a thank-you?
            Contact us to ask about available sweet assortments and gifting
            options.
          </p>
          <a
            className="button button-gold gifting-cta"
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} /> Ask on WhatsApp
          </a>
        </div>
        </div>
      </section>
    </>
  )
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <SectionHeading
        kicker="WE’D LOVE TO SEE YOU"
        title={<>Find your way to <em>something sweet.</em></>}
        text="Drop by the shop or contact us to ask about today's availability."
      />

      <div className="contact-grid visit-grid">
        <Reveal className="contact-card">
          <span className="contact-icon"><MapPin /></span>
          <p className="eyebrow">VISIT THE SHOP</p>
          <h3>Shree Shyam Sweets</h3>
          <p>
            Shankoshai, Mango,
            <br />
            Jamshedpur – 831012,
            <br />
            Jharkhand, India
          </p>
          <a className="text-link" href={MAPS} target="_blank" rel="noreferrer">
            Get directions <ExternalLink size={15} />
          </a>
        </Reveal>

        <Reveal className="contact-card">
          <span className="contact-icon"><Phone /></span>
          <p className="eyebrow">CALL US</p>
          <h3>Let’s talk sweets.</h3>
          <p>
            Call us to ask about current products, availability and gifting
            options.
          </p>
          <a className="text-link" href={`tel:+91${PHONE}`}>
            +91 {PHONE} <ArrowRight size={15} />
          </a>
        </Reveal>

        <Reveal className="contact-card">
          <span className="contact-icon"><MessageCircle /></span>
          <p className="eyebrow">SEND A MESSAGE</p>
          <h3>We’re on WhatsApp.</h3>
          <p>
            Send a quick message before you visit or enquire about a sweet
            selection.
          </p>
          <a className="text-link" href={WHATSAPP} target="_blank" rel="noreferrer">
            Message us <ArrowRight size={15} />
          </a>
        </Reveal>
      </div>

      <a className="map-banner" href={MAPS} target="_blank" rel="noreferrer">
        <span>
          <MapPin />
          <span>
            <b>Shankoshai, Mango, Jamshedpur</b>
            <small>Open directions in Google Maps</small>
          </span>
        </span>
        <ArrowRight />
      </a>
    </section>
  )
}

function Footer() {
  return (
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
  )
}


export default function App() {
  const isMenuPage =
    window.location.pathname.replace(/\/+$/, '') === '/menu';

  return (
    <>
      <Navbar />

      {isMenuPage ? (
        <FoodMenu />
      ) : (
        <main>
          <Hero />
          <About />
          <Sweets />
          <MenuPreview />
          <WhyUs />
          <Gallery />
          <Gifting />
          <Contact />
        </main>
      )}

      <Footer />

      {!isMenuPage && (
        <a
          className="floating-whatsapp"
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          aria-label="Contact Shree Shyam Sweets on WhatsApp"
        >
          <MessageCircle />
        </a>
      )}
    </>
  );
}
