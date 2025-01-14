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
                return $object->getId();
            },
        ];
        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);

        $this->serializeCircular = new Serializer([$normalizer], [$encoder]);
    }

    #[Route('/{id}/get-categories-id', name: 'get_categories_by_tool_id', methods: 'GET')]
    public function getCategoriesId(CategoryRepository $categoryRepository, int $id)
    {
        $catIds = array();
        $categories = $categoryRepository->findAll();

        for($iC = 0; $iC < count($categories); $iC++)
        {
            $subCategories = $categories[$iC]->getSubCategories();
            for($iSubCat = 0; $iSubCat < count($subCategories); $iSubCat++)
            {
                if($id === $subCategories[$iSubCat]->getId())
                {
                    $catIds[] = $categories[$iC]->getId();
                }
            }
        }

        return $this->json($catIds);
    }

    #[Route('/orphan-subcategories', name: 'get_orphan_subcategories', methods: 'GET')]
    public function getOrphanSubCategories(CategoryRepository $categoryRepository, SubCategoryRepository $subCategoryRepository)
    {
        $subCatsIdsArrayObject = $subCategoryRepository->findAllIds();
        $allSubCatsIds = array_column($subCatsIdsArrayObject, "id");

        $categories = $categoryRepository->findAll();

        $subCatIdsUsed = array();
        for($iC = 0; $iC < count($categories); $iC++)
        {
            $subCategories = $categories[$iC]->getSubCategories();
            for($iSubCat = 0; $iSubCat < count($subCategories); $iSubCat++)
            {
                if(!in_array($subCategories[$iSubCat]->getId(), $subCatIdsUsed))
                {
                    $subCatIdsUsed[] = $subCategories[$iSubCat]->getId();
                }
            }
        }

        $orphanIdsSubCatsObject = array_diff($allSubCatsIds, $subCatIdsUsed);
        $orphanIdsSubCats = array();

        foreach($orphanIdsSubCatsObject as $x => $val) {
            $orphanIdsSubCats[] = $val;
        }

        $orphanSubCats = array();
        for ($i = 0; $i < count($orphanIdsSubCats); $i++)
        {
            $orphanSubCats[] = $subCategoryRepository->find($orphanIdsSubCats[$i]);
        }


        return $this->json($orphanSubCats);
    }

    #[Route('/create', name: 'create_sub_category', methods: 'POST')]
    public function createSubCategory(CategoryRepository $categoryRepository, SubCategoryRepository $subCategoryRepository, Request $request): Response
    {
        $subCategory = new SubCategory();

        $data = json_decode($request->getContent(), true);

        $subCategory->setName($data["name"]);
        $subCategory->setUrl($data["url"]);

        if(isset($data["categoriesIds"]))
        {
            // New categories
            $categoriesIds = $data["categoriesIds"];
            for($i = 0; $i < count($categoriesIds); $i++)
            {
                $categoryToAdd = $categoryRepository->find($categoriesIds[$i]);
                if($categoryToAdd)
                {
                    $subCategory->addCategory($categoryToAdd);
                }
            }
        }

        $subCategoryRepository->save($subCategory, true);

        $categories = $categoryRepository->findAll();

        $content = $this->serializeCircular->serialize($categories, 'json');
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

        if(isset($data["categoriesIds"]))
        {
            // Remove old categories
            $categoriesIdsToRemove = $data["categoriesIdsToRemove"];

            for ($i = 0; $i<count($categoriesIdsToRemove); $i++) {
                $categoryToRemove = $categoryRepository->find($categoriesIdsToRemove[$i]);

                if ($categoryToRemove) {
                    $subCategory->removeCategory($categoryToRemove);
                }
            }

            // New categories
            $categoriesIds = $data["categoriesIds"];
            for($i = 0; $i < count($categoriesIds); $i++)
            {
                $categoryToAdd = $categoryRepository->find($categoriesIds[$i]);
                if($categoryToAdd)
                {
                    $subCategory->addCategory($categoryToAdd);
                }
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
    public function removeById(CategoryRepository $categoryRepository, SubCategoryRepository $subCategoryRepository, Request $request, int $id)
    {
        $subCategory = $subCategoryRepository->find($id);

        if (!$subCategory) {
            throw $this->createNotFoundException(
                'No subCategory found for id '.$id
            );
        }

        $subCategoryRepository->remove($subCategory, true);

        $categories = $categoryRepository->findAll();

        $content = $this->serializeCircular->serialize($categories, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
