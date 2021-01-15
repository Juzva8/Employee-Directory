import React, { Component } from 'react';


function NavBar({handleSearchChange}){
return (

<nav>
<form>
<input  
className = "form-control"
type = 'search' 
placeholder = 'Search'
onChange = {e => handleSearchChange(e) }
/>

</form>

</nav>

)



}

export default NavBar;