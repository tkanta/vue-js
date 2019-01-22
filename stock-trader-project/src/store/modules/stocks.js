import stocks from '../../data/stocks';

const state = {
    stocks : []
};

const mutations = {
        setStock_Mutation  (state, stocks)  { 
              state.stocks = stocks;  
        },

        randomStocks_Mutation : (state) => {
                state.stocks.forEach(stock => {
                    stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
                });
        }
};

const actions = {
    buyStock ({commit}, order)  {
        commit('buyStock_Mutation', order);
    },
    initStocks : ({commit}) => {
        commit('setStock_Mutation', stocks);
    },
    randomStocks : ({commit}) => {
        commit('randomStocks_Mutation');
    }
};

const getters = {
    stocks  (state)  {
        return state.stocks;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}