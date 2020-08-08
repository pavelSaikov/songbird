import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  birdDescriptionContainer: {
    flexGrow: 1,
    marginLeft: '30px',
    borderRadius: '8px',
    backgroundColor: '#303030',
    '@media (max-width: 650px)': {
      margin: '20px 0 0 0',
    },
  },
  descriptionContainer: {},
  messageContainer: {
    padding: '15px',
  },
  chosenBirdContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '850px',
    padding: '15px',
  },
  mainInfoContainer: {
    display: 'flex',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  imageContainer: {
    width: '200px',
    height: '155px',
    borderRadius: '8px',
  },
  image: {},
  nameAndSongContainer: {
    padding: '0 0 0 40px',
    flexGrow: 1,
    '@media (max-width: 900px)': {
      width: '100%',
      margin: '20px 0',
      padding: '0',
    },
  },
  nameContainer: {
    padding: '0 0 20px 0',
    borderBottom: '1px solid #555',
    marginBottom: '15px',
    fontSize: '25px',
  },
  latinNameContainer: {
    borderBottom: '1px solid #555',
    padding: '7px 0',
    marginBottom: '15px',
  },
  audioPlayer: {
    minWidth: '0px',
    maxWidth: '400px',
    width: 'auto',
  },
});
