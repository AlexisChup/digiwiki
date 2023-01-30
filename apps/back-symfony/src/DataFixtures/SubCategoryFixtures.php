<?php

namespace App\DataFixtures;

use App\Entity\SubCategory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class SubCategoryFixtures extends Fixture implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        // CATEGORY 1

        $subCategory1_1 = new SubCategory();
        $subCategory1_1->setName("Icône - Logo");
        $subCategory1_1->setUrl("icon-logo");
        $manager->persist($subCategory1_1);

        $subCategory1_2 = new SubCategory();
        $subCategory1_2->setName("Audio");
        $subCategory1_2->setUrl("audio");
        $manager->persist($subCategory1_2);

        $subCategory1_3 = new SubCategory();
        $subCategory1_3->setName("Image - SVG");
        $subCategory1_3->setUrl("picture-svg");
        $manager->persist($subCategory1_3);

        $subCategory1_4 = new SubCategory();
        $subCategory1_4->setName("Vidéo - Animation");
        $subCategory1_4->setUrl("video-animation");
        $manager->persist($subCategory1_4);

        $subCategory1_5 = new SubCategory();
        $subCategory1_5->setName("3D Modeling");
        $subCategory1_5->setUrl("3d");
        $manager->persist($subCategory1_5);

        $subCategory1_6 = new SubCategory();
        $subCategory1_6->setName("Font - Couleur");
        $subCategory1_6->setUrl("font-color");
        $manager->persist($subCategory1_6);

        $subCategory1_7 = new SubCategory();
        $subCategory1_7->setName("Template");
        $subCategory1_7->setUrl("template");
        $manager->persist($subCategory1_7);

        $subCategory1_8 = new SubCategory();
        $subCategory1_8->setName("Formation");
        $subCategory1_8->setUrl("learning");
        $manager->persist($subCategory1_8);

        // CATEGORY 2

        $subCategory2_1 = new SubCategory();
        $subCategory2_1->setName("SEO");
        $subCategory2_1->setUrl("seo");
        $manager->persist($subCategory2_1);

        $subCategory2_2 = new SubCategory();
        $subCategory2_2->setName("Analyse");
        $subCategory2_2->setUrl("analytics");
        $manager->persist($subCategory2_2);

        $subCategory2_3 = new SubCategory();
        $subCategory2_3->setName("Branding");
        $subCategory2_3->setUrl("branding");
        $manager->persist($subCategory2_3);

        $subCategory2_4 = new SubCategory();
        $subCategory2_4->setName("Réseaux sociaux");
        $subCategory2_4->setUrl("social-network");
        $manager->persist($subCategory2_4);

        $subCategory2_5 = new SubCategory();
        $subCategory2_5->setName("Formation");
        $subCategory2_5->setUrl("learning");
        $manager->persist($subCategory2_5);

        // CATEGORY 3

        $subCategory3_1 = new SubCategory();
        $subCategory3_1->setName("Gestion de projet");
        $subCategory3_1->setUrl("project-management");
        $manager->persist($subCategory3_1);

        $subCategory3_2 = new SubCategory();
        $subCategory3_2->setName("Gestion du temps");
        $subCategory3_2->setUrl("time-management");
        $manager->persist($subCategory3_2);

        $subCategory3_3 = new SubCategory();
        $subCategory3_3->setName("Notes");
        $subCategory3_3->setUrl("notes");
        $manager->persist($subCategory3_3);

        $subCategory3_4 = new SubCategory();
        $subCategory3_4->setName("Autre");
        $subCategory3_4->setUrl("other");
        $manager->persist($subCategory3_4);

        $subCategory3_5 = new SubCategory();
        $subCategory3_5->setName("Formation");
        $subCategory3_5->setUrl("learning");
        $manager->persist($subCategory3_5);

        // CATEGORY 4

        $subCategory4_1 = new SubCategory();
        $subCategory4_1->setName("Gestion de capital");
        $subCategory4_1->setUrl("capital-management");
        $manager->persist($subCategory4_1);

        $subCategory4_2 = new SubCategory();
        $subCategory4_2->setName("Immobilier");
        $subCategory4_2->setUrl("real-estate");
        $manager->persist($subCategory4_2);

        $subCategory4_3 = new SubCategory();
        $subCategory4_3->setName("Revenu Complémentaire");
        $subCategory4_3->setUrl("side-hustle");
        $manager->persist($subCategory4_3);

        $subCategory4_4 = new SubCategory();
        $subCategory4_4->setName("Formation");
        $subCategory4_4->setUrl("learning");
        $manager->persist($subCategory4_4);

        // CATEGORY 5

        $subCategory5_1 = new SubCategory();
        $subCategory5_1->setName("Développement");
        $subCategory5_1->setUrl("framework");
        $manager->persist($subCategory5_1);

        $subCategory5_2 = new SubCategory();
        $subCategory5_2->setName("Tests");
        $subCategory5_2->setUrl("programming-testing-tools");
        $manager->persist($subCategory5_2);

        $subCategory5_3 = new SubCategory();
        $subCategory5_3->setName("Déploiement");
        $subCategory5_3->setUrl("programming-deploy");
        $manager->persist($subCategory5_3);

        $subCategory5_4 = new SubCategory();
        $subCategory5_4->setName("Formation");
        $subCategory5_4->setUrl("learning");
        $manager->persist($subCategory5_4);

        // CATEGORY 6
         
        $subCategory6_1 = new SubCategory();
        $subCategory6_1->setName("Texte");
        $subCategory6_1->setUrl("ai-text");
        $manager->persist($subCategory6_1);

        $subCategory6_2 = new SubCategory();
        $subCategory6_2->setName("Audio");
        $subCategory6_2->setUrl("audio");
        $manager->persist($subCategory6_2);

        $subCategory6_3 = new SubCategory();
        $subCategory6_3->setName("Image");
        $subCategory6_3->setUrl("ai-picture");
        $manager->persist($subCategory6_3);

        $subCategory6_4 = new SubCategory();
        $subCategory6_4->setName("Vidéo");
        $subCategory6_4->setUrl("ai-video");
        $manager->persist($subCategory6_4);

        $subCategory6_5 = new SubCategory();
        $subCategory6_5->setName("Programmation");
        $subCategory6_5->setUrl("ai-programming");
        $manager->persist($subCategory6_5);

        $subCategory6_6 = new SubCategory();
        $subCategory6_6->setName("Autre");
        $subCategory6_6->setUrl("ai-other");
        $manager->persist($subCategory6_6);

        $subCategory6_7 = new SubCategory();
        $subCategory6_7->setName("Formation");
        $subCategory6_7->setUrl("learning");
        $manager->persist($subCategory6_7);

        // CATEGORY 7

        $subCategory7_1 = new SubCategory();
        $subCategory7_1->setName("Exchange");
        $subCategory7_1->setUrl("marketplace");
        $manager->persist($subCategory7_1);

        $subCategory7_2 = new SubCategory();
        $subCategory7_2->setName("NFT");
        $subCategory7_2->setUrl("nft");
        $manager->persist($subCategory7_2);

        $subCategory7_3 = new SubCategory();
        $subCategory7_3->setName("Portefeuille");
        $subCategory7_3->setUrl("wallet");
        $manager->persist($subCategory7_3);

        $subCategory7_4 = new SubCategory();
        $subCategory7_4->setName("Web3");
        $subCategory7_4->setUrl("web3");
        $manager->persist($subCategory7_4);

        $subCategory7_5 = new SubCategory();
        $subCategory7_5->setName("Analyse fondamentale");
        $subCategory7_5->setUrl("fundamental-analysis");
        $manager->persist($subCategory7_5);

        $subCategory7_6 = new SubCategory();
        $subCategory7_6->setName("Analyse technique");
        $subCategory7_6->setUrl("technical-analysis");
        $manager->persist($subCategory7_6);

        $subCategory7_7 = new SubCategory();
        $subCategory7_7->setName("Formation");
        $subCategory7_7->setUrl("learning");
        $manager->persist($subCategory7_7);

        // CATEGORY 8

        $subCategory8_1 = new SubCategory();
        $subCategory8_1->setName("Compte titre");
        $subCategory8_1->setUrl("shares-account");
        $manager->persist($subCategory8_1);

        $subCategory8_2 = new SubCategory();
        $subCategory8_2->setName("PEA");
        $subCategory8_2->setUrl("pea");
        $manager->persist($subCategory8_2);

        $subCategory8_3 = new SubCategory();
        $subCategory8_3->setName("Assurance vie");
        $subCategory8_3->setUrl("life-insurance");
        $manager->persist($subCategory8_3);

        $subCategory8_4 = new SubCategory();
        $subCategory8_4->setName("Copy trading");
        $subCategory8_4->setUrl("copy-trading");
        $manager->persist($subCategory8_4);

        $subCategory8_5 = new SubCategory();
        $subCategory8_5->setName("Simulateur");
        $subCategory8_5->setUrl("simulator");
        $manager->persist($subCategory8_5);

        $subCategory8_6 = new SubCategory();
        $subCategory8_6->setName("Analyse fondamentale");
        $subCategory8_6->setUrl("fundamental-analysis");
        $manager->persist($subCategory8_6);

        $subCategory8_7 = new SubCategory();
        $subCategory8_7->setName("Formation");
        $subCategory8_7->setUrl("learning");
        $manager->persist($subCategory8_7);

        // ADD TOOLS TO SUBCATEGORY

        $subCategory1_1->addTool($this->getReference("tool_1_1_1"));
        $subCategory1_4->addTool($this->getReference("tool_1_4_1"));
        $subCategory1_5->addTool($this->getReference("tool_1_5_1"));
        $subCategory1_6->addTool($this->getReference("tool_1_6_1"));
        $subCategory1_6->addTool($this->getReference("tool_1_6_2"));
        $subCategory1_7->addTool($this->getReference("tool_1_7_1"));

        $subCategory2_1->addTool($this->getReference("tool_2_1_1"));
        $subCategory2_1->addTool($this->getReference("tool_2_1_2"));
        $subCategory2_3->addTool($this->getReference("tool_2_3_1"));

        $subCategory3_3->addTool($this->getReference("tool_3_3_1"));
        $subCategory3_4->addTool($this->getReference("tool_3_4_1"));
        $subCategory3_4->addTool($this->getReference("tool_3_4_2"));

        $subCategory4_1->addTool($this->getReference("tool_4_1_1"));
        $subCategory4_2->addTool($this->getReference("tool_4_2_1"));
        $subCategory4_2->addTool($this->getReference("tool_4_2_2"));
        $subCategory4_2->addTool($this->getReference("tool_4_2_3"));
        $subCategory4_3->addTool($this->getReference("tool_4_3_1"));
        $subCategory4_3->addTool($this->getReference("tool_4_3_2"));

        $subCategory5_1->addTool($this->getReference("tool_5_1_1"));
        $subCategory5_2->addTool($this->getReference("tool_5_2_1"));
        $subCategory5_3->addTool($this->getReference("tool_5_3_1"));
        $subCategory5_3->addTool($this->getReference("tool_5_3_2"));
        $subCategory5_4->addTool($this->getReference("tool_5_4_1"));
        $subCategory5_4->addTool($this->getReference("tool_5_4_2"));

        $subCategory6_1->addTool($this->getReference("tool_6_1_1"));
        $subCategory6_1->addTool($this->getReference("tool_6_1_2"));
        $subCategory6_2->addTool($this->getReference("tool_6_2_1"));
        $subCategory6_2->addTool($this->getReference("tool_6_2_2"));
        $subCategory6_2->addTool($this->getReference("tool_6_2_3"));
        $subCategory6_3->addTool($this->getReference("tool_6_3_1"));
        $subCategory6_4->addTool($this->getReference("tool_6_4_1"));
        $subCategory6_4->addTool($this->getReference("tool_6_4_2"));
        $subCategory6_4->addTool($this->getReference("tool_6_4_3"));
        $subCategory6_6->addTool($this->getReference("tool_6_6_1"));

        $subCategory7_3->addTool($this->getReference("tool_7_3_1"));
        $subCategory7_5->addTool($this->getReference("tool_7_5_1"));
        $subCategory7_6->addTool($this->getReference("tool_7_6_1"));

        $subCategory8_1->addTool($this->getReference("tool_8_1_1"));
        $subCategory8_1->addTool($this->getReference("tool_8_1_2"));
        $subCategory8_1->addTool($this->getReference("tool_8_1_3"));
        $subCategory8_2->addTool($this->getReference("tool_8_2_1"));
        $subCategory8_6->addTool($this->getReference("tool_8_6_1"));

        // REFERENCE FOR CATEGORY FIXTURES

        $this->addReference("subCategory1_1", $subCategory1_1);
        $this->addReference("subCategory1_2", $subCategory1_2);
        $this->addReference("subCategory1_3", $subCategory1_3);
        $this->addReference("subCategory1_4", $subCategory1_4);
        $this->addReference("subCategory1_5", $subCategory1_5);
        $this->addReference("subCategory1_6", $subCategory1_6);
        $this->addReference("subCategory1_7", $subCategory1_7);
        $this->addReference("subCategory1_8", $subCategory1_8);

        $this->addReference("subCategory2_1", $subCategory2_1);
        $this->addReference("subCategory2_2", $subCategory2_2);
        $this->addReference("subCategory2_3", $subCategory2_3);
        $this->addReference("subCategory2_4", $subCategory2_4);
        $this->addReference("subCategory2_5", $subCategory2_5);

        $this->addReference("subCategory3_1", $subCategory3_1);
        $this->addReference("subCategory3_2", $subCategory3_2);
        $this->addReference("subCategory3_3", $subCategory3_3);
        $this->addReference("subCategory3_4", $subCategory3_4);
        $this->addReference("subCategory3_5", $subCategory3_5);

        $this->addReference("subCategory4_1", $subCategory4_1);
        $this->addReference("subCategory4_2", $subCategory4_2);
        $this->addReference("subCategory4_3", $subCategory4_3);
        $this->addReference("subCategory4_4", $subCategory4_4);

        $this->addReference("subCategory5_1", $subCategory5_1);
        $this->addReference("subCategory5_2", $subCategory5_2);
        $this->addReference("subCategory5_3", $subCategory5_3);
        $this->addReference("subCategory5_4", $subCategory5_4);

        $this->addReference("subCategory6_1", $subCategory6_1);
        $this->addReference("subCategory6_2", $subCategory6_2);
        $this->addReference("subCategory6_3", $subCategory6_3);
        $this->addReference("subCategory6_4", $subCategory6_4);
        $this->addReference("subCategory6_5", $subCategory6_5);
        $this->addReference("subCategory6_6", $subCategory6_6);
        $this->addReference("subCategory6_7", $subCategory6_7);

        $this->addReference("subCategory7_1", $subCategory7_1);
        $this->addReference("subCategory7_2", $subCategory7_2);
        $this->addReference("subCategory7_3", $subCategory7_3);
        $this->addReference("subCategory7_4", $subCategory7_4);
        $this->addReference("subCategory7_5", $subCategory7_5);
        $this->addReference("subCategory7_6", $subCategory7_6);
        $this->addReference("subCategory7_7", $subCategory7_7);

        $this->addReference("subCategory8_1", $subCategory8_1);
        $this->addReference("subCategory8_2", $subCategory8_2);
        $this->addReference("subCategory8_3", $subCategory8_3);
        $this->addReference("subCategory8_4", $subCategory8_4);
        $this->addReference("subCategory8_5", $subCategory8_5);
        $this->addReference("subCategory8_6", $subCategory8_6);
        $this->addReference("subCategory8_7", $subCategory8_7);

        $manager->flush();
    }
    public function getDependencies(): array
    {
        return [
            ToolFixtures::class
        ];
    }

}
