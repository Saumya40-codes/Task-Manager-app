import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

const About = () => {
  return (
    <div>
      <h4> Version 1.0.0</h4>
        <a href='/' className="about">Go Back</a>
        <footer>
        <h5>Follow on:</h5>
       <a href="https://github.com/Saumya40-codes" target="__blank">  <FaGithub className="github" /> </a> 
       <a href="https://www.linkedin.com/in/saumya-shah-326537252/" target="__blank"> <FaLinkedin  className="linkedin"/> </a>
        </footer>
    </div>
  )
}

export default About
