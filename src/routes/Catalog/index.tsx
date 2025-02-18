
import Card from "../../components/Card";
import Comments from "../../components/Comments";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './styles.css'

export default function Catalog() {
    return (
        <>
            <Header />
            <main>
                <section className="dsc-catalog-card">
                    <h1>Venha nos visitar</h1>
                    <Card />
                    <Card />
                </section>
                <section className="dsc-catalog-comments">
                    <h1 >O que estão dizendo </h1>
                    <Comments />
                    <Comments />
                    <Comments />
                    <Comments />
                    <Comments />
                    <Comments />
                </section>
            </main>
            <Footer />
        </>
    )
}
