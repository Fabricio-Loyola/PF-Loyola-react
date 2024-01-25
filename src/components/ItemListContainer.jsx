import { CardBody } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const ItemListContainer = ({productsData}) => {

    

    return (

        <div style={{width: '100vw', height: '100vh', display: 'flex', flexWrap: 'wrap'}}>

        {
            productsData.map(products => {
                return(
                    <Card key={products.id} style={{ width: '18rem', margin: '10px', border: '1px solid #ccc', borderRadius: '8px', padding: '10px' }}>
    <Link to={`/item/${products.id}`}>
        <Card.Img variant="top" src={products.thumbnail} />
    </Link>
    <Card.Body>
        <Link to={`/item/${products.id}`} style={{ textDecoration: 'none' }}>
            <Card.Title style={{ fontSize: '1.2rem', color: 'blue' }}>{products.title}</Card.Title>
        </Link>
        <Card.Text style={{ fontSize: '0.9rem', color: '#333' }}>
            {products.description}
        </Card.Text>
        <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: 'green' }}>Precio: {products.price}</div>
        <Link to={`/item/${products.id}`} variant="primary">Ver producto</Link>
    </Card.Body>
</Card>

                

                )
            })
        }

        </div>


        

    )

    
}


        


export default ItemListContainer;