import React from 'react';
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

  return (
    <>
      <Container>
        <Row>
          <h1>Homepage</h1>
          <div className="col-md-4 col-sm-4 col-xs-6 product-box">
            <h1>product box</h1>
          </div>
        </Row>
      </Container>
      {productsData.map((item) => {
        return <p key={item.id}>{JSON.stringify(item)}</p>;
      })}
    </>
  );
}

export default HomePage;
