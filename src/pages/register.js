import React from 'react'
import axios from 'axios'
import {Card, Form, Button, Container} from 'react-bootstrap'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class Register extends React.Component {
    constructor () {
        super();
        this.state = {
            email:"",
            username: "",
            password: "",
            message: "",
            registered: false
        }
    }
    Register = event => {
        const base_url = "http://localhost:2000"
        event.preventDefault()
        let sendData = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        }
        let url = base_url + "/register"
        
        axios.post(url, sendData)
        .then(response => {
            this.setState({registered: true})
            if (this.state.registered) {
                this.setState({message: response.data.message})
            } else {
                this.setState({message: response.data.message})
            }
        })
        .catch(error => alert(error))
    }
    render () {
        return(
            <Container className="container d-flex justify-content-center align-items-center">
                <Card className="col-sm-6 card my-5">
                <Card.Header className="card-header bg-primary text-white text-center">LOGIN</Card.Header>
                <Card.Body>
                    { this.state.registered ? 
                        (
                            <div className="alert alert-danger mt-1">
                                { this.state.message }
                            </div>
                        ) : null }
                    <Form onSubmit={ev => this.Register(ev)}>
                    <Card.Text>
                        <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Email" value={this.state.email}
                            onChange={ev => this.setState({email: ev.target.value})}/>
                        <Form.Group controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" value={this.state.username}
                            onChange={ev => this.setState({username: ev.target.value})}/>
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={this.state.password}
                            onChange={ev => this.setState({password: ev.target.value})}
                            autoComplete="false" />
                        </Form.Group>
                    </Card.Text>
                    <Button variant="dark" type="submit">Submit</Button>
                    <Nav.Link><Link to='/login'><strong>Sudah memiliki akun ? Login</strong></Link></Nav.Link>
                    </Form>
                </Card.Body>
                </Card>
            </Container>
        )
    }
}

export default Register
