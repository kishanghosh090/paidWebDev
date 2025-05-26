const API_KEY = 'AIzaSyAnmoGfgvx1z6rAYx5Jw6dFkAGNHeTWBiQ';
const getData = async () => {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${"code with harray"}&type=video&key=${API_KEY}`)
    console.log(response);

    const data = await response.json()
    console.log(data)
    data.items.forEach(item => {
        const videoId = item.id.videoId;
        const title = item.snippet.title;

        results.innerHTML += `
                            <div>
                                <h3>${title}</h3>
                                <iframe width="300" height="200" 
                                    src="https://www.youtube.com/embed/${videoId}" 
                                    frameborder="0" allowfullscreen>
                                </iframe>
                            </div>
                        `;
    });
}
