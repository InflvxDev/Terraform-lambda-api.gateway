function Ispar(number) {
  return number%2 == 0? `El numero ${number} es par` : `El numero ${number} es Impar`
}

module.exports.handler = async (event) => {
    console.log('Event: ', event);
    let responseMessage = '';

    if (event.queryStringParameters && event.queryStringParameters['number']) {
      const number = parseInt(event.queryStringParameters.number)
      responseMessage = Ispar(number);
    }

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: responseMessage,
      }),
    }
}

  