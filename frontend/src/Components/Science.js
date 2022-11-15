import React from "react";

const Science = () => {
  return (
    <>
      <div className="card ">
        <img
          src="https://api.time.com/wp-content/uploads/2016/05/the-gene-an-intimate-history-siddhartha-mukherjee.jpg"
          className="card-img-top"
          alt="pic"
        />
        <div className="card-body">
          <h5 className="card-title">The Gene</h5>
          <a
            href="/documents/thegene.pdf"
            class="btn btn-primary"
            target="_blank"
          >
            Read
          </a>
        </div>
      </div>
    </>
  );
};

export default Science;
