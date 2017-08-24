var app = angular.module("myApp");
app.provider("moblist", function () {
    return {
        $get: function () {
            return {
                /**
                 * Hp должно быть равным MaxHp
                 * в Rewards писать лут, падающий с моба
                 */

                list: [
                    { MobName: "Slime", Damage: 10, MaxHp: 1, Hp: 1 },
                    {
                        MobName: "Centaur", Damage: 7, MaxHp: 5, Hp: 5, Rewards: [
                            { name: "Spear", type: "weapon", damage: 5 }
                        ]
                    },
                    { MobName: "Goblin", Damage: 8, MaxHp: 3, Hp: 3 },
                    {
                        MobName: "Cyclops", Damage: 15, MaxHp: 10, Hp: 10, Rewards: [
                            { name: "Cyclops eye", type: "other" },
                            { name: "Actually new item", type: "food" }
                        ]
                    }
                ]
            }
        }
    }
});