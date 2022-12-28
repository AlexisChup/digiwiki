<?php

namespace App\Controller;

use App\Entity\Tool;
use App\Repository\ToolRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

#[Route('/api/public/tool', name: 'api_controller')]
class ToolController extends AbstractController
{
    public function __construct(private SerializerInterface $serializer)
    {
        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getName();
            },
        ];
        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);

        $this->serializeCircular = new Serializer([$normalizer], [$encoder]);
    }

    #[Route('/all', name: 'tool_show_all', methods: 'GET')]
    public function showAll(ToolRepository $toolRepository): Response
    {
        $tools = $toolRepository->findAll();

        $content = $this->serializeCircular->serialize($tools, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    #[Route('/{id}', name: 'tool_show_one', methods: 'GET')]
    public function show(ToolRepository $toolRepository, int $id): Response
    {
        $tool = $toolRepository->find($id);

        if (!$tool) {
            throw $this->createNotFoundException(
                'No tool found for id '.$id
            );
        }

        $content = $this->serializeCircular->serialize($tool, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    #[Route('/{id}/sub-categories', name: 'tool_show_sub-categories', methods: 'GET')]
    public function showSubCategories(ToolRepository $toolRepository, int $id): Response
    {
        $tool = $toolRepository->find($id);

        if (!$tool) {
            throw $this->createNotFoundException(
                'No tool found for id '.$id
            );
        }

        $subCategories = $tool->getSubCategories();

        $content = $this->serializeCircular->serialize($subCategories, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    #[Route('/create', name: 'create_tool', methods: 'POST')]
    public function createTool(ToolRepository $toolRepository, Request $request): Response
    {
        $data = json_decode($request->getContent(), true);

        $tool = new Tool();

        $tool->setName($data["name"]);
        $tool->setUrl($data["url"]);
        $tool->setShortDescription($data["shortDescription"]);
        $tool->setDescription($data["description"]);
        if(isset($data["affiliateRef"]))
        {
            $tool->setAffiliateRef($data["affiliateRef"]);
        }

        if(isset($data["codePromo"]))
        {
            $tool->setAffiliateRef($data["codePromo"]);
        }

        $toolRepository->save($tool, true);

        $content = $this->serializeCircular->serialize($tool, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    #[Route('/{id}/edit', name: 'edit_tool', methods: 'PUT')]
    public function editTool(ToolRepository $toolRepository, Request $request, int $id): Response
    {
        $tool = $toolRepository->find($id);

        if (!$tool) {
            throw $this->createNotFoundException(
                'No tool found for id '.$id
            );
        }

        $data = json_decode($request->getContent(), true);

        $tool->setName($data["name"]);
        $tool->setUrl($data["url"]);
        $tool->setShortDescription($data["shortDescription"]);
        $tool->setDescription($data["description"]);
        if(isset($data["affiliateRef"]))
        {
            $tool->setAffiliateRef($data["affiliateRef"]);
        }

        if(isset($data["codePromo"]))
        {
            $tool->setAffiliateRef($data["codePromo"]);
        }

        $toolRepository->getEntityManager()->flush();

        $content = $this->serializeCircular->serialize($tool, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    #[Route('/{id}/remove', name: 'tool_remove', methods: 'DELETE')]
    public function removeById(ToolRepository $toolRepository, Request $request, int $id)
    {
        $tool = $toolRepository->find($id);

        if (!$tool) {
            throw $this->createNotFoundException(
                'No tool found for id '.$id
            );
        }

        $content = $this->serializeCircular->serialize($tool, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}