const initialState= {
    list : [{id:3233,title:'so 3233'}],
    activeId:null,
    status: 'false'
}
const hobbyReducer=(state=initialState,action)=>{
    switch (action.type) {
        case "ADD_HOBBY":
            const newList=[...state.list]
            newList.push(action.payload)
            return{
                ...state,
                list:newList
            }
        case "SET_ACTIVE_HOBBY":
            const newActive= action.payload.id;
            return{
                ...state,
                activeId: newActive
            }
        case "SET_STATUS":
            const newStatus= action.payload
            return{
                ...state,
                status:newStatus
            }
        default:
            return state;
    }
}
export default hobbyReducer;