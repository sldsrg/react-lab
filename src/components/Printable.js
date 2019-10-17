import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  table: {
    margin: 24,
    '& th': {
      fontSize: '1.4rem',
      fontWeight: 'bold'
    },
    '& td': {
      fontSize: '1.4rem'
    }
  },
  headerName: {
    minWidth: 300,
    textAlign: 'center'
  },
  columnName: {
    fontStyle: 'italic'
  },
  columnPrice: {
    textAlign: 'end'
  },
  columnCount: {
    textAlign: 'end',
    paddingRight: '1rem'
  },
  div: {
    backgroundColor: 'lightyellow'
  }
})

const Printable = forwardRef((props, ref) => {
  const { data, fromStep, toStep, pageNo, pagesTotal } = props
  const classes = useStyles()
  let pageTop = pageNo ? `Page ${pageNo} of ${pagesTotal}` : null
  return (
    <div ref={ref}>
      {pageTop ? <h4 data-testid='page-top'>{pageTop}</h4> : null}
      <table>
        <thead>
          <tr>
            <th className={classes.headerName}>Name</th>
            <th className={classes.headerPrice}>Price</th>
            <th className={classes.headerCount}>Count</th>
            <th className={classes.headerPrice}>Sum</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(fromStep, toStep).map((row, index) => (
            <tr key={index}>
              <td className={classes.columnName}>{row.name}</td>
              <td className={classes.columnPrice}>{row.price.toFixed(2)}</td>
              <td className={classes.columnCount}>{row.count}</td>
              <td className={classes.columnPrice}>{(row.price * row.count).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
})

Printable.propTypes = {
  data: PropTypes.array.isRequired,
  fromStep: PropTypes.number, // inclusive zero-based index
  toStep: PropTypes.number, // exclusive zero-based index
  pageNo: PropTypes.number, // one-base page number
  pagesTotal: PropTypes.number
}

export default Printable
