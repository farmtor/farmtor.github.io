var app = angular.module("myApp", []);
app.service("InventoryFilter", function () {

    this.getHelmets = function (inventory) {

        var result = inventory.filter(function (item) {
            return item.type == "helmet";
        });
        result.push({ name: "none", defence: 0 });
        return result;
    };

    this.getArmors = function (inventory) {

        var result = inventory.filter(function (item) {
            return item.type == "armor";
        });
        result.push({ name: "none", defence: 0 });
        return result;
    };

    this.getShoes = function (inventory) {

        var result = inventory.filter(function (item) {
            return item.type == "shoes";
        });
        result.push({ name: "none", defence: 0 });
        return result;
    };

    this.getWeapons = function (inventory) {

        var result = inventory.filter(function (item) {
            return item.type == "weapon";
        });
        result.push({ name: "none", damage: 0 });
        return result;
    };
});