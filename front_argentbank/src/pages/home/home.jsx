import Header from "../../components/header/header"
import Banner from "../../components/banner/banner"
import Features from "../../components/features/features"
import Footer from "../../components/footer/footer"
import Toast from "../../components/toast/toast"
import { useLocation } from 'react-router-dom';
import { useState } from "react"
import { useEffect } from "react"

function Home(){

    const location = useLocation();
    const [toast,setToast] = useState("")
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (params.get('logout') === 'true') {
            setToast("You are disconnected")
            window.history.replaceState({}, document.title, "/");
        }
    }, [location]);

    return(<>
        <Header />
        <main>
            <Banner />
            <Features />  
        </main>
        {toast?(<Toast state="info" message={toast} delay="3"></Toast>):""}
        <Footer />
    </>)
}

export default Home