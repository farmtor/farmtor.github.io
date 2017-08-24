var application = angular.module("myApp");
application.provider("inventory", function () {
    return {
        $get: function () {
            return {
                itemList: [
                    { name: "Bread", type: "food" },
                    { name: "Stick", type: "other" },
                    { name: "Melon", type: "helmet", defence: 0.5 },
                    { name: "Stick", type: "weapon", damage: 1 },
                    { name: "Barrel", type: "armor" },
                    { name: "Grass skirt", type: "armor" },
                    { name: "Valenki", type: "shoes" },
                    { name: "Skin helmet", type: "helmet", defence: 0.2 },
                    { name: "Dandelion", type: "food" },
                    { name: "Large stick", type: "weapon", damage: 2 },
                    { name: "Tomato", type: "food" },
                    { name: "Cosplay suilt", type: "armor" }
                ]
            }
        }
    }
})