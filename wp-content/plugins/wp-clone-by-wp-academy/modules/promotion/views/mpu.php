<?php

  // Namespace
  namespace Inisev\Subs;

  // Disallow direct access
  if (!defined('ABSPATH')) exit;

?>

<section class="ib-banners-wrapper">
  <span id="ib-insPP-aurl"><?php echo admin_url(); ?></span>
  <div class="ib-banner ib-banner-1">
    <div class="ib-banner-content ib-d-flex">
      <div class="ib-popup-info ib-d-flex">

        <div class="ib-col ib-logo-container ib-d-flex">
          <img class="ib-logo" src="<?php $this->_asset('images/MPU-logo.gif'); ?>" alt="logo">
          <img class="ib-rating" src="<?php $this->_asset('images/rating.svg'); ?>" alt="rating">
        </div>

        <div class="ib-col ib-col-2 ib-d-flex">
          <p class="ib-heading">Try out a better plugin to show pop-ups on your site</p>
          <div class="ib-features ib-d-flex">
            <div class="ib-check ib-d-flex">
              <div class="ib-check-icon"></div><span>Easier to use</span>
            </div>
            <div class="ib-check ib-d-flex">
              <div class="ib-check-icon"></div><span>More design styles</span>
            </div>
            <div class="ib-check ib-d-flex">
              <div class="ib-check-icon"></div><span style="margin-right: 0;">Many more features</span>
            </div>
          </div>
        </div>

      </div>
      <div class="ib-actions ib-d-flex">
        <div class="ib-col ib-d-flex">
          <div class="ib-btn ib-btn-success ib-d-flex ib-align-items-center">
            <span class="ib-position-relative ib-text-center">Install now (free!)</span>
            <span class="ib-arrow-icon"></span>
          </div>
          <div class="ib-link">
            <p>(Source: <a href="https://bit.ly/2WO7vOn" target="_blank">WP directory</a>)</p>
          </div>
        </div>
        <div class="ib-col ib-col-3 ib-d-flex"><button class="ib-remind">Remind me later</button></div>
      </div>
      <div class="ib-close-btn">
        <div class="ib-close-icon"></div>
      </div>
    </div>
    <div class="ib-author">
      <span>Made with <span class="ib-heart">❤️</span> by <a href="<?php echo admin_url() . $this->menu; ?>"><strong><?php echo $this->byName; ?></strong></a></span>
    </div>
  </div>
</section>
