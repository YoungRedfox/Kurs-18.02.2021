<template>
    <div>
        <p :class="handelClass" class="main-h1">{{this.title}}</p>
    </div>
</template>
<script>
export default {
    name: "ParagrafH1",
    props: {
        title: String,
        userId: Number,
    },
    computed: {
        handelClass(){
            if(this.userId % 3 === 0) {
                return "podzielne3"
            } else  if (this.userId % 2 === 0){
                return "parzy"
            } else {
                return "nieparzy"
            }
        }
    }
}
</script>
<style>
    .main-h1 {
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }
    .nieparzy {
        border: 2px solid red;

    }
    .parzy {
        border: 1px solid blue;
    }
</style>