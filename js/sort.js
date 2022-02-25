function sortDrinks(){
const postsTitle = document.querySelectorAll("#post__sort");
const sorting = Array.from(postsTitle).sort((a,b) => b-a);
//    console.log(sorting);
    for(let i = 0; i < postsTitle.length;)
    {
    console.log(postsTitle[i].innerText)
    i++
    };
}
