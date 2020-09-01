<script>
    export let centered = false
</script>

<style>
    div > :global(* + *) {
        margin-top: 1rem;
    }
    .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;
        transform: translate(-50%, -50%);
        white-space: nowrap;
    }
</style>

<div class:centered>
    <slot></slot>
</div>