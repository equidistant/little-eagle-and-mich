import React from 'react'
import styled from 'styled-components'
import Image from './Image'

import { useRows } from '../../common'

const Justify = ({ images, open = false, width, numOfRows, marginTop, gap }) => {
  const [rows] = useRows({ images, width, numOfRows, gap })
  return (
    <JustifiedGalleryContainer marginTop={marginTop}>
        {renderRows({ rows, open, gap })}
    </JustifiedGalleryContainer>
  )
}

const renderRows = ({ rows, open, gap }) => {
  return rows.map((row, index) => {
    return (
      <Row key={index}>
        {
          row.images.map(({ width, height, url, id}) => {
            return (
              <Image url={url} height={height} width={width} key={url} handleClick={() => open(id)} gap={gap} />
            )
          })
        }
      </Row>
    )
  })
}

const JustifiedGalleryContainer = styled.div`
   margin-top: ${props => props.marginTop || 0};
`

const Row = styled.div`
  display: flex;
  height: min-content;
  width: min-content;
`



export default Justify
