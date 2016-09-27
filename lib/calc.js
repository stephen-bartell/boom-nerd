let abilities = require('./costs');

module.exports = function (options=[]) {
    let totalCost = 0;
    return  options.reduce((acc, option) => {
        let ability = abilities[option.type];
        if (!ability)
            return acc;

        let abilityCost = ability.initialCost;
        for (let i=0, j=option.amount || 0; i<j; i++) {
            acc += abilityCost;
            abilityCost += ability.increment;
        }
        
        return acc;
    }, totalCost);
};
