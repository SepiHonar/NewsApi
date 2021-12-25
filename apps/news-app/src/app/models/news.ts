export class NEWS {
    source: Source = {
        id: '',
        name: ''
    };
    author: string = '';
    title: string = '';
    description: string = '';
    url: string = '';
    urlToImage: string = '';
    publishedAt: string = '';
    content: string = '';
}

export class Source {
    id: string = '';
    name: string = '';
}
