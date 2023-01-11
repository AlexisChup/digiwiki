<?php

namespace App\Controller;

use App\Service\Captcha\CaptchaCheckerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class CaptchaController extends AbstractController
{
    /**
     * @Route("/api/captcha/check")
     */
    public function check(Request $request, CaptchaCheckerInterface $captchaChecker)
    {
        $data = json_decode($request->getContent(), true);

        $isCaptchaValid = $captchaChecker->check($data["token"]);

        return $this->json($isCaptchaValid);
    }
}
