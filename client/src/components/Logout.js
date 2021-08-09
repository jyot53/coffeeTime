import React,{useEffect} from 'react'
import {useHistory} from 'react-router-dom';

const Logout = () => {
    //using promises for
    const history = useHistory();
    useEffect(() => {
             fetch('/logout',{
                method: 'GET',
                headers: {
                    Accept: 'application/json', 
                    'Content-Type': 'application/json'
                },
                credentials : "include"
            }).then((response) => {
                const data = response.json();
           
                if(response.status===201){
                    // window.alert(data);
                    history.push('/login');  
                }else{
                    window.alert("Error in logout");
                }
            }).catch((error) => {console.log(error); });
    
        });



    return (
        <>
            <h1>Logout Page</h1>
        </>
    )
}

export default Logout
