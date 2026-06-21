export const post = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
};

export const postById = ({ params }) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
};

export const jadwalSholat = () => {
    return fetch("https://api.myquran.com/v2/sholat/jadwal/1612/2026-06-21")
}