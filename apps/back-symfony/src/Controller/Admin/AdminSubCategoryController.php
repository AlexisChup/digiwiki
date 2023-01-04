<?php

namespace App\Controller\Admin;

use App\Entity\SubCategory;
use App\Repository\CategoryRepository;
use App\Repository\SubCategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

#[Route('/api/admin/sub-category', name: 'api_admin_sub_category')]
class AdminSubCategoryController extends AbstractController
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

    #[Route('/create', name: 'create_sub_category', methods: 'POST')]
    public function createSubCategory(CategoryRepository $categoryRepository, SubCategoryRepository $subCategoryRepository, Request $request): Response
    {
        $data = json_decode($request->getContent(), true);
        $subCategory = new SubCategory();

        $subCategory->setName($data["name"]);
        $subCategory->setUrl($data["url"]);
        $categoriesId = $data["categoriesId"];
        for($i = 0; $i < count($categoriesId); $i++)
        {
            $subCategory->addCategory($categoryRepository->find($categoriesId[$i]));
        }

        $subCategoryRepository->save($subCategory, true);

        $content = $this->serializeCircular->serialize($subCategory, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    #[Route('/{id}/edit', name: 'edit_sub_category', methods: 'PUT')]
    public function editCategory(CategoryRepository $categoryRepository, SubCategoryRepository $subCategoryRepository, Request $request, int $id): Response
    {
        $subCategory = $subCategoryRepository->find($id);

        if (!$subCategory) {
            throw $this->createNotFoundException(
                'No subCategory found for id '.$id
            );
        }

        $data = json_decode($request->getContent(), true);

        $subCategory->setName($data["name"]);
        $subCategory->setUrl($data["url"]);

        if(isset($data["categoriesId"]))
        {
            $categoriesId = $data["categoriesId"];
            for($i = 0; $i < count($categoriesId); $i++)
            {
                $subCategory->addCategory($categoryRepository->find($categoriesId[$i]));
            }
        }

        $subCategoryRepository->save($subCategory, true);

        $categories = $categoryRepository->findAll();

        $content = $this->serializeCircular->serialize($categories, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    #[Route('/{id}/remove', name: 'sub_category_remove', methods: 'DELETE')]
    public function removeById(SubCategoryRepository $subCategoryRepository, Request $request, int $id)
    {
        $subCategory = $subCategoryRepository->find($id);

        if (!$subCategory) {
            throw $this->createNotFoundException(
                'No subCategory found for id '.$id
            );
        }

        $subCategoryRepository->remove($subCategory, true);

        $content = $this->serializeCircular->serialize($subCategory, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
