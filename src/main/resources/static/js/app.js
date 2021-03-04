var app = (function () {

    let authorName;
    let blueprints = [];

    let getBlueprints = function(author) {
        authorName = author;
        apimock.getBlueprintsByAuthor(author, function(err, res) {
            for (let i = 0; i < res.length; i++) {
                let blueprint = {
                    name: res[i].author,
                    size: res[i].points.length
                };
                blueprints.push(blueprint);
            }
//            console.log(blueprints);
        });
    };

    let openBlueprint = function(name) {
        console.log("Open Blueprint: " + name);
    };

    let changeAuthorName = function(newName) {
        authorName = newName;
    };

    return {
        getBlueprints: getBlueprints,
        openBlueprint: openBlueprint,
        changeAuthorName: changeAuthorName,
    };
})();