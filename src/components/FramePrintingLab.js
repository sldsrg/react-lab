import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'
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

function generateData(count) {
  return new Array(count).fill(null).map((item, index) => ({
    name: `Sample item ${index + 1}`,
    price: Math.round(13000 * Math.random()) / 100,
    count: 1 + Math.floor(30 * Math.random())
  }))
}

// The A4 page size is defined as 210mm x 297mm, which is 8.268" x 11.69".
// Since CSS pixels are 96px/inch (as long as we're talking about
// a high-resolution device like a printer -- CSS pixels equal device pixels
// for low-res applications), I think you should be able to rely on the page
// size being 793.7px x 1123px

function FramePrintingLab() {
  const data = useRef(generateData(32))
  const classes = useStyles()
  const frameRef = useRef(null)

  function print() {
    frameRef.current.contentWindow.print()
  }

  useEffect(() => {
    const frameDoc = frameRef.current.contentDocument
    const root = frameDoc.createElement('div')
    frameDoc.body.appendChild(root)
    ReactDOM.render(<DataTable data={data.current} />, root, () =>
      console.log(root.getBoundingClientRect().height)
    )
  }, [])

  return (
    <>
      <div>
        <input type='button' value='print' onClick={print} />
      </div>
      <div>
        <iframe title='printing' ref={frameRef} />
      </div>
      <div className={classes.div}>
        <DataTable data={data.current} />
      </div>
    </>
  )
}

export default FramePrintingLab
