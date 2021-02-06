/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'create-block/starter-block', {
	/**
	 * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
	 */
	apiVersion: 2,

	/**
	 * This is the display title for your block, which can be translated with `i18n` functions.
	 * The block inserter will show this name.
	 */
	title: __( 'Starter Block', 'starter-block' ),

	/**
	 * This is a short description for your block, can be translated with `i18n` functions.
	 * It will be shown in the Block Tab in the Settings Sidebar.
	 */
	description: __(
		'Example block written with ESNext standard and JSX support – build step required.',
		'starter-block'
	),

	/**
	 * Blocks are grouped into categories to help users browse and discover them.
	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
	 */
	category: 'widgets',

	/**
	 * An icon property should be specified to make it easier to identify a block.
	 * These can be any of WordPress’ Dashicons, or a custom svg element.
	 */
	icon: 'smiley',

	/**
	 * Optional block extended support features.
	 */
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	attributes: {
		message: {
			type: 'string',
			source: 'text',
			selector: 'div'
		}
	},

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );


/*
manablog h2タイトル
*/
(function () {
	const { createElement: el } =  wp.element;
	const { registerBlockType } =  wp.blocks;
	const { RichText } =  wp.blockEditor; // https://developer.wordpress.org/block-editor/developers/richtext/

	registerBlockType('my-block/mblog-h2-title', {
		title: 'manablog h2タイトル',
		icon: 'heading',
		category: 'mblog-blocks',
		keywords: ['mh2'],
		supports: {
			className: false,
		},
		attributes: {
			content: {
				type: 'string',
				source: 'html',
				selector: '.mblog-h2-title', // セレクタはsave側に合わせることに注意。
			},
		},
		edit: (props) => {
			const { className, attributes, setAttributes } = props;
			const { content } = attributes;
			return el(
				RichText, // テキストが自由に編集できるコンポーネント。
				{
					tagName: 'h2', // RichText を何タグで実装するか
					className: `mblog-h2-title ${className}`,
					value: content,
					onChange: function (newContent) {
						setAttributes({ content: newContent });
					},
				}
			);
		},
		save: (props) => {
			const { attributes } = props;
			const { content } = attributes;

			return el(
				RichText.Content, // 受け取り側は RichText.Content
				{ 
					tagName: 'h2',
					className: 'mblog-h2-title',
					value: content,
				}
			);
		},
	});
})();

/*
manablog h3タイトル
*/
(function () {
	const { createElement: el } =  wp.element;
	const { registerBlockType } =  wp.blocks;
	const { RichText } =  wp.blockEditor;

	registerBlockType('my-block/mblog-h3-title', {
		title: 'manablog h3タイトル',
		icon: 'heading',
		category: 'mblog-blocks',
		keywords: ['mh3'],
		supports: {
			className: false,
		},
		attributes: {
			content: {
				type: 'string',
				source: 'html',
				selector: '.mblog-h3-title', // セレクタはsave側に合わせることに注意。
			},
		},
		edit: (props) => {
			const { className, attributes, setAttributes } = props;
			const { content } = attributes;
			return el(
				RichText, // テキストが自由に編集できるコンポーネント。
				{
					tagName: 'h3', // RichText を何タグで実装するか
					className: `mblog-h3-title ${className}`,
					value: content,
					onChange: function (newContent) {
						setAttributes({ content: newContent });
					},
				}
			);
		},
		save: (props) => {
			const { attributes } = props;
			const { content } = attributes;

			return el(
				RichText.Content, // 受け取り側は RichText.Content
				{ 
					tagName: 'h3',
					className: 'mblog-h3-title',
					value: content,
				}
			);
		},
	});
})();

/*
manablog h4タイトル
*/
(function () {
	const { createElement: el } =  wp.element;
	const { registerBlockType } =  wp.blocks;
	const { RichText } =  wp.blockEditor;

	registerBlockType('my-block/mblog-h4-title', {
		title: 'manablog h4タイトル',
		icon: 'heading',
		category: 'mblog-blocks',
		keywords: ['mh4'],
		supports: {
			className: false,
		},
		attributes: {
			content: {
				type: 'string',
				source: 'html',
				selector: '.mblog-h4-title', // セレクタはsave側に合わせることに注意。
			},
		},
		edit: (props) => {
			const { className, attributes, setAttributes } = props;
			const { content } = attributes;
			return el(
				RichText, // テキストが自由に編集できるコンポーネント。
				{
					tagName: 'h4', // RichText を何タグで実装するか
					className: `mblog-h4-title ${className}`,
					value: content,
					onChange: function (newContent) {
						setAttributes({ content: newContent });
					},
				}
			);
		},
		save: (props) => {
			const { attributes } = props;
			const { content } = attributes;

			return el(
				RichText.Content, // 受け取り側は RichText.Content
				{ 
					tagName: 'h4',
					className: 'mblog-h4-title',
					value: content,
				}
			);
		},
	});
})();

