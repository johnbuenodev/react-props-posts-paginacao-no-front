import { PostCard } from "../PostCard";
import { Component } from 'react';
import './index.css';

export const Posts = (props) => {
    //passando os posts Array para depois ser inserido no componente filho postCard
    const posts = props.posts

    return (
        <div className="posts">
            {/* Pode passar o objeto inteiro ou os atributos <PostCard post={post} /> */}
            {posts.map(post => (
                //Add o KEY no objeto para não dar erro de id no console.log
                //Add o id no objeto que va ser renderizado como abaixo
                <PostCard
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    cover={post.cover}
                    body={post.body}
                />
            ))}
        </div>
    );

}