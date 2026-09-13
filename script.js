const mainImage = document.getElementById('mainImage');
const thumbs = document.querySelectorAll('.hero-thumb');

thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    thumbs.forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
    mainImage.src = thumb.getAttribute('data-src');
  });
});

document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    item.classList.toggle('open');
  });
});

function handleAddToCart(button) {
  const originalText = button.textContent;
  button.textContent = 'Dodano do koszyka';
  button.disabled = true;
  setTimeout(() => {
    button.textContent = originalText;
    button.disabled = false;
  }, 1800);
}

const addToCartBtn = document.getElementById('addToCartBtn');
const addToCartBtnSticky = document.getElementById('addToCartBtnSticky');

if (addToCartBtn) {
  addToCartBtn.addEventListener('click', () => handleAddToCart(addToCartBtn));
}

if (addToCartBtnSticky) {
  addToCartBtnSticky.addEventListener('click', () => handleAddToCart(addToCartBtnSticky));
}
