'use client'
import CryptoCarousel from "@/components/carruselPrices";
import FooterComponent from "@/components/footerComponent";
import MenuNav from "@/components/menuNav";


export default function Home() {
  return (
    <div>
    <div className="mb-4">
      <MenuNav></MenuNav>
    </div>

  <div>
    <CryptoCarousel></CryptoCarousel>
  </div>

<div>
  <FooterComponent></FooterComponent>
</div>
    </div>
  );
}
