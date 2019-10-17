import React, { forwardRef } from 'react'
import { JssProvider } from 'react-jss'
import { create as createJss } from 'jss'
import jssPreset from 'jss-preset-default'
import Frame, { FrameContextConsumer } from 'react-frame-component'

const FrameWithJss = forwardRef((props, ref) => {
  const { children } = props
  const content = `<!DOCTYPE html>
  <html>
    <head>
      <style>
        @media print {
          h4 {
            break-before: page;
          }
        }
      </style>
    </head>
    <body>
      <div id="root" />
    </body>
  </html>`
  return (
    <Frame
      ref={ref}
      style={{ width: '49%', height: '100%' }}
      initialContent={content}
      mountTarget='#root'
    >
      <FrameContextConsumer>
        {({ document }) => {
          const jss = createJss({
            ...jssPreset(),
            insertionPoint: document.head.firstChild
          })
          return <JssProvider jss={jss}>{children}</JssProvider>
        }}
      </FrameContextConsumer>
    </Frame>
  )
})

export default FrameWithJss
