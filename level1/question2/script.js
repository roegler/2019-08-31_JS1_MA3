//Console.log out elements in JSON file

var data = `
{
	"video": [{
		"id": 12312412312,
		"name": "Ecuaciones Diferenciales",
		"url": "/video/math/edo/12312412312",
		"author": {
			"data": [{
				"name_author": "Aleijandro Morales",
				"url": "/author/alejandro-morales",
				"type": "master"
            }]
		}
	}]
}`

data = JSON.parse(data);

console.log(data);

for (var i = 0; i < data.video.length; i++) {
    var video = data.video[i];
    console.log(video.id);
    console.log(video.name);
    console.log(video.url);

    var authors = video.author.data;
    for (var ii = 0; ii < authors.length; ii++) {
        console.log(authors[ii].name_author);
    }
}