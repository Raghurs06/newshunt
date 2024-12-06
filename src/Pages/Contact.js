import React from "react";

export default function Contact() {
  return (
    <>
      <div className="card linkedinphoto" style={{width: "18rem;", marginTop:"10vh"}}>
        <div className="card-body">
          <h5 className="card-title">Raghavendra R Sheregar</h5>
          <p className="card-text">
            Connect with me on LinkedIn for networking, collaboration, or
            project discussions. Let's build something great together!
          </p>
          <button style={{backgroundColor:"#404E7C", marginRight:"1vw", borderRadius:"5px"}}>
          <a href="https://in.linkedin.com/in/raghavendra-r-sheregar-b43a71236?trk=profile-badge" target="_blank" rel="noopener noreferrer" style = {{color:"white", backgroundColor:"#404E7C"}}>
            LinkedIn
          </a>
          </button>
          <button style={{backgroundColor:"#404E7C", marginRight:"1vw", borderRadius:"5px"}}><a href="mailto:raghursheregra@mail.com" style = {{color:"white", backgroundColor:"#404E7C", marginLeft:"1vw"}}>
            Mail
            </a></button>
          <button style={{backgroundColor:"#404E7C", marginRight:"1vw", borderRadius:"5px"}}><a href="/newshunt/" style = {{color:"white", backgroundColor:"#404E7C", marginLeft:"1vw"}}>Back to Home Page</a></button>
        </div>
      </div>
    </>
  );
}
