import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  endGameNotificationContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#303030',
    '@media (max-width: 500px)': {
      padding: '10px',
    },
  },
  restartButton: {
    marginTop: '50px',
    padding: '12px',
    textAlign: 'center',
    borderRadius: '8px',
    backgroundColor: '#00bc8c',
  },
  text: {
    textAlign: 'center',
  },
  header: {
    fontSize: '35px',
  },
  description: {
    marginTop: '20px',
  },
  gifContainer: {
    width: '400px',
    '@media (max-width: 500px)': {
      width: '300px',
    },
    '@media (max-width: 370px)': {
      width: '240px',
    },
  },
  gif: {
    width: '100%',
    borderRadius: '8px',
  },
  absoluteWinContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});
