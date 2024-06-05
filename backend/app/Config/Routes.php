<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->resource('user', ['filter' => 'cors']);
$routes->resource('staff', ['filter' => 'cors']);