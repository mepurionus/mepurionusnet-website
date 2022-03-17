<script>
    import { steam } from '../data/data_buttons.json'; 
</script>

<a href="{steam.link}">
    <img src="{steam.icon}" alt="{steam.id}">
    {steam.visible}
</a>

<style>
    a {
        background-color: #0b3b37;
        transition-duration: 0.3s;
        padding: 10px;
        border: 2px #171a21 solid;
        border-radius: 5px;
        color: #e3d340;
        margin: 10px;
    }

    a:hover {
        background-color: #171a21;
        color: #FFFFFF;
        text-decoration: none;
    }

    img {
        width: 20px;
    }
</style>