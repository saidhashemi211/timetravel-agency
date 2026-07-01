import { useEffect, useState } from 'react';
import {
  Clock,
  Menu,
  X,
  Play,
  ArrowRight,
  MapPin,
  Calendar,
  Star,
  MessageCircle,
  Send,
  Sparkles,
} from 'lucide-react';

const destinations = [
  {
    title: 'Paris 1889',
    era: 'Belle Époque',
    description:
      'Witness the unveiling of the Eiffel Tower at the Exposition Universelle. Stroll gas-lit boulevards and attend a soirée at the Moulin Rouge.',
    price: '$24,500',
    image:
      'https://images.pexels.com/photos/161853/eiffel-tower-paris-eiffel-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Most Popular',
  },
  {
    title: 'Cretaceous',
    era: '66 Million BCE',
    description:
      'Observe dinosaurs in their natural habitat from the safety of our shielded observation deck. A guided expedition through primeval jungles.',
    price: '$48,900',
    image:
      'https://images.pexels.com/photos/733078/pexels-photo-733078.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Adventure',
  },
  {
    title: 'Florence 1504',
    era: 'High Renaissance',
    description:
      'Watch Michelangelo unveil David in the Piazza della Signoria. Dine with the Medici and witness the rebirth of art and science.',
    price: '$31,200',
    image:
      'https://images.pexels.com/photos/2225442/pexels-photo-2225442.jpeg?auto=compress&cs=tinysrgb&w=1200',
    badge: 'Cultural',
  },
];

