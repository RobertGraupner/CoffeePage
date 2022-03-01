import { classNames, select, settings } from './settings.js';
import Product from './components/Product.js';
import HomeProduct from './components/HomeProduct.js';

const app = {
  initPages: function () {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    
    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        const id = clickedElement.getAttribute('href').replace('#', '');
        thisApp.activatePage(id);
        window.location.hash = '#/' + id;
      });
    }
  },

  activatePage: function (pageId) {
    const thisApp = this;
    /* add class "active" to matching pages, remove from non matching */
    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }
    /* add class "active" to matching links, remove from non matching */
    for (let link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == '#' + pageId
      );
    }
  },

  initData: function () {
    const thisApp = this;
    /* adres endpointu do naszego serwera */
    const url = settings.db.url + '/' + settings.db.products;
    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        /* save parsedResponse as thisApp.data.products */
        this.data.products = parsedResponse;
        /* execute method */
        thisApp.initHomeProduct();
        thisApp.initProduct();
      });
  },

  initHomeProduct: function () {
    const thisApp = this;

    for (let productData in thisApp.data.products) {
      /* zmieniamy klucz na właściwość id, żeby działało z serwerem */
      new HomeProduct(thisApp.data.products[productData].id,thisApp.data.products[productData]);
    }
  },

  initProduct: function () {
    const thisApp = this;

    for (let productData in thisApp.data.products) {
      /* zmieniamy klucz na właściwość id, żeby działało z serwerem */
      new Product(thisApp.data.products[productData].id,thisApp.data.products[productData]);
    }
  },

  init: function () {
    const thisApp = this;

    thisApp.initData();
    thisApp.initPages();
  },
};

app.init();
