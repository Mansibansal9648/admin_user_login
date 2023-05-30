import {useHistory} from 'react-router-dom'

export const LandingPage=()=>{
    const history =useHistory();
    // const redirectProfile=()=>{
    //     history.push('/profile')
    // }
return(
    <>
    <h1>On Landing Page</h1>
    <input type="button" class="btn btn-primary" value="Go to Profile" onClick={()=>{history.push('/profile')}}></input>
    </>
)

}