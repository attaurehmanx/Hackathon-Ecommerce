import Shopnav from "@/components/Shopnav";
import Shophero from "@/components/Shophero";
import Shopfilter from "@/components/Shopfilter";
import Shopitem from "@/components/Shopitem";


export default function Shop() {
  return (
    <main>
        <Shopnav/>
        <Shophero/>
        <Shopfilter/>
        <Shopitem/>
    </main>
  );
}