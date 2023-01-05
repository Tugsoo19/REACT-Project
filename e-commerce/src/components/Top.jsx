import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Top() {
    return (
        <Container>
    <Row>
        <Col>
            <a>Need Help? Call us: (+98) 0234 456 789</a>
        </Col>
        <Col>
            <img src='images/location.svg'></img>
            <a>Our Store</a>
            <img src='images/track-logo.svg'></img>
            <a>Track your order</a>
        </Col>

    </Row>
</Container>
    )



}
