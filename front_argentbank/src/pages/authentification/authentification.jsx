import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import FormAuthentification from "../../components/formAuthentification/formAuthentification"

function Authentification(){
    
    return(
        <>
            <Header />
            <main className="authentification">
                <FormAuthentification />
            </main>
            <Footer />
        </>
    )

}

export default Authentification