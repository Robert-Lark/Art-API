//body
const body = document.querySelector("body");
//section
const ofTheDaySection = document.createElement("section");
body.appendChild(ofTheDaySection);
ofTheDaySection.classList.add("ofTheDaySection");
//API
axios
	.get(
		`https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&q=artist`
	)
	.then((res) => {
		console.log(res.data);
		///getting an array of object Keys.
		const goodImages = res.data.objectIDs;
		console.log(goodImages);
		//generating a random #
		const number = Math.random() * goodImages.length;
		let indexNumber = Math.floor(number);
		const objectID = goodImages[indexNumber];
		console.log(objectID);

		axios
			.get(
				`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`
			)
			.then((res) => {
				console.log(res.data);
				body.append(
					ofTheDayComponant(
						res.data.artistDisplayName,
						res.data.title,
						res.data.primaryImage,
						res.data.department,
						res.data.artistBeginDate,
						res.data.artistEndDate,
						res.data.artistNationality,
						res.data.objectURL,
						res.data.medium,
						res.data.objectBeginDate,
						res.data.objectEndDate,
						res.data.country
					)
				);
			})
			.catch((err) => {
				console.log("oh no!, ", err);
			});
	})
	.catch((err) => {
		console.log("oh no!, ", err);
	});

const headline = document.createElement("h1");
headline.classList.add = "headline";
headline.innerText = "Dads Daily Artwork";
ofTheDaySection.insertAdjacentElement("beforebegin", headline);

function ofTheDayComponant(
	artistDisplayName,
	title,
	primaryImage,
	department,
	artistBeginDate,
	artistEndDate,
	artistNationality,
	objectURL,
	medium,
	objectBeginDate,
	objectEndDate,
	country
) {
	//container Div
	const ofTheDayDiv = document.createElement("div");
	ofTheDayDiv.classList.add("artComp");
	ofTheDaySection.appendChild(ofTheDayDiv);

	// Title
	const ofTheDayh2 = document.createElement("h2");
	ofTheDayh2.classList.add("ofTheDayh2");
	ofTheDayh2.textContent = `${artistDisplayName} : ${title}`;
	ofTheDayDiv.appendChild(ofTheDayh2);
	//image
	const ofTheDayImg = document.createElement("img");
	ofTheDayImg.classList.add("ofTheDayImg");
	ofTheDayImg.src = primaryImage;
	ofTheDayDiv.appendChild(ofTheDayImg);
	ofTheDayPMaker("Department: ", department);
	ofTheDayPMaker("Born: ", artistBeginDate, "Died: ", artistEndDate);
	ofTheDayPMaker("Artist Nationality: ", artistNationality);
	ofTheDayPMaker("Medium: ", medium);
	ofTheDayPMaker("Began work: ", objectBeginDate);
	ofTheDayPMaker("Country: ", country);
	ofTheDayPMaker("Completed work: ", objectEndDate);
	ofTheDayPMaker("Learn More: ", (url = objectURL));
	function ofTheDayPMaker(input1, input2) {
		const ofTheDayP = document.createElement("p");
		ofTheDayP.classList.add("ofTheDayP");
		ofTheDayP.textContent = `${input1} : ${input2}`;
		ofTheDayDiv.appendChild(ofTheDayP);
	}
}
