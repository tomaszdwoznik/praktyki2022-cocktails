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
        let apiLinkEnd = categoryMap[0].apiLinkEnd;
        let headerName = categoryMap[0].categoryName;
        cocktails();

        
        for(let x = 0; x < link.length; x++){
            link[x].addEventListener('click', e => {
                apiLinkEnd = categoryMap[x].apiLinkEnd;
                headerName = categoryMap[x].categoryName;
                cocktails();
            })
        }
    
    async function cocktails(){
        const postStream = await fetch("https://cocktail-recipes-tully4school.herokuapp.com/drinks"+apiLinkEnd+"");
        const posts = await postStream.json();
        let i = 0;
        let p = 1;
        let names = [];
        let q = 0   

        const postSection = document.querySelector("#posts");
        const postTemplate = document.querySelector("#post-template");
        const postLength = postSection.children.length;
        const postHeader = document.querySelector(".main--text");
        const searchInput = document.querySelectorAll("#search__bar");

        while(p < postLength){
            const postContent = document.querySelector(".post");
            postContent.remove();
            p++
        }

        for(let y = 0; y < searchInput.length; y++){
            searchInput[y].addEventListener("input", (e) => {
            const timeout = setTimeout(search, 1000);
            function search(){
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
                
                postHeader.innerText = headerName;
                postTitle.innerText = title;
                postBody.innerText = body;
                postImage.src = image;
                postSection.appendChild(newPost);
                i++;
                return {name: element.drinkName}
                } 
            })  
        }       
}