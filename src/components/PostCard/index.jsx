import { Component } from 'react';
import './index.css';

export const PostCard = (props) => {
//Tb pode se pegar aplicando desestruturação direto no valor props da arrow function
//export const PostCard = ({post}) => {

//Tb Pode pegar os atributos passados 1 por um no componente pai
//export const PostCard = ({title, cover, body, id}) => {
    
    //Se chegar o objeto inteiro tb pode pegar e passar o valor para uma variavel
    //const post = props.post; post.title  post.id

    //Se o nome for o mesmo pode fazer a desestruturação para pegar valor
    //const { post } = props;

    //Verificando objeto
    //console.log(props);

    return (
        <div className="post">
            <img className="post-img" src={props.cover} alt={props.title} />
            <div className="post-content">
                <p>{props.id}</p>
                <h2 className="title-strong">{props.title}</h2>
                <p>{props.body}</p>
            </div>
        </div>
    );
}

/* PODE PASSAR O OBJETO INTEIRO tambem

<div key={props.post.id} className="post">
            <img className="post-img" src={props.post.cover} alt={props.post.title} />
            <div className="post-content">
                <p>{post.id}</p>
                <h1 className="title-strong">{props.post.title}</h1>
                <p>{props.post.body}</p>
            </div>
        </div>

*/