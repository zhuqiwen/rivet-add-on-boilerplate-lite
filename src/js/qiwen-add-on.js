/**
 * If your add-on requires JavaScript, add it to this file.
 * Rivet add-on JavaScript follows the vanilla JS constructor pattern:
 *
 * https://vanillajstoolkit.com/boilerplates/constructor/
 * 
 * If your new component is purely HTML and CSS, you can delete this file
 * and any references to it in index.html.
 */

const MyComponent = (function() {
  
  'use strict';

  /**
   * This is your add-on's constructor method. This method is called when
   * you create a new instance of your component and can take any arguments
   * you need to set it up, such as a DOM element selector.
   * 
   * const component = new MyComponent(arg1, arg2, etc);
   * 
   * The example constructor below takes a selector argument that tells the
   * component which DOM elements it should apply its behavior to — in this
   * case, button elements that can be clicked to show a message.
   * 
   * const component = new MyComponent('button.rvt-fancy-button');
   */
  
  const Constructor = function(selector, maxLengthInit) {
    this.nodes = document.querySelectorAll(selector);
    var maxLabels = document.querySelectorAll('label span');
    var maxRemains = document.querySelectorAll('textarea+span');

    maxLabels.forEach((element, index) => {
      element.textContent = maxLengthInit;
    });

    maxRemains.forEach((element, index) => {
      element.textContent = maxLengthInit;
    });

    this.nodes.forEach((element, index) => {
      element.maxLength = maxLengthInit;
    });



    // Any other code you need to initialize your component goes here.
  };

  /**
   * Use the space below to write your component's private methods.
   * These methods can't be called directly by someone using your add-on;
   * typically, these private methods are used as event handler functions.
   * 
   * The example private method acts as an event handler for the component's
   * click events, showing a message when one of the button elements specified
   * in the constructor method above are clicked.
   */

  const handleKeyup = function(index) {
    var length = this.nodes[index].value.length;
    length = this.nodes[index].maxLength - length;
    // document.querySelector('#chars').textContent = length;
    // console.log(this.nodes[0].nextSibling.nextSibling);
    // console.log(this.nodes[index]);
    this.nodes[index].nextSibling.nextSibling.textContent = length;
  }

  const somePrivateMethod = function() {
    // Do something useful.
  }

  /**
   * Use the space below to write your component's public methods.
   * These methods are called by the developer and should be described in your
   * add-on's documentation.
   * 
   * The example public method when called adds an event listener to the button
   * elements specified in the component's constructor method. This event
   * listener calls the handleKeyup private method defined above.
   */

  Constructor.prototype.init = function() {
  

    this.nodes.forEach((textarea, index) => {
      textarea.addEventListener('keyup', handleKeyup.bind(this, index));
    });
    
  };

  Constructor.prototype.somePublicMethod = function(arg1, arg2, etc) {
    // Do something useful.
  }

  return Constructor;

})();