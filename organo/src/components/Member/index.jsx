import { AiFillCloseCircle } from 'react-icons/ai'
import './styles.css'

const Member = ({name, position, image, headerBg, atDelete, id}) => {
    return (
        <div className="member">
            <AiFillCloseCircle 
                size={25} 
                className="delete" 
                onClick={() => atDelete(id)} 
            />            
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