//Quando a função não for ser uma classe pode deixar em minusculo a inicial da função
export const loadPostService = async () => {
  
    const postResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photoResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    //trabalhar com varias promessas
    const [posts, photos] = await Promise.all([postResponse, photoResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      //... significa que vai passar toda a informação e no caso de classes com suas respectivas heranças exemplo
      //Vai ser add no return um novo conjunto de dados que será o post, nele restorna todo o post e segundo valor dentro da cadeira do json o cover que será o atributo url do objeto photo
      return { ...post, cover: photosJson[index].url }
    });

    return postsAndPhotos;

}