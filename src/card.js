import React from 'react'; 

const Card = (props) =>  {
    return(
        <div className="card">
            <h1>name</h1>
            <p>eye color</p>
            <ul>
                {
                    props.data.map(movie => {
                        return (
                            <li>movie</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Card;