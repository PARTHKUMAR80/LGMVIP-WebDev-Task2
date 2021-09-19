import React from 'react'
import Card from './Card'
export default function Cards({cardData}) {
    return (
        <div className="main-container">
            {cardData.map((user)=>{
                return (
                    <Card key={user.id} user={user}/>
                );
            })}
        </div>
    )
}
