/**
* @param {String} product it can be product's name or id
*/
export async function getProduct(product) {
  const config = {
    method: 'GET', 
    headers: {
      'Accept': 'application/json', 'Content-Type': 'application/json'
    }
  };
  const connect = () => fetch(`https://pokeapi.co/api/v2/pokemon/${String(product)}`, config);
  
  try {
    const get = await connect();
    const data = await get.json();

    return data;
  }
  catch(error) {
    console.error(`[product] ${error}`)
  }
}