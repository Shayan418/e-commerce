/* eslint-disable prefer-template */
import React from 'react';
import './HomePage.scss';
import { Button, Container, Row } from 'react-bootstrap';

function HomePage() {
  const [productsData, setProductsData] = React.useState(() =>
    localStorage.getItem('productsData')
      ? JSON.parse(localStorage.getItem('productsData'))
      : [],
  );

  const fetchProducts = async () => {
    const responce = await fetch('http://127.0.0.1:8000/products/api/allProducts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await responce.json();
    console.log('data:', data);
    if (responce.status === 200) {
      setProductsData(data);
    } else {
      console.log('something went wrong');
    }
  };

  React.useEffect(() => {
    if (productsData.length === 0) {
      fetchProducts();
    }
  });

  React.useEffect(() => {
    console.log('effect run');
  }, [productsData]);

  function addToWishlist(e) {
    console.log('wishlist' + e.target.id);
  }

  function addToCart(e) {
    console.log('Cart' + e.target.id);
  }

  function productView(e) {
    console.log('productView' + e.target.id);
  }

  return (
    <Container>
      <Row>
        <h1>Homepage</h1>
        {productsData.map((item) => {
          return (
            <div key={item.id} className="col-md-4 col-sm-4 col-xs-6 product-box" min>
              <div className="inner-product-box">
                <div className="product-box-details">
                  <div className="product-image-section">
                    <div className="prucuct-wishlist-buttton">
                      <Button id={item.id} onClick={(e) => addToWishlist(e)}>
                        wishlist
                      </Button>
                    </div>
                    <div className="product-image">
                      <img
                        className="product-image"
                        src={'http://127.0.0.1:8000' + item.images[0].file}
                        alt={item.title}
                      />
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-title">{item.title}</div>
                    <div className="product-price">{item.price}</div>
                  </div>
                </div>
                <div className="pruduct-button-wrapper">
                  <Button id={item.id} onClick={(e) => productView(e)}>
                    View
                  </Button>
                  <Button id={item.id} onClick={(e) => addToCart(e)}>
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Row>
    </Container>
  );
}

export default HomePage;
