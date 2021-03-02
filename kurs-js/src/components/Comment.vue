<template>
    <div>
        <div v-for="dComment in komentarze" :key="dComment.id">
            <ParagrafTypeH4 :name="dComment.name" />
            <ParagrafTypeDescription :body="dComment.body" />
            <SpanEmail :email="dComment.email" />
        </div>
    </div>
</template>
<script>
import ParagrafTypeH4 from "../control/paragrafTypeH4";
import ParagrafTypeDescription from "../control/paragrafTypeDescription";
import SpanEmail from "../control/spanEmail";
export default {
    name: "Comments",
    props: {
        komentarze: Array,
    },
    components: {
        ParagrafTypeH4,
        SpanEmail,
        ParagrafTypeDescription,
    }
}
</script>
<style>

</style>