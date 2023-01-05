<?php

namespace App\DataFixtures;

use App\Entity\Tool;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class ToolFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $tool_1_1_1 = new Tool();
        $tool_1_1_1->setName("AlsoAsked");
        $tool_1_1_1->setUrl("alsoasked");
        $tool_1_1_1->setShortDescription("AlsoAsked description brève");
        $tool_1_1_1->setDescription("AlsoAsked grande description !!!");
        $tool_1_1_1->setAffiliateRef("https://alsoasked.com/");
        $tool_1_1_1->setCodePromo("A");
        $tool_1_1_1->setImgUrl("https://alsoasked.com/static/media/logo-white.7f7c89ca383aa788e117d34567bb7a12.svg");

        $tool_2_1_1 = new Tool();
        $tool_2_1_1->setName("Icon Sax");
        $tool_2_1_1->setUrl("icon-sax");
        $tool_2_1_1->setShortDescription("Icon Sax description brève");
        $tool_2_1_1->setDescription("Icon Sax grande description !!!");
        $tool_2_1_1->setAffiliateRef("https://iconsax.io");
        $tool_2_1_1->setCodePromo("ICOSA22");
        $tool_2_1_1->setImgUrl("https://iconsax.io/logo-vuesax.svg");

        $tool_3_3_1 = new Tool();
        $tool_3_3_1->setName("Ahref");
        $tool_3_3_1->setUrl("ahref");
        $tool_3_3_1->setShortDescription("Ahref description brève");
        $tool_3_3_1->setDescription("Ahref grande description !!!");
        $tool_3_3_1->setAffiliateRef("https://ahrefs.com/fr");
        $tool_3_3_1->setCodePromo("B");
        $tool_3_3_1->setImgUrl("https://iconsax.io/logo-vuesax.svg");

        $tool_4_6_1 = new Tool();
        $tool_4_6_1->setName("Exceformulabot");
        $tool_4_6_1->setUrl("exceformulabot");
        $tool_4_6_1->setShortDescription("Exceformulabot description brève");
        $tool_4_6_1->setDescription("Exceformulabot grande description !!!");
        $tool_4_6_1->setAffiliateRef("https://excelformulabot.com/");
        $tool_4_6_1->setCodePromo("C");
        $tool_4_6_1->setImgUrl("https://excel-formula-bot2.cdn.bubble.io/f1669483384494x223770736384971460/Full%20logo%20with%20transparent%20background.svg");

        $tool_5_1_1 = new Tool();
        $tool_5_1_1->setName("Backstop Solution");
        $tool_5_1_1->setUrl("backstop-solution");
        $tool_5_1_1->setShortDescription("Backstop Solution logiciel de gestion des investissements");
        $tool_5_1_1->setDescription("Le logiciel de gestion des investissements puissant et facile à utiliser. 
                                    Backstop est conçu sur mesure pour les professionnels de la gestion des investissements institutionnels 
                                    et alternatifs qui sont submergés par le volume de données circulant dans leurs boîtes de réception et leurs classeurs. 
                                    La suite d'amélioration de la productivité primée et leader du secteur de Backstop intègre les outils 
                                    les plus indispensables pour la gestion des portefeuilles, la surveillance de la recherche, le déploiement de diligence raisonnable opérationnelle 
                                    (ODD)/d'intégrité (IDD), la mobilisation de capitaux et l'aide aux investisseurs.");
        $tool_5_1_1->setAffiliateRef("https://www.backstopsolutions.com/");
        $tool_5_1_1->setCodePromo("D");
        $tool_5_1_1->setImgUrl("https://www.backstopsolutions.com/hs-fs/hubfs/BackstopSolutions_Corp_Original_FullColor_RTM%20(1).png?width=450&height=113&name=BackstopSolutions_Corp_Original_FullColor_RTM%20(1).png");

        $tool_6_1_1 = new Tool();
        $tool_6_1_1->setName("Codepen");
        $tool_6_1_1->setUrl("codepen");
        $tool_6_1_1->setShortDescription("Codepen description brève");
        $tool_6_1_1->setDescription("Codepen grande description !!!");
        $tool_6_1_1->setAffiliateRef("https://codepen.io/");
        $tool_6_1_1->setCodePromo("E");
        $tool_6_1_1->setImgUrl("https://cpwebassets.codepen.io/assets/favicon/apple-touch-icon-5ae1a0698dcc2402e9712f7d01ed509a57814f994c660df9f7a952f3060705ee.png");

        $tool_7_1_1 = new Tool();
        $tool_7_1_1->setName("ChatGPT");
        $tool_7_1_1->setUrl("chatgpt");
        $tool_7_1_1->setShortDescription("ChatGPT description brève");
        $tool_7_1_1->setDescription("ChatGPT grande description !!!");
        $tool_7_1_1->setAffiliateRef("https://chat.openai.com/");
        $tool_7_1_1->setCodePromo("F");
        $tool_7_1_1->setImgUrl("https://chat.openai.com/apple-touch-icon.png");

        $tool_8_2_1 = new Tool();
        $tool_8_2_1->setName("CoinMarketCap");
        $tool_8_2_1->setUrl("coinmarketcap");
        $tool_8_2_1->setShortDescription("CoinMarketCap description brève");
        $tool_8_2_1->setDescription("CoinMarketCap grande description !!!");
        $tool_8_2_1->setAffiliateRef("https://coinmarketcap.com/");
        $tool_8_2_1->setCodePromo("G");
        $tool_8_2_1->setImgUrl("https://coinmarketcap.com/apple-touch-icon.png");

        $tool_9_2_1 = new Tool();
        $tool_9_2_1->setName("Boursorama Banque");
        $tool_9_2_1->setUrl("boursorama-banque");
        $tool_9_2_1->setShortDescription("Boursorama Banque description brève");
        $tool_9_2_1->setDescription("Boursorama Banque grande description !!!");
        $tool_9_2_1->setAffiliateRef("​https://bour.so/9RWl2zJSVY");
        $tool_9_2_1->setCodePromo("H");
        $tool_9_2_1->setImgUrl("https://bourse.boursorama.com/bundles/boursoramaui/images/favicons/favicon-32x32.png");

        $manager->persist($tool_1_1_1);
        $manager->persist($tool_2_1_1);
        $manager->persist($tool_3_3_1);

        $this->addReference("tool_1_1_1", $tool_1_1_1);
        $this->addReference("tool_2_1_1", $tool_2_1_1);
        $this->addReference("tool_3_3_1", $tool_3_3_1);

        $manager->flush();
    }
}
