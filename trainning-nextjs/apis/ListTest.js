async function ListTest() {
    try {
      const requestUrl ='https://jsonplaceholder.typicode.com/users';
      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      return responseJSON
    } catch (error) { 
      console.log(error.message);
    }
  }
  export default ListTest