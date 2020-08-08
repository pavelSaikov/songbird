import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  answersAndDescriptionContainer: {
    display: 'flex',
    flexWrap: 'no-wrap',
    marginTop: '20px',
    '@media (max-width: 650px)': {
      flexDirection: 'column',
    },
  },
  nextLevelButton: {
    marginTop: '20px',
    padding: '10px',
    textAlign: 'center',
    borderRadius: '8px',
    backgroundColor: ({ isShowAnswer }) => (isShowAnswer ? '#00bc8c' : '#303030'),
    border: ({ isShowAnswer }) => (isShowAnswer ? 0 : '1px solid #555'),
  },
});
