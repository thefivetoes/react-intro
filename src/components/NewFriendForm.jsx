import React, {Component, PropTypes} from 'react';

import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';

import Toggle from 'material-ui/lib/toggle';

import styles from '../styles/rootStyles';

class NewFriendForm extends Component {
  static propTypes = {
    onCreateNewFriend: PropTypes.func.isRequired
  }

  initialState = {
    firstName: '',
    lastName: '',
    twitter: '',
    isBFF: false
  };

  constructor(props) {
    super(props);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleTwitterChange = this.handleTwitterChange.bind(this);
    this.handleBFFChange = this.handleBFFChange.bind(this);
    this.handleSaveClick = this.handleSaveClick.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value});
  }

  handleLastNameChange(event) {
    this.setState({lastName: event.target.value});
  }

  handleTwitterChange(event) {
    this.setState({twitter: event.target.value});
  }

  handleBFFChange(event) {
    this.setState({isBFF: event.target.checked});
  }

  handleSaveClick() {
    let friend = this.state;
    this.props.onCreateNewFriend(friend);
    this.setState(this.initialState);
  }

  componentWillMount() {
    this.setState(this.initialState);
  }

  render() {
    /**
    * ES6 Alert - Object Destructuring
    * 
    * This is a more terse way of defining variables from an object.
    * Defines variables for all vars on the left from corresponding keyed values
    * in the object on the right.
    *
    * The line below is similar to:
    *
    * let firstName = this.state.firstName;
    * let lastName = this.state.LastName;
    * etc.
    */
    let {firstName, lastName, twitter, isBFF} = this.state;

    return (
      <div style={styles.friendFormContainer}>
        <h1 style={styles.formHeading}>Add a Friend</h1>
        <div>
          <TextField
            hintText="Rick"
            floatingLabelText="First Name"
            value={firstName}
            onChange={this.handleFirstNameChange}/>
        </div>

        <div>
          <TextField
            hintText="Jagger"
            floatingLabelText="Last Name"
            value={lastName}
            onChange={this.handleLastNameChange}/>
        </div>

        <div>
          <TextField
            hintText="@thefivetoes"
            floatingLabelText="Twitter Handle"
            value={twitter}
            onChange={this.handleTwitterChange}/>
        </div>

        <div>
          <Toggle
            label="Is a BFF?"
            onToggle={this.handleBFFChange}
            defaultToggled={isBFF}/>
        </div>

        <div>
        <FlatButton
          label="Save New Friend"
          secondary={true}
          onClick={this.handleSaveClick}/>
        </div>

      </div>
    );
  }
}

export default NewFriendForm;
