import imgChat from "../../assets/icon-chat.png"
import imgMoney from "../../assets/icon-money.png"
import imgSecurity from "../../assets/icon-security.png"

import CardFeature from "../cardFeature/cardFeature.jsx"

function Features(){
    const arrFeatures = [
        {
            src : imgChat,
            alt : "Chat Icon",
            title : "You are our #1 priority",
            text : "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
        },
        {
            src : imgMoney,
            alt : "Money Icon",
            title : "More savings means higher rates",
            text : "The more you save with us, the higher your interest rate will be!"
        },
        {
            src : imgSecurity,
            alt : "Security Icon",
            title : "Security you can trust",
            text : "We use top of the line encryption to make sure your data and money is always safe."
        }
    ]
    return(
        <section className="features">
            {
                arrFeatures.map((elem,index)=>{
                    return(<CardFeature key={index} src={elem.src} alt={elem.alt} title={elem.title} text={elem.text}/>);
                })
            }
        </section>
    )
}

export default Features