import Recipe from '../../../../components/Recipe/Recipe';

export default function MolhoBranco(){
    return(
        <div>
            <Recipe 
                name="Molho Branco" 
                picture="https://s2-receitas.glbimg.com/EGJrOehjb4taTrwhJDFTHCBTRyk=/0x0:1280x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/W/7/RicIVvSgAWdonfaIdl5Q/molho-branco-como-fazer.jpg"  
                time="15 min"
                servings="4 porções"
            >
                <h2>Ingredientes</h2>

                <ul>
                    <li>2 xícaras de leite frio</li>
                    <li>2 colheres (sopa) de manteiga ou margarina</li>
                    <li>2 dentes de alho picados</li>
                    <li>1/2 cebola média picada</li>
                    <li>2 colheres (sopa) de farinha de trigo (ou maisena)</li>
                    <li>1 tablete de caldo de legumes</li>
                    <li>sal a gosto</li>
                </ul>

                <h2>Modo de Preparo</h2>
                <ol>
                    <li>Dissolva a farinha de trigo em 1/2 xícara de leite e reserve.</li>
                    <li>Em uma panela, doure o alho e a cebola na margarina.</li>
                    <li>Adicione o leite com a farinha, mexa um pouco e acrescente o restante do leite.</li>
                    <li>Após fervura, adicione o caldo de legumes.</li>
                    <li>Mexa, constantemente, até ficar cremoso.</li>
                </ol>
            </Recipe>
        </div>
    )
}