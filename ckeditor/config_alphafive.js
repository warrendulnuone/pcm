/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
CKEditor V4
Customization Copyright AlphaToGo, LLC 2014 - NOT licensed for use outside of the AlphaToGo Framework.
*/

CKEDITOR.editorConfig = function( config )
{

//config.skin = 'moonocolor'; 	//Uncomment to have a colorful icon set.
config.toolbarCanCollapse = true; 	//Adds a small toggle on right hand side to show/hide the toolbar
config.enterMode = CKEDITOR.ENTER_BR; 	//stops editor from adding <p> tags to content
config.shiftEnterMode = CKEDITOR.ENTER_BR; 	//stops editor from adding <p> tags to content

//imagebrowser -- Adds a "Browse Server" button on the Image Properties page so you can browse and select images.
//strinsert    -- A flexible dropdown for the editor.
config.extraPlugins = 'strinsert,imagebrowser';
//required for image browser
config.imageBrowser_listUrl = "/framework_v4/images/images_list.json?"+Math.random();

config.extraAllowedContent = 'div(*)'; // this allows you to enter a Class inside a div like this: <div class="xyz">something</div>
//Default toolbar is set in the file named a5_ckeditor.js on this line 'var toolbar = toolbar||'Alpha';//sets the default value'

config.toolbar_Alpha =
[
	{ name: ''           , items : ['Scayt','Source','Preview'] },
	{ name: 'text'       , items : ['Cut','Copy','PasteText','PasteFromWord','-','Bold','Italic','Underline','-','RemoveFormat'] },
	{ name: 'justify'	 , items : ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'] },
	{ name: 'styles'     , items : ['Styles','Format','Font','FontSize','-','TextColor','BGColor',] },
	{ name: ''           , items : ['Image' , '-' , 'Link' , 'Unlink' , 'Iframe' ] }
];


config.toolbar_Full =
[
	{ name: 'document'		, items: [ 'Source', '-', 'Preview', 'Print', '-', 'Templates' ] },
	{ name: 'clipboard'		, items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ] },
	{ name: 'editing'		, items: [ 'Find', 'Replace', '-', 'SelectAll', '-', 'Scayt' ] },
	'/',
	{ name: 'basicstyles'	, items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
	{ name: 'paragraph'		, items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl', 'Language' ] },
	{ name: 'links'			, items: [ 'Link', 'Unlink', 'Anchor' ] },
	{ name: 'insert'		, items: [ 'Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe' ] },
	'/',
	{ name: 'styles'		, items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
	{ name: 'colors'		, items: [ 'TextColor', 'BGColor' ] },
	{ name: 'tools'			, items: [ 'Maximize', 'ShowBlocks' ] },
	{ name: 'others'		, items: [ '-' ] }
];


config.toolbar_Basic =
[
	['Bold','Italic','-','NumberedList','BulletedList','-','Link','Unlink']
];

};
