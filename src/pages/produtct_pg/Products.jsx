import 'react-bootstrap/'
import Container from "react-bootstrap/Container"
import CardProd from '../../Components/CardProd';

export default function Products() {
    return (
        <>
        <Container className="mt-3">
            <h1>Products</h1>
            <hr/>
            <Container className="mt-3 d-flex justify-content-center">
            <CardProd />
            </Container>
        </Container>    
        </>
    );
}