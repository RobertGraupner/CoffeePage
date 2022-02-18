import { templates, select } from '../settings.js';
import { utils } from '../utils.js';

class Product {
  constructor(id, data) {
    const thisProduct = this;

    thisProduct.id = id;
    thisProduct.data = data;

    thisProduct.renderInMenu();
  }

  renderInMenu() {
    const thisProduct = this;
    /* generate HTML based on template */
    const generatedHTML = templates.productWidget(thisProduct.data);
    /* create element using utils.createElementFromHTML */
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    /* find menu container */
    const menuContainer = document.querySelector(select.product.productList);
    /* add element to menu */
    menuContainer.appendChild(thisProduct.element);
  }
}

export default Product;
