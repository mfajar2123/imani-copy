import { defineStore } from 'pinia';
interface Nodes {
    nodes: any[]
}
interface Category {
    data: {
        categories: Nodes
    }
}

interface Posts {
    data: {
        posts: Nodes
    }
}

export const usePostsStore = defineStore('postsStore', () => {
    const config = useRuntimeConfig();
    const allPosts = ref([] as any)
    const { data: getCategories } = useFetch(config.public.wordpressUrl, {
        method: 'get',
        query: {
            query: `query MyQuery2 {
                    categories {
                        nodes {
                        id
                        name
                        }
                    }
                }
                `
        }
    });
    const categories = computed(() => {
        return (getCategories.value as Category).data.categories.nodes
            .filter((node: any) => node.name === 'Articles' || node.name === 'News');
    })

    const { data: percobaanAllPosts } = useFetch(config.public.wordpressUrl, {
        method: 'GET',
        query: {
            query: `
            query NewQuery {
                    posts {
                        nodes {
                            title
                            excerpt
                            uri
                            date
                            categories {
                                nodes {
                                id
                                name
                                }
                            }
                            featuredImage {
                                node {
                                sourceUrl
                                }
                            }
                        }
                    }
                }
            `
        }
    });
    const dataPosts = computed(() => {
        return (percobaanAllPosts.value as Posts).data.posts.nodes.map((node: any) => {
            const img = node.featuredImage ? node.featuredImage.node.sourceUrl : '/img/logo.png';
            return { ...node, img };
        })
    })

    return {
        allPosts, getCategories, categories, dataPosts
    }
})