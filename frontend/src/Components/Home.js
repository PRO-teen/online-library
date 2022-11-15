import React , {useState} from "react";

const Home = ({data}) => {
   const [filterData, setFilterData] = useState([]);

   const handleFilter = (event) => {
     const searchWord = event.target.value;
     const newFilter = data.filter((value) => {
       return value.title.toLowerCase().includes(searchWord.toLowerCase());
     });
     if (searchWord === "") {
       setFilterData([]);
     } else {
       setFilterData(newFilter);
     }
   };
    
  return (
    <>
      {/*body started*/}

      <input
        className="search-item"
        type="text"
        placeholder="search books"
        onChange={handleFilter}
      />
      {filterData.length !== 0 && (
        <div className="dataResult">
          {filterData.slice(0, 10).map((value, key) => {
            return (
              <div className="card">
                <img src={value.image} class="card-img-top" alt="..." />
                <div className="card-body">
                  <p class="card-text">{value.title}</p>
                  <a
                    href={value.link}
                    className="btn btn-primary"
                    target="__blank"
                  >
                    Read
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="one">
        <div className="card" id="1">
          <img src="/godfather.png" className="card-img-top" alt="pic" />
          <div className="card-body">
            <p className="card-text">God Father -01</p>
            <a
              href="/documents/godfather.pdf"
              className="btn btn-primary"
              target="_blank"
            >
              {" "}
              Read
            </a>
          </div>
        </div>
        <div className="card" id="2">
          <img
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/regionalbooks/6/m/n/the-rudest-book-ever-original-imaghmeqsgcuhhsv.jpeg?q=70"
            className="card-img-top"
            alt="pic"
          />
          <div className="card-body">
            <p className="card-text">The Rudest Book</p>
            <a
              href="/documents/therudestbook.pdf"
              className="btn btn-primary"
              target="_blank"
            >
              Read
            </a>
          </div>
        </div>
        <div className="card" id="3">
          <img
            src="https://kbimages1-a.akamaihd.net/ddf8d53d-7df5-4560-8fbd-43915f4f6a03/353/569/90/False/rich-dad-poor-dad-24.jpg"
            className="card-img-top"
            alt="pic"
          />
          <div className="card-body">
            <p className="card-text">Rich Dad Poor Dad</p>
            <a
              href="/documents/RDPD.pdf"
              className="btn btn-primary"
              target="_blank"
            >
              {" "}
              Read
            </a>
          </div>
        </div>
        <div className="card" id="4">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/919mmNCTaaL.jpg"
            className="card-img-top"
            alt="pic"
          />
          <div className="card-body">
            <p className="card-text">Intelligent Investor</p>
            <a
              href="/documents/intelligentinvestor.pdf"
              className="btn btn-primary"
              target="_blank"
            >
              Read{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="card" id="5">
          <img
            src="https://www.tvguide.com/a/img/catalog/provider/1/2/1-6538977943.jpg"
            className="card-img-top"
            alt="pic"
          />
          <div className="card-body">
            <p className="card-text">All the Boys loved</p>
            <a
              href="/documents/toalltheboys.pdf"
              className="btn btn-primary"
              target="_blank"
            >
              {" "}
              Read
            </a>
          </div>
        </div>

        <div className="card" id="6">
          <img
            src="https://api.time.com/wp-content/uploads/2016/05/the-gene-an-intimate-history-siddhartha-mukherjee.jpg"
            className="card-img-top"
            alt="pic"
          />
          <div className="card-body">
            <p className="card-text">The Gene</p>

            <a
              href="/documents/thegene.pdf"
              className="btn btn-primary"
              target="_blank"
            >
              {" "}
              Read
            </a>
          </div>
        </div>

        <div className="card" id="7">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/91Cnrbd3JwL.jpg"
            className="card-img-top"
            alt="pic"
          />
          <div className="card-body">
            <p className="card-text">Cosmos</p>
            <a
              href="/documents/Cosmos.pdf"
              className="btn btn-primary"
              target="_blank"
            >
              {" "}
              Read
            </a>
          </div>
        </div>

        <div className="card" id="8">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/814L+vq01mL.jpg"
            className="card-img-top"
            alt="pic"
          />
          <div className="card-body">
            <p className="card-text">Ikigai</p>
            <a
              href="/documents/ikigai.pdf"
              className="btn btn-primary"
              target="_blank"
            >
              {" "}
              Read
            </a>
          </div>
        </div>
      </div>
      <div className="box2">
        <div className="card" id="9">
          <img
            src="https://m.media-amazon.com/images/M/MV5BY2FhMjAwMjYtMjQwMi00YmJkLWE3YmUtODQwZWQyMGRhZmM2XkEyXkFqcGdeQXVyMjExNjgyMTc@._V1_.jpg"
            className="card-img-top"
            alt="pic"
          />
          <div className="card-body">
            <p className="card-text">Guns Germs And Steel</p>
            <a
              href="/documents/GunsGermsandSteel.pdf"
              className="btn btn-primary"
              target="_blank"
            >
              {" "}
              Read
            </a>
          </div>
        </div>

        <div className="card" id="10">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/41bsbkAZQXL._SX329_BO1,204,203,200_.jpg"
            className="card-img-top"
            alt="pic"
          />
          <div className="card-body">
            <p className="card-text">Infinite Powers</p>
            <a
              href="/documents/Infinite Powers.pdf"
              className="btn btn-primary"
              target="_blank"
            >
              {" "}
              Read
            </a>
          </div>
        </div>

        <div className="card" id="11">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/41jqYjiA3oL._SX322_BO1,204,203,200_.jpg"
            className="card-img-top"
            alt="pic"
          />
          <div className="card-body">
            <p className="card-text">The Miracle Morning</p>
            <a
              href="/documents/The Miracle Morning.pdf"
              className="btn btn-primary"
              target="_blank"
            >
              {" "}
              Read
            </a>
          </div>
        </div>

        <div className="card" id="12">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/91eFPNV3zOL.jpg"
            className="card-img-top"
            alt="pic"
          />
          <div className="card-body">
            <p className="card-text">A Brief History of Modern India</p>
            <a
              href="/documents/A brief History of Modern India.pdf"
              className="btn btn-primary"
              target="_blank"
            >
              {" "}
              Read
            </a>
          </div>
        </div>
      </div>
      <div className="box3">
        <div className="card" id="13">
          <img
            src="https://m.media-amazon.com/images/I/41xYbLNlC1L.jpg"
            className="card-img-top"
            alt="pic"
          />
          <div className="card-body">
            <p className="card-text">Brief Answers to the Big Questions</p>
            <a
              href="/documents/Brief Answers to the Big Questions.pdf"
              className="btn btn-primary"
              target="_blank"
            >
              {" "}
              Read
            </a>
          </div>
        </div>

        <div className="card" id="14">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/41o5Wl8DcjL.jpg"
            className="card-img-top"
            alt="pic"
          />
          <div className="card-body">
            <p className="card-text">Invisible Women Data Bias in a World</p>
            <a
              href="/documents/Invisible Women Data Bias in a World.pdf"
              className="btn btn-primary"
              target="_blank"
            >
              {" "}
              Read
            </a>
          </div>
        </div>

        <div className="card" id="15">
          <img
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1466865681l/25076674._SY475_.jpg"
            className="card-img-top"
            alt="pic"
          />
          <div className="card-body">
            <p className="card-text">The Alchemist</p>
            <a
              href="/documents/the-alchemist.pdf"
              className="btn btn-primary"
              target="_blank"
            >
              {" "}
              Read
            </a>
          </div>
        </div>

        <div className="card" id="16">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/716yGy-BhWL.jpg"
            className="card-img-top"
            alt="pic"
          />
          <div className="card-body">
            <p className="card-text">The Book of Secret Wisdom</p>
            <a
              href="/documents/TheBookof SecretWisdom.pdf"
              className="btn btn-primary"
              target="_blank"
            >
              {" "}
              Read
            </a>
          </div>
        </div>
      </div>

      <div className="box4">
        <div className="card" id="17">
          <img
            src="https://www.tvguide.com/a/img/catalog/provider/1/2/1-6538977943.jpg"
            className="card-img-top"
            alt="pic"
          />
          <div className="card-body">
            <p className="card-text">All the Boys loved</p>
            <a
              href="/documents/toalltheboys.pdf"
              className="btn btn-primary"
              target="_blank"
            >
              {" "}
              Read
            </a>
          </div>
        </div>

        <div className="card" id="18">
          <img
            src="https://api.time.com/wp-content/uploads/2016/05/the-gene-an-intimate-history-siddhartha-mukherjee.jpg"
            className="card-img-top"
            alt="pic"
          />
          <div className="card-body">
            <p className="card-text">The Gene</p>
            <a
              href="/documents/thegene.pdf"
              className="btn btn-primary"
              target="_blank"
            >
              {" "}
              Read
            </a>
          </div>
        </div>

        <div className="card" id="19">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/91Cnrbd3JwL.jpg"
            className="card-img-top"
            alt="pic"
          />
          <div className="card-body">
            <p className="card-text">Cosmos</p>
            <a
              href="/documents/Cosmos.pdf"
              className="btn btn-primary"
              target="_blank"
            >
              {" "}
              Read
            </a>
          </div>
        </div>

        <div className="card" id="20">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/91Cnrbd3JwL.jpg"
            className="card-img-top"
            alt="pic"
          />
          <div className="card-body">
            <p className="card-text">8 number</p>
            <a
              href="/documents/Cosmos.pdf"
              className="btn btn-primary"
              target="_blank"
            >
              {" "}
              Read
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
