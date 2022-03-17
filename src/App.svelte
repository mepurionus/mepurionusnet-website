<script>
	import { Route } from 'tinro';
	import Main from './sites/Main.svelte';
	import About from './sites/About.svelte';
	import Sites from './sites/Sites.svelte';
	import Contact from './sites/Contact.svelte';
	import Aboutwebsite from './sites/Aboutwebsite.svelte';
</script>

<nav>
	<a href="/">Home</a>
	<a href="/sites">Sites</a>
	<a href="/contact">Contact</a>
	<a href="/about" id="about">About</a>
</nav>

<style>
	nav {
		background: rgb(23, 66, 63);
		padding: 10px;
		height: 21.25px;
	}
	nav a {
		background: rgb(14, 77, 71);
		padding: 10px;
		color: rgb(227,211,64);
		transition-duration: 0.4s;
	}

	nav a:hover {
		text-decoration: none;
		background-color: rgb(18, 51, 49);
	}

	:global(body) {
		background-color: rgb(11, 59, 55);
		color: rgb(227,211,64)
	}

	#about {
		position: absolute;
		top: 0;
		right: 10px;
	}

</style>

<Route path="/">
	<Main />
</Route>

<Route path="/about">
	<About />
</Route>

<Route path="/sites">
	<Sites />
</Route>

<Route path="/contact">
	<Contact />
</Route>

<Route path="/aweb">
	<Aboutwebsite />
</Route>