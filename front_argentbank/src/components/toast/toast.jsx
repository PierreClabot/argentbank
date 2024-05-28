import iconError from "../../assets/warning.svg"
import iconInfo from "../../assets/info.svg"
import iconSuccess from "../../assets/success.svg"
import { useEffect, useState } from "react"

function Toast(props){

    const [icone,setIcone] = useState("")
    const [visible,setVisible] = useState(true)

    const positionStyles = {
        'top-left': { top: 10, left: 10, position: 'absolute' },
        'top-right': { top: 10, right: 10, position: 'absolute' },
        'bottom-left': { bottom: 10, left: 10, position: 'absolute' },
        'bottom-right': { bottom: 10, right: 10, position: 'absolute' },
        'top-center': { top: 10, left: '50%', transform: 'translateX(-50%)', position: 'absolute' },
        'bottom-center': { bottom: 10, left: '50%', transform: 'translateX(-50%)', position: 'absolute' },
    };

    useEffect(()=>{
        switch(props.state){
            case 'info':
                setIcone(iconInfo)
                break
            case 'error':
                setIcone(iconError)
                break
            case 'success':
                setIcone(iconSuccess)
                break
        }

        const timer = setTimeout(()=>{
            setVisible(false)
        },props.delay*1000)

        return () => clearTimeout(timer);
    },[props.message,props.state,props.delay])
    

    const style = positionStyles[props.position] || positionStyles['bottom-center']; // Valeur par défaut si la position n'est pas reconnue


    if(!visible) return

    return(
        <div className="toast" style={style}>
            <div className="toast-icone"><img src={icone} alt="Toast icone" /></div>
            <div className="toast-message">{props.message}</div>
        </div>
    )
}

export default Toast