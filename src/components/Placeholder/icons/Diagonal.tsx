import { FunctionComponent } from 'react'

interface DiagonalProps {
  reversed?: boolean
}

const Diagonal: FunctionComponent<DiagonalProps> = ({ reversed }) => {
  return (
    <svg style={{ width: '100%', height: ' 100%' }}>
      <line
        x1="0"
        x2="100%"
        y1={reversed ? '100%' : '0'}
        y2={!reversed ? '100%' : '0'}
        style={{ stroke: 'rgb(177, 177, 177)', strokeWidth: 1 }}
      />
    </svg>
  )
}

export default Diagonal
