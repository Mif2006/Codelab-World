import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import sectionArch from "@/assets/section-architecture.jpg";
import Project1 from "@/assets/Project1.jpg";
import Project2 from "@/assets/Project2.jpg";
import Project3 from "@/assets/Project3.jpg";
import Project4 from "@/assets/Project4.jpeg";
import Project5 from "@/assets/Insta1.png";
import Project6 from "@/assets/3.png";
import Project7 from "@/assets/4.png";
import Project9 from "@/assets/16.png";
import Project10 from "@/assets/17.png";
import Project11 from "@/assets/18.png";
import Project12 from "@/assets/19.png";
import Project13 from "@/assets/20.png";
import Project28 from "@/assets/28.png";

import viva1 from '/viva/viva1.png'
import viva2 from '/viva/viva2.png'
import viva3 from '/viva/viva3.png'
import rumor1 from '/rumor/rumor1.png'
import rumor2 from '/rumor/rumor2.png'
import rumor3 from '/rumor/rumor3.png'
import rumor4 from '/rumor/rumor4.png'
import fitness1 from '/bigfitness/fit1.png'
import fitness2 from '/bigfitness/fit2.png'
import fitness3 from '/bigfitness/fit3.png'
import fitness4 from '/bigfitness/fit4.png'
import mayak1 from '/mayak/mayak1.png'
import mayak2 from '/mayak/mayak2.png'
import mayak3 from '/mayak/mayak3.png'
import ProjectModal from "@/components/ProjectModal";

export type Project = {
  title: string;
  category: string;
  video: string;
  gallery: string[];
  description: string;
  link: string;
};

type WorkType = {
  img: string;
  title: string;
  category: string;
  priceUsd: string;
};

const workTypes: WorkType[] = [
  { 
    img: Project10, 
    title: "Landing Page", 
    category: "Landing Page", 
    priceUsd: "from $100"
  },
  { 
    img: Project11, 
    title: "E-commerce Store", 
    category: "E-commerce", 
    priceUsd: "from $300"
  },
  { 
    img: Project12, 
    title: "Corporate Website", 
    category: "Corporate", 
    priceUsd: "from $200"
  },
  { 
    img: Project28, 
    title: "Custom Web", 
    category: "Custom Projects", 
    priceUsd: "Custom pricing"
  },
];

const projectsData: Project[] = [
  {
    title: "Landing Page",
    category: "Landing Page",
    video: "/vivavid.mp4",
    gallery: [viva1, viva2, viva3],
    description: "High-conversion landing page development with deep sales funnel optimization and UX/UI refinement. We don't just build one-page sites — we create powerful marketing tools that combine compelling offers, trust signals, and strategic attention flow to turn cold traffic into loyal customers.",
    link: "https://www.vivashopminsk.by",
  },
  {
    title: "E-commerce Store",
    category: "E-commerce",
    video: "/rumorvid.mp4",
    gallery: [rumor1, rumor2, rumor3, rumor4],
    description: "A complete e-commerce ecosystem designed for performance. Key advantages include intuitive information architecture for instant product discovery via adaptive menus and filters, plus a seamless checkout experience. Integrated secure payment gateways ensure transaction safety and support all preferred customer payment methods.",
    link: "https://www.rumor.by",
  },
  {
    title: "Corporate Website",
    category: "Corporate",
    video: "/fitnessvid.mp4",
    gallery: [fitness1, fitness2, fitness3, fitness4],
    description: "A modern corporate website strengthens your brand identity and communicates your value proposition. We build informative, responsive resources that showcase your services, advantages, and team. Clear navigation and complete contact information help clients find what they need and reach out — today.",
    link: "https://www.bigfitness.b",
  },
  {
    title: "Custom Web",
    category: "Custom Projects",
    video: "/mayak.mp4",
    gallery: [mayak1, mayak2, mayak3],
    description: "Tailored web solutions for any business challenge. Regardless of complexity, our team develops personalized strategies to achieve your goals. With a flexible approach and close attention to your requirements, we deliver unique products that align perfectly with your needs and drive efficient growth.",
    link: "https://www.d-k-mayak.ru",
  },
];

