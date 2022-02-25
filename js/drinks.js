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
            let y = 0;
            cocktails(apiLinkEnd, headerName);
            
            for(let x = 0; x < link.length; x++){
                link[x].addEventListener('click', e => {
                    apiLinkEnd = categoryMap[x].apiLinkEnd;
                    headerName = categoryMap[x].categoryName;
                    y = 0;
                    cocktails(apiLinkEnd, headerName);
                })
                }
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
                        let visibleArray = [];
                        if(value == ""){
                            postHeader.innerHTML = headerName;
                            console.log(headerName);
                        }
                        if(postContent.length){
                            const postLength = postSection.children.length;
                        for(let q = 0; q < (postLength-1); q++){
                            const drinkName = postContent[q].childNodes[7].textContent.toLowerCase();
                            const visible = drinkName.includes(value);
                            postContent[q].childNodes[1].classList.toggle("hide", !visible);
                            postContent[q].childNodes[3].classList.toggle("hide", !visible);
                            postContent[q].childNodes[5].classList.toggle("hide", !visible);
                            postContent[q].childNodes[7].classList.toggle("hide", !visible);
                            visibleArray += visible;
                            console.log(visibleArray.includes(true))                            
                            } 
                        if(!visibleArray.includes(true)){
                            postHeader.innerHTML = "NIE ZNALEZIONO PASUJĄCYCH KOKTAJLI";
                        }
                        else if (visibleArray.includes(true)){
                            postHeader.innerHTML = "WYNIKI WYSZUKIWANIA";
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
                    postImage.alt = title;
                }
                if(postTemplate){
                    postSection.appendChild(newPost);
                    i++;
                    return {name: element.drinkName}
                }
                } 
                
            })  
        }    

        const postContent = document.getElementsByClassName("post");
        const btnFavorite = document.querySelectorAll("label")[3];
        if(postContent){
            for(let y = 0; y < (postContent.length); y++){
                const iconFavorite = postContent[y].childNodes[3];
                const iconClassList = iconFavorite.classList;
                iconFavorite.addEventListener('click', e =>{
                    iconClassList.add("icon-heart");
                    if(iconClassList.contains("icon-heart-fill")){
                        iconFavorite.classList.remove("icon-heart-fill");
                        iconFavorite.classList.add("icon-heart");
                    }
                    else{
                        iconFavorite.classList.remove("icon-heart");
                        iconFavorite.classList.add("icon-heart-fill");
                    }
                    const drinkName = iconFavorite.parentNode.childNodes[7].textContent.toLowerCase();
                        if(localStorage.getItem("drinkName"+(y+1)) == drinkName){
                            localStorage.removeItem("drinkName"+(y+1));
                        }
                        else{
                            localStorage.setItem("drinkName"+(y+1), drinkName);
                        }
                    });
                btnFavorite.addEventListener('click', e => {
                    const drinkLocal = localStorage.getItem("drinkName"+(y+1));
                    const drinkName = postContent[y].childNodes[7].textContent.toLowerCase();
                    const visible = drinkName.includes(drinkLocal);
                    if (visible == false){
                        postContent[y].childNodes[1].classList.toggle("hide");
                        postContent[y].childNodes[3].classList.toggle("hide");
                        postContent[y].childNodes[5].classList.toggle("hide");
                        postContent[y].childNodes[7].classList.toggle("hide");
                    }
                });
            
            }
        }
}           