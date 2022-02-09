export default class CLASSNAMEHERE {         // this one
  static FUNCTIONNAMEHERE() {                // this one
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `URLHERE`;                 // this one
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}