const navLinks = ['Destinations', 'Experiences', 'Pricing', 'About'];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-gold-400/15 py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-400/40 bg-ink-800 transition-transform group-hover:rotate-180 duration-700">
            <Clock className="h-5 w-5 text-gold-400" />
          </div>
          <span className="font-serif text-xl font-semibold tracking-wide text-stone-100">
            Time<span className="text-gradient-gold">Travel</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="group relative text-sm font-light tracking-wide text-stone-300 transition-colors hover:text-gold-300"
            >
              {link}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button className="rounded-full border border-gold-400/50 px-6 py-2 text-sm font-medium tracking-wide text-gold-200 transition-all hover:bg-gold-400 hover:text-ink-950">
            Book Now
          </button>
        </div>

        <button
          className="text-stone-200 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="glass mx-4 mt-3 rounded-2xl border border-gold-400/15 p-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-light text-stone-300 hover:text-gold-300"
              >
                {link}
              </a>
            ))}
            <button className="mt-2 rounded-full border border-gold-400/50 px-6 py-2 text-sm font-medium text-gold-200">
              Book Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Video placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-gradient-to-br from-ink-900 via-ink-950 to-black" />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-950/50 to-ink-950" />
        {/* Animated star/particle dots */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <span
              key={i}
              className="absolute h-px w-px rounded-full bg-gold-200/60 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Play button overlay */}
      <button className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 md:top-[42%]">
        <span className="absolute inset-0 rounded-full border border-gold-400/40 animate-pulse-ring" />
        <span className="flex h-20 w-20 items-center justify-center rounded-full border border-gold-400/50 bg-ink-900/60 backdrop-blur-sm transition-transform hover:scale-110">
          <Play className="h-7 w-7 fill-gold-300 text-gold-300" />
        </span>
      </button>

      <div className="relative z-20 mx-auto max-w-4xl px-6 text-center">
        <div className="mb-6 flex items-center justify-center gap-2 animate-fade-in">
          <Sparkles className="h-4 w-4 text-gold-400" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold-300">
            Luxury Chrono Expeditions
          </span>
          <Sparkles className="h-4 w-4 text-gold-400" />
        </div>

        <h1 className="font-serif text-5xl font-semibold leading-[1.1] text-stone-50 sm:text-6xl md:text-7xl lg:text-8xl animate-fade-up">
          Experience History
          <br />
          <span className="text-gradient-gold italic">in First Class</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base font-light leading-relaxed text-stone-300 sm:text-lg animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Journey to any moment in time aboard our fleet of bespoke temporal
          vessels. Curated itineraries, white-glove service, and the most
          extraordinary destinations history has to offer.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <button className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-8 py-4 text-sm font-semibold tracking-wide text-ink-950 shadow-lg shadow-gold-500/20 transition-all hover:shadow-gold-400/40 hover:scale-105">
            Explore Destinations
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="rounded-full border border-stone-500/40 px-8 py-4 text-sm font-light tracking-wide text-stone-200 transition-all hover:border-gold-400/60 hover:text-gold-200">
            Watch Film
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
        <div className="flex flex-col items-center gap-2 text-stone-400">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-gold-400/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function Destinations() {
  return (
    <section id="destinations" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold-400">
            Signature Itineraries
          </span>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-stone-50 sm:text-5xl">
            Curated <span className="text-gradient-gold italic">Destinations</span>
          </h2>
          <div className="mx-auto mt-6 h-px w-24 gold-divider" />
          <p className="mt-6 text-base font-light leading-relaxed text-stone-400">
            Each expedition is meticulously designed by our historian concierges
            to deliver an unforgettable journey through time.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <article
              key={d.title}
              className="group relative overflow-hidden rounded-2xl border border-gold-400/15 bg-ink-800/60 transition-all duration-500 hover:border-gold-400/40 hover:shadow-2xl hover:shadow-gold-500/10 animate-fade-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={d.image}
                  alt={d.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/30 to-transparent" />
                {d.badge && (
                  <span className="absolute top-4 left-4 rounded-full border border-gold-400/40 bg-ink-900/80 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-gold-200 backdrop-blur-sm">
                    {d.badge}
                  </span>
                )}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-gold-200">
                  <Calendar className="h-3.5 w-3.5" />
                  <span className="text-xs font-light tracking-wide">{d.era}</span>
                </div>
              </div>

              <div className="p-7">
                <h3 className="font-serif text-2xl font-semibold text-stone-50">
                  {d.title}
                </h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-stone-400">
                  {d.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-gold-400/10 pt-5">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-stone-500">
                      From
                    </span>
                    <p className="font-serif text-2xl font-semibold text-gradient-gold">
                      {d.price}
                    </p>
                  </div>
                  <button className="group/btn flex items-center gap-1.5 rounded-full border border-gold-400/40 px-5 py-2.5 text-xs font-medium tracking-wide text-gold-200 transition-all hover:bg-gold-400 hover:text-ink-950">
                    Reserve
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: '127', label: 'Eras Available' },
    { value: '4.2B', label: 'Years of History' },
    { value: '15K+', label: 'Happy Travelers' },
    { value: '99.9%', label: 'Timeline Integrity' },
  ];
  return (
    <section className="border-y border-gold-400/10 bg-ink-900/50 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-serif text-4xl font-semibold text-gradient-gold lg:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-500">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="mb-6 flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
          ))}
        </div>
        <blockquote className="font-serif text-2xl font-light italic leading-relaxed text-stone-200 sm:text-3xl">
          "Watching the first stone of the Colosseum being laid, sipping wine
          with Caesar's architects — no other agency could deliver this level of
          access and refinement."
        </blockquote>
        <div className="mt-8 flex items-center justify-center gap-3">
          <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200"
            alt="Eleanor Voss"
            className="h-12 w-12 rounded-full border border-gold-400/30 object-cover"
          />
          <div className="text-left">
            <p className="text-sm font-medium text-stone-100">Eleanor Voss</p>
            <p className="text-xs font-light text-stone-500">
              Traveler · Rome 80 CE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'url(https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        backgroundSize: 'cover',
      }} />
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <MapPin className="mx-auto mb-6 h-8 w-8 text-gold-400" />
        <h2 className="font-serif text-4xl font-semibold text-stone-50 sm:text-5xl">
          Your <span className="text-gradient-gold italic">Era</span> Awaits
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-base font-light text-stone-400">
          Speak with a temporal concierge today and begin designing your bespoke
          journey through history.
        </p>
        <button className="group mt-10 flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-8 py-4 text-sm font-semibold tracking-wide text-ink-950 shadow-lg shadow-gold-500/20 transition-all hover:scale-105">
          Schedule a Consultation
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gold-400/10 bg-ink-950 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-10">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-400/40">
            <Clock className="h-4 w-4 text-gold-400" />
          </div>
          <span className="font-serif text-lg font-semibold text-stone-100">
            Time<span className="text-gradient-gold">Travel</span>
          </span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-light text-stone-500">
          {navLinks.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-gold-300">
              {l}
            </a>
          ))}
          <a href="#" className="hover:text-gold-300">Privacy</a>
          <a href="#" className="hover:text-gold-300">Terms</a>
        </nav>
        <p className="text-xs font-light text-stone-600">
          © 2026 TimeTravel Agency
        </p>
      </div>
    </footer>
  );
}

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Welcome to TimeTravel Agency. How may I assist your journey today?' },
  ]);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          from: 'bot',
          text: 'A temporal concierge will be with you shortly. Meanwhile, explore our Paris 1889 and Cretaceous expeditions.',
        },
      ]);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="flex h-96 w-80 flex-col overflow-hidden rounded-2xl border border-gold-400/20 bg-ink-800 shadow-2xl shadow-black/50 animate-fade-up sm:w-96">
          <div className="flex items-center justify-between border-b border-gold-400/15 bg-ink-900 px-4 py-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gold-400/40 bg-ink-800">
                <MessageCircle className="h-4 w-4 text-gold-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-stone-100">Concierge</p>
                <p className="text-[10px] font-light text-gold-300">Online now</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-stone-400 hover:text-stone-200">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-3.5 py-2 text-xs font-light leading-relaxed ${
                    m.from === 'user'
                      ? 'bg-gold-400 text-ink-950'
                      : 'bg-ink-700 text-stone-200'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 border-t border-gold-400/15 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Ask about a destination..."
              className="flex-1 rounded-full bg-ink-700 px-4 py-2 text-xs text-stone-200 placeholder:text-stone-500 focus:outline-none"
            />
            <button
              onClick={send}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-400 text-ink-950 transition-transform hover:scale-110"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-500 shadow-lg shadow-gold-500/30 transition-transform hover:scale-110"
        aria-label="Open chat"
      >
        {!open && <span className="absolute inset-0 rounded-full border border-gold-300/50 animate-pulse-ring" />}
        {open ? (
          <X className="h-6 w-6 text-ink-950" />
        ) : (
          <MessageCircle className="h-6 w-6 text-ink-950" />
        )}
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Destinations />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
