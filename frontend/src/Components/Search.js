// import React , {useState} from "react";

// const Search = ({data})=>{
//     const [filterData , setFilterData] = useState([]);

//     const handleFilter = (event)=>{
//         const searchWord = event.target.value;
//         const newFilter = data.filter((value)=>{
//             return value.title.toLowerCase().includes(searchWord.toLowerCase());
//         });
//         if(searchWord === ""){
//             setFilterData([]);
//         }else{
//             setFilterData(newFilter);
//         }  

//     };

//     return (
//       <>
//         <form className=" h-25 search" role="search">
//           <input
//             onChange={handleFilter}
//             className="form-control me-2"
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
//           />
//         </form>

//         {filterData.length !== 0 && (
//           <div className="dataResult">
//             {filterData.slice(0, 10).map((value, key) => {
//               return (
//                 <div className="card">
//                   <img src={value.image} class="card-img-top" alt="..." />
//                   <div className="card-body">
//                     <p class="card-text">{value.title}</p>
//                     <a
//                       href={value.link}
//                       className="btn btn-primary"
//                       target="__blank">
//                       Read
//                     </a>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </>
//     );
// };

// export default Search;