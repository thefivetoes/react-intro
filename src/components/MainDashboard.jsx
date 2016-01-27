import React, {Component} from 'react';

import Header from './Header';
import NewFriendForm from './NewFriendForm';
import FriendList from './FriendList';
import Footer from './Footer';

import styles from '../styles/rootStyles';

class MainDashboard extends Component {
  constructor(props) {
    super(props);
    this.handleCreateNewFriend = this.handleCreateNewFriend.bind(this);
  }

  handleCreateNewFriend(friend) {
    let oldFriends = this.state && this.state.friends ? this.state.friends : [];
    let newFriends = [friend, ...oldFriends];

    //Add our newFriends to this component's state below
  }

  render() {
    let friends = this.state && this.state.friends ? this.state.friends : [];

    return (
      <div style={styles.container}>
        <Header />
        <div style={styles.mainContentArea}>
          {/*Add a NewFriendForm below*/}
          {/*be sure to hook up the onCreateNewFriend handler*/}

          {/*Add a FriendList below*/}
          {/*Be sure to pass in our friends*/}

        </div>
        <Footer />
      </div>
    );
  }
}

export default MainDashboard;
