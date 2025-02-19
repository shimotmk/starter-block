<?php
/**
 * Plugin Name:     Starter Block
 * Description:     Example block written with ESNext standard and JSX support – build step required.
 * Version:         2.1.1
 * Author:          The WordPress Contributors
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     starter-block
 *
 * @package         create-block
 */


 require_once( dirname( __FILE__ ) . '/vendor/autoload.php' );
	add_action( 'init', 'activate_autoupdate' );

	function activate_autoupdate() {
			$plugin_slug = plugin_basename( __FILE__ ); // e.g. `hello/hello.php`.
			$gh_user = 'shimotmk';                      // The user name of GitHub.
			$gh_repo = 'starter-block';       // The repository name of your plugin.

			// Activate automatic update.
			new Miya\WP\GH_Auto_Updater( $plugin_slug, $gh_user, $gh_repo );
	}

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function create_block_starter_block_block_init() {
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "create-block/starter-block" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'create-block-starter-block-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'create-block-starter-block-block-editor', 'starter-block' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'create-block-starter-block-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'create-block-starter-block-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'create-block/starter-block', array(
		'editor_script' => 'create-block-starter-block-block-editor',
		'editor_style'  => 'create-block-starter-block-block-editor',
		'style'         => 'create-block-starter-block-block',
	) );
}
add_action( 'init', 'create_block_starter_block_block_init' );

/*
ブロックカテゴリー
*/
function manablog_blocks_plugin_categories( $categories, $post ) {
    if ( $post->post_type !== 'post' ) {
        return $categories;
    }
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'mblog-blocks',
                'title' => __( 'Manablog Blocks', 'my-plugin' ),
                'icon'  => 'wordpress',
            ),
        )
    );
}
add_filter( 'block_categories', 'manablog_blocks_plugin_categories', 10, 2 );