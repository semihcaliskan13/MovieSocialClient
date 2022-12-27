import http from "../http-common";

class UserDetaiServices {
  

    getPhoto(userName){
       
      return http.get(`/UserDetails/GetPhotos/${userName}`, {
                 
          
        });
      }
  
      uploadPhoto(data){

        return http.post("/Users/Login", data, {
            headers: {
              
            }
            
          });
        }
  
    putDescription(){
      return http.get("/Users/SignOut");
    }
  }
  
  export default new UserDetaiServices();
