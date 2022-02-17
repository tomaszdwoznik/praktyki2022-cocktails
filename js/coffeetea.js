    async function coffeeTea(){
    const postStream = await fetch('https://cocktail-recipes-tully4school.herokuapp.com/drinks/category/Coffee%20and%20Tea');
    const posts = await postStream.json();
    let i = 0;
    let p = 1;
    const postSection = document.querySelector("#posts");
    const postTemplate = document.querySelector("#post-template");
    const postLength = postSection.children.length;
    const postHeader = document.querySelector(".main--text");
    const searchInput = document.querySelector("#search__bar");

    while(p < postLength){
        const postContent = document.querySelector(".post");
        postContent.remove();
        p++
    }

    // searchbar 
    let names = [];
    let q = 0
    searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    const postContent = document.getElementsByClassName("post");
    const postLength = postSection.children.length;
    for(q; q < (postLength-1); q++){
        const drinkName = postContent[q].childNodes[5].textContent.toLowerCase();
        const visible = drinkName.includes(value);
        postContent[q].childNodes[1].classList.toggle("hide", !visible);
        postContent[q].childNodes[3].classList.toggle("hide", !visible);
        postContent[q].childNodes[5].classList.toggle("hide", !visible);
        }
        if(q == (postLength-1)){
            q = 0;
        }
    })

    names = posts.map(element => {
        if(i < (posts.length)){

            const title = posts[i].drinkName;
            const body = posts[i].drinkGlass;
            const image = posts[i].drinkThumb;

            const newPost = document.importNode(postTemplate.content, true);
            const postTitle = newPost.querySelector(".post__title");
            const postBody = newPost.querySelector(".post__body");
            const postImage = newPost.querySelector(".post__img");
    
            postHeader.innerText = "Z KAWĄ I HERBATĄ";
            postTitle.innerText = title;
            postBody.innerText = body;
            postImage.src = image;
            postSection.appendChild(newPost);
            i++;
            return {name: element.drinkName}
            }
        })
    }     