import { products } from "./products"; // Solo importamos productos

const fetchData = () => new Promise(resolve => { 
  setTimeout(() => {
    resolve(products); 
  },3000); 
});

export default fetchData; 
