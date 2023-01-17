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
        $tool_1_1_1->setImgUrl("https://pbs.twimg.com/profile_images/1348759676532486145/VtaZX6MF_400x400.png");

        $tool_2_3_1 = new Tool();
        $tool_2_3_1->setName("Icon Sax");
        $tool_2_3_1->setUrl("icon-sax");
        $tool_2_3_1->setShortDescription("Icon Sax description brève");
        $tool_2_3_1->setDescription("Icon Sax grande description !!!");
        $tool_2_3_1->setAffiliateRef("https://iconsax.io");
        $tool_2_3_1->setCodePromo("ICOSA22");
        $tool_2_3_1->setImgUrl("https://iconsax.io/logo-vuesax.svg");

        $tool_3_1_1 = new Tool();
        $tool_3_1_1->setName("Ahref");
        $tool_3_1_1->setUrl("ahref");
        $tool_3_1_1->setShortDescription("Ahref SEO description brève");
        $tool_3_1_1->setDescription("Ahref grande description !!!");
        $tool_3_1_1->setAffiliateRef("https://ahrefs.com/fr");
        $tool_3_1_1->setCodePromo("B");
        $tool_3_1_1->setImgUrl("https://assets-3b70.kxcdn.com/images/mediakit/logo_dark@2x.png");

        $tool_4_6_1 = new Tool();
        $tool_4_6_1->setName("Exceformulabot");
        $tool_4_6_1->setUrl("exceformulabot");
        $tool_4_6_1->setShortDescription("Exceformulabot description brève");
        $tool_4_6_1->setDescription("Exceformulabot grande description !!!");
        $tool_4_6_1->setAffiliateRef("https://excelformulabot.com/");
        $tool_4_6_1->setCodePromo("C");
        $tool_4_6_1->setImgUrl("https://pbs.twimg.com/profile_images/1572751321593176064/9oGeTW3I_400x400.jpg");

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
        $tool_6_1_1->setShortDescription("CodePen est un éditeur de code en ligne");
        $tool_6_1_1->setDescription("CodePen est un éditeur de code en ligne qui permet de partager du code, de créer et de déployer un site web ou encore de réaliser des tests. 
        Cet outil s’adresse aux concepteurs et développeurs front-end. Ils peuvent puiser dans les travaux de plus de 1,8 million d’autres développeurs dans le monde.
        La plateforme permet de :
            Écrire et tester du code : CodePen dispose d’un IDE qui vous donne la possibilité de rédiger des lignes de code HTML/CSS/JavaScript. Un volet de visualisation situé en bas de page permet de voir l’avancement de votre projet en temps réel. Vous personnalisez les paramètres comme vous le souhaitez. Vous pouvez tester des fonctionnalités et des animations facilement.
            Partager votre travail : la plateforme vous permet de partager vos lignes de code et vos projets avec d’autres utilisateurs, mais aussi d’accéder aux travaux d’autres développeurs pour trouver l’inspiration.
            Améliorer ses compétences : la plateforme organise des challenges hebdomadaires afin d’approfondir vos compétences et votre créativité.
            Favoriser la collaboration : il est possible de modifier et saisir du code simultanément. Une zone de chat permet de communiquer avec son binôme à distance.");
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
        $tool_7_1_1->setImgUrl("https://openai.com/content/images/2022/05/openai-avatar.png");

        $tool_8_2_1 = new Tool();
        $tool_8_2_1->setName("CoinMarketCap");
        $tool_8_2_1->setUrl("coinmarketcap");
        $tool_8_2_1->setShortDescription("CoinMarketCap description brève");
        $tool_8_2_1->setDescription("CoinMarketCap grande description !!!");
        $tool_8_2_1->setAffiliateRef("https://coinmarketcap.com/");
        $tool_8_2_1->setCodePromo("G");
        $tool_8_2_1->setImgUrl("https://coinmarketcap.com/apple-touch-icon.png");

        $tool_9_3_1 = new Tool();
        $tool_9_3_1->setName("Boursorama Banque");
        $tool_9_3_1->setUrl("boursorama-banque");
        $tool_9_3_1->setShortDescription("Boursorama Banque description brève");
        $tool_9_3_1->setDescription("Boursorama Banque grande description !!!");
        $tool_9_3_1->setAffiliateRef("​https://bour.so/T5St2UhPFT");
        $tool_9_3_1->setCodePromo("H");
        $tool_9_3_1->setImgUrl("https://bourse.boursorama.com/bundles/boursoramaui/images/favicons/favicon-32x32.png");

        $manager->persist($tool_1_1_1);
        $manager->persist($tool_2_3_1);
        $manager->persist($tool_3_1_1);
        $manager->persist($tool_4_6_1);
        $manager->persist($tool_5_1_1);
        $manager->persist($tool_6_1_1);
        $manager->persist($tool_7_1_1);
        $manager->persist($tool_8_2_1);
        $manager->persist($tool_9_3_1);
        

        $this->addReference("tool_1_1_1", $tool_1_1_1);
        $this->addReference("tool_2_3_1", $tool_2_3_1);
        $this->addReference("tool_3_1_1", $tool_3_1_1);
        $this->addReference("tool_4_6_1", $tool_4_6_1);
        $this->addReference("tool_5_1_1", $tool_5_1_1);
        $this->addReference("tool_6_1_1", $tool_6_1_1);
        $this->addReference("tool_7_1_1", $tool_7_1_1);
        $this->addReference("tool_8_2_1", $tool_8_2_1);
        $this->addReference("tool_9_3_1", $tool_9_3_1);

        $manager->flush();
    }
}
