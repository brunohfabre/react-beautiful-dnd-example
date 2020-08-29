import React from 'react'
import { Droppable } from 'react-beautiful-dnd'

import Task from '../Task'

import { Container, Title, TaskList } from './styles'

export default function Column({ column }) {
  return (
    <Container>
      <Title>{column.title}</Title>

      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {column.tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index}></Task>
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  )
}
