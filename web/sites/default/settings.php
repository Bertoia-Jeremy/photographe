<?php

use Symfony\Component\Dotenv\Dotenv;

(new Dotenv())->usePutenv()->bootEnv(DRUPAL_ROOT . '/../.env');
// @codingStandardsIgnoreFile

/**
 * @file
 * Drupal site-specific configuration file.
 */

/**
 * Location of the site configuration files.
 */
$settings["config_sync_directory"] = getenv('DRUPAL_SYNC_DIR') ? getenv('DRUPAL_SYNC_DIR') : '';

/**
 * Salt for one-time login links, cancel links, form tokens, etc.
 */
$settings['hash_salt'] = getenv('DRUPAL_HASH');

/**
 * Access control for update.php script.
 */
$settings['update_free_access'] = FALSE;

/**
 * Load services definition file.
 */
$settings['container_yamls'][] = $app_root . '/' . $site_path . '/services.yml';

/**
 * The active installation profile.
 */
$settings['install_profile'] = 'minimal';

/**
 * Directories
 */
if (getenv('DRUPAL_PUBLIC_PATH')) {
  $settings['file_public_path'] = getenv('DRUPAL_PUBLIC_PATH');
}
if (getenv('DRUPAL_PRIVATE_PATH')) {
  $settings['file_private_path'] = getenv('DRUPAL_PRIVATE_PATH');
}

/**
 * The default list of directories that will be ignored by Drupal's file API.
 */
$settings['file_scan_ignore_directories'] = [
  'node_modules',
  'bower_components',
];

/**
 * The default number of entities to update in a batch process.
 */
$settings['entity_update_batch_size'] = getenv('DRUPAL_BATCH_SIZE') ? getenv('DRUPAL_BATCH_SIZE') : 50;

/**
 * Database settings
 */
$databases['default']['default'] = [
  'database'  => getenv('MYSQL_NAME'),
  'username'  => getenv('MYSQL_USER'),
  'password'  => getenv('MYSQL_PASSWORD'),
  'host'      => getenv('MYSQL_HOST'),  
  'prefix'    => getenv('MYSQL_PREFIX') ? getenv('MYSQL_PREFIX') : '',
  'port'      => getenv('MYSQL_PORT') ? getenv('MYSQL_PORT') : '',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver'    => 'mysql',
];

/**
 * Development settings
 */
if ('dev' === getenv('APP_ENV')) {
  if (file_exists($app_root . '/' . $site_path . '/settings.local.php')) {
    include $app_root . '/' . $site_path . '/settings.local.php';
  }

  if ('TRUE' == getenv('TWIG_DEBUG') || '1' == getenv('TWIG_DEBUG')) {
    $settings['container_yamls'][] = $app_root . '/' . $site_path . '/development.twig.services.yml';
  }

  $config['config_split.config_split.config_dev']['status'] = TRUE;
} else {
  $config['config_split.config_split.config_dev']['status'] = FALSE;
}

if (extension_loaded('xdebug')) {
 ini_set('xdebug.show_exception_trace', 0);
 ini_set('xdebug.collect_params', '?');
 ini_set('xdebug.max_nesting_level', 256);
}

if (file_exists(DRUPAL_ROOT . '/modules/contrib/devel/kint/kint/Kint.class.php')) {
 require_once DRUPAL_ROOT . '/modules/contrib/devel/kint/kint/Kint.class.php';
 Kint::$maxLevels = 4;
}

$settings['hash_salt'] = 'FRP0wDK4KzEXqSNC0R5JoxaPjGsxm6PaHouwT7GRjvoOUvSoUOCOwSMqKfK9RzsLoCLuBvz2Hg';
