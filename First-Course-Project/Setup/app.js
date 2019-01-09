new Vue({
    el: '#app',

    data: {
        playerHealth:100,
        monsterHealth:100,
        gameIsRunning: false
    },

    methods: {
        startGame: function(){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },

        attack: function() {
            this.playerHealth -= this.calculateDamage(3, 10);;

            if(this.monsterHealth < 0){
                alert('you won!');
                this.gameIsRunning = false;
                return;
            }
           
            if(this.checkWin()){
                return;
            }
            this.monsterHealth -= this.calculateDamage(5, 12);

            if(this.playerHealth < 0){
                alert('you loose');
                this.gameIsRunning = false;
             }
             this.checkWin();
        },

        specialAttack: function() {

        },

        heal: function(){

        },

        giveUp: function() {

        },

        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random()*max), min);
        },

        checkWin: function(){
            if(this.monsterHealth <= 0){
                if(confirm('you won!!. Start a New Game?')){
                    this.startGame();
                }else{
                    this.gameIsRunning = false;
                }
                return true;
            }else if(this.playerHealth <= 0){
                if(confirm('You Lost !!. Start a New Game?')){
                    this.startGame();
                }else{
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});