<?php
define('SITE_URL', "http://" . $_SERVER['SERVER_NAME'] . "/");
define('DOCUMENT_ROOT', $_SERVER['DOCUMENT_ROOT'] . "/");
define('UPLOADS_ROOT', DOCUMENT_ROOT . "uploads/");

//db constants
define('DB_SERVER', 'localhost'); //please enter mysql server name
define('DB_USERNAME', 'root'); // please enter mysql user name
define('DB_PASSWORD', 'kWb24pEBdUj4uKOA'); // please enter mysql user password
define('DB_DATABASE', 'kanhawhp_tms'); // please enter your database name

define('SMTP_EMAIL_USER', 'ChrisGilesItWorks@gmail.com'); // smtp username
define('SMTP_EMAIL_PASSWORD', 'Knh@Admin@123'); // smtp password

define('DB_PREFIX', 'tms_');
define('LOGOUT_TIME', 1800);
define('DECIMAL', 2);
define('MIN_COMPONENTS_TO_DISPLAY', 4);
define('TAX_DECIMAL', 5);
define('DATE_FORMAT', "d-m-Y");
define('DEFAULT_CURRENCY', '$');
define('DEFAULT_AREA_UNIT', 'sqmt');
define('FORMATS', "pdf,docx,doc");
define('IMG_FORMATS', "jpg,jpeg,gif,png");
define('DEFAULT_COUNTRY_ID', 'IN');
date_default_timezone_set('Asia/Kolkata');
?>