import React from 'react';
import PropTypes from 'prop-types';
HobbyList.propTypes = {
    hobbyList: PropTypes.array,
    activeId: PropTypes.string,
    onHobbyClick:PropTypes.func
};
HobbyList.defaultProps={
    hobbyList: null,
    activeId:null,
    onHobbyClick:null
}

function HobbyList(props) {
    const {hobbyList,activeId,onHobbyClick}=props
    const handleClick = (hobby)=>{
        if(onHobbyClick){
            onHobbyClick(hobby)
        }
    }
    return (
        <div>
            <ul>
                {hobbyList.map(hobby=>(
                    <li 
                    key={hobby.id}
                    className={ hobby.id===activeId ? 'active' : ''}
                    onClick={()=>handleClick(hobby)}
                    >{hobby.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default HobbyList;