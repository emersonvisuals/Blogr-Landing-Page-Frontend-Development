// active Products
const productsOn = () => {
    const products = document.querySelector('.products');
    const productsArrow = document.querySelector('.arrow-01');
    const productsDropdown = document.querySelector('.products-dropdown');
    const company = document.querySelector('.company');
    const connect = document.querySelector('.connect');

    products.addEventListener('click',() => {
        productsArrow.classList.toggle('arrow-active');
        productsDropdown.classList.toggle('products-dropdown-active');
    });

    company.addEventListener('click',() => {
        productsArrow.classList.remove('arrow-active');
        productsDropdown.classList.remove('products-dropdown-active');
    });

    connect.addEventListener('click',() => {
        productsArrow.classList.remove('arrow-active');
        productsDropdown.classList.remove('products-dropdown-active');
    });
    
}

productsOn(); 


// active Company
const companyOn = () => {
    const company = document.querySelector('.company');
    const companyArrow = document.querySelector('.arrow-02');
    const companyDropdown = document.querySelector('.company-dropdown')

    company.addEventListener('click',() =>{
        companyArrow.classList.toggle('arrow-active');
        companyDropdown.classList.toggle('company-dropdown-active');
    });
}

companyOn();




//active Connect 
const connectOn = () => {
    const connect = document.querySelector('.connect');
    const connectArrow = document.querySelector('.arrow-03');
    const connectDropdown = document.querySelector('.connect-dropdown');


    connect.addEventListener('click',()=>{
        connectArrow.classList.toggle('arrow-active');
        connectDropdown.classList.toggle('connect-dropdown-active');

    });
}

connectOn();

