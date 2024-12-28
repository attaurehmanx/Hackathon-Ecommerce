import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Side_table from "@/components/Side_table";
import Top_picks from "@/components/Top_picks";
import Asgaard_sofa from "@/components/Asgaard_sofa";
import Our_blog from "@/components/Our_blog";
import Instagram from "@/components/Instagram";


export default function Home() {
  return (
    <main>

        <Navbar/>
        <Hero />
        <Side_table />
        <Top_picks />
        <Asgaard_sofa />
        <Our_blog />
        <Instagram />

    </main>
  );
}
