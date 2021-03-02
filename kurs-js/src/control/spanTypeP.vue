<template>
    <div>
        <p class="main-p">{{this.body}}</p>
    </div>
</template>
<script>
export default {
    name: "SpanP",
    props: {
        body: String,
    }
}
</script>
<style>
    .main-p {
        font-size: 1em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
</style>