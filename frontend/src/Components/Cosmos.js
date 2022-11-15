import React from 'react';

const Cosmos = ()=>{
    return (
      <>
        <div className="card ">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/91Cnrbd3JwL.jpg"
            className="card-img-top"
            alt="pic"
          />
          <div className="card-body">
            <h5 className="card-title">Cosmos</h5>
            <a
              href="/documents/cosmos.pdf"
              class="btn btn-primary"
              target="_blank"
            >
              Read
            </a>
          </div>
        </div>
      </>
    );
}

export default Cosmos;