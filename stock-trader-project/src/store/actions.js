import axios from 'axios';

export const loadData = ({commit}) => {
        axios.get('data.json').then(response => {
            if(response){
                console.log("------- get data ------");
                console.log(response);
                const stocks = response.data.stocks;
                const funds = response.data.funds;
                const stocksPortfolio = response.data.stocksPortfolio;

                const portFolio = {
                    stocksPortfolio,
                    funds
                }

                commit('setPortFolio', portFolio);
                commit('setStock_Mutation', stocks);
            }
        })
        .catch(err => console.log(err));
};