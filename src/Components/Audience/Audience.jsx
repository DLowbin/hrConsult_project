import React from 'react';
import '../Audience/Audience.css'
import AudienceDataBase from './AudienceDB';

function ForWhom(props) {
    return (
        <div className='forwhom'>
            <img src={props.illustration}/>
            <span>{props.description}</span>
        </div>
    );
};

function Audience () {
    
    return (
        <div className="audience__wrapper">
            {AudienceDataBase.map((audienceName) => {
                return (
                    <ForWhom key={audienceName.id}
                        illustration={audienceName.illustration}
                        description={audienceName.text}
                    />
                )
            })}
        </div>
    );

}


export default Audience;