import { AnimatedTestimonials } from "./ui/animated-testimonials";

const Team = ({ theme }: { theme: string }) => {
  const teamMembers = [
    {
      name: "Shashankraj",
      designation: "Founder & CEO",
      quote: "Passionate about meaningful interactions and innovative solutions.",
      src: "/media/Shashankraj.png",
      github: "https://github.com/shashank1107H",
      linkedin: "https://linkedin.com/in/shashankrajs",
      website: "https://linkedin.com/in/shashankrajs",
      objectPosition: "50% 20%"
    },
    {
      name: "Anish John",
      designation: "Co-Founder",
      quote: "Focused on user-centric design and robust functionality.",
      src: "/media/Anish.png",
      github: "https://github.com/ANISH-JOHN777",
      linkedin: "https://linkedin.com/in/m-anish-raj",
      website: "https://linkedin.com/in/m-anish-raj"
    },
    {
      name: "Akash",
      designation: "Team Member",
      quote: "Driving excellence through dedication and technical expertise.",
      src: "/media/Akash.jpeg",
      github: "https://github.com/Akash-Developer-hub",
      linkedin: "https://linkedin.com/in/akash-s-",
      website: "https://www.akashsivakumar.tech/",
      objectPosition: "70% 20%",
    },
    {
      name: "Mohamed Aslam",
      designation: "Team Member",
      quote: "Creating impactful experiences with code and creativity.",
      src: "/media/Aslam.jpeg",
      github: "https://github.com/aslam-03",
      linkedin: "https://www.linkedin.com/in/mohamed-aslam-i",
      website: "https://mohamedaslam.tech/"
    },
    {
      name: "Suman",
      designation: "Team Member",
      quote: "Turning complex problems into elegant, scalable solutions.",
      src: "/media/Suman.jpeg",
      github: "https://github.com/suman2k4",
      linkedin: "https://linkedin.com/in/suman-s-",
      website: "https://sumanx.tech/"
    },
    {
      name: "Vamsi Krishna",
      designation: "Team Member",
      quote: "Building the future with cutting-edge technology and design.",
      src: "/media/Vamsi.jpeg",
      github: "https://github.com/Vamsi-Krishna-NP",
      linkedin: "https://linkedin.com/in/vamsi-krishna-np",
      website: "https://linkedin.com/in/vamsi-krishna-np"
    },
    {
      name: "Wilfred Roy",
      designation: "Team Member",
      quote: "Combining vision with execution to deliver outstanding results.",
      src: "/media/Wilfred.jpeg",
      github: "https://github.com/Wilfredroy",
      linkedin: "https://linkedin.com/in/wilfred-roy",
      website: "https://wilfredroy.github.io/"
    },
    {
      name: "Mothieram",
      designation: "Team Member",
      quote: "Innovating at the intersection of technology and human needs.",
      src: "/media/Mothie.jpg",
      github: "https://github.com/Mothieram",
      linkedin: "https://linkedin.com/in/mothie-ram",
      website: "https://mothieram.github.io/mothieramportfolio/"
    },
  ];

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-background/50 -z-10" />
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-press-start">
          Our Team
        </h2>
        <p className={`text-lg opacity-90 max-w-2xl mx-auto font-light-theme ${theme === 'light' ? 'text-black' : 'text-foreground'}`}>
          Meet the talented individuals driving innovation at AGL
        </p>
      </div>
      <AnimatedTestimonials testimonials={teamMembers} autoplay={true} theme={theme} />
    </section>
  );
};

export default Team;