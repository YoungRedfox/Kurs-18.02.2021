<template>
    <div>
        <div v-for="post in wpisy" :key="post.id">
            <ParagrafTypeH1 :title="post.title" :userId="post.userId" />
            <SpanTypeP :body="post.body" />
        </div>
    </div>
</template>
<script>
import ParagrafTypeH1 from "../control/paragrafTypeH1";
import SpanTypeP from "../control/spanTypeP";
export default {
    name: "Posts",
    props: {
        wpisy: Array,
    },
    components: {
        ParagrafTypeH1,
        SpanTypeP,
    }
}
</script>
<style>

</style>