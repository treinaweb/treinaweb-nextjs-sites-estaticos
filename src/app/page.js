import Image from "next/image";
import "./page.module.css";
import Header from "@/components/Header/Header";
import RecipeCard from "@/components/RecipeCard/RecipeCard";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
    <Header title="TreinaCook - Receitas" />

    <main>

      <RecipeCard
        name="Bolo de Cenoura"
        category="Bolos"
        picture="https://s2-receitas.glbimg.com/79NQGPCXHD1FVumrr14tQSE0A4s=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/w/d/pPWpQOTJus3u4DeVyADQ/bolo-de-cenoura.jpg"
        link="/receitas/bolos/bolo-de-cenoura"
      />

      <RecipeCard
        name="Brigadeiro"
        category="Doces"
        picture="https://cdn.panelinha.com.br/receita/958014000000-Brigadeiro.jpg"
        link="/receitas/doces/brigadeiro"
      />
      <RecipeCard
        name="Bolinho de Chuva" 
        category="Doces"
        picture="https://s2-receitas.glbimg.com/E6Ny0T5Rsu-ZtYH1vk5Sa2DHpes=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/X/g/2xSPBfRVKkOAq5fm9KHA/bolinho-de-chuva-receita.jpg" 
        link="/receitas/doces/bolinho-de-chuva"
      />
      <RecipeCard
        name="Molho Branco" 
        category="Molhos"
        picture="https://s2-receitas.glbimg.com/EGJrOehjb4taTrwhJDFTHCBTRyk=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/W/7/RicIVvSgAWdonfaIdl5Q/molho-branco-como-fazer.jpg" 
        link="/receitas/molhos/molho-branco"
      />
    </main>

    <Footer />
  </div>
  );
}
