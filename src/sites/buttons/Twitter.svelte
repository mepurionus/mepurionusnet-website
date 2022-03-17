<script>
    import { twitter } from '../data/data_buttons.json'; 
</script>

<a href="{twitter.link}">
    <img src="{twitter.icon}" alt="{twitter.id}">
    {twitter.visible}
</a>

<style>
    a {
        background-color: #0b3b37;
        transition-duration: 0.3s;
        padding: 10px;
        border: 2px #1da1f2 solid;
        border-radius: 5px;
        color: #e3d340;
        margin: 10px;
    }

    a:hover {
        background-color: #1da1f2;
        color: #FFFFFF;
        text-decoration: none;
    }

    img {
        width: 20px;
    }
</style>