<?php

namespace App\Controller\Admin;

use App\Entity\Tool;
use App\Repository\SubCategoryRepository;
use App\Repository\ToolRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

#[Route('/api/admin/tool', name: 'api_admin_tool')]
class AdminToolController extends AbstractController
{
    public function __construct()
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

    #[Route('/create', name: 'create_tool', methods: 'POST')]
    public function createTool(SubCategoryRepository $subCategoryRepository, ToolRepository $toolRepository, Request $request): Response
    {
        $data = json_decode($request->getContent(), true);

        $tool = new Tool();

        $tool->setName($data["name"]);
        $tool->setUrl($data["url"]);
        $tool->setShortDescription($data["shortDescription"]);
        $tool->setDescription($data["description"]);
        $tool->setImgUrl($data["imgUrl"]);
        if(isset($data["affiliateRef"]))
        {
            $tool->setAffiliateRef($data["affiliateRef"]);
        }

        if(isset($data["codePromo"])) {
            $tool->setCodePromo($data["codePromo"]);
        }
        if(isset($data["subCategoriesIds"]))
        {
            $subCategoriesIds = $data["subCategoriesIds"];
            for($i = 0; $i < count($subCategoriesIds); $i++)
            {
                $tool->addSubCategory($subCategoryRepository->find($subCategoriesIds[$i]));
            }
        }

        $toolRepository->save($tool, true);

        $content = $this->serializeCircular->serialize($tool, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    #[Route('/{id}/edit', name: 'edit_tool', methods: 'PUT')]
    public function editTool(SubCategoryRepository $subCategoryRepository, ToolRepository $toolRepository, Request $request, int $id): Response
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
        $tool->setImgUrl($data["imgUrl"]);
        if(isset($data["affiliateRef"]))
        {
            $tool->setAffiliateRef($data["affiliateRef"]);
        }

        if(isset($data["codePromo"]))
        {
            $tool->setCodePromo($data["codePromo"]);
        }

        if(isset($data["subCategoriesIds"]))
        {
            $subCategoriesIds = $data["subCategoriesIds"];
            for($i = 0; $i < count($subCategoriesIds); $i++)
            {
                $tool->addSubCategory($subCategoryRepository->find($subCategoriesIds[$i]));
            }
        }

        $toolRepository->save($tool, true);

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
