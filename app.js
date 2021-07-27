function menuFilter(){ 
// /   assign variables for reference  // /
     const buttons = document.querySelectorAll(".btn")
     const storeItems = document.querySelectorAll(".store-item");

  

    buttons.forEach(function(button){
        button.addEventListener("click", function(e){
        
        e.preventDefault;
        const filter = e.target.dataset.filter;
        console.log(filter);


        storeItems.forEach(function(item){
            if(filter === "All"){
                item.style.display = "block";
            }else{
                if(item.classList.contains(filter)){
                    item.style.display = "block";
                }else{
                    item.style.display = "none"
                }
            }
        })
    })
})
}
menuFilter();
