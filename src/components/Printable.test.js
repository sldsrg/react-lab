import React from 'react'
import { cleanup, render, within } from '@testing-library/react'

import Printable from './Printable'

describe('Printable component', () => {
  let sampleData

  beforeAll(() => {
    sampleData = new Array(12).fill(null).map((item, index) => ({
      name: `Sample item ${index + 1}`,
      price: Math.round(13000 * Math.random()) / 100,
      count: 1 + Math.floor(30 * Math.random())
    }))
  })

  afterEach(cleanup)

  it('renders body', () => {
    const { getAllByRole } = render(<Printable data={sampleData} />)
    expect(getAllByRole('table')).toBeDefined()
  })

  it('renders all items when "fromStep" and "toStep" omitted', () => {
    const { getAllByRole } = render(<Printable data={sampleData} />)
    const groups = getAllByRole('rowgroup')
    expect(groups).toHaveLength(2)
    // thead
    expect(within(groups[0]).getAllByRole('row')).toHaveLength(1)
    // tbody
    expect(within(groups[1]).getAllByRole('row')).toHaveLength(sampleData.length)
  })

  it('renders 10 items when "toStep" equals 10', () => {
    const { getAllByRole } = render(<Printable data={sampleData} toStep={10} />)
    // expected header row + 10
    expect(getAllByRole('row')).toHaveLength(11)
  })

  it('renders 5 items when "fromStep" equals 5 and "toStep" equals 10', () => {
    const { getAllByRole } = render(<Printable data={sampleData} fromStep={5} toStep={10} />)
    // expected header row + 5
    expect(getAllByRole('row')).toHaveLength(6)
  })

  it('renders first item name with "Sample item 6" when "fromStep" equals 5', () => {
    const { getAllByRole } = render(<Printable data={sampleData} fromStep={5} />)
    const groups = getAllByRole('rowgroup')
    expect(within(groups[1]).getAllByRole('cell')[0].textContent).toBe('Sample item 6')
  })

  it('renders page number if specified', () => {
    const { getByTestId } = render(<Printable data={sampleData} pageNo={1} pagesTotal={2} />)
    expect(getByTestId('page-top').textContent).toBe('Page 1 of 2')
  })

  it('do not renders page number if omitted', () => {
    const { queryByTestId } = render(<Printable data={sampleData} />)
    expect(queryByTestId('page-top')).toBeNull()
  })
})
