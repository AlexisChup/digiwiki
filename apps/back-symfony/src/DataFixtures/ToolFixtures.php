<?php

namespace App\DataFixtures;

use App\Entity\Tool;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ToolFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $tool_2_3_1 = new Tool();
        $tool_2_3_1->setName("Icon Sax");
        $tool_2_3_1->setUrl("icon-sax");
        $tool_2_3_1->setShortDescription("Icon Sax description brève");
        $tool_2_3_1->setDescription("Icon Sax grande description !!!");
        $tool_2_3_1->setAffiliateRef("https://iconsax.io");
        $tool_2_3_1->setCodePromo("ICOSA22");
        $tool_2_3_1->setImgUrl("https://iconsax.io/logo-vuesax.svg");
        $manager->persist($tool_2_3_1);

        $this->addReference("tool_2_3_1", $tool_2_3_1);

        $manager->flush();
    }
}
