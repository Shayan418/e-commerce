const addToWishlist = (e) => {
  const user = JSON.parse(localStorage.getItem('authTokens')).access;
  console.log('wishlist' + e.target.id);
  const Wishlist = async (e) => {
    let message = '';
    e.preventDefault();
    const responce = await fetch('http://127.0.0.1:8000/products/api/product/wishlist/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${user}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product: e.target.id,
      }),
    });
    const data = await responce.json();
    console.log('data:', data);
    if (responce.status === 200) {
      if (data === 'added') {
        message = 'Added to wishlist';
      } else if (data === 'removed') {
        message = 'Removed from Wishlist';
      }
    } else {
      console.log('something went wrong');
    }
    return message;
  };

  return Wishlist(e).message;
};

export default addToWishlist;
