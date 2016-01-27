import MUIColors from 'material-ui/lib/styles/colors';

let inputContainerStyles = {

}

let styles = {
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0
  },

  headerContainer: {
    width: '100%',
    height: '2%',
    background: MUIColors.deepPurple200
  },

  footerContainer: {
    width: '100%',
    height: '4%',
    background: MUIColors.deepPurple900
  },

  mainContentArea: {
    display: 'flex',
    minHeight: '94%',
    paddingTop: 24
  },

  friendFormContainer: {
    marginLeft: 24,
    width: 256
  },

  formHeading: {
    fontFamily: 'Roboto, sans-serif'
  },

  friendListContainer: {
    marginLeft: 24
  },

  inputContainerBase: {
    ...inputContainerStyles
  },

  toggleContainerBase: {
    ...inputContainerStyles,
    marginTop: 30
  },

  submitContainerBase: {
    ...inputContainerStyles,
    marginTop: 30,
    textAlign: 'center'
  },

  friendGridList: {
    width: 800,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24
  }
}

export default styles;
