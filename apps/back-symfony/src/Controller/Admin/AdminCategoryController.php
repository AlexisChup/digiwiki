<?php

namespace App\Controller\Admin;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

#[Route('/api/admin/category', name: 'api_admin_category')]
class AdminCategoryController extends AbstractController
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

    #[Route('/create', name: 'create_category', methods: 'POST')]
    public function createCategory(CategoryRepository $categoryRepository, Request $request): Response
    {
        $data = json_decode($request->getContent(), true);

        $category = new Category();

        $category->setName($data["name"]);
        $category->setUrl($data["url"]);

        $categoryRepository->save($category, true);

        $content = $this->serializeCircular->serialize($category, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    #[Route('/{id}/edit', name: 'edit_category', methods: 'PUT')]
    public function editCategory(CategoryRepository $categoryRepository, Request $request, int $id): Response
    {
        $category = $categoryRepository->find($id);

        if (!$category) {
            throw $this->createNotFoundException(
                'No category found for id '.$id
            );
        }

        $data = json_decode($request->getContent(), true);

        $category->setName($data["name"]);
        $category->setUrl($data["url"]);

        $categoryRepository->save($category, true);

        $categories = $categoryRepository->findAll();

        $content = $this->serializeCircular->serialize($categories, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    #[Route('/{id}/remove', name: 'category_remove', methods: 'DELETE')]
    public function removeById(CategoryRepository $categoryRepository, Request $request, int $id)
    {
        $category = $categoryRepository->find($id);

        if (!$category) {
            throw $this->createNotFoundException(
                'No category found for id '.$id
            );
        }

        $categoryRepository->remove($category, true);

        $content = $this->serializeCircular->serialize($category, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
