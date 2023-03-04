<?php

namespace App\Controller\Admin;

use App\Entity\Tag;
use App\Repository\TagRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/admin/tag', name: 'api_admin_tag')]
class AdminTagController extends AbstractController
{
    public function __construct()
    {
    }

    #[Route('/all', name: 'tag_show_all', methods: 'GET')]
    public function showAll(tagRepository $tagRepository): Response
    {
        $tags = $tagRepository->findAll();
        return $this->json($tags);
    }

    #[Route('/create', name: 'create_tag', methods: 'POST')]
    public function createTag(TagRepository $tagRepository, Request $request): Response
    {
        $data = json_decode($request->getContent(), true);
        
        $tag = new Tag();
        $tag->setName($data["name"]);
        $tag->setColor($data["color"]);
        $tag->setType($data["type"]);
        
        $tagRepository->save($tag, true);

        return $this->json($tag);
    }

    #[Route('/{id}/edit', name: 'edit_tag', methods: 'PUT')]
    public function editTag(TagRepository $tagRepository, Request $request, int $id): Response
    {
        $tag = $tagRepository->find($id);

        if (!$tag) {
            throw $this->createNotFoundException(
                'No tag found for id '.$id
            );
        }

        $data = json_decode($request->getContent(), true);

        $tag->setName($data["name"]);
        $tag->setColor($data["color"]);
        $tag->setType($data["type"]);

        $tagRepository->save($tag, true);

        return $this->json($tag);
    }

    #[Route('/{id}/remove', name: 'tag_remove', methods: 'DELETE')]
    public function removeById(TagRepository $tagRepository, Request $request, int $id)
    {
        $tag = $tagRepository->find($id);

        if (!$tag) {
            throw $this->createNotFoundException(
                'No tag found for id '.$id
            );
        }

        $tagRepository->remove($tag, true);
        
        return $this->json($tag);
    }
}
