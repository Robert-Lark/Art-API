//body
const body = document.querySelector("body");
body.classList.add("body");

//section
const ofTheDaySection = document.createElement("section");
body.appendChild(ofTheDaySection);
ofTheDaySection.classList.add("ofTheDaySection");



//API
axios
	.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=true
`)
  .then((res) => {
    console.log(res)

    })
    .catch(err => {
      console.log('oh no!, ', err);
    })





//component maker
function ofTheDayComponant() {
	//container Div
	const ofTheDayDiv = document.createElement("div");
	ofTheDayDiv.classList.add("artComp");
	ofTheDaySection.appendChild(ofTheDayDiv);

	// Title
	const ofTheDayh2 = document.createElement("h2");
	ofTheDayh2.classList.add("ofTheDayh2");
	ofTheDayh2.textContent = "NAME OF ARTIST: NAME OF ARTWORK";
	ofTheDayDiv.appendChild(ofTheDayh2);
	//image
	const ofTheDayImg = document.createElement("img");
	ofTheDayImg.classList.add("ofTheDayImg");
	ofTheDayImg.src = "Assets/cover.jpg";
	ofTheDayDiv.appendChild(ofTheDayImg);

	// Paragraph
	const ofTheDayP = document.createElement("p");
	ofTheDayP.classList.add("ofTheDayP");
	ofTheDayP.textContent = "INFORMATION ABOUT THE ARTIST AND THE ARTWORK";
	ofTheDayDiv.appendChild(ofTheDayP);

}

ofTheDaySection.appendChild(ofTheDayComponant());