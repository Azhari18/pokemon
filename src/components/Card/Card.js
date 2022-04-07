import React from 'react';
import typeColors from '../../helpers/typeColors'
import './style.css';

function Card({ pokemon }) {
    return (
        <div className="Card">
            <div className="Card_img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card_name">
                {pokemon.name}
            </div>
            <div className="Card_types">
                {
                    pokemon.types.map(type => {
                        return (
                            <div className="Card_type" style={{ backgroundColor: typeColors[type.type.name] }}>
                                {type.type.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="Card_info">
                <div className="Card_data">
                    <table className='Detail'>
                        <tr>
                            <th>
                                <p>Weight</p>
                            </th>
                            <th>
                                <p className="value">{pokemon.weight}</p>
                            </th>
                        </tr>
                    </table>
                </div>
                <div className="Card_data">
                    <table className='Detail'>
                        <tr>
                            <th>
                                <p>Height</p>
                            </th>
                            <th>
                                <p className="value">{pokemon.height}</p>
                            </th>
                        </tr>
                    </table>
                </div>
                <div className="Card_data">
                    <table className='Detail'>
                        <tr>
                            <th>
                                <p>Ability</p>
                            </th>
                            <th>
                                <p className="value">{pokemon.abilities[0].ability.name}</p>
                            </th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Card;
