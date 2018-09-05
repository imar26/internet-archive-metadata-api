// Create Service as a Singleton Object
let _singleton = Symbol();

class MetadataService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken) {
            throw new Error("Cannot directly instantiate");
        }
    }
    
    static get instance() {
        if (!this[_singleton]) {
            this[_singleton] = new MetadataService(_singleton);
        }
        return this[_singleton];
    }

    getMetadataContent(identifier) {
        var uniqueIdentifier = identifier || 'InformationM';   
        
        let url = "https://archive.org/metadata/" + uniqueIdentifier;

        return fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                return data;
            });
    }
}

export default MetadataService;