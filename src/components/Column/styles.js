import styled from 'styled-components'

export const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 2px;
  width: 300px;
  height: min-content;
`

export const Title = styled.h3`
  padding: 8px;
`

export const TaskList = styled.div`
  padding: 8px;
  background: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  transition: background-color 0.2s ease;
`
