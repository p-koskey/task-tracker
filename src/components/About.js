import {Link} from 'react-router-dom'

const About = () => {
 return (
  <div className='about'>
   <h2>Hi, I am Patience Koskey,</h2>
   <a href="https://github.com/p-koskey" target="_blank" rel="noopener noreferrer">Check out my Github</a>
   <h4>Version 1.0.0</h4>
   <Link to="/">Go Back</Link>
  </div>
 )
}

export default About
