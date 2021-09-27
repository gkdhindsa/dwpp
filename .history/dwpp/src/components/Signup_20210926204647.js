import React from 'react'
import {Card, Form, Button} from 'react-bootstrap'

export default function Signup() {
    return (
        <div>
            <Card>
                <Card.body>
                    <h2 className="mb-4">Register to PetsWeekly</h2>
                    <Form>
                        <Form.Group id="full_name">
                            <Form></Form>
                        </Form.Group>
                    </Form>
                </Card.body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? Login
            </div>
        </div>
    )
}
