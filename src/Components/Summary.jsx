import React from 'react'

const Summary = ({summary}) => {
  return (
    <div>
        <h2>{summary.name}</h2>
        <h3>{summary.location}</h3>
        <h4>{summary.year}</h4>
    </div>
  )
}

export default Summary