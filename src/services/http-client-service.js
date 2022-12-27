import http from "./http-common";

class HttpClientService {
  

  createUser(data){
    let formData=new FormData();
    formData.append("data",data);

    return http.post("/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
        
      });
    }

  getUser(controllerName) {
    return http.get(controllerName);
  }

  getUserById(){
    return http.get("/users/1");
  }
}

export default new HttpClientService();