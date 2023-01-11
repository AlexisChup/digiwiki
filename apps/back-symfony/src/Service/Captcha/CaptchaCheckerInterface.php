<?php

namespace App\Service\Captcha;

use GuzzleHttp\Client;

interface CaptchaCheckerInterface
{
    /**
     * Checks captcha response
     *
     * @param string $captchaResponse
     * @return array
     */
    public function check(string $captchaResponse): array;
}