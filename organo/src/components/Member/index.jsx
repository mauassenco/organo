import './styles.css'

const Member = ({name, position, image, headerBg}) => {
    return (
        <div className="member">
            <div className="header" style={{backgroundColor: headerBg}}>
                <img src={image} alt={name} />
            </div>
            <div className="footer">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default Member