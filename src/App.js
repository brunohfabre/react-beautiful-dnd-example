import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import initialData from './initial-data'

import Column from './components/Column'

import { Container } from './styles'

export default function App() {
  function onDragEnd(result) {
    const { source, destination, draggableId } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const sourceColumn = initialData.find(
      item => item.id === source.droppableId
    )
    const destinationColumn = initialData.find(
      item => item.id === destination.droppableId
    )

    const task = sourceColumn.tasks.find(item => item.id === draggableId)

    if (source.droppableId === destination.droppableId) {
      sourceColumn.tasks.splice(source.index, 1)

      sourceColumn.tasks.splice(destination.index, 0, task)

      return
    }

    sourceColumn.tasks.splice(source.index, 1)

    destinationColumn.tasks.splice(destination.index, 0, task)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        {initialData.map(column => (
          <Column column={column} key={column.id}></Column>
        ))}
      </Container>
    </DragDropContext>
  )
}
