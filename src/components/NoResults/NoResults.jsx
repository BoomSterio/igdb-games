import React from 'react'
import sadPepe from '../../assets/images/sadPepe.png'

const NoResults = ({requestText}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '20px 0',
      }}
    >
      <img style={{ width: '128px', marginRight: '2em' }}
           src={sadPepe} alt={'sadPepe'}
      />
      <h1>No results for {requestText}</h1>
    </div>
  )
}

export default NoResults
