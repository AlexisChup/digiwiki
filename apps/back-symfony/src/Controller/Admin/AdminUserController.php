<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Repository\UserRepository;
use DateTimeImmutable;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/api/admin/user', name: 'api_admin_user')]
class AdminUserController extends AbstractController
{
    public function __construct(private SerializerInterface $serializer)
    {
    }

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

        if (!$user) {
            throw $this->createNotFoundException(
                'No user found for id '.$data["id"]
            );
        }

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

    #[Route('/create', name: 'user_register', methods: 'POST')]
    public function register(UserRepository $userRepo, Request $request, UserPasswordHasherInterface $passwordHasher): Response
    {
        $data = json_decode($request->getContent(), true);
        $user = new User();

        $plaintextPassword =$data["password"];
        // hash the password (based on the security.yaml config for the $user class)
        $hashedPassword = $passwordHasher->hashPassword(
            $user,
            $plaintextPassword
        );

        $user->setPassword($hashedPassword);
        $user->setEmail($data["email"]);
        $user->setRoles($data["roles"]);
        $user->setCreatedAt(new DateTimeImmutable());

        $userRepo->save($user, true);
        $res = $this->serializer->normalize($user, 'json');
        return $this->json($res);
    }
}
