wp.blocks.registerBlockType('custom/sticky-posts', {
	// Other block settings...
	
	edit: function() {
		// Edit component logic...
	},
	
	save: function() {
		return null; // Since rendering is done in PHP
	},
	
	// Specify the PHP callback to render the block content
	render_callback: function() {
		ob_start();
		get_template_part('blocks/block-sticky.php');
		return ob_get_clean();
	}
});