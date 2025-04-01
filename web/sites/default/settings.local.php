<?php

/**
 * Assertions.
 */

assert_options(ASSERT_ACTIVE, true);

/**
 * Enable local development services.
 */
$settings['container_yamls'][] = $app_root . '/' . $site_path . '/development.services.yml';

/**
 * Show all error messages, with backtrace information.
 */
$config['system.logging']['error_level'] = 'verbose';

/**
 * Disable CSS and JS aggregation.
 */
$config['system.performance']['css']['preprocess'] = false;
$config['system.performance']['js']['preprocess']  = false;

/**
 * Disable the render cache (this includes the page cache).
 */
$settings['cache']['bins']['render'] = 'cache.backend.null';

/**
 * Disable Internal Page Cache.
 */
$settings['cache']['bins']['page'] = 'cache.backend.null';

/**
 * Disable Dynamic Page Cache.
 */
$settings['cache']['bins']['dynamic_page_cache'] = 'cache.backend.null';

/**
 * Allow test modules and themes to be installed.
 */
$settings['extension_discovery_scan_tests'] = true;

/**
 * Enable access to rebuild.php.
 */
$settings['rebuild_access'] = false;

/**
 * Skip file system permissions hardening.
 */
$settings['skip_permissions_hardening'] = true;

/**
 * Setting specific value for xdebug
 */
if (extension_loaded('xdebug')) {
    ini_set('xdebug.show_exception_trace', 0);
    ini_set('xdebug.collect_params', '?');
    ini_set('xdebug.max_nesting_level', 256);
}

/**
 * Development trusted host configuration.
 */
$settings['trusted_host_patterns'] = ['.*'];
$conf['theme_debug'] = true;
