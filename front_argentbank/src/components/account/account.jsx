function Account(props){

    return(
        <section className="account">
            <div className="account-content-wrapper">
                <h2 className="account-title">{props.title}</h2>
                <p className="account-amount">{props.amount}</p>
                <p className="account-description">{props.description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    )
}

export default Account