<template>
    <div>
        <div v-for="item in todo" :key="item.id">
            <ParagrafTypeH4 :name="item.title" />
            <SpanCompleted :completed="item.completed" />
        </div>
    </div>
</template>
<script>
import ParagrafTypeH4 from "../control/paragrafTypeH4";
import SpanCompleted from "../control/spanCompleted";
export default {
    name: "Comments",
    props: {
        todo: Array,
    },
    components: {
        ParagrafTypeH4,
        SpanCompleted,
    }
}
</script>
<style>

</style>