import Recipe from '../../../../components/Recipe/Recipe';

export default function BolinhoDeChuva(){
    return(
        <div>
            <Recipe 
                name="Bolinho de Chuva" 
                picture="https://s2-receitas.glbimg.com/E6Ny0T5Rsu-ZtYH1vk5Sa2DHpes=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/X/g/2xSPBfRVKkOAq5fm9KHA/bolinho-de-chuva-receita.jpg" 
                time="30 min"
                servings="8 porções"
            >
                <h2>Ingredientes</h2>

                <ul>
                    <li>2 ovos</li>
                    <li>2 colheres (sopa) de açúcar</li>
                    <li>1 xícara (chá) de leite</li>
                    <li>2 e 1/2 xícaras (chá) de farinha de trigo</li>
                    <li>1 colher (sopa) de fermento</li>
                    <li>3 colheres (sopa) de açúcar</li>
                    <li>1 colher (chá) de canela</li>
                </ul>

                <h2>Modo de Preparo</h2>
                <ol>
                    <li>Em um recipiente, adicione os ovos, o açúcar, o leite, a farinha de trigo e o fermento, depois misture-os até obter uma massa lisa e homogênea.</li>
                    <li>Com a ajuda de uma colher, pegue porções da mistura e despeje em uma panela com o óleo quente.</li>
                    <li>Retire do fogo quando estiver no ponto, depois misture a canela com açúcar e salpique no bolinho de chuva já frito.</li>
                </ol>
            </Recipe>
        </div>
    )
}