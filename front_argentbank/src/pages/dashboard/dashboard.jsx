import Header from "../../components/header/header"
import Account from "../../components/account/account"
import Footer from "../../components/footer/footer"
import Api from "../../api/api"
import { getToken } from "../../utils/utils"
import { useEffect, useState } from "react"
import { profile } from "../../redux/profileSlice"
import { useDispatch } from 'react-redux'
import Toast from "../../components/toast/toast"
import { useLocation } from 'react-router-dom';

function Dashboard(){



    const dispatch = useDispatch()
    const [editProfile,setEditProfile] = useState(false)
    const [error,setError] = useState("")
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [token,setToken] = useState("")
    const [toast,setToast] = useState("")    
    const location = useLocation();
   

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        if (params.get('login') === 'true') {
            setToast("You are connected")
            window.history.replaceState({}, document.title, "/profile");
            
        }
    }, [location]);

    useEffect(()=>{
        setToken(getToken())
    },[])

    useEffect(()=>{
        function getUser(){
            if(!token){
                return
            }
            Api.getUser(token)
            .then((res)=>{
                setFirstName(res.firstName)
                setLastName(res.lastName)
            })
            
        }
        getUser()
    },[token])


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

    
    function handleEditProfile(){
        setEditProfile(!editProfile)
    }

    function saveProfile(){
        
        const firstName = document.querySelector("#firstname").value
        const lastName  = document.querySelector("#lastname").value 
        
        if(( firstName.trim() == "") || ( lastName.trim() == "" )){
            setError("First or last name is incorrect")
            return;
        }
        
        setFirstName(firstName)
        setLastName(lastName)
        
        dispatch(profile({token,firstName,lastName}))
        
        setToast("Firstname and lastname update")
        setError("")
        setTimeout(()=>{
            setToast("")
        },3000)

        handleEditProfile()
        
    }

    function htmlEditProfile(isEdit){
        if(isEdit){
            return(
                <div className="editProfile">
                    <div className="rowProfile">
                        <input type="text" id="firstname" defaultValue={firstName} />
                        <input type="text" id="lastname" defaultValue={lastName} />
                    </div>
                    <div className="rowProfile">
                        <button className="btn-edit" onClick={saveProfile}>Save</button>
                        <button className="btn-edit" onClick={handleEditProfile}>Cancel</button>
                    </div>
                </div>)
        }

        return(
            <>
                <h2>{firstName} {lastName}</h2>
                <button className="button" onClick={handleEditProfile}>Edit Name</button>
            </>
        )

    }

    return(
        <>
            <Header firstName={firstName}/>
            <main className="dashboard">
                <div className="header">
                    <h1>Welcome back</h1>
                    
                    {htmlEditProfile(editProfile)}
                    {error?<div className="error">{error}</div>:""}
                </div>
                {
                    arrAccounts.map((elem,index)=>{
                        return(<Account key={index} title={elem.title} amount={elem.amount} description={elem.description} />)
                    })
                }
            </main>
            {toast?(<Toast state="info" message={toast} delay="3" ></Toast>):""}
            <Footer />            
        </>
    )

}

export default Dashboard