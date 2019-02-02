import React from 'react'; // why did we need to remove {Component} ?

export default function Image(props) { // what are props ?
    return ( // is return in this case always just an open () ?
        <div>
            <img src={props.myImage} alt="" />
        </div>
    )
}
