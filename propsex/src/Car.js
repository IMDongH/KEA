import React from 'react'

export default function Car(props) {
    
    return <>[{props.data.id}] <span class="tab">&#9;</span>
    { props.data.brand } <span class="tab">&#9;</span>
    { props.data.price } <span class="tab">&#9;</span>
    { props.data.design }
    <br></br></>;
}
