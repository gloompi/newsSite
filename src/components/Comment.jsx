import React from 'react';

export default function Comment(props){
    return (
        <div className='comment__info'>
            <h5 className="comment__username">{props.user}</h5>
            <section>{props.text}</section>
        </div>
    );
}