import AboutContent from "@/components/About/AboutContent";
import AboutGrid from "@/components/About/AboutGrid";


export default function AboutSection() {
  return (
    <section className="bg-background" id="about">
    <section className=" max-w-299.5 space-y-6 mx-auto py-20 px-4">
      <AboutContent/>
      <AboutGrid/>
    </section>
    </section>
  );
}
