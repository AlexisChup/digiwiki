import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet";

export default function About() {
  let navigate = useNavigate();

  return (
    <div className="container pt-3">
      <Helmet>
        <title>Digiwiki - À propos</title>
        <meta
          name="description"
          content={
            "Digiwiki, découvrez les meilleurs outils digitaux disponibles sur internet !"
          }
        />
        <link rel="canonical" href="https://www.digiwiki.io/about" />
      </Helmet>
      <div className="row">
        <div className="col-responsive">
          <div className="row mt-3 mb-2 mx-auto">
            <h1 className="mb-3 fw-bold">À propos de DigiWiki</h1>
            <h2 className="mb-2 fw-bold">
              Découvrez les meilleurs outils digitaux disponibles sur internet !
            </h2>
            <p>Que vous soyez 👇:</p>
            <ul>
              <li>👨‍💻 Un développeur.</li>
              <li>💵 Un féru de finance.</li>
              <li>👩‍🎨 Un designer.</li>
              <li>🌐 Un passionné de cryptomonnaie.</li>
              <li>...</li>
            </ul>
            <p>
              👀 Ou simplement quelqu'un de curieux à la recherche d’outils
              facilitant la réalisation d'un projet...
            </p>
            <p>
              DigiWiki s'occupe de{" "}
              <strong>trouver tout ce dont vous recherchez 🤯</strong>.
            </p>
            <p>
              🎯 Son principal <strong>objectif</strong> est de vous faire{" "}
              <strong>⏳ gagner du temps</strong> dans vos recherches ou vos
              projets, en <strong>mettant à disposition des 🔨 outils</strong>{" "}
              de pour tous les domaines.
            </p>
            <p>
              Des rubriques de <strong>📚 formations</strong> sont aussi
              disponibles pour en apprendre plus sur des secteurs et domaines
              spécifiques.
            </p>
          </div>
          <div className="row mt-2 mb-2 mx-auto">
            <h2 className="mb-2 fw-bold">Expérience utilisateur</h2>
            <ul className="">
              <li>
                🔍 <strong>Navigation optimisée et épurée</strong>, rendant
                l'expérience simple et la plus rapide possible.
              </li>
              <li>
                ⛔️ Une plateforme <strong>sans publicité</strong> pouvant
                ralentir ou interférer vos recherches.
              </li>
              <li>
                💥 Proposition de plus <strong>d'une centaine d'outils</strong>{" "}
                de qualité mis à jour en permanence.
              </li>
            </ul>
          </div>
          <div className="row mt-2 mb-2 mx-auto">
            <h2 className="mb-2 fw-bold">Rémunération de DigiWiki</h2>
            <p>
              L’équipe de DigiWiki veut, <strong>en toute transparence</strong>,
              vous notifier de notre <strong>sytème de rémunération</strong> :
            </p>
            <ul>
              <li>
                ✅ Le site est{" "}
                <strong>
                  entièrement gratuit et ne comporte aucune publicité.
                </strong>
                .
              </li>
              <li>
                🔗 La principale <strong>source de revenue</strong> provient des{" "}
                <strong>liens d'affiliations</strong> sur les outils proposés.
              </li>
              <li>
                💵 Lorsqu'un utilisateur <strong>clique sur le lien</strong> et
                qu'il souhaite{" "}
                <strong>souscrire à une offre payante d'un outil</strong>, alors
                nous recevons une <strong>commission</strong>.
              </li>
            </ul>
            <p>
              ➡️ Alors <strong>n'hésitez pas à passer par nos liens</strong>{" "}
              lorsque vous voulez obtenir la version payante d'un outil, cela{" "}
              <strong>❤️ nous aident énormement</strong>.
            </p>
            <p>
              Cette rémunération <strong>nous permet 👇</strong> :
            </p>
            <ul className="">
              <li>
                🚀 De vous proposer{" "}
                <strong>des outils toujours plus performants</strong>.
              </li>
              <li>
                ❤️ D'améliorer <strong>l'expérience utilisateur</strong>.
              </li>
              <li>
                ✅ De maintenir le <strong>bon fonctionnement du site </strong>!
              </li>
            </ul>
          </div>
          <div className="row mt-2 mb-2 mx-auto">
            <h2 className="mb-2 fw-bold">Contactez-nous</h2>
            <p>
              📬 Vous pouvez nous contacter pour toutes{" "}
              <strong>questions, suggestions ou recommandations</strong> au
              sujet des outils ou du site.
            </p>
            <p>
              L’équipe de DigiWiki se fera un{" "}
              <strong>plaisir de vous lire</strong>.
            </p>
            <p>
              Pour se faire, cliquez{" "}
              <Button className="ms-2" onClick={() => navigate("/contact")}>
                <FaArrowRight />
                &nbsp; juste ici
              </Button>
            </p>
            <p>
              D'ici là, on vous souhaite de{" "}
              <strong>🔍 belles recherches</strong> mais surtout de{" "}
              <strong>💎 belles trouvailles</strong> !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
