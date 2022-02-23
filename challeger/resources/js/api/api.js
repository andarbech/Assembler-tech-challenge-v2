
function makeApi() {
  function fetchAllGifs() {
    console.log("inside")
    return axios.get("http://api.giphy.com/v1/gifs/trending?api_key=0rY0KurUqe0RmYUMGSCU94UnRpsg0bgX=0");
  }
  return {
    fetchAllGifs: fetchAllGifs,
  };
}

export default makeApi();