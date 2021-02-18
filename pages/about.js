import React from 'react'

//functional component - arrow function
// WHEN TO USE:
// 1. for smaller component
// 2. reusable component
// 3. presentional component, patialy right, we can use HOOKS and specify state
// const About = () => {
//     const message = 'Hello world'

//     return(
//         <h1>About page - {message}</h1>
//     )
// }

// const About = () => {
//     const message = 'Hello world'

//     return React.createElement('h1', null, 'I am generating this with createELement')
// }

//functional component - normal function
// function About(){
//     return(
//         <h1>hello function about</h1>
//     )
// }

class About extends React.Component {
    render() {
        return (
            <h1>I am class component</h1>
        )
    }
}

export default About