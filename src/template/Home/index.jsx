import './styles.css';
import { Component } from 'react';
import { loadPostService } from '../../utils/loadPostService';// /utils/loadPostService';
import { Posts } from '../../components/Posts';///components/Posts';
import { ButtonCustom } from '../../components/Button';

class Home extends Component {

  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10, 
  };

  //page = 0;
  //postsPerPage = 2;

  //postsPerPage = 4;
  //numberPerPage = this.postsPerPage;

  //Para carregar os dados vindos de API serviços
  async componentDidMount() {
    //Utilizando fetching api do navegador
    //Usando dados: https://jsonplaceholder.typicode.com/posts
    //Trabalhando com promessas Promises

    /* Uma das formas simplificadas para fazer
    fetch('https://jsonplaceholder.typicode.com/posts')
         .then(response => response.json())
         .then(response => this.setState({ posts : response}))
    */

    //Com essa função para consumir os dados da API deixa o metodo de ciclo de vida mais limpo e claro     
    await this.loadPosts();

  }

  loadPosts = async () => {

    /*
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
    }); */

    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPostService();

    //slice adiciona desde de o index 0 até 1 antes da posição final passada
    //exemplo slice(0,5) //vai pegar o registro na posição 0 até a posição 4

    //inicial do index 0 ao 4
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    });

  }

  //async / await somente se fosse busca em API
  loadMorePosts = () => {

    /*
    console.log("Mais posts");
    const { allPosts } = this.state;
    this.postsPerPage = this.postsPerPage + this.numberPerPage;
    console.log("Quantidade de post")
    this.setState({
     posts: allPosts.slice(this.page, this.postsPerPage)
    })
    console.log("Quantidade de post", this.postsPerPage); */

    const {
      allPosts,
      posts,
      page,
      postsPerPage
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts); //add concatenando os novos posts no array já existente
    this.setState({
      posts: posts, page: nextPage
    })

    //console.log(page,postsPerPage, nextPage, nextPage + postsPerPage );
  }

  render() {
  
    const { posts, page, postsPerPage, allPosts } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    return (
      <section className="container">
        <Posts posts={posts} />
        {/* <button onClick={this.loadMorePosts}>Load More Posts</button> */}
        <div className="button-custom-container">
          <ButtonCustom disabled={noMorePosts} handleCustom={this.loadMorePosts} title={"Load more Posts"} />
        </div>
      </section>
    );
  }
}

export default Home;

/*
   <div className="App">
     
     <div className="container-card">
       {posts.map(post => (
         <div key={post.id} className="card-item">
           <h1>{post.id}</h1>
           <h4>{post.title}</h4>
           <p>{post.body}</p>
         </div>

       ))}
     </div>
   </div> */