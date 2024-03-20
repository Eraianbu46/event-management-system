import http from "./http-common";


const getAll= () =>{
  //console.log('tutorialservice getall method works!')
    return http.get("http://localhost:8081/endpoint");
};
const get = id => {
    return http.get(`http://localhost:8081/endpoint/get-event/${id}`);
  };
  
  const create = data => {
    return http.post("http://localhost:8081/endpoint/create-event", data);
  };
  
  const update = (id, data) => {
    return http.put(`http://localhost:8081/endpoint/update-event/${id}`, data);
  };
  
  const remove = id => {
    return http.delete(`http://localhost:8081/endpoint/remove-event/${id}`);
  };
  
  const removeAll = () => {
    return http.delete(`http://localhost:8081/endpoint/events`);
  };
  const findByTitle = title => {
    return http.get(`http://localhost:8081/endpoint/get-tutorial/${title}`);
  };
  const EventService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle
  };
  
  export default EventService;