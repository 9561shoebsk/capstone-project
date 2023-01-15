import React from 'react'

import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
  <>
  <nav class="navbar navbar-expand-lg bg-danger">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Flash Card</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        
        <li class="nav-item">
          <Link class="nav-link" to='/MyFlashcard'>My Flashcard</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/FlashcardDetails'>Flashcard Details</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
 
    <Outlet/>
    </>
  )
}

export default Header