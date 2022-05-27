<script>
    import Telegram from './buttons/Telegram.svelte';
    import Discord from './buttons/Discord.svelte';
    import Steam from './buttons/Steam.svelte';
    import Furaffinity from './buttons/Furaffinity.svelte';
    import Youtube from './buttons/Youtube.svelte';
    import Github from './buttons/Github.svelte';
    import Twitter from './buttons/Twitter.svelte';
</script>

<main>
    <h1>Select the destination of your desires.</h1>
    <div>
        <Telegram /> <br><br><br>
        <Discord /> <br><br><br>
        <Steam /> <br><br><br>
        <Furaffinity /> <br><br><br>
        <Youtube /> <br><br><br>
        <Github /> <br><br><br>
        <Twitter /> <br><br><br>
    </div>
</main>

<style>
    h1 {
        text-align: center;
    }
    
    @media screen and (min-width: 1050px) {
        div {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    @media screen and (max-width: 1050px) {
        div {
            margin-left: calc(55% - 150px);
            display: block;
            padding: 20px;
        }
    }
   
</style>