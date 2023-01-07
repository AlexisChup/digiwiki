<?php

namespace App\DataFixtures;

use App\Entity\Category;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class CategoryFixtures extends Fixture implements DependentFixtureInterface
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

        //references
        $category1->addSubCategory($this->getReference("subCategory1_1"));
        $category1->addSubCategory($this->getReference("subCategory1_2"));
        $category1->addSubCategory($this->getReference("subCategory1_3"));
        $category1->addSubCategory($this->getReference("subCategory1_4"));
        $category1->addSubCategory($this->getReference("subCategory1_5"));
        $category1->addSubCategory($this->getReference("subCategory1_6"));
        $category1->addSubCategory($this->getReference("subCategory1_7"));
        $category1->addSubCategory($this->getReference("subCategory1_8"));

        $category2->addSubCategory($this->getReference("subCategory2_1"));
        $category2->addSubCategory($this->getReference("subCategory2_2"));
        $category2->addSubCategory($this->getReference("subCategory2_3"));
        $category2->addSubCategory($this->getReference("subCategory2_4"));
        $category2->addSubCategory($this->getReference("subCategory2_5"));
        $category2->addSubCategory($this->getReference("subCategory2_6"));

        $category3->addSubCategory($this->getReference("subCategory3_1"));
        $category3->addSubCategory($this->getReference("subCategory3_2"));
        $category3->addSubCategory($this->getReference("subCategory3_3"));
        $category3->addSubCategory($this->getReference("subCategory3_4"));
        $category3->addSubCategory($this->getReference("subCategory3_5"));
        $category3->addSubCategory($this->getReference("subCategory3_6"));
        
        $category4->addSubCategory($this->getReference("subCategory4_1"));
        $category4->addSubCategory($this->getReference("subCategory4_2"));
        $category4->addSubCategory($this->getReference("subCategory4_3"));
        $category4->addSubCategory($this->getReference("subCategory4_4"));
        $category4->addSubCategory($this->getReference("subCategory4_5"));
        $category4->addSubCategory($this->getReference("subCategory4_6"));
        $category4->addSubCategory($this->getReference("subCategory4_7"));

        $category5->addSubCategory($this->getReference("subCategory5_1"));
        $category5->addSubCategory($this->getReference("subCategory5_2"));
        $category5->addSubCategory($this->getReference("subCategory5_3"));
        $category5->addSubCategory($this->getReference("subCategory5_4"));

        $category6->addSubCategory($this->getReference("subCategory6_1"));
        $category6->addSubCategory($this->getReference("subCategory6_2"));
        $category6->addSubCategory($this->getReference("subCategory6_3"));
        $category6->addSubCategory($this->getReference("subCategory6_4"));
        $category6->addSubCategory($this->getReference("subCategory6_5"));
        $category6->addSubCategory($this->getReference("subCategory6_6"));

        $category7->addSubCategory($this->getReference("subCategory7_1"));
        $category7->addSubCategory($this->getReference("subCategory7_2"));
        $category7->addSubCategory($this->getReference("subCategory7_3"));
        $category7->addSubCategory($this->getReference("subCategory7_4"));

        $category8->addSubCategory($this->getReference("subCategory8_1"));
        $category8->addSubCategory($this->getReference("subCategory8_2"));
        $category8->addSubCategory($this->getReference("subCategory8_3"));
        $category8->addSubCategory($this->getReference("subCategory8_4"));
        $category8->addSubCategory($this->getReference("subCategory8_5"));
        $category8->addSubCategory($this->getReference("subCategory8_6"));
        $category8->addSubCategory($this->getReference("subCategory8_7"));
        $category8->addSubCategory($this->getReference("subCategory8_8"));

        $category9->addSubCategory($this->getReference("subCategory9_1"));
        $category9->addSubCategory($this->getReference("subCategory9_2"));
        $category9->addSubCategory($this->getReference("subCategory9_3"));
        $category9->addSubCategory($this->getReference("subCategory9_4"));
        $category9->addSubCategory($this->getReference("subCategory9_5"));
        $category9->addSubCategory($this->getReference("subCategory9_6"));
        $category9->addSubCategory($this->getReference("subCategory8_6"));
        $category9->addSubCategory($this->getReference("subCategory9_8"));

        $manager->flush();
    }

    public function getDependencies(): array
    {
        return [
            SubCategoryFixtures::class
        ];
    }
}
