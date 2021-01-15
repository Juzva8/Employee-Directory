import React, { Component } from 'react';
import '../style/navbar.css'


function NavBar({handleSearchChange}){
return (

<nav>
<h5>Filter by clicking heading or use the search box to narrow your results.
</h5>
<input  
className = "navbar"
type = 'search' 
placeholder = 'Search'
onChange = {e => handleSearchChange(e) }
/>

</nav>

)
}

export default NavBar;

