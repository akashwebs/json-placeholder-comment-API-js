fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data.slice(0, 10)))

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
    const detailsContainer = document.getElementById('details-commnet');
    detailsContainer.textContent = ''
    const div = document.createElement('div');
    div.innerHTML = `
    <h2>name: ${data.name}</h2>
    <h4>Email:${data.email}</h4>
    <p>${data.body}</p>
    `
    detailsContainer.appendChild(div)
}