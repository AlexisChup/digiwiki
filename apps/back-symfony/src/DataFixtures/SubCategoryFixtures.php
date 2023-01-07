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
        $subCategory1_1->setName("Analytiques");
        $subCategory1_1->setUrl("analytics");
        $manager->persist($subCategory1_1);

        $subCategory1_2 = new SubCategory();
        $subCategory1_2->setName("Visualisation de données");
        $subCategory1_2->setUrl("data-visualization");
        $manager->persist($subCategory1_2);

        $subCategory1_3 = new SubCategory();
        $subCategory1_3->setName("Business intelligence");
        $subCategory1_3->setUrl("business-intelligence");
        $manager->persist($subCategory1_3);

        $subCategory1_4 = new SubCategory();
        $subCategory1_4->setName("Données");
        $subCategory1_4->setUrl("data");
        $manager->persist($subCategory1_4);

        $subCategory1_5 = new SubCategory();
        $subCategory1_5->setName("Base de données");
        $subCategory1_5->setUrl("database");
        $manager->persist($subCategory1_5);

        $subCategory1_6 = new SubCategory();
        $subCategory1_6->setName("Statistiques");
        $subCategory1_6->setUrl("statistics");
        $manager->persist($subCategory1_6);

        $subCategory1_7 = new SubCategory();
        $subCategory1_7->setName("Data science");
        $subCategory1_7->setUrl("data-science");
        $manager->persist($subCategory1_7);

        $subCategory1_8 = new SubCategory();
        $subCategory1_8->setName("Formation");
        $subCategory1_8->setUrl("learning");
        $manager->persist($subCategory1_8);

        // CATEGORY 2

        $subCategory2_1 = new SubCategory();
        $subCategory2_1->setName("Animations");
        $subCategory2_1->setUrl("animations");
        $manager->persist($subCategory2_1);

        $subCategory2_2 = new SubCategory();
        $subCategory2_2->setName("Outils de design");
        $subCategory2_2->setUrl("design-tool");
        $manager->persist($subCategory2_2);

        $subCategory2_3 = new SubCategory();
        $subCategory2_3->setName("Icônes - Logos - Illustrations");
        $subCategory2_3->setUrl("icons-logos-illustrations");
        $manager->persist($subCategory2_3);

        $subCategory2_4 = new SubCategory();
        $subCategory2_4->setName("Templates et Inspirations");
        $subCategory2_4->setUrl("templates-inspirations");
        $manager->persist($subCategory2_4);

        $subCategory2_5 = new SubCategory();
        $subCategory2_5->setName("3D Modeling");
        $subCategory2_5->setUrl("3d");
        $manager->persist($subCategory2_5);

        $subCategory2_6 = new SubCategory();
        $subCategory2_6->setName("Formation");
        $subCategory2_6->setUrl("learning");
        $manager->persist($subCategory2_6);

        // CATEGORY 3

        $subCategory3_1 = new SubCategory();
        $subCategory3_1->setName("SEO");
        $subCategory3_1->setUrl("seo");
        $manager->persist($subCategory3_1);

        $subCategory3_2 = new SubCategory();
        $subCategory3_2->setName("Email Marketing");
        $subCategory3_2->setUrl("email-marketing");
        $manager->persist($subCategory3_2);

        $subCategory3_3 = new SubCategory();
        $subCategory3_3->setName("Astuces croissance");
        $subCategory3_3->setUrl("growth-tips");
        $manager->persist($subCategory3_3);

        $subCategory3_4 = new SubCategory();
        $subCategory3_4->setName("Branding");
        $subCategory3_4->setUrl("branding");
        $manager->persist($subCategory3_4);

        $subCategory3_5 = new SubCategory();
        $subCategory3_5->setName("Marketing Réseaux sociaux");
        $subCategory3_5->setUrl("social-network-marketing");
        $manager->persist($subCategory3_5);

        $subCategory3_6 = new SubCategory();
        $subCategory3_6->setName("Formation");
        $subCategory3_6->setUrl("learning");
        $manager->persist($subCategory3_6);

        // CATEGORY 4

        $subCategory4_1 = new SubCategory();
        $subCategory4_1->setName("Stockage");
        $subCategory4_1->setUrl("storage");
        $manager->persist($subCategory4_1);

        $subCategory4_2 = new SubCategory();
        $subCategory4_2->setName("Gestion des tâches");
        $subCategory4_2->setUrl("tasks-management");
        $manager->persist($subCategory4_2);

        $subCategory4_3 = new SubCategory();
        $subCategory4_3->setName("Gestion du temps");
        $subCategory4_3->setUrl("time-management");
        $manager->persist($subCategory4_3);

        $subCategory4_4 = new SubCategory();
        $subCategory4_4->setName("Notes");
        $subCategory4_4->setUrl("notes");
        $manager->persist($subCategory4_4);

        $subCategory4_5 = new SubCategory();
        $subCategory4_5->setName("Calendrier");
        $subCategory4_5->setUrl("calendar");
        $manager->persist($subCategory4_5);

        $subCategory4_6 = new SubCategory();
        $subCategory4_6->setName("Feuille de calcul");
        $subCategory4_6->setUrl("spreadsheet");
        $manager->persist($subCategory4_6);

        $subCategory4_7 = new SubCategory();
        $subCategory4_7->setName("Formation");
        $subCategory4_7->setUrl("learning");
        $manager->persist($subCategory4_7);

        // CATEGORY 5

        $subCategory5_1 = new SubCategory();
        $subCategory5_1->setName("Gestion de capital");
        $subCategory5_1->setUrl("capital-management");
        $manager->persist($subCategory5_1);

        $subCategory5_2 = new SubCategory();
        $subCategory5_2->setName("Immobilier");
        $subCategory5_2->setUrl("real-estate");
        $manager->persist($subCategory5_2);

        $subCategory5_3 = new SubCategory();
        $subCategory5_3->setName("Side Hustle");
        $subCategory5_3->setUrl("side-hustle");
        $manager->persist($subCategory5_3);

        $subCategory5_4 = new SubCategory();
        $subCategory5_4->setName("Formation");
        $subCategory5_4->setUrl("learning");
        $manager->persist($subCategory5_4);

        // CATEGORY 6

        $subCategory6_1 = new SubCategory();
        $subCategory6_1->setName("Environnement de développement");
        $subCategory6_1->setUrl("framework");
        $manager->persist($subCategory6_1);

        $subCategory6_2 = new SubCategory();
        $subCategory6_2->setName("Outils de développement");
        $subCategory6_2->setUrl("programming-development-tools");
        $manager->persist($subCategory6_2);

        $subCategory6_3 = new SubCategory();
        $subCategory6_3->setName("Analyseur de code");
        $subCategory6_3->setUrl("code-analyzer");
        $manager->persist($subCategory6_3);

        $subCategory6_4 = new SubCategory();
        $subCategory6_4->setName("Outils de tests");
        $subCategory6_4->setUrl("programming-testing-tools");
        $manager->persist($subCategory6_4);

        $subCategory6_5 = new SubCategory();
        $subCategory6_5->setName("Outils de déploiement");
        $subCategory6_5->setUrl("programming-deploy");
        $manager->persist($subCategory6_5);

        $subCategory6_6 = new SubCategory();
        $subCategory6_6->setName("Formation");
        $subCategory6_6->setUrl("learning");
        $manager->persist($subCategory6_6);

        // CATEGORY 7

        $subCategory7_1 = new SubCategory();
        $subCategory7_1->setName("Généraux");
        $subCategory7_1->setUrl("ai-general");
        $manager->persist($subCategory7_1);

        $subCategory7_2 = new SubCategory();
        $subCategory7_2->setName("Design");
        $subCategory7_2->setUrl("design-tool");
        $manager->persist($subCategory7_2);

        $subCategory7_3 = new SubCategory();
        $subCategory7_3->setName("Programmation");
        $subCategory7_3->setUrl("ai-programming");
        $manager->persist($subCategory7_3);

        $subCategory7_4 = new SubCategory();
        $subCategory7_4->setName("Formation");
        $subCategory7_4->setUrl("learning");
        $manager->persist($subCategory7_4);

        // CATEGORY 8

        $subCategory8_1 = new SubCategory();
        $subCategory8_1->setName("Marketplace");
        $subCategory8_1->setUrl("marketplace");
        $manager->persist($subCategory8_1);

        $subCategory8_2 = new SubCategory();
        $subCategory8_2->setName("Classement crypto");
        $subCategory8_2->setUrl("ranking");
        $manager->persist($subCategory8_2);

        $subCategory8_3 = new SubCategory();
        $subCategory8_3->setName("NFT");
        $subCategory8_3->setUrl("nft");
        $manager->persist($subCategory8_3);

        $subCategory8_4 = new SubCategory();
        $subCategory8_4->setName("Portefeuille");
        $subCategory8_4->setUrl("wallet");
        $manager->persist($subCategory8_4);

        $subCategory8_5 = new SubCategory();
        $subCategory8_5->setName("Analyse fondamentale");
        $subCategory8_5->setUrl("fundamental-analysis");
        $manager->persist($subCategory8_5);

        $subCategory8_6 = new SubCategory();
        $subCategory8_6->setName("Analyse technique");
        $subCategory8_6->setUrl("technical-analysis");
        $manager->persist($subCategory8_6);

        $subCategory8_7 = new SubCategory();
        $subCategory8_7->setName("Web3 ");
        $subCategory8_7->setUrl("web3");
        $manager->persist($subCategory8_7);

        $subCategory8_8 = new SubCategory();
        $subCategory8_8->setName("Formation");
        $subCategory8_8->setUrl("learning");
        $manager->persist($subCategory8_8);

        // CATEGORY 9

        $subCategory9_1 = new SubCategory();
        $subCategory9_1->setName("Compte titre");
        $subCategory9_1->setUrl("shares-account");
        $manager->persist($subCategory9_1);

        $subCategory9_2 = new SubCategory();
        $subCategory9_2->setName("PEA");
        $subCategory9_2->setUrl("pea");
        $manager->persist($subCategory9_2);

        $subCategory9_3 = new SubCategory();
        $subCategory9_3->setName("Assurance vie");
        $subCategory9_3->setUrl("life-insurance");
        $manager->persist($subCategory9_3);

        $subCategory9_4 = new SubCategory();
        $subCategory9_4->setName("Copy trading");
        $subCategory9_4->setUrl("copy-trading");
        $manager->persist($subCategory9_4);

        $subCategory9_5 = new SubCategory();
        $subCategory9_5->setName("Simulateur");
        $subCategory9_5->setUrl("simulator");
        $manager->persist($subCategory9_5);

        $subCategory9_6 = new SubCategory();
        $subCategory9_6->setName("Analyse fondamentale");
        $subCategory9_6->setUrl("fundamental-analysis");
        $manager->persist($subCategory9_6);

        $subCategory9_8 = new SubCategory();
        $subCategory9_8->setName("Formation");
        $subCategory9_8->setUrl("learning");
        $manager->persist($subCategory9_8);

        // ADD TOOLS TO SUBCATEGORY

        $subCategory1_1->addTool($this->getReference("tool_1_1_1"));
        $subCategory2_3->addTool($this->getReference("tool_2_3_1"));
        $subCategory3_1->addTool($this->getReference("tool_3_1_1"));
        $subCategory4_6->addTool($this->getReference("tool_4_6_1"));
        $subCategory5_1->addTool($this->getReference("tool_5_1_1"));
        $subCategory6_1->addTool($this->getReference("tool_6_1_1"));
        $subCategory7_1->addTool($this->getReference("tool_7_1_1"));
        $subCategory8_2->addTool($this->getReference("tool_8_2_1"));
        $subCategory9_2->addTool($this->getReference("tool_9_3_1"));

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
        $this->addReference("subCategory2_6", $subCategory2_6);

        $this->addReference("subCategory3_1", $subCategory3_1);
        $this->addReference("subCategory3_2", $subCategory3_2);
        $this->addReference("subCategory3_3", $subCategory3_3);
        $this->addReference("subCategory3_4", $subCategory3_4);
        $this->addReference("subCategory3_5", $subCategory3_5);
        $this->addReference("subCategory3_6", $subCategory3_6);

        $this->addReference("subCategory4_1", $subCategory4_1);
        $this->addReference("subCategory4_2", $subCategory4_2);
        $this->addReference("subCategory4_3", $subCategory4_3);
        $this->addReference("subCategory4_4", $subCategory4_4);
        $this->addReference("subCategory4_5", $subCategory4_5);
        $this->addReference("subCategory4_6", $subCategory4_6);
        $this->addReference("subCategory4_7", $subCategory4_7);

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

        $this->addReference("subCategory7_1", $subCategory7_1);
        $this->addReference("subCategory7_2", $subCategory7_2);
        $this->addReference("subCategory7_3", $subCategory7_3);
        $this->addReference("subCategory7_4", $subCategory7_4);

        $this->addReference("subCategory8_1", $subCategory8_1);
        $this->addReference("subCategory8_2", $subCategory8_2);
        $this->addReference("subCategory8_3", $subCategory8_3);
        $this->addReference("subCategory8_4", $subCategory8_4);
        $this->addReference("subCategory8_5", $subCategory8_5);
        $this->addReference("subCategory8_6", $subCategory8_6);
        $this->addReference("subCategory8_7", $subCategory8_7);
        $this->addReference("subCategory8_8", $subCategory8_8);

        $this->addReference("subCategory9_1", $subCategory9_1);
        $this->addReference("subCategory9_2", $subCategory9_2);
        $this->addReference("subCategory9_3", $subCategory9_3);
        $this->addReference("subCategory9_4", $subCategory9_4);
        $this->addReference("subCategory9_5", $subCategory9_5);
        $this->addReference("subCategory9_6", $subCategory9_6);
        $this->addReference("subCategory9_8", $subCategory9_8);

        $manager->flush();
    }
    public function getDependencies(): array
    {
        return [
            ToolFixtures::class
        ];
    }

}
