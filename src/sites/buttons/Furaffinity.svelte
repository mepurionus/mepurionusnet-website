<script>
    import { furaffinity } from '../data/data_buttons.json'; 
</script>

<a href="{furaffinity.link}">
    <img src="{furaffinity.icon}" alt="{furaffinity.id}">
    {furaffinity.visible}
</a>

<style>
    a {
        background-color: #0b3b37;
        transition-duration: 0.3s;
        padding: 10px;
        border: 2px #faaf3a solid;
        border-radius: 5px;
        color: #e3d340;
        margin: 10px;
    }

    a:hover {
        background-color: #faaf3a;
        color: #000000;
        text-decoration: none;
    }

    img {
        width: 20px;
    }
</style>