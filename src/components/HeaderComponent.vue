<template>

    <div class="d-flex justify-content-evenly">
        <a class="m-3" href="#/">home</a>
        <a class="m-3" href="#applications">applications</a>
        <a class="m-3" href="#aboutMe">about me</a>
        <!-- <a class="m-3" href="">get in touch</a> -->
    </div>
</template>


<script>
export default {
    setup() {
        return {}
    }
}
</script>


<style lang="scss" scoped>
a {
    color: var(--darkest);
    text-shadow: 3px 3px var(--light-accent);
    font-size: 3vh;
}

a:hover {
    text-shadow: 3px 3px yellow;

}
</style>