import { useMemo, useState } from "react";
import { ArrowRight, BadgeDollarSign, Check, Crown, Gem, Layers as Layers3, Mic as Mic2, PackageCheck, RadioTower, Rocket, ShieldCheck, ShoppingBag, Sparkles, Workflow } from "lucide-react";

type PackageTier = {
  name: string;
  price: string;
  original?: string;
  badge: string;
  features: string[];
  delivery?: string;
};

const packages: PackageTier[] = [
  {
    name: "Basic Concept",
    price: "$99.99 US",
    badge: "Entry",
    features: [
      "2D Basic Logo",
      "1 Logo variation",
      "1 Social media graphic template",
      "1 Round of revision",
    ],
  },
  {
    name: "Essential Logo Package",
    price: "$249.99 US",
    original: "$299.99 US",
    badge: "Starter VIP",
    features: [
      "Logo 3D/Holografico",
      "Branding basico",
      "3 Graficos para redes sociales",
      "2 Rondas de revision",
    ],
  },
  {
    name: "Pro Brand Identity",
    price: "$749.99 US",
    original: "$799.99 US",
    badge: "Most Balanced",
    delivery: "14 dias",
    features: [
      "Identidad visual completa",
      "Mockup de diseno web (UI/UX)",
      "10 Graficos para redes sociales",
      "Materiales de marketing",
      "4 Rondas de revision",
    ],
  },
  {
    name: "Elite Production & Strategy",
    price: "$1499.99 US",
    original: "$1800.99 US",
    badge: "Elite",
    delivery: "21 dias",
    features: [
      "Todo lo del plan Pro",
      "Estrategia de marca completa",
      "Desarrollo web funcional (Hostinger Ready)",
      "Graficos ilimitados para redes",
      "Creacion de contenido en video",
      "Revisiones ilimitadas + Soporte Prioritario",
    ],
  },
];

const sizes = ["S", "M", "L", "XL"];

