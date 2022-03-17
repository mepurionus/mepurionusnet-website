<script>
    import { youtube } from '../data/data_buttons.json'; 
</script>

<a href="{youtube.link}">
    <img src="{youtube.icon}" alt="{youtube.id}">
    {youtube.visible}
</a>

<style>
    a {
        background-color: #0b3b37;
        transition-duration: 0.3s;
        padding: 10px;
        border: 2px #FF0000 solid;
        border-radius: 5px;
        color: #e3d340;
        margin: 10px;
    }

    a:hover {
        background-color: #FF0000;
        color: #FFFFFF;
        text-decoration: none;
    }

    img {
        width: 20px;
    }
</style>