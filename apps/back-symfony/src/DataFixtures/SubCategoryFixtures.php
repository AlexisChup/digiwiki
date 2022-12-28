<?php

namespace App\DataFixtures;

use App\Entity\SubCategory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class SubCategoryFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // CATEGORY 1

        $subCategory1_1 = new SubCategory();
        $subCategory1_1->setName("Analytiques");
        $subCategory1_1->setUrl("analytics");
        $this->addReference("subCategory1_1", $subCategory1_1);
        $manager->persist($subCategory1_1);

        $subCategory1_2 = new SubCategory();
        $subCategory1_2->setName("Visualisation de données");
        $subCategory1_2->setUrl("data-visualization");
        $this->addReference("subCategory1_2", $subCategory1_2);
        $manager->persist($subCategory1_2);

        $subCategory1_3 = new SubCategory();
        $subCategory1_3->setName("Business intelligence");
        $subCategory1_3->setUrl("business-intelligence");
        $this->addReference("subCategory1_3", $subCategory1_3);
        $manager->persist($subCategory1_3);

        $subCategory1_4 = new SubCategory();
        $subCategory1_4->setName("Données");
        $subCategory1_4->setUrl("data");
        $this->addReference("subCategory1_4", $subCategory1_4);
        $manager->persist($subCategory1_4);

        $subCategory1_5 = new SubCategory();
        $subCategory1_5->setName("Base de données");
        $subCategory1_5->setUrl("database");
        $this->addReference("subCategory1_5", $subCategory1_5);
        $manager->persist($subCategory1_5);

        $subCategory1_6 = new SubCategory();
        $subCategory1_6->setName("Statistiques");
        $subCategory1_6->setUrl("statistics");
        $this->addReference("subCategory1_6", $subCategory1_6);
        $manager->persist($subCategory1_6);

        $subCategory1_7 = new SubCategory();
        $subCategory1_7->setName("Data science");
        $subCategory1_7->setUrl("data-science");
        $this->addReference("subCategory1_7", $subCategory1_7);
        $manager->persist($subCategory1_7);

        $subCategory1_8 = new SubCategory();
        $subCategory1_8->setName("Formation");
        $subCategory1_8->setUrl("learning");
        $this->addReference("subCategory1_8", $subCategory1_8);
        $manager->persist($subCategory1_8);

        // CATEGORY 2

        $subCategory2_1 = new SubCategory();
        $subCategory2_1->setName("Animations");
        $subCategory2_1->setUrl("animations");
        $this->addReference("subCategory2_1", $subCategory2_1);
        $manager->persist($subCategory2_1);

        $subCategory2_2 = new SubCategory();
        $subCategory2_2->setName("Outils de design");
        $subCategory2_2->setUrl("design-tool");
        $this->addReference("subCategory2_2", $subCategory2_2);
        $manager->persist($subCategory2_2);

        $subCategory2_3 = new SubCategory();
        $subCategory2_3->setName("Icônes - Logos - Illustrations");
        $subCategory2_3->setUrl("icons-logos-illustrations");
        $this->addReference("subCategory2_3", $subCategory2_3);
        $manager->persist($subCategory2_3);

        $subCategory2_4 = new SubCategory();
        $subCategory2_4->setName("Templates et Inspirations");
        $subCategory2_4->setUrl("templates-inspirations");
        $this->addReference("subCategory2_4", $subCategory2_4);
        $manager->persist($subCategory2_4);

        $subCategory2_5 = new SubCategory();
        $subCategory2_5->setName("3D Modeling");
        $subCategory2_5->setUrl("3d");
        $this->addReference("subCategory2_5", $subCategory2_5);
        $manager->persist($subCategory2_5);

        $subCategory2_6 = new SubCategory();
        $subCategory2_6->setName("Formation");
        $subCategory2_6->setUrl("learning");
        $this->addReference("subCategory2_6", $subCategory2_6);
        $manager->persist($subCategory2_6);

        $manager->flush();
    }
}
