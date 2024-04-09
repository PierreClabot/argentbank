import Header from "../../components/header/header"
import Banner from "../../components/banner/banner"
import Features from "../../components/features/features"
import Footer from "../../components/footer/footer"

function Home(){

    return(<>
        <Header />
        <main>
            <Banner />
            <Features />  
        </main>
        <Footer />
    </>)
}

export default Home