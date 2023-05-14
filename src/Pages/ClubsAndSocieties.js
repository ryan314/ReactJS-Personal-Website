import React from 'react'
import { useNavigate } from 'react-router-dom';
import './ClubsAndSocieties.css';

function ClubsAndSocieties() {
  let navigate = useNavigate();

  return (
    <div className="clubsandsocieties-border">
      <div className="clubsandsocieties-title"></div>

      <div className="clubs-and-societies">
          From 2021 to 2023, I was a member of the UW Computer Science Club, where we would discuss about CS-related topics and
          bond as CS enthusiasts.
          <br/>
          <br/>
          From 2022 to 2023, I was a member of the Software Subsystem within the UW Rocketry Club, where I helped improve the Omnibus project, which is written in Python. 
      </div>
    </div>
  )
}

export default ClubsAndSocieties;