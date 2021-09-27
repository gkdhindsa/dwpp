import React, { useRef } from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

function Signup() {
    const fullNameRef=useRef()
    const usernameRef=useRef()
    const emailRef=useRef()
    const passwordRef=useRef()
    const confirmPasswordRef=useRef()

    const {signup}=useAuth()
    const [error, setError]=useState('')

    function handlesSubmit(e){
        e.preventDefault()
        //check if passwords are equal
        if(passwordConfirmRef.current.Value !== passwordRef.current.value){
            return setError('Passwords do not match')
        }
        try{
            await 
        }

        
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="mb-4">Register to PetsWeekly</h2>
                    <Form>
                        <Form.Group id="full_name">
                            <Form.Control type="text" required placeholder="Full Name" ref={fullNameRef}></Form.Control>
                        </Form.Group>
                        <Form.Group id="username">
                            <Form.Control type="text" required placeholder="Username" ref={usernameRef}></Form.Control>
                        </Form.Group>

                        <Form.Group id="email">
                            <Form.Control type="email" required placeholder="Email" ref={emailRef}></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Control type="password" required placeholder="Password" ref={passwordRef}></Form.Control>
                        </Form.Group>
                        <Form.Group id="confirm_password">
                            <Form.Control type="password" required placeholder="Confirm Password" ref={confirmPasswordRef}></Form.Control>
                        </Form.Group>
                        <Button type="submit" className="w-100">Create an Account</Button>

                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Login
            </div>
        </>
    )
}

export default Signup