function App() {
  const [selectedPackage, setSelectedPackage] = useState(2);
  const [selectedSize, setSelectedSize] = useState("L");

  const chosenTier = packages[selectedPackage];
  const checkoutLabel = useMemo(
    () => `Reserve ${chosenTier.name}`,
    [chosenTier.name],
  );

  return (
    <main className="min-h-screen overflow-hidden bg-night text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.18),transparent_34%),radial-gradient(circle_at_70%_20%,rgba(230,226,216,0.09),transparent_26%),linear-gradient(180deg,#07080B_0%,#0A0B10_48%,#07080B_100%)]" />
      <Header />
      <Hero />
      <BusinessSections />
      <Pricing
        selectedPackage={selectedPackage}
        setSelectedPackage={setSelectedPackage}
        checkoutLabel={checkoutLabel}
      />
      <Merch selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
      <Conversion />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="max-w-7xl mx-auto w-full flex justify-between items-center px-6">
      <a href="#top" className="flex items-center gap-3" aria-label="KingdomConnect VIP home">
        <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 bg-white/[0.04] shadow-glow">
          <Crown className="h-5 w-5 text-gold" />
        </span>
        <span>
          <span className="block text-sm font-semibold uppercase tracking-[0.22em] text-gold">
            KingdomConnect
          </span>
          <span className="block text-xs text-white/55">VIP Production Suite</span>
        </span>
      </a>
      <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
        <a href="#services" className="transition hover:text-gold">Services</a>
        <a href="#pricing" className="transition hover:text-gold">Pricing</a>
        <a href="#merch" className="transition hover:text-gold">Merch</a>
        <a href="#contact" className="transition hover:text-gold">Contact</a>
      </nav>
      <a
        href="#pricing"
        className="rounded-full border border-gold/60 px-4 py-2 text-sm font-semibold text-gold transition hover:bg-gold hover:text-night"
      >
        View Packages
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-16">
      <div>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70">
          <Sparkles className="h-4 w-4 text-gold" />
          Premium tech, design, music visuals, and merch systems
        </div>
        <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          KingdomConnect VIP builds digital presence that looks expensive and works fast.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300">
          High-end frontend builds, brand identity, creative production, workflow automation, and custom merchandise experiences for artists, creators, founders, and premium streetwear launches.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-bold text-night transition hover:bg-platinum">
            Start a VIP Project <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#merch" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-bold text-white hover:text-yellow-500 hover:border-yellow-500 transition-colors duration-300">
            Explore Merch Drop
          </a>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-6 rounded-[2rem] border border-gold/30 blur-xl" />
        <div className="relative rounded-[2rem] border border-white/12 bg-white/[0.055] p-5 shadow-[0_0_60px_-15px_rgba(234,179,8,0.15)] backdrop-blur">
          <div className="rounded-[1.5rem] border border-gold/25 bg-gradient-to-br from-white/[0.1] to-white/[0.025] p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-gold">Production Stack</p>
                <h2 className="mt-2 text-2xl font-black">VIP Launch Console</h2>
              </div>
              <Gem className="h-8 w-8 text-gold" />
            </div>
            <div className="mt-6 grid gap-4">
              {[
                ["Frontend/App Delivery", "Vite, React, Shopify/WooCommerce-ready interfaces"],
                ["Brand Systems", "Logo, visuals, content layouts, social identity"],
                ["Merch Pipeline", "Printful-ready products with clean checkout routing"],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-4">
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-white/55">{detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between rounded-2xl bg-gold px-5 py-4 text-night">
              <span className="font-black">Fast, premium, launch-ready</span>
              <Rocket className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BusinessSections() {
  const sections = [
    {
      icon: Layers3,
      title: "Dev & Web Services",
      body: "Rapid frontend and app development, custom no-code/low-code solutions, workflow automation, and self-hosted deployment infrastructure for lean teams that need polished delivery.",
      points: ["React SPA builds", "Automation workflows", "Hostinger-ready deployments"],
    },
    {
      icon: Mic2,
      title: "DHSKNG Studios",
      body: "The multimedia arm for digital identity, branding, urban music visual content, and audio/vocal production layouts built to move cleanly across social, web, and commerce.",
      points: ["Brand identity direction", "Urban music visuals", "Audio and vocal production layouts"],
    },
  ];

  return (
    <section id="services" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">Core Business</p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">Two engines. One premium launch system.</h2>
        </div>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {sections.map((section) => (
          <article key={section.title} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur transition hover:border-gold/45 hover:bg-white/[0.065]">
            <section.icon className="h-9 w-9 text-gold" />
            <h3 className="mt-6 text-2xl font-black">{section.title}</h3>
            <p className="mt-4 leading-7 text-white/64">{section.body}</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {section.points.map((point) => (
                <span key={point} className="rounded-2xl border border-white/10 bg-night/55 px-4 py-3 text-sm font-semibold text-white/72">
                  {point}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Pricing({
  selectedPackage,
  setSelectedPackage,
  checkoutLabel,
}: {
  selectedPackage: number;
  setSelectedPackage: (index: number) => void;
  checkoutLabel: string;
}) {
  return (
    <section id="pricing" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
      <div className="mb-8 max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">Official Pricing</p>
        <h2 className="mt-3 text-3xl font-black sm:text-5xl">Packages for every serious stage.</h2>
        <p className="mt-4 text-white/62">
          Start budget-friendly or go straight into full creative production. Select a package to lock the highlighted path.
        </p>
      </div>
      <div className="grid gap-5 lg:grid-cols-4">
        {packages.map((tier, index) => {
          const active = index === selectedPackage;
          return (
            <button
              key={tier.name}
              type="button"
              onClick={() => setSelectedPackage(index)}
              className={`flex min-h-[34rem] flex-col rounded-3xl border p-5 text-left transition ${
                active
                  ? "border-gold bg-gold/10 shadow-glow"
                  : "border-white/10 bg-white/[0.04] hover:border-gold/50"
              }`}
            >
              <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-gold/35 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-gold">
                <BadgeDollarSign className="h-3.5 w-3.5" />
                {tier.badge}
              </span>
              <h3 className="text-2xl font-black">{tier.name}</h3>
              <div className="mt-5">
                {tier.original && <p className="text-sm text-white/45 line-through">{tier.original}</p>}
                <p className="text-3xl font-black text-gold">{tier.price}</p>
              </div>
              {tier.delivery && <p className="mt-3 text-sm font-semibold text-white/55">Delivery: {tier.delivery}</p>}
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6 text-white/68">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <span className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold ${
                active ? "bg-gold text-night" : "border border-white/12 text-white"
              }`}>
                {active ? checkoutLabel : "Select Package"}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function Merch({
  selectedSize,
  setSelectedSize,
}: {
  selectedSize: string;
  setSelectedSize: (size: string) => void;
}) {
  return (
    <section id="merch" className="mx-auto grid w-full max-w-7xl gap-7 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div className="rounded-[2rem] border border-gold/25 bg-white/[0.045] p-5 shadow-glow backdrop-blur">
        <div className="relative grid aspect-square place-items-center overflow-hidden rounded-[1.5rem] bg-[linear-gradient(145deg,#050608,#13151D)]">
          <div className="absolute h-[72%] w-[58%] rounded-t-[42%] rounded-b-[18%] border border-white/10 bg-black shadow-2xl" />
          <div className="absolute top-[16%] h-[26%] w-[32%] rounded-t-full border-x border-t border-white/10 bg-[#050505]" />
          <div className="absolute top-[40%] text-center">
            <Crown className="mx-auto h-12 w-12 text-gold" />
            <p className="mt-3 text-2xl font-black tracking-[0.16em] text-gold">KNG_CARLY</p>
            <RadioTower className="mx-auto mt-3 h-9 w-9 text-platinum/85" />
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">E-Commerce Hub</p>
        <h2 className="mt-3 text-3xl font-black sm:text-5xl">Merchandise marketplace ready for streetwear drops.</h2>
        <div className="mt-7 rounded-3xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur">
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <div>
              <h3 className="text-2xl font-black">KNG_CARLY Signature "Gold & Platinum" Unisex Hoodie</h3>
              <p className="mt-3 leading-7 text-white/62">
                Black premium hoodie featuring the metallic gold "KNG_CARLY" crown and music emblem centered on the chest.
              </p>
            </div>
            <p className="text-3xl font-black text-gold">$50.00 US</p>
          </div>
          <div className="mt-7">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-white/55">Size</p>
            <div className="flex flex-wrap gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`grid h-12 w-14 place-items-center rounded-xl border font-black transition ${
                    selectedSize === size
                      ? "border-gold bg-gold text-night"
                      : "border-white/14 text-white hover:border-gold"
                  }`}
                  aria-pressed={selectedSize === size}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {["WooCommerce-ready", "Printful API mapping", "Direct checkout routing"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-night/55 px-4 py-3 text-sm text-white/68">
                <PackageCheck className="h-4 w-4 text-gold" />
                {item}
              </span>
            ))}
          </div>
          <button className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold px-6 py-4 font-black text-gold transition hover:bg-gold hover:text-night sm:w-auto">
            Checkout Hoodie - Size {selectedSize}
            <ShoppingBag className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Conversion() {
  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
      <div className="grid gap-5 rounded-[2rem] border border-gold/25 bg-[linear-gradient(135deg,rgba(212,175,55,0.15),rgba(255,255,255,0.04))] p-7 backdrop-blur lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-gold">Conversion</p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">Ready for Stripe checkout or direct VIP intake.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-white/65">
            Route buyers to direct checkout, capture project inquiries, or connect service package selection to your preferred payment and contact workflow.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <a href="mailto:booking@kingdomconnect.vip" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-black text-night transition hover:bg-platinum">
            Contact VIP Desk <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#pricing" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 font-black text-white transition hover:border-gold hover:text-gold">
            Select Service
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <Crown className="h-7 w-7 text-gold" />
            <p className="text-lg font-black">KingdomConnect VIP</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">
            Premium web, identity, content production, and merchandise systems for creators and modern brands.
          </p>
        </div>
        <FooterColumn title="Navigate" links={["Services", "Pricing", "Merch", "Contact"]} />
        <FooterColumn title="Social" links={["@kingdomconnectvip", "@dhskngstudios", "@kng_carly"]} />
        <div>
          <p className="font-black text-white">Compliance</p>
          <div className="mt-4 space-y-3 text-sm text-white/55">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Refund Policy</p>
          </div>
          <div className="mt-5 flex gap-3 text-gold">
            <ShieldCheck className="h-5 w-5" />
            <Workflow className="h-5 w-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="font-black text-white">{title}</p>
      <div className="mt-4 space-y-3 text-sm text-white/55">
        {links.map((link) => (
          <p key={link}>{link}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
