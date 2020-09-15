import React from 'react';
import HobbyList from '../../components/HobbyList';
import { useSelector, useDispatch } from 'react-redux'
import casual from 'casual-browserify'
import { addNewHobby,setActiveHobby } from '../../actions/hobby'
function TestRedux() {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId)
    const dispatch = useDispatch();
    const handleAddHobbyClick = () => {
        const newHobby = {
            id: casual.uuid,
            title: casual.title
        }
        const action = addNewHobby(newHobby)
        dispatch(action)
    }
    const handleHobbyClick= (hobby)=>{
        const action = setActiveHobby(hobby)
        dispatch(action)
    }
    return (
        <div>
            <button onClick={handleAddHobbyClick}>Random list</button>
            <HobbyList
             hobbyList={hobbyList}
             activeId={activeId}
             onHobbyClick={handleHobbyClick}
             ></HobbyList>
        </div>
    );
}

export default TestRedux;