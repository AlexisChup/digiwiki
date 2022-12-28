<?php

namespace App\Controller;

use App\Entity\Category;
use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/api/public/category', name: 'api_category')]
class CategoryController extends AbstractController
{
    public function __construct(private SerializerInterface $serializer)
    {
    }

    #[Route('/all', name: 'category_show_all', methods: 'GET')]
    public function showAll(CategoryRepository $categoryRepository): Response
    {
        return $this->json($categoryRepository->findAll());
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

        return $this->json($category);
    }

    #[Route('/sub-categories/{id}', name: 'category_show_sub-categories', methods: 'GET')]
    public function showSubCategories(CategoryRepository $categoryRepository, int $id): Response
    {
        $category = $categoryRepository->find($id);

        if (!$category) {
            throw $this->createNotFoundException(
                'No category found for id '.$id
            );
        }

        return($this->json($category->getSubCategories()));
    }

    #[Route('/create', name: 'create_category', methods: 'POST')]
    public function createCategory(CategoryRepository $categoryRepository, Request $request): Response
    {
        $data = json_decode($request->getContent(), true);

        $category = new Category();

        $category->setName($data["name"]);
        $category->setUrl($data["url"]);

        $categoryRepository->save($category, true);

        $res = $this->serializer->normalize($category, 'json');

        return $this->json($res);
    }

    #[Route('/edit/{id}', name: 'edit_category', methods: 'PUT')]
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

        $categoryRepository->getEntityManager()->flush();

        $res = $this->serializer->normalize($category, 'json');

        return $this->json($res);
    }

    #[Route('/remove/{id}', name: 'category_remove', methods: 'DELETE')]
    public function removeById(CategoryRepository $categoryRepository, Request $request, int $id)
    {
        $category = $categoryRepository->find($id);

        if (!$category) {
            throw $this->createNotFoundException(
                'No category found for id '.$id
            );
        }

        $categoryRepository->remove($category, true);
    }
}
