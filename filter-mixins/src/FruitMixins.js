export const FruitMixins = {
    data() {
        return {
            fruits: ['Banana', 'Mango', 'Melon', 'Apple'],
            fruitText: ''
        };
    },
    computed:{
        filteredFruits(){
            return this.fruits.filter((element) => {
                return element.match(this.fruitText);
            });
        }
    }
}