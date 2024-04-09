import background from "../../assets/bank-tree.jpeg";

function Banner(){
    return(
    <section className="banner">
        <img src={background} alt="Bank Tree" className="banner-background"/>
        <div className="banner-content">
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
        </div>
    </section>)
}

export default Banner