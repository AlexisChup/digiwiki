import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col-9 mx-auto col-9-resized-md">
          <div className="row mt-3 mb-2 mx-auto">
            <h1 className="mb-3">À propos de DigiWiki</h1>
            <p>
              Digiwiki est une application web qui vous aide à découvrir et à
              apprendre l’utilisations des derniers et meilleurs outils
              disponibles. Que vous soyez un développeur, un féru de finance, un
              designer ou simplement quelqu'un de curieux à la recherche
              d’outils facilitant les réalisation, Digiwiki vous offrira tout ce
              dont vous recherchez.
            </p>
            <p>
              Son principal objectif est de vous faire gagner du temps dans vos
              recherches ou vos projets, en mettant à disposition des outils de
              tout domaine, a porté de main. Des rubriques de formations sont
              aussi disponible pour en apprendre plus sur des secteurs et
              domaines spécifiques.
            </p>
          </div>
          <div className="row mt-2 mb-2 mx-auto">
            <h2 className="mb-2">Expérience utilisateur</h2>
            <ul className="ms-4 mx-auto">
              <li>
                Navigation optimisée et épurée, rendant l'expérience simple et
                la plus rapide possible
              </li>
              <li>
                Utilisation du le site sans publicité pouvant ralentir ou
                interférer vos recherches
              </li>
              <li>
                Proposition de plus d'une centaine d'outils de qualité mis à
                jour en permanence
              </li>
            </ul>
          </div>
          <div className="row mt-2 mb-2 mx-auto">
            <h2 className="mb-2">Rémunération de Digiwiki</h2>
            <p>
              L’équipe de Digiwiki, veut, en toute transparence vous notifier
              qu’il est possible pour vous de la supporter et de l’encourager
              dans sa continuité. Le simple fait de souscrire à l’outil de votre
              choix pour exploiter l’entièreté de ses fonctionnalités permet
              cela. Digiwiki se rémunère par les programmes d’affiliation
              proposés par tous les outils formidables que nous mettons en
              avant, pas besoin de dépensé un seul euro en supplément. Alors
              n’hésitez surtout pas !
            </p>
          </div>
          <div className="row mt-2 mb-2 mx-auto">
            <h2 className="mb-2">Contactez nous</h2>
            <p>
              Pour finir, vous pouvez nous contacter à tout moment grâce à
              l’onglet contact situé en haut à gauche pour toutes questions,
              suggestions ou recommandations pour l’ajout de nouveau outils !
              Toute l’équipe de Digiwiki vous souhaite de belles recherches et
              surtout de belles trouvailles !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
