import http from "../http-common";

class MoviesServices {
  

    getMovieById(id){
        //string interpolatin altgr+, ile yapılır şu backtickler olmalı abi.
      return http.get(`/Movies/${id}`, {
       
          
          
        });
      }
  
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
  
  export default new MoviesServices();
