import React from 'react'
import "./CSS/Project.css"
import final from "./images/final.png"
import game from "./images/game.png"
import weather from "./images/weather.jpeg"
import art from "./images/art.png"



const Projects = () => {
  return (
    <>

      <div className='Project-main'>
        <div className='heading'><b>Projects</b></div>
        <div className='project'>
          <a href='https://github.com/Wadgaonkarprathameshdeepak/Arts-Store'>
            <img src={art} alt="tp" />
          </a>
          <div className='title'>Art Store</div>
          <div className='info'> Created an eCommerce website which is Art Store for selling Art Sketches.
</div>
          <div className='info'>
          Designed a user-friendly and visually appealing interface to enhance the customer experience.
 Implemented React.js for the user interface and employed Node.js to seamlessly connect with backend            
 <div className='button-container'>
              <a href='https://github.com/Wadgaonkarprathameshdeepak/Arts-Store' target='_blank' rel='noopener noreferrer'>
                <button type='button' className='link-button'>
                  <span role='img' aria-label='Link symbol'>🔗</span>
                </button>
              </a>
              <a href='https://github.com/Wadgaonkarprathameshdeepak/Arts-Store' >
                <button type='button' className='code-button'>
                  <span role='img' aria-label='Code symbols'>{'</>'}</span>
                </button>
              </a>
            </div>
          </div>
        </div>


        <div className='project'>
          <a href='https://spotifyyclones.netlify.app/'>
            <img src={final} alt="tp" />
          </a>
          <div className='title'>Soptify Clone</div>
          <div className='info'>
          Spearheaded the design and development of Spotify clone website which has custom playlist feature that allows users to
 save their favorite songs.
 Designed and implemented a dynamic login and sign-up page, incorporating modern authentication techniques to ensure
 secure user interactions.            <div className='button-container'>
              <a href='https://spotifyyclones.netlify.app/' target='_blank' rel='noopener noreferrer'>
                <button type='button' className='link-button'>
                  <span role='img' aria-label='Link symbol'>🔗</span>
                </button>
              </a>
              <a href='https://github.com/Wadgaonkarprathameshdeepak/spotifyclones' >
                <button type='button' className='code-button'>
                  <span role='img' aria-label='Code symbols'>{'</>'}</span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className='project'>
          <a href='https://github.com/Wadgaonkarprathameshdeepak/Weather-App'>
            <img src={weather} alt="tp" />
          </a>
          <div className='title'>Weather Application</div>
          <div className='info'> Developed a React.js based weather application with a focus on responsive design, ensuring seamless user experiences
 across various devices.
 • Integrated weather API to fetch and display real-time weather information
            <div className='button-container'>
              <a href='https://github.com/Wadgaonkarprathameshdeepak/Weather-App' target='_blank' rel='noopener noreferrer'>
                <button type='button' className='link-button'>
                  <span role='img' aria-label='Link symbol'>🔗</span>
                </button>
              </a>
              <a href='https://github.com/Wadgaonkarprathameshdeepak/Weather-App' >
                <button type='button' className='code-button'>
                  <span role='img' aria-label='Code symbols'>{'</>'}</span>
                </button>
              </a>
            </div></div>
        </div>

        <div className='project'>
          <a href='https://radiant-cendol-d6d0e2.netlify.app/'>
            <img src={game} alt="tp" />
          </a>
          <div className='title'>Rock Paper Scissors Game</div>
          <div className='info'>
          Developed a responsive and interactive Rock Paper Scissors game using HTML, CSS, and JavaScript. The game features a clean and user-friendly interface, allowing players to make their choices by clicking on dedicated buttons. Implemented logic to determine the winner based on the classic game rules.
            <div className='button-container'>
              <a href='https://radiant-cendol-d6d0e2.netlify.app/' target='_blank' rel='noopener noreferrer'>
                <button type='button' className='link-button'>
                  <span role='img' aria-label='Link symbol'>🔗</span>
                </button>
              </a>
              <a href='https://github.com/Wadgaonkarprathameshdeepak/Game' >
                <button type='button' className='code-button'>
                  <span role='img' aria-label='Code symbols'>{'</>'}</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Projects