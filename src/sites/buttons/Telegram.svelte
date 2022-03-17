<script>
    import { telegram } from '../data/data_buttons.json'; 
</script>

<a href="{telegram.link}">
    <img src="{telegram.icon}" alt="{telegram.id}">
    {telegram.visible}
</a>

<style>
    a {
        background-color: #0b3b37;
        transition-duration: 0.3s;
        padding: 10px;
        border: 2px #229ED9 solid;
        border-radius: 5px;
        color: #e3d340;
        margin: 10px;
    }

    a:hover {
        background-color: #229ED9;
        color: #FFFFFF;
        text-decoration: none;
    }

    img {
        width: 20px;
    }
</style>