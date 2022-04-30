/* eslint-disable prefer-template */
import React from 'react';
import './HomePage.scss';
import {
  Button,
  ButtonGroup,
  Container,
  Row,
  Carousel,
  CarouselItem,
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function ProductPage() {
  const [productData, setProductData] = React.useState({ id: -1, images: [] });
  const [productSellersData, setProductSellersData] = React.useState([]);
  const { id } = useParams();

  const fetchProduct = async () => {
    const responce = await fetch(
      `http://127.0.0.1:8000/products/api/product/?product_id=${id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await responce.json();
    console.log('data:', data);
    if (responce.status === 200) {
      setProductData(data);
    } else {
      console.log('something went wrong');
    }
  };

  const fetchProductSellers = async () => {
    const responce = await fetch(
      `http://127.0.0.1:8000/products/api/product/sellers/?product_id=${id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await responce.json();
    console.log('data:', data);
    if (responce.status === 200) {
      setProductSellersData(data);
    } else {
      console.log('something went wrong');
    }
  };

  React.useEffect(() => {
    console.log('lol hi 999**');
    fetchProduct();
    fetchProductSellers();
  }, []);

  React.useEffect(() => {
    console.log('effect re run');
  }, [productData]);

  return (
    <Container>
      <Row>
        <h1>Product Page</h1>
        <div className="col-md-4">
          <Carousel variant="dark">
            {productData.images.map((item) => {
              return (
                <CarouselItem key={item.file}>
                  <img
                    className="d-block w-100"
                    src={'http://127.0.0.1:8000' + item.file}
                    alt="First slide"
                  />
                </CarouselItem>
              );
            })}
          </Carousel>
        </div>
        <div className="col-md-8">
          <div className="page-header">
            <h2>{productData.title}</h2>
          </div>
          <div className="Price-div">
            <span className="price">₹ {productData.price}</span>
          </div>
          <ButtonGroup>
            <Button>Add to Cart</Button>
            <Button>Buy Now</Button>
            <Button>Wishlist</Button>
          </ButtonGroup>
          <div className="Description">{productData.description}</div>
        </div>
      </Row>
    </Container>
  );
}

export default ProductPage;
