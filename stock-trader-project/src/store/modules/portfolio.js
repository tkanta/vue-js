

const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    buyStock_Mutation : (state, {stockId, quantity, stockPrice}) => {
        const record = state.stocks.find(element => element.id == stockId);
        if(record){
            record.quantity += quantity;
        }else{
            state.stocks.push({
                id: stockId,
                quantity: quantity
            })
        }
        state.funds -= (stockPrice * quantity);
    },
    sellStocks_Mutation : (state, {stockId, quantity, stockPrice}) => {
        const record = state.stocks.find(element => element.id == stockId);
        if(record.quantity > quantity){
            record.quantity -= quantity;
        }else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += (stockPrice * quantity);
    },
    setPortFolio : (state, portFolio) => {
        state.funds = portFolio.funds;
        state.stocks = portFolio.stocksPortfolio ? portFolio.stocksPortfolio : [];
    }
};

const actions = {
        sellStock_Action :  ({commit}, order) => {
            console.log("--------")
            console.log(order);
            commit('sellStocks_Mutation', order);
        }
};

const getters = {
        stocksPortfolio(state, getters) {
            return state.stocks.map( stock => {
                const record = getters.stocks.find(element => element.id == stock.id);
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name,
                    price: record.price
                }
            });
        },
        funds(state) {
            return state.funds;
        }    
};

export default {
    state,
    mutations,
    actions,
    getters
}

