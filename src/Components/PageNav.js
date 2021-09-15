import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));


const PageNav = ({ foodsPerPage, totalFoods, paginate }) => {
    const classes = useStyles();
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalFoods / foodsPerPage); i++) {
      pageNumbers.push(i);
    }
    console.log(pageNumbers)
    return (
        <div className={classes.root}>
          {pageNumbers.map(number => (
          <span key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='#!' >
              {number}
            </a>
          </span>
        ))}
            
        </div>
    )
}

export default PageNav