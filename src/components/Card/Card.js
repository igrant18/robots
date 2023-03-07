import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img data-testid='id-img-element' alt='robot' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2 data-testid='name-h2-element'>{name}</h2>
                <p data-testid='email-p-element'>{email}</p>
            </div>
        </div>
    )
}

export default Card;