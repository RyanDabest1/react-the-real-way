import React from 'react'

function NavBar(){
    return React.createElement('nav', null,
    <div className='navbar'>
    <ul className='navLinks'>
        <li>Link1</li>
        <li>Link2</li>
    </ul>
    </div>
    ) 
}


export default NavBar;