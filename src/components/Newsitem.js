// import React, { Component } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';


// export class Newsitem extends Component {
//   render() {
//     let {title,description,imgUrl,newsurl,author,date} = this.props;
//     return (
//       <div className="my-3">
//         <div className="card">
//         <span class="badge badge-primary">Primary</span>
//   <img className="card-img-top" src={imgUrl} alt="..."/>

//   <div className="card-body" >
 
//     <h5 className="card-title">{title} </h5>
   
//     <p className="card-text">{description}...</p>
//     <p class="card-text"><small class="text-muted">By {author!=null ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
//     <a href={newsurl} target ="_blank" className="btn btn-primary">Read More</a>
//   </div>
// </div>
        
//       </div>
//     )
//   }
// }

// export default Newsitem


import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export class Newsitem extends Component {
  render() {
    let { title, description, imgUrl, newsurl, author, date ,mode} = this.props;
    return (
      <div className="my-3" >
        <div className={`card ${mode==='light' ? 'bg-light text-dark' : 'bg-dark text-light'}`}>
          <span className="badge bg-danger" style={{width:'max-content'}}>{author}</span> {/* Updated className */}
          <img className="card-img-top" src={imgUrl} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="card-text">
                By {author != null ? author : "Unknown"} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsurl} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${mode==='light' ? 'bg-blue text-light' : 'bg-light text-dark'}`}>
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
