<?php

namespace App\Controller;

use App\Entity\SubCategory;
use App\Repository\CategoryRepository;
use App\Repository\SubCategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/api/public/sub-category', name: 'api_sub_category')]
class SubCategoryController extends AbstractController
{
    public function __construct(private SerializerInterface $serializer)
    {
    }

    #[Route('/all', name: 'sub_category_show_all', methods: 'GET')]
    public function showAll(SubCategoryRepository $subCategoryRepository): Response
    {
        return $this->json($subCategoryRepository->findAll());
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

        return $this->json($subCategory);
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

        $res = $this->serializer->normalize($subCategory, 'json');

        return $this->json($res);
    }

    #[Route('/edit/{id}', name: 'edit_sub_category', methods: 'PUT')]
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
        $categoriesId = $data["categoriesId"];
        for($i = 0; $i < count($categoriesId); $i++)
        {
            $subCategory->addCategory($categoryRepository->find($categoriesId[$i]));
        }

        $subCategoryRepository->getEntityManager()->flush();

        $res = $this->serializer->normalize($subCategory, 'json');

        return $this->json($res);
    }

    #[Route('/remove/{id}', name: 'sub_category_remove', methods: 'DELETE')]
    public function removeById(SubCategoryRepository $subCategoryRepository, Request $request, int $id)
    {
        $subCategory = $subCategoryRepository->find($id);

        if (!$subCategory) {
            throw $this->createNotFoundException(
                'No subCategory found for id '.$id
            );
        }

        $subCategoryRepository->remove($subCategory, true);
    }
}
