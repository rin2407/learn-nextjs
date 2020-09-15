const initialstate={
    userList: ['a','b','c']
}
const userReducer=(state=initialstate,action)=>{
    switch (action.type) {
        case "ADD_USER":
            
            break;
        default:
            return state;
    }
}
export default userReducer;