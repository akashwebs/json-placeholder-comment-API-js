fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))

const displayComment = data => {

    const commentContainer = document.getElementById("comment-container");
    data.forEach(comment => {
            const div = document.createElement('div');
            div.className = 'col';
            div.innerHTML = `
            <div onclick='getId("${comment.id}")' class="card p-3">
                <p>${comment.name}</p>
                <p>${comment.email}</p>
                <p>${comment.body}</p>
            </div>
            `;
            commentContainer.appendChild(div);
        })
        // console.log(data)
}

const getId = async id => {
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`
    const res = await fetch(url)
    const data = await res.json();
    commentDetails(data)
}

const commentDetails = data => {

}