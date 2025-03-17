import { productos } from "./productos"; // Solo importamos productos

const fetchData = () => new Promise(resolve => { 
  setTimeout(() => {
    resolve(productos); 
  },3000); 
});

export default fetchData; 
