import styled from "@emotion/styled"
import { css } from "@emotion/css"
import React from "react"

interface Props {
  completed: number
}
const Container = styled.div`
height: 20px;
width: 100%;
background-color: rgba(194, 210, 31, 1);
border-radius: 5px;
`
const PercentageBar: React.FC<Props> = (props) => {
  return (
    <Container>
      <div className={css`
      height: 100%;
      width: ${props.completed}%;
      background-color: rgba(250, 86, 67, 1);
      border-radius: inherit;
      text-align: right;
     `}>
        <span className={css`
            padding: 5px;
            color: #ffff;
            font-weight: bold;
       `}>
          {props.completed}
        </span>

      </div>
    </Container>
  )
}

export default PercentageBar