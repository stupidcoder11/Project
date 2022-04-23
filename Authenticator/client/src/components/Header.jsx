import React from 'react';

function Header(props) {
    console.count("Header rendered : ")
    return (
        <div className="jumbotron jumbotron-fluid p-3" style={{ background: "#FFCD3C"}}>
            <div className="container text-center">
                <h1 className="display-4">{props.title}</h1>
                <p className="lead">{props.description}</p>
            </div>
      </div>
    );
}

export default Header;