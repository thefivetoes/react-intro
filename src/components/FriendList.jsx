import React, {Component, PropTypes} from 'react';

import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import Star from 'material-ui/lib/svg-icons/toggle/star';
import IconButton from 'material-ui/lib/icon-button';

import styles from '../styles/rootStyles';

class NewFriendForm extends Component {
  static propTypes = {
    friends: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
  }

  outputTileElements() {

    /**
      * ES6 Alert - Arrow Function
      *
      * friends.map(friend => {});
      *
      * is similar (but not identical) to:
      *
      * friends.map(function(friend){});
      *
      * The main difference being that this from the parent function will be
      * bound to our internal function.
      *
      * Arrow functions are commonly notated as ()=>{} where you have props
      * on the left and the function on the right.
      *
      * More on Arrow Functions here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
      * or in the ES6 Cheatsheet link in the README
      */
    return this.props.friends.map(friend=>{
      let {firstName, lastName, twitter, isBFF} = friend;
      let key = `${firstName}-${lastName}-${twitter}`;

      // Change our bffIcon to be a solid in star if our friend is a BFF
      // An example of a solid star from Material UI is shown below
      // <IconButton><Star color="white"/></IconButton>
      let bffIcon = <IconButton><StarBorder color="white"/></IconButton>;

      // Create a unique identiconString below to make each friends image unique.
      // Use any combination of the data you have from props.
      let identiconString = `change-this-to-something-that-will-be-uniqe-every-iteration`;

      // Update the return block below to have *actual* friend data from your form.
      return(
        <GridTile
          key={key}
          style={{fontFamily: 'Roboto, sans-serif'}}
          title={`your-friends-name`}
          subtitle={<span>{`your-friends-@twitter`}</span>}
          actionIcon={bffIcon}>
          <img src={`http://identicon.org?t=${identiconString}&s=200`} />
        </GridTile>
      );
    })
  }

  render() {
    let {friends} = this.props;
    let tileElements = this.outputTileElements();

    return (
      <div style={styles.friendListContainer}>
        <h1 style={styles.formHeading}>You Have {friends.length} Friend(s)</h1>
          <GridList
            cellHeight={200}
            cols={4}
            style={styles.friendGridList}>
            {tileElements}
          </GridList>
      </div>
    );
  }
}

export default NewFriendForm;
