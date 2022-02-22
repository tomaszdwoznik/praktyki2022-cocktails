    const apiUrl = "https://cocktail-recipes-tully4school.herokuapp.com/drinks";
    const categoryMap = [
        {
            categoryName: "Na co masz dzisiaj ochotę?",
            apiLinkEnd: "/has-alcohol/false"

        },
        {
            categoryName: "KOKTAJLE MLECZNE",
            apiLinkEnd: "/category/Milk"
        },
        {
            categoryName: "DRINKI",
            apiLinkEnd: "/category/Ordinary%20Drinks"
        },
        {
            categoryName: "SZOTY",
            apiLinkEnd: "/category/Shots"
        },
        {
            categoryName: "Z KAWĄ I HERBATĄ",
            apiLinkEnd: "/category/Coffee%20and%20Tea"
        },
        {
            categoryName: "POZOSTAŁE KOKTAJLE",
            apiLinkEnd: "/category/Other"
        }
    ]

    function drinks(){
        const link = document.querySelectorAll(".link");
        if(link.length){
            let apiLinkEnd = categoryMap[0].apiLinkEnd;
            let headerName = categoryMap[0].categoryName;
            cocktails(apiLinkEnd, headerName);
            
            for(let x = 0; x < link.length; x++){
                link[x].addEventListener('click', e => {
                    apiLinkEnd = categoryMap[x].apiLinkEnd;
                    headerName = categoryMap[x].categoryName;
                    cocktails(apiLinkEnd, headerName);
                })
                }
        }
    
    async function cocktails(apiLinkEnd, headerName){
        const postStream = await fetch("https://cocktail-recipes-tully4school.herokuapp.com/drinks"+apiLinkEnd+"");
        const posts = await postStream.json();
        let i = 0;
        let p = 1;
        let names = [];

        const postSection = document.querySelector("#posts");
        const postTemplate = document.querySelector("#post-template");
        const postLength = postSection.children.length;
        const postHeader = document.querySelector(".main--text");
        const searchInput = document.querySelectorAll("#search__bar");
        
        if(postLength){
            while(p < postLength){        
                const postContent = document.querySelector(".post");
                if(postContent){
                    postContent.remove();
                    p++
                }
            }
        }

        if(searchInput.length){
            for(let y = 0; y < searchInput.length; y++){
                searchInput[y].addEventListener("input", (e) => {
                    const timeout = setTimeout(search, 500);
                    function search(){
                        const value = e.target.value.toLowerCase();
                        const postContent = document.getElementsByClassName("post");
                        if(postContent.length){
                            const postLength = postSection.children.length;
                        for(let q = 0; q < (postLength-1); q++){
                            const drinkName = postContent[q].childNodes[5].textContent.toLowerCase();
                            const visible = drinkName.includes(value);
                            postContent[q].childNodes[1].classList.toggle("hide", !visible);
                            postContent[q].childNodes[3].classList.toggle("hide", !visible);
                            postContent[q].childNodes[5].classList.toggle("hide", !visible);
                            } 
                        }
                        clearTimeout(timeout);
                    }
            })
        }
        
        names = posts.map(element => {
            if(i < (posts.length)){
                const title = posts[i].drinkName;
                const body = posts[i].drinkGlass;
                const image = posts[i].drinkThumb;
        
                const newPost = document.importNode(postTemplate.content, true);
                const postTitle = newPost.querySelector(".post__title");
                const postBody = newPost.querySelector(".post__body");
                const postImage = newPost.querySelector(".post__img");
                if(postHeader){
                    postHeader.innerHTML = headerName;
                }
                if(postTitle){
                    postTitle.innerText = title;
                }
                if(postBody){
                    postBody.innerText = body;
                }
                if(postImage){
                    postImage.src = image;
                }
                if(postTemplate){
                    postSection.appendChild(newPost);
                    i++;
                    return {name: element.drinkName}
                }
                } 
            })  
        }       
}
}