// https://swapi.co

const getResource = async (url) => {
  // fetch вернет Promise, когда Promise выполнится, получим объект response
  // await означает, что мы будем ждать пока результат Promise не будет доступен
  const res = await fetch(url);
  // можно вывести в консоль status — должен отобразить 200 ОК
  // console.log('Got response', res.status);
  
  // Сделаем проверку на ответ сервера, если ответ не из 200-299, выернем ошибку в консоль
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, received ${res.status}`)
  } 
  
  // Что бы достать тело ответа, у объекта response есть несколько методов. 
  // Каждый метод возвращает еще один Promise, который выполняется уже тогда,
  // когда результат будет доступен.
  const body = await res.json();
  // console.log('body', body);
  
  return body;
};

getResource('https://swapi.co/api/people/1/')
  // как только resource будет доступен, получим тело
  .then((body) => {
    console.log(body);
  })
  // Если поймаем ошибку на fetch при его использовании, выведем в консоль
  .catch((err) => {
    console.error('Could not fetch', err);
  });
