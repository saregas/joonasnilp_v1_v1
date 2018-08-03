import React from 'react';

export default props => {
    return (
        <section id='work'>
            <h3>Fotod</h3>
            <hr />
            <div className="row">
                {cardList}
            </div>
        </section>
    );
}

