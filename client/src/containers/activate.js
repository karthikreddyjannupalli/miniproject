import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function ActivationEmail(props) {
    const activation_token = props.match.params.key;
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(() => {
        if(activation_token){
            const activationEmail = async () => {
                try {
                    const res = await axios.post('http://localhost:5000/api/users/activation', {activation_token})
                    setSuccess('Activation is done');
                } catch (err) {
                    setErr('Activation is not done');
                }
            }
            activationEmail()
            
        }
    },[activation_token])
    console.log(err,success);
    return (
        <div className='' style={{minHeight: "250px"}} className="active_page">
            <div className='row'>
                <div style={{color: 'green',fontSize: '32px'}} className='offset-4 col-6'>{err||success}</div></div>
        </div>
    )
}

export default ActivationEmail