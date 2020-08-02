import { createUseStyles } from 'react-jss';

export const useStyle = createUseStyles({
  headerContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '30px 0 5px 0',
  },
  logoAndScopeContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: '200px',
  },
  birdGroupsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0 20px 0',
  },
  birdGroup: {
    width: '100%',
    padding: '8px 12px',
    textAlign: 'center',
    fontSize: '15px',
    backgroundColor: '#008966',
    '&.first': {
      borderRadius: '5px 0 0 5px',
    },
    '&.last': {
      borderRadius: '0 5px 5px 0',
    },
    '&.active': {
      backgroundColor: '#00bc8c',
    },
  },
});