/*
manablog preダグ
*/
(function () {
	const { createElement: el } =  wp.element;
	const { registerBlockType } =  wp.blocks;
	const { RichText } =  wp.blockEditor; 

	registerBlockType('my-block/mblog-pre-text', {
		title: 'manablog preダグ',
		icon: 'tablet',
		category: 'mblog-blocks',
		keywords: ['mpre'],
		supports: {
			className: false,
		},
		attributes: {
			content: {
				type: 'string',
				source: 'html',
				selector: '.mblog-pre-text', // セレクタはsave側に合わせることに注意。
			},
		},
		edit: (props) => {
			const { className, attributes, setAttributes } = props;
			const { content } = attributes;
			return el(
				RichText, // テキストが自由に編集できるコンポーネント。
				{
					tagName: 'div', // RichText を何タグで実装するか
					className: `mblog-pre-text ${className}`,
					value: content,
					onChange: function (newContent) {
						setAttributes({ content: newContent });
					},
				}
			);
		},
		save: (props) => {
			const { attributes } = props;
			const { content } = attributes;

			return el(
				RichText.Content, // 受け取り側は RichText.Content
				{ 
					tagName: 'div',
					className: 'mblog-pre-text',
					value: content,
				}
			);
		},
	});
})();

/*
リストスタイル
*/
(function () {
		const { createElement: el } =  wp.element;
		const { registerBlockType } =  wp.blocks;
		const { RichText } =  wp.blockEditor; 

    registerBlockType('my-block/sample-block03', {
        title: 'manablog リスト',
        icon: 'editor-ul',
        category: 'mblog-blocks',
				keywords: ['mli'],
        attributes: {
            content: {
                type: 'array',
                source: 'children',
                selector: '.mblog_list',
            },
        },

        edit: function (props) {
            var content = props.attributes.content;
            return el(
                RichText,
                {
                    tagName: 'ul',
                    multiline: 'li',
                    className: 'mblog_list',
                    value: content,
                    onChange: function (newContent) {
                        props.setAttributes({ content: newContent });
                    }
                }
            );
        },

        save: function (props) {
            return el(RichText.Content, {
                tagName: 'ul',
                className: 'mblog_list',
                value: props.attributes.content,
            });
        },
    });
})();

/*
manablog pダグ point チェックマーク付き
*/
// (function () {
// 	const { createElement: el } =  wp.element;
// 	const { registerBlockType } =  wp.blocks;
// 	const { RichText } =  wp.blockEditor; 

// 	registerBlockType('my-block/mblog-point-text', {
// 		title: 'manablog point ポイント',
// 		icon: 'wordpress-alt',
// 		category: 'mblog-blocks',
// 		supports: {
// 			className: false,
// 		},
// 		attributes: {
// 			content: {
// 				type: 'string',
// 				source: 'html',
// 				selector: '.mblog-point-text', // セレクタはsave側に合わせることに注意。
// 			},
// 		},
// 		edit: (props) => {
// 			const { className, attributes, setAttributes } = props;
// 			const { content } = attributes;
// 			return el(
// 				RichText, // テキストが自由に編集できるコンポーネント。
// 				{
// 					tagName: 'p', // RichText を何タグで実装するか
// 					className: `mblog-point-text ${className}`,
// 					value: content,
// 					onChange: function (newContent) {
// 						setAttributes({ content: newContent });
// 					},
// 				}
// 			);
// 		},
// 		save: (props) => {
// 			const { attributes } = props;
// 			const { content } = attributes;

// 			return el(
// 				RichText.Content, // 受け取り側は RichText.Content
// 				{ 
// 					tagName: 'p',
// 					className: 'mblog-point-text',
// 					value: content,
// 				}
// 			);
// 		},
// 	});
// })();
