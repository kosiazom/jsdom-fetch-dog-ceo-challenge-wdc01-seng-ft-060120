console.log('%c HI', 'color: firebrick')

const dogImgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl =  "https://dog.ceo/api/breeds/list/all"

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded.")
    
//the first fetch grabbed our images from the api, returned that image object and we want to 
//render all the images onto the page but be mindful about the meessage so you want to 
//into that mesaage by calling .message(= array) on the object and then loop dont forget to 
//create a function for renderall

    fetch(dogImgUrl)
    .then(response => response.json())
    .then(dogImage => dogImage.message.forEach(image => renderAllImage(image)))
 

    //this fetch is to get the names of the breed so we when we get the object it consist of keys and 
    //values but we onlu need the keys so we did Object.keys and passed in the Object(breed). message
    //which is what is wants. created a function breedNames and passed in the Object.keys(breed.message)
    fetch(breedUrl)
    .then(response => response.json())
    .then( breed => breedNames(Object.keys(breed.message)))
    
 //
    function renderAllImage(dogObject){
        let div = document.getElementById('dog-image-container')
        let newImage = document.createElement('img')
         newImage.src = dogObject
        div.append(newImage)
     }
     function breedNames(breedObject) {
         breedObject.forEach(breed => { 
     
         let li = document.createElement('li');
         li.id = "breed Id"
         let ul = document.getElementById('dog-breeds');
         li.innerText = breed
          ul.appendChild(li)
          handleColorChange(li)
         });
        }

         //so we want to change the color when we click on the li or word so we create
          // a function to handle the click rememer you dont have to give it a parameter
          //and you have to call the function back in the loop(breedNames) since its * /  
         
        function handleColorChange(li){
             li.addEventListener('click', (e) => {
                 li.style.color = 'violet'
             })
            }


        let filterBreed = document.querySelectorAll('dog-breeds')
        console.log(breedArray)
        //creating a function to filter the array based on first letters, 
        // we need to first gt that back to us in some array using queryselectorAll 
        //then call filter on that 



        //breed- so we want to go thru the array and return value 
        //create an li
        //we have to grab our UL 
        // then we want to append LI to the UL
           //addevent Listener so that when you click something it can 
           //change the video
          
});//DOMContent

