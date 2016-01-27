/**
 * Import some core React modules.
 * This uses the ES6 import syntax and is similar to:
 *
 *  var React = require('react');
 *  var Component = require('react').Component;
 */
import React, {Component} from 'react';

/**
 * Import some base styles
 * styles/rootStyles.js is used throughout this project. Styles in React are
 * commonly inlined in this manner, rather than with CSS classes. It takes some
 * getting used to but it has its benefits. Be sure to have a look at this file
 * and see if you can spot some differences.
 */
import styles from '../styles/rootStyles';

/**
 * Create a Header Component.
 * This uses ES6 Class syntax, and is similar to:
 *  var Header = React.createClass({...});
 *
 * ES6 is becoming more common, there are some gotchas depending on which
 * syntax you are using - they are really well documented in the React docs
 * https://facebook.github.io/react/docs/getting-started.html
 */
class Header extends Component {

  /**
   * React will call render() every time this component's state or props change.
   * This is default behavior of react, and like all lifecycle methods, all you
   * need to do is define it in your component and it will do it's thing.
   *
   * For more on lifecycle methods, see:
   * https://facebook.github.io/react/docs/component-specs.html
   *
   * Note: Of all the lifecycle methods above, render() is the only one that is
   * required for all components.
   */
  render() {

    /**
     * render() will pretty much always return HTML. This is the biggest
     * difference in JSX, you just put that HTML out there and it knows what to
     * do.
     */
    return (
      <div style={styles.headerContainer}>
        header!
      </div>
    );
  }
}

/**
 * Export our custom component.
 * This uses the ES6 export syntax and is similar to:
 *
 *  exports.default = Header
 */
export default Header;
