<?php

namespace App\Controller\Public;

use App\Entity\Category;
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

#[Route('/api/public/category', name: 'api_public_category')]
class PublicCategoryController extends AbstractController
{
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

    #[Route('/all', name: 'category_show_all', methods: 'GET')]
    public function showAll(CategoryRepository $categoryRepository, SubCategoryRepository $subCategoryRepository): Response
    {
        $categories = $categoryRepository->findAll();
        return $this->json($categories);

        $content = $this->serializeCircular->serialize($categories, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    #[Route('/{categoryUrl}/sub-categories', name: 'category_show_sub_catgories', methods: 'GET')]
    public function showSubCategoriesByCategoryUrl(CategoryRepository $categoryRepository, string $categoryUrl): Response
    {
        $category = $categoryRepository->findOneBy(array("url" => $categoryUrl));

        if (!$category) {
            throw $this->createNotFoundException(
                'No category found for url '.$categoryUrl
            );
        }

        $content = $this->serializeCircular->serialize($category, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    #[Route('/{id}', name: 'category_show_one', methods: 'GET')]
    public function show(CategoryRepository $categoryRepository, int $id): Response
    {
        $category = $categoryRepository->find($id);

        if (!$category) {
            throw $this->createNotFoundException(
                'No category found for id '.$id
            );
        }

        $content = $this->serializeCircular->serialize($category, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    #[Route('/{id}/sub-categories', name: 'category_show_sub-categories', methods: 'GET')]
    public function showSubCategories(CategoryRepository $categoryRepository, int $id): Response
    {
        $category = $categoryRepository->find($id);

        if (!$category) {
            throw $this->createNotFoundException(
                'No category found for id '.$id
            );
        }

        $subCategories = $category->getSubCategories();

        $content = $this->serializeCircular->serialize($subCategories, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
