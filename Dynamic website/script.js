// script.js

const products = [
    { id: 1, name: 'Laptop', price: 999, image: 'laptop.jpg', featured: true },
    { id: 2, name: 'Smartphone', price: 699, image: 'smartphone.jpg', featured: true },
    { id: 3, name: 'Tablet', price: 399, image: 'tablet.jpg', featured: false },
    { id: 4, name: 'Headphones', price: 149, image: 'headphones.jpg', featured: false },
    { id: 5, name: 'Smartwatch', price: 249, image: 'smartwatch.jpg', featured: true },
    { id: 6, name: 'Camera', price: 799, image: 'camera.jpg', featured: false },
];

function renderProducts(productsArray, gridId) {
    const grid = document.getElementById(gridId);
    grid.innerHTML = ''; // Clear existing content

    productsArray.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
        `;
        grid.appendChild(productItem);
    });
}

// Render featured products on the homepage
if (document.getElementById('featured-grid')) {
    const featuredProducts = products.filter(product => product.featured);
    renderProducts(featuredProducts, 'featured-grid');
}

// Render all products on the products page
if (document.getElementById('product-grid')) {
    renderProducts(products, 'product-grid');
}