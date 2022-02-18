import { templates, select } from '../settings.js';
import { utils } from '../utils.js';

class HomeProduct {
  constructor(id, data) {
    const thisHome = this;

    thisHome.id = id;
    thisHome.data = data;

    thisHome.renderInMenuHome();
  }

  renderInMenuHome() {
    const thisHome = this;
    /* generate HTML based on template */
    const generatedHTML = templates.productWidget(thisHome.data);
    /* create element using utils.createElementFromHTML */
    thisHome.element = utils.createDOMFromHTML(generatedHTML);
    /* find menu container */
    const menuContainerHome = document.querySelector(select.product.productListHome);
    /* add element to menu */
    menuContainerHome.appendChild(thisHome.element);
  }
}

export default HomeProduct;
