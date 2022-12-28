<?php

namespace App\DataFixtures;

use App\Entity\Category;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class CategoryFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $category1 = new Category();
        $category1->setName("Données et Analytiques");
        $category1->setUrl("data-and-analytics");
        $manager->persist($category1);

        $category2 = new Category();
        $category2->setName("Graphiques et Designs");
        $category2->setUrl("graphics-and-designs");
        $manager->persist($category2);

        $category3 = new Category();
        $category3->setName("Marketing");
        $category3->setUrl("marketing");
        $manager->persist($category3);

        $category4 = new Category();
        $category4->setName("Productivité");
        $category4->setUrl("productivity");
        $manager->persist($category4);

        $category5 = new Category();
        $category5->setName("Finances");
        $category5->setUrl("finances");
        $manager->persist($category5);

        $category6 = new Category();
        $category6->setName("Programmation");
        $category6->setUrl("programming");
        $manager->persist($category6);

        $category7 = new Category();
        $category7->setName("Intelligence Artificielle");
        $category7->setUrl("ai");
        $manager->persist($category7);

        $category8 = new Category();
        $category8->setName("Cryptomonnaies");
        $category8->setUrl("cryptocurrencies");
        $manager->persist($category8);

        $category9 = new Category();
        $category9->setName("Bourses");
        $category9->setUrl("stock-market");
        $manager->persist($category9);

        $manager->flush();
    }
}
