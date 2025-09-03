import react from 'react'
import UserProfile from './UserProfile';
import EditAccount from './EditAccount';

function Account({ user }){
    return(
        <div className='bg-[#F8F8F9]'>
            <UserProfile user={user}/>
            <EditAccount user={user}/>
        </div>
    )
}

export default Account;