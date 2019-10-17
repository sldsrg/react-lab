import React, { useRef } from 'react'
import { createUseStyles } from 'react-jss'
import ReactToPrint from 'react-to-print'

const useStyles = createUseStyles({
  table: {
    margin: 24,
    '& th': {
      fontSize: '1.5rem',
      fontWeight: 'bold'
    },
    '& td': {
      fontSize: '1.5rem'
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
  printButton: {},
  '@media print': {
    printButton: {
      display: 'none'
    }
  }
})

function DataTable(props) {
  const { data } = props
  const classes = useStyles()

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th className={classes.headerName}>Name</th>
          <th className={classes.headerPrice}>Price</th>
          <th className={classes.headerCount}>Count</th>
          <th className={classes.headerPrice}>Sum</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td className={classes.columnName}>{row.name}</td>
            <td className={classes.columnPrice}>{row.price.toFixed(2)}</td>
            <td className={classes.columnCount}>{row.count}</td>
            <td className={classes.columnPrice}>{(row.price * row.count).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

class ComponentToPrint extends React.Component {
  render() {
    return <DataTable {...this.props} />
  }
}

function generateData(count) {
  return new Array(count).fill(null).map((item, index) => ({
    name: `Sample item ${index + 1}`,
    price: Math.round(13000 * Math.random()) / 100,
    count: 1 + Math.floor(30 * Math.random())
  }))
}

function PrintingLab() {
  const componentRef = useRef()
  const data = useRef(generateData(32))
  const classes = useStyles()

  return (
    <div>
      <ReactToPrint
        // pageStyle='@page { size: A5 landscape;  margin: 9mm; }'
        trigger={() => <button className={classes.printButton}>Print this out!</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint data={data.current} ref={componentRef} />
    </div>
  )
}

export default PrintingLab
