import React from React; 

const Card = () =>  {
    return(
        <div class="card">
            <h1>name</h1>
            <p>eye color</p>
            <ul>
                {
                    movies.map(movie => {
                        <li>movie</li>
                    })
                }
            </ul>
        </div>
    )
}

export Card;