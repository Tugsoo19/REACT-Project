function miniCarousel(props) {
    return(
        <div className="mini col p-4">
            <div className="row">
                <img src={props.image} className="col-3"/>
                <div className="mini-title">{props.title}</div>
                <div className="mini-items">{props.items}</div>
            </div>
        </div>
    )
}

export default miniCarousel;