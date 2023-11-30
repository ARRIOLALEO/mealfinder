const searchInput = document.querySelector(".search")
const mealsDisplay = document.querySelector(".meals")


const callApi = debaunce(async (foodToSearch)=>{
    const req = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodToSearch}`);
    const data = await req.json()
    displayTheData(data.meals)
},500)

searchInput.addEventListener('keyup',(event)=>{
    const foodToSearch = event.target.value
    callApi(foodToSearch)
})

function debaunce(fn,delay){
    let timeoutId;
    return (foodToSearch) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(foodToSearch), delay);
    };
}

const displayTheData = (data  = []) =>{
    mealsDisplay.innerHTML =""
    if(!Array.isArray(data)) return
    data.forEach((meal)=>{
        const mealDisplayMeal = document.createElement('p')
        mealDisplayMeal.innerText = meal.strMeal
        mealsDisplay.appendChild(mealDisplayMeal)
    })
}