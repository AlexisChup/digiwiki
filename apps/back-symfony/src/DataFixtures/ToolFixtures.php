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
        $tool_1_1_1->setName("Icon Sax");
        $tool_1_1_1->setUrl("icon-sax");
        $tool_1_1_1->setShortDescription("Icon Sax description brève");
        $tool_1_1_1->setDescription("Icon Sax grande description !!!");
        $tool_1_1_1->setAffiliateRef("https://iconsax.io");
        $tool_1_1_1->setCodePromo("ICOSA22");
        $tool_1_1_1->setImgUrl("https://iconsax.io/logo-vuesax.svg");
        
        $tool_1_5_1 = new Tool();
        $tool_1_5_1->setName("Morflax");
        $tool_1_5_1->setUrl("morflax");
        $tool_1_5_1->setShortDescription("Morflax description brève");
        $tool_1_5_1->setDescription("Morflax grande description !!!");
        $tool_1_5_1->setAffiliateRef("https://morflax.com/");
        $tool_1_5_1->setCodePromo("A");
        $tool_1_5_1->setImgUrl("https://morflax.com/favicon.jpg");

        $tool_1_6_1 = new Tool();
        $tool_1_6_1->setName("Palette Maker");
        $tool_1_6_1->setUrl("palettemaker");
        $tool_1_6_1->setShortDescription("Créez et testez des palettes de couleurs sur des exemples réels de conception.");
        $tool_1_6_1->setDescription("Palettemaker est un outil unique destiné aux professionnels de la création 
        et aux amateurs de couleurs. Il vous permet de créer des palettes de couleurs et de tester leur comportement 
        dans des exemples de conception préétablis issus des domaines créatifs les plus courants, tels que la conception de logos, 
        l'UI/UX, les motifs, les affiches, etc.");
        $tool_1_6_1->setAffiliateRef("https://palettemaker.com/");
        $tool_1_6_1->setCodePromo("A");
        $tool_1_6_1->setImgUrl("https://palettemaker.com/favicon.ico");

        $tool_1_6_2 = new Tool();
        $tool_1_6_2->setName("Huemint");
        $tool_1_6_2->setUrl("huemint");
        $tool_1_6_2->setShortDescription("Palette de couleurs à inclure dans une maquette");
        $tool_1_6_2->setDescription("Huemint est une application activée par l’IA pour générer des couleurs basées 
        sur le contexte palettes prêtes à être utilisées. Vous pouvez visualiser instantanément votre jeu de couleurs 
        dans une maquette de logo de marque, une illustration et plus encore, ce qui vous fait gagner du temps et des efforts.");
        $tool_1_6_2->setAffiliateRef("https://huemint.com/");
        $tool_1_6_2->setCodePromo("A");
        $tool_1_6_2->setImgUrl("https://huemint.com/assets/img/logo-32.png");

        $tool_2_1_1 = new Tool();
        $tool_2_1_1->setName("Ahref");
        $tool_2_1_1->setUrl("ahref");
        $tool_2_1_1->setShortDescription("Ahref SEO description brève");
        $tool_2_1_1->setDescription("Ahref grande description !!!");
        $tool_2_1_1->setAffiliateRef("https://ahrefs.com/fr");
        $tool_2_1_1->setCodePromo("B");
        $tool_2_1_1->setImgUrl("https://assets-3b70.kxcdn.com/images/mediakit/logo_dark@2x.png");

        $tool_2_1_2 = new Tool();
        $tool_2_1_2->setName("PrepostSEO");
        $tool_2_1_2->setUrl("prepostseo");
        $tool_2_1_2->setShortDescription("PrePostSEO outil de référencement en ligne gratuit.");
        $tool_2_1_2->setDescription("PrePostSEO est un outil de référencement en ligne gratuit 
        qui vous aide à améliorer le classement de votre site Web dans les pages de résultats des moteurs de recherche (SERP). 
        Il met à votre disposition une série de fonctionnalités qui vous permettent d'optimiser votre site Web
        pour une meilleure visibilité et un trafic plus important.");
        $tool_2_1_2->setAffiliateRef("https://www.prepostseo.com/");
        $tool_2_1_2->setCodePromo("B");
        $tool_2_1_2->setImgUrl("https://www.prepostseo.com/imgs/icon-2.png");

        $tool_2_3_1 = new Tool();
        $tool_2_3_1->setName("Marketing Exemples");
        $tool_2_3_1->setUrl("marketingexamples");
        $tool_2_3_1->setShortDescription("Marketing Exemples complete business exemples.");
        $tool_2_3_1->setDescription("Marketing Exemples complete business exemples.");
        $tool_2_3_1->setAffiliateRef("https://marketingexamples.com/");
        $tool_2_3_1->setCodePromo("B");
        $tool_2_3_1->setImgUrl("https://s3.amazonaws.com/harrydry/gdmarketing/meFav.png");

        $tool_3_3_1 = new Tool();
        $tool_3_3_1->setName("Notion");
        $tool_3_3_1->setUrl("notion");
        $tool_3_3_1->setShortDescription("Centralisation de tâches, notes, documents, projets et bases de données");
        $tool_3_3_1->setDescription("Notion est une plateforme collaborative créée dans le but de centraliser 
        tout votre travail en un seul endroit pour vous éviter d’avoir à naviguer sur plusieurs outils. 
        Vous pouvez gérer vos notes, vos documents, vos tâches, vos projets et vos tableaux 
        sur un emplacement dédié et partagé avec votre équipe.");
        $tool_3_3_1->setAffiliateRef("https://www.notion.so/fr-fr");
        $tool_3_3_1->setCodePromo("C");
        $tool_3_3_1->setImgUrl("https://www.notion.so/front-static/favicon.ico");

        $tool_3_4_1 = new Tool();
        $tool_3_4_1->setName("Excelformulabot");
        $tool_3_4_1->setUrl("excelformulabot");
        $tool_3_4_1->setShortDescription("Excelformulabot description brève");
        $tool_3_4_1->setDescription("Excelformulabot grande description !!!");
        $tool_3_4_1->setAffiliateRef("https://excelformulabot.com/");
        $tool_3_4_1->setCodePromo("C");
        $tool_3_4_1->setImgUrl("https://pbs.twimg.com/profile_images/1572751321593176064/9oGeTW3I_400x400.jpg");

        $tool_3_4_2 = new Tool();
        $tool_3_4_2->setName("Omnicalculator");
        $tool_3_4_2->setUrl("omnicalculator");
        $tool_3_4_2->setShortDescription("Bibliothèque de plus de 860 calculatrices différentes");
        $tool_3_4_2->setDescription("Omni Calculator est un concentré de ressources pour tout calculer qui n’a au final qu’un seul défaut ou presque. Le site est en anglais. Une fois dépassé ce petit obstacle, 
        il fera néanmoins le bonheur de tous ceux et celles qui ont besoin de jongler avec les chiffres.
        Omni calculator propose une liste de catégories ou sont classées l’ensemble des calculatrices 
        à votre disposition. Classement par thèmes : Affaires, Conversions, Santé, Chimie… j’en passe et des meilleures. 
        À vous d’explorer ensuite chaque catégorie pour trouver le bon outil spécialisé capable de mener à bien votre calcul.");
        $tool_3_4_2->setAffiliateRef("https://www.omnicalculator.com/");
        $tool_3_4_2->setCodePromo("C");
        $tool_3_4_2->setImgUrl("https://www.omnicalculator.com/assets/favicons/favicon-04452dcdb0.png");

        $tool_4_1_1 = new Tool();
        $tool_4_1_1->setName("Qonto");
        $tool_4_1_1->setUrl("qonto");
        $tool_4_1_1->setShortDescription("Compte et gestion professionnel en ligne.");
        $tool_4_1_1->setDescription("Banque professionnelle et compte pro en ligne faisant parti d'un des meilleur compte professionnel du marché. 
        Des tarifs très compétitifs, une offre large, des outils innovants pour simplifier le quotidien 
        des entrepreneurs et de leurs collaborateurs en font un compte pro excellent sur bon nombre d’aspects.");
        $tool_4_1_1->setAffiliateRef("https://qonto.com/fr");
        $tool_4_1_1->setCodePromo("D");
        $tool_4_1_1->setImgUrl("https://qonto.com/blog/assets/favicon-4d6e34e7e3746d9c0311bc688d2835bbf02d40a5a65fbc7468190b31a339fdf2.svg");

        $tool_4_2_1 = new Tool();
        $tool_4_2_1->setName("Lybox");
        $tool_4_2_1->setUrl("lybox");
        $tool_4_2_1->setShortDescription("Lybox l'outil immobilier tout en un");
        $tool_4_2_1->setDescription("Lybox est un outil en ligne qui permet d’accélérer et faciliter les recherches immobilières. 
        Il permet aux investisseurs immobiliers et professionnels de l'immobilier de dénicher rapidement des biens immobiliers 
        rentables sans avoir à consulter plusieurs sites et de l'analyser (rendement locatif, fiscalité, ...) 
        au sein d'une seule et même plateforme.");
        $tool_4_2_1->setAffiliateRef("https://www.lybox.fr/");
        $tool_4_2_1->setCodePromo("H");
        $tool_4_2_1->setImgUrl("https://www.lybox.fr/build/images/logo-picto.png.47b33564.webp");

        $tool_5_1_1 = new Tool();
        $tool_5_1_1->setName("Codepen");
        $tool_5_1_1->setUrl("codepen");
        $tool_5_1_1->setShortDescription("CodePen est un éditeur de code en ligne");
        $tool_5_1_1->setDescription("CodePen est un éditeur de code en ligne qui permet de partager du code, de créer et de déployer un site web ou encore de réaliser des tests. 
        Cet outil s’adresse aux concepteurs et développeurs front-end. Ils peuvent puiser dans les travaux de plus de 1,8 million d’autres développeurs dans le monde.
        La plateforme permet de :
            Écrire et tester du code : CodePen dispose d’un IDE qui vous donne la possibilité de rédiger des lignes de code HTML/CSS/JavaScript. Un volet de visualisation situé en bas de page permet de voir l’avancement de votre projet en temps réel. Vous personnalisez les paramètres comme vous le souhaitez. Vous pouvez tester des fonctionnalités et des animations facilement.
            Partager votre travail : la plateforme vous permet de partager vos lignes de code et vos projets avec d’autres utilisateurs, mais aussi d’accéder aux travaux d’autres développeurs pour trouver l’inspiration.
            Améliorer ses compétences : la plateforme organise des challenges hebdomadaires afin d’approfondir vos compétences et votre créativité.
            Favoriser la collaboration : il est possible de modifier et saisir du code simultanément. Une zone de chat permet de communiquer avec son binôme à distance.");
        $tool_5_1_1->setAffiliateRef("https://codepen.io/");
        $tool_5_1_1->setCodePromo("E");
        $tool_5_1_1->setImgUrl("https://cpwebassets.codepen.io/assets/favicon/apple-touch-icon-5ae1a0698dcc2402e9712f7d01ed509a57814f994c660df9f7a952f3060705ee.png");

        $tool_6_1_1 = new Tool();
        $tool_6_1_1->setName("ChatGPT");
        $tool_6_1_1->setUrl("chatgpt");
        $tool_6_1_1->setShortDescription("ChatGPT description brève");
        $tool_6_1_1->setDescription("ChatGPT grande description !!!");
        $tool_6_1_1->setAffiliateRef("https://chat.openai.com/");
        $tool_6_1_1->setCodePromo("F");
        $tool_6_1_1->setImgUrl("https://openai.com/content/images/2022/05/openai-avatar.png");

        $tool_6_1_2 = new Tool();
        $tool_6_1_2->setName("Rytr.me");
        $tool_6_1_2->setUrl("rytrme");
        $tool_6_1_2->setShortDescription("Outil d'écriture IA");
        $tool_6_1_2->setDescription("outil d'écriture IA qui vous aide à pomper du contenu plus rapidement, basé sur l'API GPT-3 d'OpenAI. 
        Grâce à son interface très conviviale, il vous suffit de lui donner quelques instructions, et Rytr commence à créer du contenu en fonction de celles-ci.
        L'un des meilleur assistant d'écriture IA que vous puissiez choisir grâce à la simplicité et la rapidité d'exécution.");
        $tool_6_1_2->setAffiliateRef("https://rytr.me/");
        $tool_6_1_2->setCodePromo("F");
        $tool_6_1_2->setImgUrl("https://storage.googleapis.com/rytr-me/public/favicon/favicon.ico");

        $tool_6_3_1 = new Tool();
        $tool_6_3_1->setName("Autodraw");
        $tool_6_3_1->setUrl("autodraw");
        $tool_6_3_1->setShortDescription("Le nouveau type d’outil de dessin");
        $tool_6_3_1->setDescription("outil de dessin qui vous permet de gribouiller ce que vous voulez et qui, 
        grâce à un système de machine learning, comprendra ce que vous avez dessiné 
        et vous fera une suggestion de dessins d’artistes censés correspondre au vôtre.");
        $tool_6_3_1->setAffiliateRef("https://www.autodraw.com/");
        $tool_6_3_1->setCodePromo("F");
        $tool_6_3_1->setImgUrl("https://www.autodraw.com/assets/images/favicon.png");

        $tool_6_4_1 = new Tool();
        $tool_6_4_1->setName("TinyWow");
        $tool_6_4_1->setUrl("tinywow");
        $tool_6_4_1->setShortDescription("Convertir et optimiser vos fichiers en ligne");
        $tool_6_4_1->setDescription("TinyWow est une plateforme qui propose divers outils gratuits pour la gestion 
        de vos images, vidéos, PDF et autres fichiers. Le site propose des options d'édition simples comme la conversion 
        de documents dans un format cible, la coupure, le redimensionnement et la conversion de vidéos en WebP ou GIF.");
        $tool_6_4_1->setAffiliateRef("https://tinywow.com/");
        $tool_6_4_1->setCodePromo("F");
        $tool_6_4_1->setImgUrl("https://tinywow.com/v2/img/favicon.png");

        $tool_7_3_1 = new Tool();
        $tool_7_3_1->setName("Ledger");
        $tool_7_3_1->setUrl("ledger");
        $tool_7_3_1->setShortDescription("Ledger le wallet crypto physique français");
        $tool_7_3_1->setDescription("Un wallet Ledger est un portefeuille matériel qui permet de stocker 
        en toute sécurité des cryptomonnaies. Il s'agit d'un dispositif physique, de taille similaire à une clé USB, 
        qui peut être connecté à un ordinateur ou un téléphone pour interagir de manière sécurisée avec ses crypto-monnaies.");
        $tool_7_3_1->setAffiliateRef("https://www.ledger.com/fr");
        $tool_7_3_1->setCodePromo("G");
        $tool_7_3_1->setImgUrl("https://www.ledger.com/wp-content/themes/ledger-v2/public/images/ledger-logo-long.svg");

        $tool_7_5_1 = new Tool();
        $tool_7_5_1->setName("CoinMarketCap");
        $tool_7_5_1->setUrl("coinmarketcap");
        $tool_7_5_1->setShortDescription("CoinMarketCap description brève");
        $tool_7_5_1->setDescription("CoinMarketCap grande description !!!");
        $tool_7_5_1->setAffiliateRef("https://coinmarketcap.com/");
        $tool_7_5_1->setCodePromo("G");
        $tool_7_5_1->setImgUrl("https://coinmarketcap.com/apple-touch-icon.png");

        $tool_7_6_1 = new Tool();
        $tool_7_6_1->setName("TradingView");
        $tool_7_6_1->setUrl("tradingview");
        $tool_7_6_1->setShortDescription("TradingView - L'analyse technique et la communauté reliées au meilleur endroit");
        $tool_7_6_1->setDescription("L'une des plus grande communauté d'investisseurs sur le Web, plus de 15,5 millions d'investisseurs actifs, 
        6 millions d'idées de négociation et 34 millions de graphiques créés par les utilisateurs. Composé de résumés d'analyses techniques, 
        en agrégeant les signaux de dizaines d'indicateurs pour obtenir une force de signal d'achat ou de vente simple.");
        $tool_7_6_1->setAffiliateRef("https://fr.tradingview.com/");
        $tool_7_6_1->setCodePromo("G");
        $tool_7_6_1->setImgUrl("https://avatars.githubusercontent.com/u/7644688?s=280&v=4");

        $tool_8_2_1 = new Tool();
        $tool_8_2_1->setName("Boursorama Banque");
        $tool_8_2_1->setUrl("boursorama-banque");
        $tool_8_2_1->setShortDescription("Boursorama Banque description brève");
        $tool_8_2_1->setDescription("Boursorama Banque grande description !!!");
        $tool_8_2_1->setAffiliateRef("​https://bour.so/T5St2UhPFT");
        $tool_8_2_1->setCodePromo("H");
        $tool_8_2_1->setImgUrl("https://bourse.boursorama.com/bundles/boursoramaui/images/favicons/favicon-32x32.png");

        $tool_8_6_1 = new Tool();
        $tool_8_6_1->setName("Investing");
        $tool_8_6_1->setUrl("investing");
        $tool_8_6_1->setShortDescription("L'un des leader des portails financier");
        $tool_8_6_1->setDescription("L'un des trois portails financiers les plus performants au monde aujourd'hui. 
        Le trader peut utiliser gratuitement plus de 3 millions d'instruments financiers et outils utiles et 
        professionnels qui l'aident à prendre des décisions judicieuses dans le négoce de titres. 
        Investing.com propose également une sélection de courtiers et plusieurs applications.");
        $tool_8_6_1->setAffiliateRef("https://www.investing.com/");
        $tool_8_6_1->setCodePromo("H");
        $tool_8_6_1->setImgUrl("https://i-invdn-com.investing.com/logos/favicon.ico");

        $manager->persist($tool_1_1_1);
        $manager->persist($tool_1_5_1);
        $manager->persist($tool_1_6_1);
        $manager->persist($tool_1_6_2);
        $manager->persist($tool_2_1_1);
        $manager->persist($tool_2_1_2);
        $manager->persist($tool_2_3_1);
        $manager->persist($tool_3_3_1);
        $manager->persist($tool_3_4_1);
        $manager->persist($tool_3_4_2);
        $manager->persist($tool_4_1_1);
        $manager->persist($tool_4_2_1);
        $manager->persist($tool_5_1_1);
        $manager->persist($tool_6_1_1);
        $manager->persist($tool_6_1_2);
        $manager->persist($tool_6_3_1);
        $manager->persist($tool_6_4_1);
        $manager->persist($tool_7_3_1);
        $manager->persist($tool_7_5_1); 
        $manager->persist($tool_7_6_1);
        $manager->persist($tool_8_2_1);
        $manager->persist($tool_8_6_1);
        

        $this->addReference("tool_1_1_1", $tool_1_1_1);
        $this->addReference("tool_1_5_1", $tool_1_5_1);
        $this->addReference("tool_1_6_1", $tool_1_6_1);
        $this->addReference("tool_1_6_2", $tool_1_6_2);
        $this->addReference("tool_2_1_1", $tool_2_1_1);
        $this->addReference("tool_2_1_2", $tool_2_1_2);
        $this->addReference("tool_2_3_1", $tool_2_3_1);
        $this->addReference("tool_3_3_1", $tool_3_3_1);
        $this->addReference("tool_3_4_1", $tool_3_4_1);
        $this->addReference("tool_3_4_2", $tool_3_4_2);
        $this->addReference("tool_4_1_1", $tool_4_1_1);
        $this->addReference("tool_5_1_1", $tool_5_1_1);
        $this->addReference("tool_6_1_1", $tool_6_1_1);
        $this->addReference("tool_6_1_2", $tool_6_1_2);
        $this->addReference("tool_6_3_1", $tool_6_3_1);
        $this->addReference("tool_6_4_1", $tool_6_4_1);
        $this->addReference("tool_7_3_1", $tool_7_3_1);
        $this->addReference("tool_7_5_1", $tool_7_5_1);
        $this->addReference("tool_7_6_1", $tool_7_6_1);
        $this->addReference("tool_8_2_1", $tool_8_2_1);
        $this->addReference("tool_8_6_1", $tool_8_6_1);

        $manager->flush();
    }
}
