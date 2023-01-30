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

        $tool_1_4_1 = new Tool();
        $tool_1_4_1->setName("SVGator");
        $tool_1_4_1->setUrl("svgator");
        $tool_1_4_1->setShortDescription("Le moyen le plus simple d'animer les vidéos");
        $tool_1_4_1->setDescription("SVGator a été conçu pour simplifier la méthode d'animation SVG. 
        Il s'agit d'une interface en ligne puissante dotée des fonctionnalités les plus avancées pour l'animation SVG,
        la création de graphiques animés en couleur, en morphing, en skew et en stroke-path. Il permet aux designers graphiques 
        de mettre à jour des illustrations, des logos, des arrière-plans et des animations à l'aide de la bibliothèque intégrée 
        d'éléments, qui comprend des icônes commerciales, des symboles, des panneaux, des formes et des avatars animés.");
        $tool_1_4_1->setAffiliateRef("https://www.svgator.com/");
        $tool_1_4_1->setCodePromo("A");
        $tool_1_4_1->setImgUrl("https://www.svgator.com/favicon-32x32.png?v=dbb9a944e4cc2c9fb6026c1dcbde84dd");
        
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

        $tool_1_7_1 = new Tool();
        $tool_1_7_1->setName("UI8");
        $tool_1_7_1->setUrl("ui8");
        $tool_1_7_1->setShortDescription("UI8 l'infinité de choix de web design");
        $tool_1_7_1->setDescription("UI8 est une place de marché créée par les principaux leaders du secteur de la conception de template de site web
        pour apporter les meilleures ressources et solutions dans tous le processus de conception et design. Le site est alimenté par plus de 622 000 
        designer et concepteur du monde entier, ce qui assure un large choix de template peu importe le domaine");
        $tool_1_7_1->setAffiliateRef("https://ui8.net/");
        $tool_1_7_1->setCodePromo("A");
        $tool_1_7_1->setImgUrl("https://ui8.net/favicon.ico");

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

        $tool_4_2_2 = new Tool();
        $tool_4_2_2->setName("Unkle");
        $tool_4_2_2->setUrl("unkle");
        $tool_4_2_2->setShortDescription("Unkle l'outil locatif immobilier");
        $tool_4_2_2->setDescription("Unkle a été fondée en 2018 et propose de produits d’assurance à destination des locataires
        et propriétaires. Leur objectif est de faciliter l’accès au logement aux personnes sans garant et dont le profil
        ne correspond pas aux exigences des assurances loyers impayés. Les bailleurs sont eux assurés 
        d’avoir une garantie sur les loyers.");
        $tool_4_2_2->setAffiliateRef("https://www.unkle.fr/");
        $tool_4_2_2->setCodePromo("H");
        $tool_4_2_2->setImgUrl("https://assets.website-files.com/61017ce461144e8b7ef7d545/6126399eaadd609da8af685b_favicon.ico");

        $tool_4_2_3 = new Tool();
        $tool_4_2_3->setName("Fundimmo");
        $tool_4_2_3->setUrl("fundimmo");
        $tool_4_2_3->setShortDescription("Investissez dans l'immobilier autrement");
        $tool_4_2_3->setDescription(" FUNDIMMO, première plateforme de financement participatif immobilier régulée 
        par l’Autorité des Marchés Financiers. FUNDIMMO privilégie la qualité à la quantité de projets, ce qui lui permet depuis sa création
        de n’avoir connu aucune défaillance en matière de rendement ou de perte en capital. C’est donc 100% de taux de réussite dont 29% des projets
        sont remboursés de manière anticipée, soit un gain plus rapide pour les investisseurs. FUNDIMMO affiche également 0 % de taux de défaut à ce jour et aucun retard de remboursement.");
        $tool_4_2_3->setAffiliateRef("https://www.fundimmo.com/");
        $tool_4_2_3->setCodePromo("H");
        $tool_4_2_3->setImgUrl("https://www.fundimmo.com/favicon-32x32.png");

        $tool_4_3_1 = new Tool();
        $tool_4_3_1->setName("Fiverr");
        $tool_4_3_1->setUrl("fiverr");
        $tool_4_3_1->setShortDescription("Les services de freelance parfaits pour votre entreprise");
        $tool_4_3_1->setDescription("Fiverr est une plateforme de services qui permet aux entrepreneurs et entreprises de recruter
        facilement des talents, principalement pour des services dans le digital. De l'autre côté, Fiverr France permet aux freelances
        de développer leur business et de trouver facilement de nouveaux contrats. 
        La plateforme propose par ailleurs d'autres services, ainsi que différents niveaux de professionnalisme, avec Fiverr Pro.");
        $tool_4_3_1->setAffiliateRef("https://www.fiverr.com/");
        $tool_4_3_1->setCodePromo("H");
        $tool_4_3_1->setImgUrl("https://fiverr-res.cloudinary.com/npm-assets/layout-server/favicon-32x32.8f21439.png");

        $tool_4_3_2 = new Tool();
        $tool_4_3_2->setName("Dotcomkings");
        $tool_4_3_2->setUrl("dotcomkings");
        $tool_4_3_2->setShortDescription("Dotcomkings");
        $tool_4_3_2->setDescription("dotcomkings");
        $tool_4_3_2->setAffiliateRef("https://www.lybox.fr/");
        $tool_4_3_2->setCodePromo("H");
        $tool_4_3_2->setImgUrl("https://www.lybox.fr/build/images/logo-picto.png.47b33564.webp");

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

        $tool_5_2_1 = new Tool();
        $tool_5_2_1->setName("VWO");
        $tool_5_2_1->setUrl("vwo");
        $tool_5_2_1->setShortDescription("CodePen est un éditeur de code en ligne");
        $tool_5_2_1->setDescription("Visual Website Optimizer (VWO) est une plateforme leader d'optimisation et de test de sites web 
        utilisée par plus de 4 000 marques dans 90 pays pour analyser l'activité web et augmenter les conversions.
        VWO Testing est basé sur le cloud et ne nécessite pas de compétences techniques particulières pour être pris en main.");
        $tool_5_2_1->setAffiliateRef("https://vwo.com/");
        $tool_5_2_1->setCodePromo("E");
        $tool_5_2_1->setImgUrl("https://vwo.com/wp-content/plugins/vwo-common-templates/images/favicon/apple-touch-icon-57x57.png");

        $tool_5_3_1 = new Tool();
        $tool_5_3_1->setName("OVHcloud");
        $tool_5_3_1->setUrl("ovhcloud");
        $tool_5_3_1->setShortDescription("Leader européen du cloud");
        $tool_5_3_1->setDescription("Entreprise spécialisée dans l’hébergement la plus connue en France et en Europe. 
        Anciennement OVH (le changement a été opéré en octobre 2019), OVHcloud est une entreprise française
        qui a pour cœur de métier l’hébergement de serveurs et qui depuis 2010 s’est de plus en plus portée vers le cloud computing.");
        $tool_5_3_1->setAffiliateRef("https://www.ovhcloud.com/fr/");
        $tool_5_3_1->setCodePromo("E");
        $tool_5_3_1->setImgUrl("https://www.ovhcloud.com/fr/favicon.ico");

        $tool_5_3_2 = new Tool();
        $tool_5_3_2->setName("Heroku");
        $tool_5_3_2->setUrl("heroku");
        $tool_5_3_2->setShortDescription("CodePen est un éditeur de code en ligne");
        $tool_5_3_2->setDescription("Heroku est un moyen rapide de convertir votre idée en URL et de contourner facilement tous les maux
        de tête liés à la gestion de la plateforme. L’ensemble de ses services permet de faciliter le développement d’applications plus fiables.
        Heroku rend les processus de déploiement, de configuration, de mise à l’échelle, de réglage et de gestion des applications aussi simples et directs que possible.");
        $tool_5_3_2->setAffiliateRef("https://www.heroku.com/");
        $tool_5_3_2->setCodePromo("E");
        $tool_5_3_2->setImgUrl("https://www.herokucdn.com/favicon.ico");

        $tool_5_4_1 = new Tool();
        $tool_5_4_1->setName("Exercism");
        $tool_5_4_1->setUrl("exercism");
        $tool_5_4_1->setShortDescription("Exercism formation de programmation en ligne");
        $tool_5_4_1->setDescription("Développez votre maîtrise de 66 langages de programmation grâce à notre combinaison 
        unique d'apprentissage, de pratique et de tutorat. Exercism est amusant, efficace et 100% gratuit, pour toujours.");
        $tool_5_4_1->setAffiliateRef("https://exercism.org/");
        $tool_5_4_1->setCodePromo("E");
        $tool_5_4_1->setImgUrl("https://dg8krxphbh767.cloudfront.net/meta/favicon-32x32.png");

        $tool_5_4_2 = new Tool();
        $tool_5_4_2->setName("Roadmap");
        $tool_5_4_2->setUrl("roadmap");
        $tool_5_4_2->setShortDescription("Communauté d'apprentissage et d'éducation en programmation.");
        $tool_5_4_2->setDescription("Animé par sa communauté de 500 000 développeurs, Roadmap fournit des feuilles de route, des plans d'étude, 
        des parcours et des ressources pour les développeurs. Le site fournit des guides basés sur les rôles et les compétences. 
        Roadmap.sh propose des arbres de compétences et d'autres ressources visuelles pour que les développeurs puissent monter en compétences et évoluer dans leur carrière. 
        Celui-ci a commencé comme une page GitHub OpenSource en 2016, montrant des images statiques couvrant les paysages Frontend, Backend, et DevOps.");
        $tool_5_4_2->setAffiliateRef("https://roadmap.sh/");
        $tool_5_4_2->setCodePromo("E");
        $tool_5_4_2->setImgUrl("https://roadmap.sh/manifest/icon32.png");
        
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
        $tool_6_1_2->setDescription("Outil d'écriture IA qui vous aide à pomper du contenu plus rapidement, basé sur l'API GPT-3 d'OpenAI. 
        Grâce à son interface très conviviale, il vous suffit de lui donner quelques instructions, et Rytr commence à créer du contenu en fonction de celles-ci.
        L'un des meilleur assistant d'écriture IA que vous puissiez choisir grâce à la simplicité et la rapidité d'exécution.");
        $tool_6_1_2->setAffiliateRef("https://rytr.me/");
        $tool_6_1_2->setCodePromo("F");
        $tool_6_1_2->setImgUrl("https://storage.googleapis.com/rytr-me/public/favicon/favicon.ico");

        $tool_6_2_1 = new Tool();
        $tool_6_2_1->setName("Vocal Remover");
        $tool_6_2_1->setUrl("vocalremover");
        $tool_6_2_1->setShortDescription("L'éditeur IA vocal de piste audio");
        $tool_6_2_1->setDescription("L'outil permettant l'édition audio avec la division de la musique en voix et en pistes instrumentales séparées. 
        Vocal remover est excellent pour faire des pistes d'accompagnement de karaoké ou pour réaliser un extracteur d'accapella. 
        Celui-ci est très performant grâce aux algorithmes d'intelligence artificielle qui sont utilisés.");
        $tool_6_2_1->setAffiliateRef("https://vocalremover.org/");
        $tool_6_2_1->setCodePromo("F");
        $tool_6_2_1->setImgUrl("https://vocalremover.org/favicon.ico");

        $tool_6_2_2 = new Tool();
        $tool_6_2_2->setName("Soundful");
        $tool_6_2_2->setUrl("soundful");
        $tool_6_2_2->setShortDescription("Le générateur de musique grâce à l'IA");
        $tool_6_2_2->setDescription("Soundful est un générateur de musique IA qui permet aux créateurs de générer des titres libres de droits en un clic. 
        Les utilisateurs peuvent sélectionner un genre, personnaliser leurs entrées et créer leurs morceaux. 
        La plateforme propose également des échantillons de haute qualité aux créateurs de musique et permet 
        aux utilisateurs de monétiser leurs titres.");
        $tool_6_2_2->setAffiliateRef("https://soundful.com/");
        $tool_6_2_2->setCodePromo("F");
        $tool_6_2_2->setImgUrl("https://soundful.com/wp-content/uploads/2021/12/cropped-favicon-32x32.png");

        $tool_6_2_3 = new Tool();
        $tool_6_2_3->setName("Beatoven");
        $tool_6_2_3->setUrl("beatoven");
        $tool_6_2_3->setShortDescription("Technique de génération de musique avancée");
        $tool_6_2_3->setDescription("Avec Beatoven.ai, créez une musique unique, libre de droits, 
        qui correspond à votre histoire. Beatoven.ai utilise des techniques avancées de génération de musique par l'IA 
        pour composer une musique d'ambiance unique, adaptée à chaque partie de votre vidéo ou podcast.");
        $tool_6_2_3->setAffiliateRef("https://www.beatoven.ai/");
        $tool_6_2_3->setCodePromo("F");
        $tool_6_2_3->setImgUrl("https://soundful.com/wp-content/uploads/2021/12/cropped-favicon-32x32.png");

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
        
        $tool_6_4_2 = new Tool();
        $tool_6_4_2->setName("Synthesia");
        $tool_6_4_2->setUrl("synthesia");
        $tool_6_4_2->setShortDescription("Convertir et optimiser vos fichiers en ligne");
        $tool_6_4_2->setDescription("Synthesia vous permet de produire des vidéos attrayantes qui peuvent être utilisées pour l’accueil 
        des clients ou l’apprentissage en ligne. Pour créer une vidéo de qualité, tout ce dont vous avez besoin est un générateur de vidéo IA. 
        L’éditeur vidéo de Synthesia permet de réaliser une vidéo en toute simplicité, l’outil se charge du reste. 
        Il vous suffit de suivre quelques étapes. Voici un guide étape par étape sur la façon de créer une vidéo Synthesia.");
        $tool_6_4_2->setAffiliateRef("https://www.synthesia.io/");
        $tool_6_4_2->setCodePromo("F");
        $tool_6_4_2->setImgUrl("https://assets-global.website-files.com/61dc0796f359b6145bc06ea6/61dc0796f359b6681ac07045_favicon.ico");

        $tool_6_4_3 = new Tool();
        $tool_6_4_3->setName("Steve AI");
        $tool_6_4_3->setUrl("steveai");
        $tool_6_4_3->setShortDescription("Création de vidéo avec du texte");
        $tool_6_4_3->setDescription("Coller votre texte dans l'éditeur de script l'IA va choisir les ressources les plus pertinentes pour produire des vidéos attrayantes.
        Convertissez vos blogs en une ou plusieurs vidéos en quelques secondes sur tous les canaux. Réutilisez vos fichiers audio en les convertissant en vidéos à couper le souffle. 
        Extrayez le texte, créez un contexte et convertissez-le en vidéos d'une simplicité sans précedent.");
        $tool_6_4_3->setAffiliateRef("https://www.steve.ai/");
        $tool_6_4_3->setCodePromo("F");
        $tool_6_4_3->setImgUrl("https://www.steve.ai/assets/img/steve_fav_icon.png");

        $tool_6_6_1 = new Tool();
        $tool_6_6_1->setName("Namelix");
        $tool_6_6_1->setUrl("namelix");
        $tool_6_6_1->setShortDescription("Générateur de nom et de design d'entreprise");
        $tool_6_6_1->setDescription("Namelix est une plateforme qui permet aux entrepreneurs et aux startups 
        de créer des noms pour leurs entreprises, produits et services. Cela peut être fait automatiquement 
        en quelques secondes avec des algorithmes intelligents, ou manuellement avec un modèle de choix de noms.
        Il est également possible choisir et acheter leur nouveau nom directement à partir de leur plateforme.");
        $tool_6_6_1->setAffiliateRef("https://namelix.com/");
        $tool_6_6_1->setCodePromo("F");
        $tool_6_6_1->setImgUrl("https://namelix.com/favicon32.gif");

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

        $tool_8_1_1 = new Tool();
        $tool_8_1_1->setName("Degiro");
        $tool_8_1_1->setUrl("degiro");
        $tool_8_1_1->setShortDescription("Courtier compte titre action et autres");
        $tool_8_1_1->setDescription("DEGIRO est l'un des courtiers en bourse le plus important d'europe, avec plus d’un million de clients.
        Il donne accès à l’ensemble des bourses internationales avec des tarifs très avantageux en proposant un large choix d'ETF, d'actions, d'obligations et de fonds.
        La transparence et la simplicité de la plateforme, l’absence de frais annexes ainsi que la grande variété d'actifs, en font l'un des meilleurs choix pour investir en bourse.");
        $tool_8_1_1->setAffiliateRef("https://www.degiro.fr/");
        $tool_8_1_1->setCodePromo("H");
        $tool_8_1_1->setImgUrl("https://www.degiro.fr/assets/images/icon-ipad.png");

        $tool_8_1_2 = new Tool();
        $tool_8_1_2->setName("Trade Republic");
        $tool_8_1_2->setUrl("traderepublic");
        $tool_8_1_2->setShortDescription("Courtier en ligne actions, ETF et obligations");
        $tool_8_1_2->setDescription("Trade Republic est un courtier en ligne qui propose une plateforme de trading accessible aux particuliers. 
        Il offre des fonctionnalités telles que des transactions en temps réel, des graphiques en direct et des outils d’analyse technique pour aider les utilisateurs à prendre des décisions éclairées.
        La plateforme propose également des services tels que des alertes de prix et des alertes de nouvelles pour tenir les utilisateurs informés des dernières tendances du marché.");
        $tool_8_1_2->setAffiliateRef("https://traderepublic.com/favicon.ico");
        $tool_8_1_2->setCodePromo("H");
        $tool_8_1_2->setImgUrl("https://bourse.boursorama.com/bundles/boursoramaui/images/favicons/favicon-32x32.png");

        $tool_8_1_3 = new Tool();
        $tool_8_1_3->setName("eToro");
        $tool_8_1_3->setUrl("etoro");
        $tool_8_1_3->setShortDescription("Meilleure platforme de trading social");
        $tool_8_1_3->setDescription("eToro appartient au cercle fermé des grandes références de la bourse pour les particuliers. 
        Avec plus de 20 millions de clients et bientôt 15 ans d’existence, eToro est incontournable. C’est aussi l’un des rares 
        courtiers qui propose une exposition aux crypto-monnaies tout en étant régulé en Europe. eToro permet d’investir sur des actions,
         des matières premières ou encore acheter des crypto-monnaies depuis une seule et unique interface.");
        $tool_8_1_3->setAffiliateRef("​https://etoro.tw/3JlCISx");
        $tool_8_1_3->setCodePromo("H");
        $tool_8_1_3->setImgUrl("https://bourse.boursorama.com/bundles/boursoramaui/images/favicons/favicon-32x32.png");

        $tool_8_2_1 = new Tool();
        $tool_8_2_1->setName("Boursorama Banque");
        $tool_8_2_1->setUrl("boursorama-banque");
        $tool_8_2_1->setShortDescription("Banque et instruments financier en ligne");
        $tool_8_2_1->setDescription("L’une des plus anciennes banque en ligne du marché. 
        Elle est souvent qualifiée de banque la moins chère, ce qui lui vaut un succès incontestable : 
        plus de 2 millions de clients depuis sa création, soit le leader incontestable du marché des banques en ligne. 
        Le créneau de la banque est donc axé sur des prix très compétitifs associés à une offre large de produits, 
        à l’instar de ce qui peut être proposé dans une banque physique.");
        $tool_8_2_1->setAffiliateRef("https://www.degiro.fr/parrainage/commencez-a-investir?id=5EE08185&utm_source=mgm");
        $tool_8_2_1->setCodePromo("H");
        $tool_8_2_1->setImgUrl("https://marketing.etorostatic.com/cache1/hp/v_251/images/favicon/favicon-32x32.png");

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
        $manager->persist($tool_1_4_1);
        $manager->persist($tool_1_5_1);
        $manager->persist($tool_1_6_1);
        $manager->persist($tool_1_6_2);
        $manager->persist($tool_1_7_1);

        $manager->persist($tool_2_1_1);
        $manager->persist($tool_2_1_2);
        $manager->persist($tool_2_3_1);

        $manager->persist($tool_3_3_1);
        $manager->persist($tool_3_4_1);
        $manager->persist($tool_3_4_2);

        $manager->persist($tool_4_1_1);
        $manager->persist($tool_4_2_1);
        $manager->persist($tool_4_2_2);
        $manager->persist($tool_4_2_3);
        $manager->persist($tool_4_3_1);
        $manager->persist($tool_4_3_2);

        $manager->persist($tool_5_1_1);
        $manager->persist($tool_5_2_1);
        $manager->persist($tool_5_3_1);
        $manager->persist($tool_5_3_2);
        $manager->persist($tool_5_4_1);
        $manager->persist($tool_5_4_2);

        $manager->persist($tool_6_1_1);
        $manager->persist($tool_6_1_2);
        $manager->persist($tool_6_2_1);
        $manager->persist($tool_6_2_2);
        $manager->persist($tool_6_2_3);
        $manager->persist($tool_6_3_1);
        $manager->persist($tool_6_4_1);
        $manager->persist($tool_6_4_2);
        $manager->persist($tool_6_4_3);
        $manager->persist($tool_6_6_1);

        $manager->persist($tool_7_3_1);
        $manager->persist($tool_7_5_1); 
        $manager->persist($tool_7_6_1);
        
        $manager->persist($tool_8_1_1);
        $manager->persist($tool_8_1_2);
        $manager->persist($tool_8_1_3);
        $manager->persist($tool_8_2_1);
        $manager->persist($tool_8_6_1);
        

        $this->addReference("tool_1_1_1", $tool_1_1_1);
        $this->addReference("tool_1_4_1", $tool_1_4_1);
        $this->addReference("tool_1_5_1", $tool_1_5_1);
        $this->addReference("tool_1_6_1", $tool_1_6_1);
        $this->addReference("tool_1_6_2", $tool_1_6_2);
        $this->addReference("tool_1_7_1", $tool_1_7_1);

        $this->addReference("tool_2_1_1", $tool_2_1_1);
        $this->addReference("tool_2_1_2", $tool_2_1_2);
        $this->addReference("tool_2_3_1", $tool_2_3_1);

        $this->addReference("tool_3_3_1", $tool_3_3_1);
        $this->addReference("tool_3_4_1", $tool_3_4_1);
        $this->addReference("tool_3_4_2", $tool_3_4_2);

        $this->addReference("tool_4_1_1", $tool_4_1_1);
        $this->addReference("tool_4_2_1", $tool_4_2_1);
        $this->addReference("tool_4_2_2", $tool_4_2_2);
        $this->addReference("tool_4_2_3", $tool_4_2_3);
        $this->addReference("tool_4_3_1", $tool_4_3_1);
        $this->addReference("tool_4_3_2", $tool_4_3_2);

        $this->addReference("tool_5_1_1", $tool_5_1_1);
        $this->addReference("tool_5_2_1", $tool_5_2_1);
        $this->addReference("tool_5_3_1", $tool_5_3_1);
        $this->addReference("tool_5_3_2", $tool_5_3_2);
        $this->addReference("tool_5_4_1", $tool_5_4_1);
        $this->addReference("tool_5_4_2", $tool_5_4_2);

        $this->addReference("tool_6_1_1", $tool_6_1_1);
        $this->addReference("tool_6_1_2", $tool_6_1_2);
        $this->addReference("tool_6_2_1", $tool_6_2_1);
        $this->addReference("tool_6_2_2", $tool_6_2_2);
        $this->addReference("tool_6_2_3", $tool_6_2_3);
        $this->addReference("tool_6_3_1", $tool_6_3_1);
        $this->addReference("tool_6_4_1", $tool_6_4_1);
        $this->addReference("tool_6_4_2", $tool_6_4_2);
        $this->addReference("tool_6_4_3", $tool_6_4_3);
        $this->addReference("tool_6_6_1", $tool_6_6_1);

        $this->addReference("tool_7_3_1", $tool_7_3_1);
        $this->addReference("tool_7_5_1", $tool_7_5_1);
        $this->addReference("tool_7_6_1", $tool_7_6_1);

        $this->addReference("tool_8_1_1", $tool_8_1_1);
        $this->addReference("tool_8_1_2", $tool_8_1_2);
        $this->addReference("tool_8_1_3", $tool_8_1_3);
        $this->addReference("tool_8_2_1", $tool_8_2_1);
        $this->addReference("tool_8_6_1", $tool_8_6_1);

        $manager->flush();
    }
}
