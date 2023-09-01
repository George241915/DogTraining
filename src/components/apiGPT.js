import axios from 'axios';

const apiUrl = 'https://api.openai.com/v1/completions';

const fetchChatGPTResponse = async (message) => {
  try {
    const response = await axios.post(apiUrl, {
      model: 'text-davinci-003',
      prompt:  message,
      temperature: 0, // Ajusta la temperatura según tus preferencias
      max_tokens: 200, // Define la longitud máxima de la respuesta generada
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.REACT_APP_API_KEY,
      },
    });
    const tokensConsumidos = response.data.usage.total_tokens;
    return response.data.choices[0].text;
    

  } catch (error) {
    console.error('Error al obtener la respuesta de ChatGPT:', error);
    return null;
  }
};

  
export default fetchChatGPTResponse;