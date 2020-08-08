import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  guessingBirdContainer: {
    display: 'flex',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#303030',
    '@media (max-width: 600px)': {
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
    '@media (max-width: 600px)': {
      width: '100%',
      marginTop: '30px',
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
    minWidth: '0',
    maxWidth: '400px',
    width: 'auto',
  },
});
