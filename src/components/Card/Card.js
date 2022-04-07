import React from 'react';
import typeColors from '../../helpers/typeColors'
import './style.css';

function Card({ pokemon }) {
    return (
        <div className="Card">
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card__name">
                {pokemon.name}
            </div>
            <div className="Card__types">
                {
                    pokemon.types.map(type => {
                        return (
                            <div className="Card__type" style={{ backgroundColor: typeColors[type.type.name] }}>
                                {type.type.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="Card__info">
                <div className="Card__data Card__data--weight">
                    <table className='Detail'>
                        <tr>
                            <th>
                                <p className="title">Weight</p>
                            </th>
                            <th>
                                <p>{pokemon.weight}</p>
                            </th>
                        </tr>
                    </table>
                </div>
                <div className="Card__data Card__data--weight">
                    <table className='Detail'>
                        <tr>
                            <th>
                                <p className="title">Height</p>
                            </th>
                            <th>
                                <p>{pokemon.height}</p>
                            </th>
                        </tr>
                    </table>
                </div>
                <div className="Card__data Card__data--ability">
                    <table className='Detail'>
                        <tr>
                            <th>
                                <p className="title">Ability</p>
                            </th>
                            <th>
                                <p>{pokemon.abilities[0].ability.name}</p>
                            </th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Card;