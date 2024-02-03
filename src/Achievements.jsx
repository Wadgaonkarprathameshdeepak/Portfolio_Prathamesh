import React from "react";
import "./CSS/Achievements.css";
import image1 from "./images/leetcode.png"
import codechef from "./images/codechef.png"
import leetcode_profile from "./images/leetcode_profile.png"

const Achievements = () => {
  return (
    <>

      <div className="ac-content">
      <div className='heading'><b>Achievements</b></div>

        <div className="point">
          <img className="image" alt="leetcode" src={image1}/>
          <hr/>
          <div className="text">
            Earned a prestigious badge for consistently solving LeetCode questions
            for over 100 days in 2023, a distinction achieved by only 4.2 percent
            of participants.
          </div>
        </div>

        <div className="point">
          <a href="https://www.codechef.com/users/prath8269">
          <img className="image" alt="codechef" src={codechef}/>
          </a>
          <hr/>
          <div className="text">
            Attained a commendable CodeChef Rating of 1238 (1 Star), showcasing
            proficiency in solving 200+ problems and algorithmic challenges.
          </div>
        </div>

        <div className="point">
          <a href="https://leetcode.com/wadgaonkarprathamesh/">
          <img className="image" alt="leet" src={leetcode_profile}/>
          </a>
          <hr/>
          <div className="text">
            Secured an impressive LeetCode Rating of 1264 (2 Star), demonstrating
            mastery in solving 140+ problems with strategic insights.
          </div>
        </div>
    
     

       
      </div>
    </>
  );
};

export default Achievements;
