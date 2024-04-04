<template>
    <div class="icons text-center p-1">
        <a href="https://www.linkedin.com/in/meganmariehancock/" target="_blank" title="Visit my LinkedIn"><i
                class="fa fa-linkedin my-2 mx-4"></i></a>
        <a href="https://github.com/MeganHancock" target="_blank" title="Visit my GitHub">
            <i class="fa fa-github my-2 mx-4"></i></a>
        <a href="/MeganHancockResume.pdf" target="_blank" title="View my resume">
            <i class="fa fa-file my-2 mx-4"></i></a>
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
    font-size: 5vh;

}

a:hover {
    text-shadow: 3px 3px yellow;

}
</style>