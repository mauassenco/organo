import { AiFillCloseCircle } from 'react-icons/ai'
import './styles.css'

const Member = ({member, headerBg, atDelete}) => {
    return (
        <div className="member">
            <AiFillCloseCircle 
                size={25} 
                className="delete" 
                onClick={() => atDelete(member.id)} 
            />            
            <div className="header" style={{backgroundColor: headerBg}}>
                <img src={member.image} alt={member.name} />
            </div>
            <div className="footer">
                <h4>{member.name}</h4>
                <h5>{member.position}</h5>
            </div>
        </div>
    )
}

export default Member