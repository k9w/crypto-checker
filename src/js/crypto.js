export default class CryptoChecker {
  static async getCurrency(currency) {
    try {
      const response = await fetch(`https://api.nomics.com/v1/currencies?key=${process.env.api_key}&ids=${currency}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}

