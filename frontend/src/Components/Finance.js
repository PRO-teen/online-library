import React from "react";


const Finance = ()=>{
    return (
      <>
          <div className="card ">
            <img
              src="https://kbimages1-a.akamaihd.net/ddf8d53d-7df5-4560-8fbd-43915f4f6a03/353/569/90/False/rich-dad-poor-dad-24.jpg"
              className="card-img-top"
              alt="pic"
            />
            <div className="card-body">
              <h5 className="card-title">Rich Dad Poor Dad</h5>
              <a
                href="/documents/RDPD.pdf"
                class="btn btn-primary"
                target="_blank"
              >
                Read
              </a>
            </div>
          </div>

          <div className="card ">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/919mmNCTaaL.jpg"
              className="card-img-top"
              alt="pic"
            />
            <div className="card-body">
              <h5 className="card-title">Intelligent Investor</h5>
              <a
                href="/documents/intelligentinvestor.pdf"
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

export default Finance;