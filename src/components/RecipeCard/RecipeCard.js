import Link from 'next/link';

export default function RecipeCard(props){
    return(
        <figure className="recipe-card" >
          <Link href={props.link} >
              <img className="recipe-picture" src={props.picture} />
            </Link>
            <div className="recipe-category" >{props.category}</div>
            <figcaption className="recipe-name" >{props.name}</figcaption>
        </figure>
    )
}