import React from 'react';
import './Header.css'

const Header = (props) => {
    const { countCardsItems } = props;
    return (
        <header className='row block center'>
            <div>
                <a href=""><h1>Small shopping example</h1></a>
            </div>
            <div className='authentication'>
                <a href="#">

                    Cards {' '}
                    {countCardsItems ? (
                        <button className='badge'>{countCardsItems}</button>
                    ) : (
                        ''
                    )}
                </a> <a href="#">SignIn</a>

            </div>
        </header>
    )
}

export default Header;