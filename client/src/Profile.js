import {useHistory} from 'react-router-dom'
export const Profile=()=>{
    const history=useHistory();
    // const redirectLandingPage=()=>{
      //  history.push('/landingPage')
   // }
    return(
        <>
        <h1>On Profile Page</h1>
        <input type ="button" value="Go to Landing Page" onClick={()=>{history.push('/landingPage')}}></input>
        </>
    )
}