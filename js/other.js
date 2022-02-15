    async function other(){
    const postStream = await fetch('https://cocktail-recipes-tully4school.herokuapp.com/drinks/category/Other');
    const posts = await postStream.json();
    let i = 0;
    let p = 1;
    const postSection = document.querySelector("#posts");
    const postTemplate = document.querySelector("#post-template");
    const postLength = postSection.children.length;
    while(p < postLength){
        const postContent = document.querySelector(".post");
        postContent.remove();
        p++
    }
    posts.forEach(element => {
        if(i < (posts.length)){
            
            const title = posts[i].drinkName;
            const body = posts[i].drinkGlass;
            const image = posts[i].drinkThumb;
    
            const newPost = document.importNode(postTemplate.content, true);
            const postTitle = newPost.querySelector(".post__title");
            const postBody = newPost.querySelector(".post__body");
            const postImage = newPost.querySelector(".post__img");
    
            postTitle.innerText = title;
            postBody.innerText = body;
            postImage.src = image;
            postSection.appendChild(newPost);
            i++;
            }
        })
        .catch(err => console.error(err));
    }     
