<?php

namespace App\Controller\Public;

use App\Entity\SubCategory;
use App\Repository\CategoryRepository;
use App\Repository\SubCategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

#[Route('/api/public/sub-category', name: 'api_public_sub_category')]
class PublicSubCategoryController extends AbstractController
{
    private Serializer $serializeCircular;

    public function __construct(private SerializerInterface $serializer)
    {
        $encoder = new JsonEncoder();
        $defaultContext = [
            AbstractNormalizer::CIRCULAR_REFERENCE_HANDLER => function ($object, $format, $context) {
                return $object->getId();
            },
        ];
        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);

        $this->serializeCircular = new Serializer([$normalizer], [$encoder]);
    }

    #[Route('/all', name: 'sub_category_show_all', methods: 'GET')]
    public function showAll(SubCategoryRepository $subCategoryRepository): Response
    {
        $subCategories = $subCategoryRepository->findAll();

        $content = $this->serializeCircular->serialize($subCategories, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    #[Route('/{id}', name: 'sub_category_show_one', methods: 'GET')]
    public function show(SubCategoryRepository $subCategoryRepository, int $id): Response
    {
        $subCategory = $subCategoryRepository->find($id);

        if (!$subCategory) {
            throw $this->createNotFoundException(
                'No subCategory found for id '.$id
            );
        }

        $content = $this->serializeCircular->serialize($subCategory, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    #[Route('/{id}/tools', name: 'sub_category_show_tools', methods: 'GET')]
    public function getTools(SubCategoryRepository $subCategoryRepository, int $id): Response
    {
        $subCategory = $subCategoryRepository->find($id);

        if (!$subCategory) {
            throw $this->createNotFoundException(
                'No subCategory found for id '.$id
            );
        }


        $tools = $subCategory->getTools();

        $content = $this->serializeCircular->serialize($tools, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
