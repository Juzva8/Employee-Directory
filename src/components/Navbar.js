import React, { Component } from 'React';


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