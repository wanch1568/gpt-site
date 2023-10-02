<?php
/*
Plugin Name: My Custom Python Plugin
Description: This plugin lets you run Python scripts in WordPress.
Version: 1.0
*/

function run_python_script($script_name) {
    $output = exec('python ' . plugin_dir_path(__FILE__) . 'python-scripts/' . $script_name);
    return $output;
}

add_shortcode( 'run_python', 'run_python_shortcode' );
function run_python_shortcode($attributes) {
    $script_name = $attributes['script'];
    $output = run_python_script($script_name);
    return $output;
}
?>
