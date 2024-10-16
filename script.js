var detailsForm=document.querySelector('#destination_details_form')
detailsForm.addEventListener('submit', handleFormSubmit)
    function handleFormSubmit(event){
        event.preventDefault()

        var destName=event.target.elements["name"].value
        var destLocation=event.target.elements["location"].value
        var destPhoto=event.target.elements["photo"].value
        var destDesc= event.target.elements["description"].value
        for(var i=0; i<detailsForm.length;i++){
            detailsForm.elements[i].value=""
                }
                var destCard=createDestinationCard(destName, destLocation, destPhoto, destDesc)
                var wishListContainer= document.getElementById('destinations_container')
                if(wishListContainer.children.length ===0){
                    document.getElementById("title").innerHTML=" my wish list"
                    
                }
                document.querySelector("#destinations_container").appendChild(destCard)
}                 function createDestinationCard(name,location,photoURL,description){
                   
               var card = document.createElement("div")
               card.className='card'
               
                   
                    var img=document.createElement('img')
                    img.setAttribute('alt', name)
                    
                    var constantPhotoURL = 'images/signpost.jpg'
                    if(photoURL.length===0){
                    img.setAttribute('src',constantPhotoURL)

                    }
                                    else{
                        img.setAttribute('src', photoURL)  
                    }
                    var cardBody= document.createElement("div")
                    cardBody.className="card-body"
                    card.appendChild(img)

                    var cardTitle= document.createElement('h3')
                    cardTitle.innerText=name
                    cardBody.appendChild(cardTitle)

                    var cardsubTitle= document.createElement('h4')
                    cardTitle.innerText=location
                    cardBody.appendChild(cardsubTitle)

                    if(description.length!==0){
                        var cardText=document.createElement("p")
                        cardText.className='card-text'
                        cardText.innerText=description
                        cardBody.appendChild(cardText)
                    }
                    var cardDeleteBtn= document.createElement("button")
                    cardDeleteBtn.innerText="REMOVE"
                    
                    cardDeleteBtn.addEventListener("click",removeDestination)
                            cardBody.appendChild(cardDeleteBtn)
                    
                            cardBody.appendChild(card)
                            return cardBody

                            function removeDestination(event){
                                    var card= event.target.parentElement;
                                    card.remove()
                            }
                 }