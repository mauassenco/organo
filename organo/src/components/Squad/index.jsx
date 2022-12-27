import Member from "../Member";
import "./styles.css";
import hexToRgba from 'hex-to-rgba';

const Squad = (props) => {
  return (
    props.members.length > 0 && (
      <section
        className="squad"
        style={{ backgroundColor: hexToRgba(props.cardColor, '0.6')}}
      >
        <input type='color' onChange={e => props.changeColor(e.target.value, props.name)} value={props.cardColor} className='input-color' />
        <h3 style={{ borderColor: props.cardColor }}>{props.name}</h3>
        <div className="members">
          {props.members.map((member) => {
            return (
              <Member
                key={member.name}
                name={member.name}
                position={member.position}
                image={member.image}
                squad={member.squad}
                headerBg={props.cardColor}
                atDelete={props.atDelete}
              />
            )
          })}
        </div>
      </section>
    )
  );
};

export default Squad;