const ProjectsSection = ({ isActive }: { isActive: boolean }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // const [currency, setCurrency] = useState<'BYN' | 'USD'>('USD'); // Default to USD

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) {
      cardsRef.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(
            card,
            { y: 100, opacity: 0, rotateY: -15 },
            {
              y: 0,
              opacity: 1,
              rotateY: 0,
              duration: 1,
              delay: i * 0.1,
              ease: "power3.out",
            }
          );
        }
      });
    }
  }, [isActive]);

  const getInterlockMargin = (index: number) => {
    if (index < 4) {
      return index % 2 !== 0 ? "lg:mt-[24px]" : "lg:mt-0";
    } else {
      const posInRow = index - 4;
      if (posInRow === 0) {
        return "lg:col-start-2 lg:mt-[24px]";
      } else {
        return "lg:mt-0";
      }
    }
  };

  // const toggleCurrency = () => {
  //   setCurrency(prev => prev === 'BYN' ? 'USD' : 'BYN');
  // };

  return (
    <section id="projects" className="section-panel flex flex-col lg:flex-row relative min-h-screen py-20 lg:py-0">
      <div ref={bgRef} className="absolute inset-0">
        <img src={sectionArch} alt="Projects background" className="w-full h-full object-cover opacity-30" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, hsl(0 0% 4% / 0.9), hsl(0 0% 4% / 0.4))",
          }}
        />
      </div>

      {/* Left side info */}
      <div className="relative z-10 w-full lg:w-1/3 flex flex-col justify-center px-6 lg:pl-16 lg:pr-8 mb-12 lg:mb-0">
        <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
          Services
        </p>
        <h2 className="font-display text-5xl md:text-6xl font-bold leading-tight text-foreground mb-6">
          Our
          <br />
          <span className="text-gradient-gold">Projects</span>
        </h2>
        <div className="w-16 h-[1px] bg-primary mb-6" />
        <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-sm">
          Every project is a business tool. Choose the format that fits your goals. 
          All projects are fully responsive and SEO-optimized.
        </p>

        {/* Currency Toggle Button - USD only display */}
       

        <div className="hidden lg:block h-24 mt-4 transition-all">
          {hoveredIndex !== null && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
              <p className="font-display text-3xl text-foreground">
                {workTypes[hoveredIndex].title}
              </p>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-primary mt-2">
                {workTypes[hoveredIndex].category}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right side */}
      <div className="relative z-10 w-full lg:w-2/3 flex lg:grid lg:grid-cols-4 overflow-x-auto lg:overflow-visible items-center lg:items-start gap-4 lg:gap-4 lg:gap-y-5 px-6 lg:pr-16 lg:pl-8 pb-8 lg:pb-0 snap-x snap-mandatory lg:snap-none hide-scrollbar lg:my-auto">
        {workTypes.map((work, i) => (
          <div
            key={i}
            ref={(el) => {
              cardsRef.current[i] = el;
            }}
            className={`relative group cursor-pointer flex-none w-[75vw] sm:w-[350px] lg:w-auto snap-center ${getInterlockMargin(i)}`}
            onClick={() => setSelectedProject(projectsData[i])}
            onMouseEnter={() => {
              setHoveredIndex(i);
              const card = cardsRef.current[i];
              if (card && window.innerWidth > 1024)
                gsap.to(card, { scale: 1.03, y: -5, zIndex: 20, duration: 0.4, ease: "power2.out" });
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              const card = cardsRef.current[i];
              if (card && window.innerWidth > 1024)
                gsap.to(card, { scale: 1, y: 0, zIndex: 1, duration: 0.4, ease: "power2.out" });
            }}
          >
            <div className="relative overflow-hidden aspect-[3/4] rounded-md border border-white/5 lg:border-none">
              <img
                src={work.img}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-overlay opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-primary">
                  {work.priceUsd}
                </p>
                <p className="font-display text-lg text-foreground mt-1">
                  {work.title}
                </p>
                <p className="font-body text-xs text-muted-foreground mt-1 lg:hidden">
                  {work.category}
                </p>
              </div>
              <div className="absolute top-0 left-0 w-[1px] h-0 bg-primary transition-all duration-700 group-hover:h-full hidden lg:block" />
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;