<script>
    import Boxes from './Boxes.svelte';
    import data from './data/data_contact.json';
</script>

<div>
    <Boxes>
        <h2>Email</h2>
        <h3>{data.email.visible}</h3>
        <a href="{data.email.link}">Send an e-mail</a>
    </Boxes>
    <Boxes>
        <h2>Telegram</h2>
        <h3>{data.telegram.visible}</h3>
        <a href="{data.telegram.link}">Send message on Telegram.</a>
    </Boxes>
    <Boxes>
        <h2>Discord</h2>
        <h3>{data.discord.visible}</h3>
    </Boxes>
</div>

<style>
    div {
        margin: 25px;
    }

    a {
        color: #e3d340;
        transition-duration: 0.4s;
    }

    a:hover {
        text-decoration: underline;
        color: #f8ea6b;
    }
</style>