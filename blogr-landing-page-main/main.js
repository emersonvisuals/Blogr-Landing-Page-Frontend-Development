const products = document.querySelector('.products');
const productsArrow = document.querySelector('.arrow-01');

// active Products
products.addEventListener('click',() => {
    productsArrow.classList.toggle('arrow-active');
});

const company = document.querySelector('.company');
const companyArrow = document.querySelector('.arrow-02');

//active Company
company.addEventListener('click',() =>{
    companyArrow.classList.toggle('arrow-active');
});

const connect = document.querySelector('.connect');
const connectArrow = document.querySelector('.arrow-03');

//active Connect
connect.addEventListener('click',()=>{
    connectArrow.classList.toggle('arrow-active');
});


