import React from 'react';
import CardComponent from './CardComponent';
import './MonsterList.css';


const MonsterList = (props) => {
    // console.log(props);
    return (
        <div className="item-list">
           {props.monsters.map(monster => (
                        <CardComponent key={monster.id} monster={monster} />
                    ))}
        </div>
    );
}

export default MonsterList;