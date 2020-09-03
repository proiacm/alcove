import React from 'react';
import { Link } from 'react-router-dom';

const Genre = props => {
    
    return (
        // <div className="card text-center">
        //     <div className="card-body">
        //         <h3 className="card-title"></h3>
        //         <Link to={`/genres/${props.genre.id}`}>View Books in this Genre</Link>
        //     </div>
        // </div>
        <div class="row">
        <div class="col-md-8">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">{props.genre.name}</h5>
                <Link to={`/genres/${props.genre.id}`}>View Books in this Genre</Link>
            </div>
            </div>
        </div>
        </div>
      
    )
}

export default Genre