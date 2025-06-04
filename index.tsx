import { Squares } from "@/components/ui/squares-background";
import { SparklesText } from "@/components/ui/sparkles-text";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const Index = () => {
  const testimonials = [
    {
      quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Squares
          direction="diagonal"
          speed={0}
          borderColor="#333"
          squareSize={50}
          hoverFillColor="#1a1a1a"
          className="w-full h-full"
        />
      </div>
      
      <div className="absolute top-8 left-8 z-10">
        <SparklesText 
          text="Prabhas" 
          className="text-4xl font-bold text-white"
          colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
          sparklesCount={8}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-32">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl text-white font-light mb-4">
            Hi I'm Prabhas
          </h1>
          <div className="text-3xl md:text-4xl">
            <AnimatedTextCycle 
              words={[
                "AI Enthusiast",
                "Creator", 
                "Tech Enthusiast",
                "Vibe Coder"
              ]}
              interval={3000}
              className="text-white font-mono"
            />
          </div>
        </div>

        <div className="w-full">
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </div>
    </div>
  );
};

export default Index;
