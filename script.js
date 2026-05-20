const nuevoPost = {
    title: 'Mi nuevo post',
    body: 'Este es el contenido del post enviado con fetch',
    userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(nuevoPost),
    headers: {
        'Content-Type': 'application/json charset=UTF-8',
    },
})

.then(response => response.json())
.then(json =>{
    console.log('Respuesta del  servidor:', json);
    alert('Post enviado con exito');
});