export interface Blog {
    id:string;
    title: string;
    text: string;
}

export interface Post {
    title:string;
    text:string;
}

export interface Posts {
    post:Post;
    blog:Blog[];
}

