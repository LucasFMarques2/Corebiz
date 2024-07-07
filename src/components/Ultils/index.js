export const updateCartCount = (newCount) => {
    const cartCountSpan = document.getElementById('cartCountSpan');
    if (cartCountSpan) {
      cartCountSpan.innerText = newCount.toString();
    }
  };