import http from "../http-common";

class UserServices {
  

    createUser(data){

      return http.post("/Users", data, {
          headers: {
            // "Content-type": "application/json",
          }
          
        });
      }
      getUserInfo(userId){
        return http.get(`Users/GetUserInfo/${userId}`)
        
      };
  
      login(data){

        return http.post("/Users/Login", data, {
            headers: {
              
            }
            
          });
        }
  
    signOut(){
      return http.get("/Users/SignOut");
    }
  }
  
  export default new UserServices();
