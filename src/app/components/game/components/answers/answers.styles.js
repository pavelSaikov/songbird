import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  answersContainer: {
    width: '45%',
    backgroundColor: '#303030',
    borderRadius: '8px',
    border: '1px solid #555',
  },
  answerContainer: {
    display: 'flex',
    padding: '13px 10px 13px 0',
    borderBottom: '1px solid #555',
    cursor: 'pointer',
  },
  lastAnswer: {
    border: 0,
  },
  circleContainer: {
    padding: '0 15px',
    display: 'flex',
    alignItems: 'center',
  },
  circle: {
    width: '9px',
    height: '9px',
    borderRadius: '9px',
  },
  standard: {
    backgroundColor: '#666',
  },
  correct: {
    backgroundColor: '#00bc8c',
  },
  incorrect: {
    backgroundColor: '#d62c1a',
  },
  text: {
    fontSize: '13px',
  },
});
