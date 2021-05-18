const googleSearch = require('./script');

const dbMock = [
    'dog.com',
    'dogpictures.com',
    'disney.com',
    'cheesepuff.com'
]

describe('googleSearch', () => {

    it ('is searching google', () => {
        expect(googleSearch('testtest', dbMock))
            .toEqual([])
        expect(googleSearch('dog', dbMock))
            .toEqual([
                'dog.com',
                'dogpictures.com'
            ])
    })

    it ('work with undef and null input', () => {
        expect(googleSearch(undefined, dbMock))
            .toEqual([])
        expect(googleSearch(null, dbMock))
            .toEqual([])
    })

    it ('output no more than 3 items', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    })
})
