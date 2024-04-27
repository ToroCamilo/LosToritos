import { Form, Button } from 'react-bootstrap';
import Logo from '../assets/Logo.png';

export const LoginPage = () => {
    return (
        <div style={{backgroundColor: "#EF1C1C", height: '100vh', overflow: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
                <img src={Logo} style={{ width: '380px', height: '380px' }} />
                <Form style={{ width: '300px', margin: '0 auto' }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control style={{
                            fontSize: '20px', borderRadius: '50px', backgroundColor: '#ffffff',
                            textAlign: 'center', padding: '10px'
                        }} type="email" placeholder="USER NAME" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control style={{
                            fontSize: '20px', borderRadius: '50px', backgroundColor: '#ffffff',
                            textAlign: 'center', padding: '10px'
                        }} type="password" placeholder="PASSWORD" />
                    </Form.Group>
                    <div style={{ marginBottom: "40px" }}>
                        <Button  variant="warning" type="submit" style={{ width: '35%', borderRadius: '50px' }}>
                            LOGIN
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};