import { templates } from '../settings.js';
import { utils } from '../utils.js';

class Product {
  constructor(id, data, element) {
    const thisProduct = this;

    thisProduct.id = id;
    thisProduct.data = data;

    thisProduct.dom = {};
    thisProduct.dom.element = element;

    thisProduct.renderInPage();
  }

  renderInPage() {
    const thisProduct = this;
    /* generate HTML based on template */
    const generatedHTML = templates.productWidget(thisProduct.data);
    /* create element using utils.createElementFromHTML */
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);
    /* add element to container */
    thisProduct.dom.element.appendChild(thisProduct.element);
  }
}

export default Product;
