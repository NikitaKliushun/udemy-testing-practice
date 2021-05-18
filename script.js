const googleDatabase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catpictures.com',
    'myfavouritescats.com',
    'myfavouritescats2.com'
];

const googleSearch = (searchQuery, dataBase) => {
    const matches = dataBase.filter(website => {
        return website.includes(searchQuery);
    })
    return matches.length > 3 ? matches.slice(0,3) : matches;
}

//console.log(googleSearch('cat', googleDatabase));

module.exports = googleSearch;