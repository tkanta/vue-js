<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-text="'some text here'"></p>
                <p v-html="'<strong>some  strong text here</strong>'"></p>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p  v-highlight.delayed="'green'"> some text here</p>
                <p  v-local-highlight:background.delayed.blink="{mainColor: 'green', secondColor:'yellow'}">some local text here</p>
                <p v-html="'<strong>some  strong text here</strong>'"></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight' : {
                bind(el, binding, vnode){
                    let delay = 0, blink = false;
                    if(binding.modifiers['delayed']){
                        delay = 3000;
                    }

                    if(binding.modifiers['blink']){
                        //blink colors
                        let mainColor = binding.value.mainColor;
                        let secondColor = binding.value.secondColor;
                        let currentColor = mainColor;

                        setTimeout(() => {
                            setInterval( () => {
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;

                                if(binding.arg == 'background'){
                                    el.style.backgroundColor = currentColor; // background color
                                }else{
                                    el.style.color = currentColor; //text color
                                }
                            } ,1000);
                            
                        }, delay);

                        

                    }else{
                         setTimeout(() => {
                            if(binding.arg == 'background'){
                                el.style.backgroundColor = binding.value.mainColor; // background color
                            }else{
                                el.style.color = binding.value.mainColor; //text color
                            }
                        }, delay);   
                    }

                    
                    
                }
            }
        }
    }
</script>

<style>

</style>
