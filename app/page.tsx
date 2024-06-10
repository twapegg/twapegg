import Hero from "@/components/main/Hero";
import About from "@/components/main/About";


export default function Home() {
  // get the radial gradient to be fixed on the right side of the screen
  // get width of the screen
  // get height of the screen

  return (
    <main className="w-full h-screen relative">
      <Hero />
      <About />
    </main>
  );
}
