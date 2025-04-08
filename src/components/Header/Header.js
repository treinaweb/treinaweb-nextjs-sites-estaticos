import Head from 'next/head';
import Link from 'next/link';

export default function Header(props){
    return(
        <header className="header" >
            <Head>
                <title>{props.title}</title>
                <Link rel="stylesheet" href="/styles/page.css" />
                <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
            </Head>
            <Link href="/" >
                    <h1>{props.title}</h1>
            </Link>
        </header>
    )
}