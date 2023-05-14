import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Achievements.css';

function Achievements() {
  let navigate = useNavigate();

  return (
    <div className="achievements-border">
      <div className="achievements-title"></div> 
      
      <div className="achievements">
          In Grade 9, I received the Mathematics Highest Achievement Award. This award is given to students who achieve the highest average
          in Grade 9 Mathematics. 
          <br/>
          <br/>
          In Grade 12, I also received the Mathematics Highest Achievement Award, for Calculus and Vectors. This award is given to students who
          achieve the highest average within the course called "Calculus and Vectors". 
          <br/>
          <br/>
          Additionally, I received the President's School/Distinction Scholarship, which is awarded to incoming students who achieve a 95%+ average in Grade 12.
      </div>
    </div>
  )
}

export default Achievements;