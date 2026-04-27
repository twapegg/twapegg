import Hero from "@/components/main/Hero";
import About from "@/components/main/About";
import Projects from "@/components/main/Projects";
import Footer from "@/components/main/Contact";

export default function Home() {
  return (
    <main className="relative z-10 w-full">
      <Hero
        title="hello world!"
        subtitle="I'm Stanley, and I dabble in"
        highlight="full-stack development, ai & automations!"
      />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
