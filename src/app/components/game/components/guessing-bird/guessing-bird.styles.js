import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  guessingBirdContainer: {
    display: 'flex',
    padding: '15px',
    borderRadius: '8px',
    backgroundColor: '#303030',
  },
  imageContainer: {
    width: '200px',
  },
  image: {
    borderRadius: '8px',
  },
  nameAndSongContainer: {
    padding: '0 40px',
    flexGrow: 1,
    fontSize: '20px',
  },
  nameContainer: {
    padding: '0 0 20px 0',
    borderBottom: '1px solid #555',
    marginBottom: '15px',
  },
});
