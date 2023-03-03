<?php

namespace App\Controller\Admin;

use App\Entity\Tool;
use App\Repository\CategoryRepository;
use App\Repository\SubCategoryRepository;
use App\Repository\TagRepository;
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
                return $object->getId();
            },
        ];
        $normalizer = new ObjectNormalizer(null, null, null, null, null, null, $defaultContext);

        $this->serializeCircular = new Serializer([$normalizer], [$encoder]);
    }

    #[Route('/{id}/get-subcategories-id', name: 'get_subcategories_by_tool_id', methods: 'GET')]
    public function getSubCategoriesId(SubCategoryRepository $subCategoryRepository, int $id)
    {
        $subCatIds = array();
        $subCategories = $subCategoryRepository->findAll();

        for($iSC = 0; $iSC < count($subCategories); $iSC++)
        {
            $tools = $subCategories[$iSC]->getTools();
            for($iTool = 0; $iTool < count($tools); $iTool++)
            {
                if($id === $tools[$iTool]->getId())
                {
                    $subCatIds[] = $subCategories[$iSC]->getId();
                }
            }
        }

        return $this->json($subCatIds);
    }

    #[Route('/orphan-tools', name: 'get_orphan_tools', methods: 'GET')]
    public function getOrphanTools(SubCategoryRepository $subCategoryRepository, ToolRepository $toolRepository)
    {
        $toolsIdsArrayObject = $toolRepository->findAllIds();
        $allToolsIds = array_column($toolsIdsArrayObject, "id");

        $subCategories = $subCategoryRepository->findAll();

        $toolIdsUsed = array();
        for($iSC = 0; $iSC < count($subCategories); $iSC++)
        {
            $tools = $subCategories[$iSC]->getTools();
            for($iTool = 0; $iTool < count($tools); $iTool++)
            {
                if(!in_array($tools[$iTool]->getId(), $toolIdsUsed))
                {
                    $toolIdsUsed[] = $tools[$iTool]->getId();
                }
            }
        }

        $orphanIdsToolsObject = array_diff($allToolsIds, $toolIdsUsed);
        $orphanIdsTools = array();

        foreach($orphanIdsToolsObject as $x => $val) {
            $orphanIdsTools[] = $val;
        }

        $orphanTools = array();
        for ($i = 0; $i < count($orphanIdsTools); $i++)
        {
            $orphanTools[] = $toolRepository->find($orphanIdsTools[$i]);
        }


        return $this->json($orphanTools);
    }

    #[Route('/create', name: 'create_tool', methods: 'POST')]
    public function createTool(CategoryRepository $categoryRepository, SubCategoryRepository $subCategoryRepository, ToolRepository $toolRepository, TagRepository $tagRepository, Request $request): Response
    {
        $tool = new Tool();

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
            // New subCategories
            $subCategoriesIds = $data["subCategoriesIds"];

            for($i = 0; $i < count($subCategoriesIds); $i++)
            {
                $subCategoryToAdd = $subCategoryRepository->find($subCategoriesIds[$i]);
                if($subCategoryToAdd)
                {
                    $tool->addSubCategory($subCategoryToAdd);
                }
            }
        }

        if(isset($data["tagsIds"]))
        {
            // New tags
            $tagIds = $data["tagsIds"];

            for($i = 0; $i < count($tagIds); $i++)
            {
                $tagToAdd = $tagRepository->find($tagIds[$i]);
                if($tagToAdd)
                {
                    $tool->addTag($tagToAdd);
                }
            }
        }

        $toolRepository->save($tool, true);

        $categories = $categoryRepository->findAll();

        $content = $this->serializeCircular->serialize($categories, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    #[Route('/{id}/edit', name: 'edit_tool', methods: 'PUT')]
    public function editTool(CategoryRepository $categoryRepository, SubCategoryRepository $subCategoryRepository, ToolRepository $toolRepository, Request $request, TagRepository $tagRepository, int $id): Response
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
            // Remove old subCategories
            $subCategoriesIdsToRemove = $data["subCategoriesIdsToRemove"];

            for ($i = 0; $i<count($subCategoriesIdsToRemove); $i++) {
                $subCategoryToRemove = $subCategoryRepository->find($subCategoriesIdsToRemove[$i]);

                if ($subCategoryToRemove) {
                    $tool->removeSubCategory($subCategoryToRemove);
                }
            }

            // New subCategories
            $subCategoriesIds = $data["subCategoriesIds"];

            for($i = 0; $i < count($subCategoriesIds); $i++)
            {
                $subCategoryToAdd = $subCategoryRepository->find($subCategoriesIds[$i]);
                if($subCategoryToAdd)
                {
                    $tool->addSubCategory($subCategoryToAdd);
                }
            }
        }

        if(isset($data["tagsIds"]))
        {
            // Remove old tags
            $tagsIdsToRemove = $data["tagsIdsToRemove"];

            for ($i = 0; $i<count($tagsIdsToRemove); $i++) {
                $tagToRemove = $tagRepository->find($tagsIdsToRemove[$i]);

                if ($tagToRemove) {
                    $tool->removeTag($tagToRemove);
                }
            }

            // New tags
            $tagsIds = $data["tagsIds"];

            for($i = 0; $i < count($tagsIds); $i++)
            {
                $tagToAdd = $tagRepository->find($tagsIds[$i]);
                if($tagToAdd)
                {
                    $tool->addTag($tagToAdd);
                }
            }
        }

        $toolRepository->save($tool, true);

        $categories = $categoryRepository->findAll();

        $content = $this->serializeCircular->serialize($categories, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }

    #[Route('/{id}/remove', name: 'tool_remove', methods: 'DELETE')]
    public function removeById(CategoryRepository $categoryRepository, ToolRepository $toolRepository, Request $request, int $id)
    {
        $tool = $toolRepository->find($id);

        if (!$tool) {
            throw $this->createNotFoundException(
                'No tool found for id '.$id
            );
        }

        $toolRepository->remove($tool, true);

        $categories = $categoryRepository->findAll();

        $content = $this->serializeCircular->serialize($categories, 'json');
        $response = new Response($content);
        $response->headers->set('Content-Type', 'application/json');

        return $response;
    }
}
