import React from 'react';

const Header = () => {
    return(
        <div className='header'>
            <img src='https://i.pinimg.com/550x/99/f7/0f/99f70fe7d427e6c6cf994260ff04f24b.jpg' height={100} className='logo'/>
            <div className='nav'>
                <p>HOME</p>
                <p>About me</p>
                <p>My projects</p>
            </div>
            {/*<p>+7914-524-45-89</p>*/}
            <p>+7914-524-45-89</p>
        </div>
    )
}

export default Header;