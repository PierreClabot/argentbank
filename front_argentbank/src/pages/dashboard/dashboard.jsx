import Header from "../../components/header/header"
import Account from "../../components/account/account"
import Footer from "../../components/footer/footer"


function Dashboard(){
    const name = "Tony Jarvis"
    const arrAccounts = [
        {
            title : "Argent Bank Checking (x8349)",
            amount : "$2,082.79",
            description : "Available Balance"
        },
        {
            title : "Argent Bank Savings (x6712)",
            amount : "$10,928.42",
            description : "Available Balance"
        },
        {
            title : "Argent Bank Credit Card (x8349)",
            amount : "$184.30",
            description : "Current Balance"
        }
    ]
    return(
        <>
            <Header />
            <main className="dashboard">
                <div className="header">
                    <h1>Welcome back <span>{name}</span></h1>
                    <button className="button">Edit Name</button>
                </div>
                {
                    arrAccounts.map((elem,index)=>{
                        return(<Account key={index} title={elem.title} amount={elem.amount} description={elem.description} />)
                    })
                }
            </main>
            <Footer />            
        </>
    )

}

export default Dashboard