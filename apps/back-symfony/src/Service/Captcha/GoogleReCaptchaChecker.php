<?php

namespace App\Service\Captcha;

use GuzzleHttp\Client;

class GoogleReCaptchaChecker implements CaptchaCheckerInterface
{
    protected $secret;

    public function __construct(string $secret)
    {
        $this->secret = $secret;
    }

    /**
     * {@inheritDoc}
     */
    public function check(string $captchaValue): array
    {
        return $this->getCaptchaResponse($captchaValue);
    }

    private function getCaptchaResponse($captchaValue): array
    {
        $response = $this->getClient()->request(
            'POST',
            'recaptcha/api/siteverify',
            [
                'form_params' => [
                    'secret'   => $this->secret,
                    'response' => $captchaValue,
                ],
            ]
        );

        return json_decode($response->getBody(), true);
    }

    private function getClient(): Client
    {
        return new Client([
            'base_uri' => 'https://www.google.com',
        ]);
    }
}