import React from 'react'

function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [part1, part2, part3]
  const exes = [exercises1, exercises2, exercises3]

  return (
    <>
      <Header courseName={course} />
      <Content
        parts={parts}
        exes={exes}
        // part1={part1}
        // part2={part2}
        // part3={part3}
        // exercises1={exercises1}
        // exercises2={exercises2}
        // exercises3={exercises3}
      />
      <Total exercisesTotal={exercises1 + exercises2 + exercises3} />
    </>
  )
}

const Header = (props) => {
  return <h1>{props.courseName}</h1>
}

const Content = (props) => {
  return (
    <>
      <Part title={props.parts[0]} exercises={props.exes[0]} />
      <Part title={props.parts[1]} exercises={props.exes[1]} />
      <Part title={props.parts[2]} exercises={props.exes[2]} />
    </>
  )
}

const Total = (props) => {
  return <p>Number of exercises {props.exercisesTotal}</p>
}

const Part = (props) => {
  return (
    <p>
      {props.title} {props.exercises}
    </p>
  )
}

export default App
