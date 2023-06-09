import React from "react";

const Modal=({show, item, onClose})=>{
    if(!show){
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let description = item.volumeInfo.description.substr(0, 1200) + "...";
    return(
        <>
            <div className='overlay'>
                <div className="overlay-inner">
                    <button className='close' onClick={onClose}><i className='fas fa-times'></i></button>
                    <div className="inner-box">
                        <img src={thumbnail} alt=""/>
                        <div className='info'>
                            <h1>{item.volumeInfo.title}</h1>
                            <h3>{item.volumeInfo.authors}</h3>
                            <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br/>
                        </div>
                    </div>
                    <h4 className="description">{description}</h4>
                </div>
            </div>
        </>
    )
}

export default Modal;