<?php

namespace App\Controller\Admin;

use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/api/admin/user', name: 'api_admin_user')]
class AdminUserController extends AbstractController
{
    #[Route('/all', name: 'admin_all_users', methods: 'GET')]
    public function getAllUsers(UserRepository $userRepo): Response
    {
        $users = $userRepo->findAll();
        return $this->json($users);
    }

    #[Route('/edit', name: 'admin_edit_user', methods: 'POST')]
    public function editUser(UserRepository $userRepo, Request $request, UserPasswordHasherInterface $passwordHasher): Response
    {
        $data = json_decode($request->getContent(), true);

        $user = $userRepo->find($data["id"]);

        $user->setRoles($data["roles"]);
        $user->setEmail($data["email"]);

        if($data["isPasswordChanged"])
        {
            $plaintextPassword = $data["password"];
            $hashedPassword = $passwordHasher->hashPassword(
                $user,
                $plaintextPassword
            );

            $user->setPassword($hashedPassword);
        }

        $userRepo->save($user, true);

        return $this->json($user);
    }
}
