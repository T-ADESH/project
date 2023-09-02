let songs = [
    {title: "song 1", duration: 180},
    {title: "song 2", duration: 240},
    {title: "song 3", duration: 200},
]



songs.sort((a , b) => {
    return a.duration - b.duration;
})

console.log(songs);


