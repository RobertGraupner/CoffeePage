export const select = {
  templateOf: {
    homeWidget: '#template-home-widget',
    productWidget: '#template-product-widget',
  },
  containerOf: {
    pages: '#pages',
    product: '#products-wrapper',
    contact: '#contact-wrapper',
    home: '#home-wrapper',
  },
  product: {
    productList: '.products-list',
  },
  nav: {
    links: '.nav a',
  },
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
};

export const settings = {
  db: {
    url:'//' + window.location.hostname + (window.location.hostname === 'localhost' ? ':3131' : ''),
    products: 'products',
  },
};

export const templates = {
  productWidget: Handlebars.compile(document.querySelector(select.templateOf.productWidget).innerHTML),
  homeWidget: Handlebars.compile(document.querySelector(select.templateOf.homeWidget).innerHTML),
};