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
    return this.props.friends.map(friend=>{
      let {firstName, lastName, twitter, isBFF} = friend;
      let key = `${firstName}-${lastName}-${twitter}`;
      let bffIcon = isBFF ?
        <IconButton><Star color="white"/></IconButton> :
        <IconButton><StarBorder color="white"/></IconButton>;
      let identiconString = `${friend.firstName}-${friend.lastName}`;
      return(
        <GridTile
          key={key}
          style={{fontFamily: 'Roboto, sans-serif'}}
          title={`${friend.firstName} ${friend.lastName}`}
          subtitle={<span>{friend.twitter}</span>}
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
