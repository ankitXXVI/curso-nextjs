import Head from "next/head";
import axios from "axios";

const Note = ({ data }) => {

    return (
        <div className="container">
            <Head>
                <title>{`Note: ${data[0].title}`}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="main">
                <h3 className="title">{data[0].title}</h3>
                <p className="card">{data[0].note}</p>
            </main>
        </div>
    )
}

export async function getServerSideProps(context){
    const { id } = context.query;
    const response = await axios.get(process.env.HOST + '/api/posts/' + id);
    const data = response.data;
  
    return { props: { data }}
}

export default Note