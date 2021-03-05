var app = (function () {

    let authorName;
    let blueprints;
    let totalPoints;

    let getBlueprints = function (author) {
        authorName = author;
        totalPoints = 0;
        blueprints = [];

        apimock.getBlueprintsByAuthor(author, function (err, res) {
            getBlueprintsInfo(res);
            createTable();
        });
    };

    let getBlueprintsInfo = function (res) {
        for (let i = 0; i < res.length; i++) {
            let blueprint = {
                name: res[i].name,
                nPoints: res[i].points.length
            };
            totalPoints += blueprint.nPoints;
            blueprints.push(blueprint);
        }
    };

    let createTable = function () {
        let html = "<tr>" +
            "<th>Blueprint name</th>" +
            "<th>Number of points</th>" +
            "<th>Open Blueprint</th>" +
            "</tr>";
        blueprints.forEach(bp => {
            html += "<tr>";
            html += "<td>" + bp.name + "</td>";
            html += "<td>" + bp.nPoints + "</td>";
            html += "<td></td>"; //Button
            html += "</tr>";
        });
        $("#table-title").html(authorName + "'s blueprints");
        $("#bp-table").html(html);
        $("#total-points").html("Total user points: " + totalPoints);
        // $("#current-bp-text").html("Current blueprint: " + )
    };

    let openBlueprint = function (name) {
        console.log("Open Blueprint: " + name);
    };

    let changeAuthorName = function (newName) {
        authorName = newName;
    };

    return {
        getBlueprints: getBlueprints,
        openBlueprint: openBlueprint,
        changeAuthorName: changeAuthorName,
    };
})();