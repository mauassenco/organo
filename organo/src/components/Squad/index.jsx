import Member from "../Member";
import "./styles.css";
import hexToRgba from 'hex-to-rgba';

const Squad = ({squad, members, changeColor, atDelete}) => {
  return (
    members.length > 0 && (
      <section
        className="squad"
        style={
          { backgroundImage: 'url(/images/bg-squads.png)',
          backgroundColor: hexToRgba(squad.cardColor, '0.6')}}
      >
        <input 
          type='color' 
          onChange={
            e => changeColor(e.target.value, squad.id)} 
            value={squad.cardColor}
            className='input-color' 
        />

        <h3 style={
          { borderColor: squad.cardColor }}>
            {squad.name}
        </h3>

        <div className="members">
          {members.map((member, index) => {
            return (
              <Member
                key={index}
                member={member}
                headerBg={squad.cardColor}
                atDelete={atDelete}                
              />
            )
          })}
        </div>
      </section>
    )
  );
};

export default Squad;

