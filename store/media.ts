import { defineStore } from 'pinia';
interface Nodes {
    nodes: {
        title: '',
        author: {
            node: {
                name: ''
            }
        },
        date: '',
        content: '',
    }
}
interface Media {
    data: {
        postBy: Nodes
    }
}
export const useMediaStore = defineStore('mediaStore', () => {
    const config = useRuntimeConfig();
    const media = ref();
    const uri = ref('');
    const { data: getmedia } = useAsyncData(
        'getmedia',
        () => $fetch(config.public.wordpressUrl, {
            method: 'get',
            query: {
                query: `
                            query Article ($uri: String!) {
                                postBy (uri : $uri){
                                            id
                                            title
                                            uri
                                            date
                                            content
                                            featuredImage {
                                            node {
                                                    sourceUrl
                                                }
                                            }       
                                            author{
                                            node{
                                                    name
                                                }
                                                }
                                            }
                        }`,
                variables: {
                    uri: String(uri.value)
                }
            }
        }), {
        watch: [uri]
    }
    )

    const { data: getmedia_ } = useFetch(config.public.wordpressUrl, {
        method: 'get',
        query: {
            query: `
                        query Article ($uri: String!) {
                            postBy (uri : $uri){
                                        id
                                        title
                                        uri
                                        date
                                        content
                                        featuredImage {
                                        node {
                                                sourceUrl
                                            }
                                        }       
                                        author{
                                        node{
                                                name
                                            }
                                            }
                                        }
                    }`,
            variables: {
                uri: String(uri.value)
            }
        }
    })

    return {
        uri,
        media,
        getmedia,
        // getmedia_,
    }
})