<header>
	<div id="logo" class="pull-left">
		<a href="/"><img src="<?php echo BASE_PATH ?>images/logo.png" width="171" height="41" alt="Logo"></a>
	</div>
	<button id="menuToogleButton" class="navbar-toggle pull-right" type="button" data-toggle="collapse" data-target="#menuToogle" aria-controls="menuToogle" aria-expanded="false" aria-label="Menu navigation">
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <small class="txt hidden">MENU</small>
	</button>
	<div id="top"></div>
	<div  id="menuToogle" class="nav-menu menu-over text-center">
		<nav class="nav-menu">
			<div class="nav-animation">
				<?php
				if ($homepage == 1) {
				?>

					<a href="o-mnie"><span>T</span>ypek</a>
					<a href="portfolio">Portfolio</a>
					<a href="blog" class="disabled">Blog</a>
					<a href="#contact">Na<span>p</span>isz</a>

				<?php } else { ?>
					
					<a href="../o-mnie"<?php if ($menu2_active == 1) { ?> class="active"<?php } ?>><span>T</span>ypek</a>
					<a href="../portfolio"<?php if ($menu3_active == 1) { ?> class="active"<?php } ?>>Portfolio</a>
					<a href="../blog" class="disabled"<?php if ($menu4_active == 1) { ?> class="active"<?php } ?>>Blog</a>
					<a href="../#contact">Na<span>p</span>isz</a>

				<?php } ?>
			</div>
			
			<div class="social">
				<a href="https://www.facebook.com/grzegorz4k?ref=bookmarks" target="_blank">
					<svg enable-background="new 0 0 56.693 56.693" height="56.693px" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M28.347,5.157c-13.6,0-24.625,11.027-24.625,24.625c0,13.6,11.025,24.623,24.625,24.623c13.6,0,24.625-11.023,24.625-24.623  C52.972,16.184,41.946,5.157,28.347,5.157z M34.864,29.679h-4.264c0,6.814,0,15.207,0,15.207h-6.32c0,0,0-8.307,0-15.207h-3.006  V24.31h3.006v-3.479c0-2.49,1.182-6.377,6.379-6.377l4.68,0.018v5.215c0,0-2.846,0-3.398,0c-0.555,0-1.34,0.277-1.34,1.461v3.163  h4.818L34.864,29.679z"/></svg>
				</a>
				<a href="https://www.instagram.com/typodgrafiki/" target="_blank">
					<svg height="56.7px" style="enable-background:new 0 0 56.7 56.7;" version="1.1" viewBox="0 0 56.7 56.7" width="56.7px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle cx="28.1" cy="30" r="4.4"/><path d="M33.6,19.2h-11c-1.6,0-3,0.5-3.9,1.4c-0.9,0.9-1.4,2.3-1.4,3.9v11c0,1.6,0.5,3,1.5,4c1,0.9,2.3,1.4,3.9,1.4h10.9   c1.6,0,3-0.5,3.9-1.4c1-0.9,1.5-2.3,1.5-3.9v-11c0-1.6-0.5-2.9-1.4-3.9C36.6,19.7,35.3,19.2,33.6,19.2z M28.1,36.8   c-3.8,0-6.8-3.1-6.8-6.8c0-3.8,3.1-6.8,6.8-6.8S35,26.2,35,30C35,33.8,31.9,36.8,28.1,36.8z M35.2,24.5c-0.9,0-1.6-0.7-1.6-1.6   s0.7-1.6,1.6-1.6s1.6,0.7,1.6,1.6S36.1,24.5,35.2,24.5z"/><path d="M28.3,5.2c-13.6,0-24.6,11-24.6,24.6c0,13.6,11,24.6,24.6,24.6c13.6,0,24.6-11,24.6-24.6C53,16.2,41.9,5.2,28.3,5.2z    M41.4,35.6c0,2.3-0.8,4.3-2.2,5.7c-1.4,1.4-3.4,2.1-5.6,2.1H22.7c-2.2,0-4.2-0.7-5.6-2.1c-1.5-1.4-2.2-3.4-2.2-5.7v-11   c0-4.6,3.1-7.8,7.8-7.8h11c2.3,0,4.2,0.8,5.6,2.2c1.4,1.4,2.1,3.3,2.1,5.6V35.6z"/></g></svg>
				</a>
				<a href="https://www.behance.net/grzegorz-kocik" target="_blank">
					<svg enable-background="new 0 0 56.693 56.693" height="56.693px" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M38.031,27.257c-3.174,0-3.615,3.168-3.615,3.168h6.748C41.164,30.425,41.207,27.257,38.031,27.257z"/><path d="M22.721,30.425h-5.982v5.492h5.296c0.09,0,0.225,0.002,0.383,0c0.852-0.02,2.467-0.268,2.467-2.67   C24.885,30.396,22.721,30.425,22.721,30.425z"/><path d="M28.348,5.101c-13.6,0-24.625,11.023-24.625,24.623c0,13.6,11.025,24.625,24.625,24.625   c13.598,0,24.623-11.025,24.623-24.625C52.971,16.125,41.945,5.101,28.348,5.101z M33.531,20.231h8.477v2.53h-8.477V20.231z    M29.246,33.503c0,6.271-6.525,6.064-6.525,6.064h-5.982h-0.175h-4.535V19.021h4.535h0.175h5.982c3.248,0,5.812,1.794,5.812,5.47   c0,3.676-3.135,3.91-3.135,3.91C29.531,28.401,29.246,33.503,29.246,33.503z M45.104,33.167H34.457   c0,3.816,3.615,3.576,3.615,3.576c3.414,0,3.295-2.211,3.295-2.211h3.617c0,5.867-7.033,5.465-7.033,5.465   c-8.436,0-7.893-7.855-7.893-7.855s-0.008-7.893,7.893-7.893C46.268,24.249,45.104,33.167,45.104,33.167z"/><path d="M24.174,24.81c0-2.137-1.453-2.137-1.453-2.137h-0.77h-5.212v4.584h5.611C23.318,27.257,24.174,26.946,24.174,24.81z"/></g></svg>
				</a>
				<a href="https://www.linkedin.com/in/grzegorz-kocik/" target="_blank">
					<svg enable-background="new 0 0 56.693 56.693" height="56.693px" version="1.1" viewBox="0 0 56.693 56.693" width="56.693px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z"/><path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12   c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z    M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078   c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179   c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z"/></g></svg>
				</a>
			</div>
		</nav>
	</div>
</header>