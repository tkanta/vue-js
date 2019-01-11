<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'app-quote' ">Quote</button>
                <button @click="selectedComponent = 'app-author' ">Author</button>
                
                <keep-alive>
                    <component :is="selectedComponent"> 
                    <h2 slot='title'>{{quoteTitle}}</h2>
                    <h2 slot='author'>Author Biography</h2>
                    <p>A wonderful day!!</p>
                    <p>Good sun shine</p>
                    </component>
                </keep-alive>
                
                <!--<app-quote>
                    <h2 slot='title'>{{quoteTitle}}</h2>
                    <p>A wonderful day!!</p>
                    <p>Good sun shine</p>
                 </app-quote>
                 -->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './components/Quote.vue'
    import Author from './components/Author.vue'

    export default {
        data : function(){
            return {
                quoteTitle : 'The Quote!!',
                selectedComponent : 'app-quote'
            };
        },
        components: {
            'app-quote' : Quote,
            'app-author': Author

        }
    }
</script>

<style>
    h2 {
        color: green;
    }
</style>
