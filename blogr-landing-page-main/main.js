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
    const companyDropdown = document.querySelector('.company-dropdown');
    const products = document.querySelector('.products');
    const connect = document.querySelector('.connect')

    company.addEventListener('click',() =>{
        companyArrow.classList.toggle('arrow-active');
        companyDropdown.classList.toggle('company-dropdown-active');
    });

    products.addEventListener('click',() => {
        companyArrow.classList.remove('arrow-active');
        companyDropdown.classList.remove('company-dropdown-active');
    });

    connect.addEventListener('click',() => {
        companyArrow.classList.remove('arrow-active');
        companyDropdown.classList.remove('company-dropdown-active');
    });
}

companyOn();


//active Connect 
const connectOn = () => {
    const connect = document.querySelector('.connect');
    const connectArrow = document.querySelector('.arrow-03');
    const connectDropdown = document.querySelector('.connect-dropdown');
    const products = document.querySelector('.products');
    const company = document.querySelector('.company')


    connect.addEventListener('click',()=>{
        connectArrow.classList.toggle('arrow-active');
        connectDropdown.classList.toggle('connect-dropdown-active');
    });

    products.addEventListener('click',()=>{
        connectArrow.classList.remove('arrow-active');
        connectDropdown.classList.remove('connect-dropdown-active');
    });

    company.addEventListener('click',()=>{
        connectArrow.classList.remove('arrow-active');
        connectDropdown.classList.remove('connect-dropdown-active');
    });


}

connectOn();


// Mobile Burger 
const burger = document.getElementById('burger');
const stroke = document.getElementById('stroke');
const menu = document.getElementById('menu-mobile');

burger.onclick = function() {
    burger.classList.toggle('active');
    stroke.classList.toggle('active');
    menu.classList.toggle('active');
}

// Product Accordian 
const productsMobile = document.getElementById('products-mobile');
const productsMenu = document.getElementById('products-collapse');

productsMobile.onclick = function() {
    productsMenu.classList.toggle('active');
    productsMobile.classList.toggle('active');
}

// Company Accordian 
const companyMobile = document.getElementById('company-mobile');
const companyMenu = document.getElementById('company-collapse');

companyMobile.onclick = function() {
    companyMenu.classList.toggle('active');
    companyMobile.classList.toggle('active');
}

// Connect Accordian 
const connectMobile = document.getElementById('connect-mobile');
const connectMenu = document.getElementById('connect-collapse');

connectMobile.onclick = function() {
    connectMenu.classList.toggle('active');
    connectMobile.classList.toggle('active');
}


// Turning off function
document.onclick = function(clickEvent) {
    if(clickEvent.target.id == 'company-mobile' || clickEvent.target.id == 'connect-mobile' || clickEvent.target.id == 'burger')
    {
        productsMenu.classList.remove('active');
        productsMobile.classList.remove('active');
    } 

    if(clickEvent.target.id == 'products-mobile' || clickEvent.target.id == 'connect-mobile' || clickEvent.target.id == 'burger')
    {
        companyMenu.classList.remove('active');
        companyMobile.classList.remove('active');
    }

    if(clickEvent.target.id == 'products-mobile' || clickEvent.target.id == 'company-mobile' || clickEvent.target.id == 'burger')
    {
        connectMenu.classList.remove('active');
        connectMobile.classList.remove('active');
    }

}


// Image Animations

const imageOne = document.getElementById('image-one');
const faders = document.querySelector('.fade-in');

const appearOptions = { 
    threshold: 0.5
};

const appearOnScroll = new IntersectionObserver(function(entires, appearOnScroll) {
    entires.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add('fade-in');
            appearOnScroll.unobserve(entry.target); // stop looking once done the job
        }
        console.log(entry);
    })
}, appearOptions);

appearOnScroll.observe(imageOne);



