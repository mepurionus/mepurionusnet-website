<script>
    import { github } from '../data/data_buttons.json'; 
</script>

<a href="{github.link}">
    <img src="{github.icon}" alt="{github.id}">
    {github.visible}
</a>

<style>
    a {
        background-color: #0b3b37;
        transition-duration: 0.3s;
        padding: 10px;
        border: 2px #211F1F solid;
        border-radius: 5px;
        color: #e3d340;
        margin: 10px;
    }

    a:hover {
        background-color: #211F1F;
        color: #FFFFFF;
        text-decoration: none;
    }

    img {
        width: 20px;
    }
</style>