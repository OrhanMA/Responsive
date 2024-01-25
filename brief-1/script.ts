/**
 * Récupère les buttons de la section blog-aside
 * Pour le typage: on récupère un tableau (array) composé de noeux (nodes) du DOM et ces nodes sont des éléments buttons donc type: NodeListOf<HTMLButtonElement>
 */
const blogButtons: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".blog-button");

/**
 * Pour chaque boutton de blog:
 * Je récupère le dataset que j'ai attribué dans le HTML qui correspond à l'article lié au button
 * J'ajoute un event listener chaque button
 * Lorsqu'un user clique sur un button, je met à jour les données de l'article affiché en preview
 */
for (let i = 0; i < blogButtons.length; i++) {
  const button: HTMLButtonElement = blogButtons[i];
  const articleLinked: number = Number(button.dataset.article);
  button.addEventListener("click", (e: Event) => {
    e.preventDefault();
    updateArticleData(articles[articleLinked - 1]);
    setActiveArticleStyle(button);
  });
}

/** Récupère les éléments dans blog preview */
const previewImage = document.querySelector(
  ".preview-image"
) as HTMLImageElement;
const previewArticleTitle = document.querySelector(
  ".preview-article-title"
) as HTMLParagraphElement;
const previewArticleTags = document.querySelector(
  ".preview-article-tags"
) as HTMLParagraphElement;
const previewArticleDescription = document.querySelector(
  ".preview-article-description"
) as HTMLParagraphElement;

/**
 * fonction updateArticleData
 * @param article: un article conforme au type Article (voir types.ts)
 * @returns la fonction ne return rien.
 * @description change la source de l'image de preview et le contenu textuel des informations de l'article
 */
function updateArticleData(article: Article): void {
  previewImage.src = article.image_path;
  previewArticleTitle.textContent = article.title;
  previewArticleTags.textContent = article.tags;
  previewArticleDescription.textContent = article.description;
}

/**
 * function setActiveArticleStyle
 * @param button: l'élément html button
 * @description: compare les buttons au button passé en paramètre de la fonction. Si le dataset-article correspond, la couleur du text est changée en jaune, sinon en noir.
 */
function setActiveArticleStyle(button: HTMLButtonElement) {
  blogButtons.forEach((element) => {
    if (element.dataset.article === button.dataset.article) {
      element.style.color = "rgb(245, 205, 3)";
    } else {
      element.style.color = "black";
    }
  });
}

/**
 * Le typage pour les articles
 */
interface Article {
  image_path: string;
  image_alt: string;
  title: string;
  tags: string;
  description: string;
}

/**
 * Liste des articles à injecter dynamiquement.
 * Les articles doivent respecter le type Article défini juste avant
 */
const articles: Article[] = [
  {
    image_path: "./assets/blog/blog_item_01.jpg",
    image_alt: "Article 1 alt",
    title: "Article 1 title",
    tags: "Article 1 tags",
    description: "Article 1 description",
  },
  {
    image_path: "./assets/blog/blog_item_02.jpg",
    image_alt: "Article 2 alt",
    title: "Article 2 title",
    tags: "Article 2 tags",
    description: "Article 2 description",
  },
  {
    image_path: "./assets/blog/blog_item_03.jpg",
    image_alt: "Article 3 alt",
    title: "Article 3 title",
    tags: "Article 3 tags",
    description: "Article 3 description",
  },
  {
    image_path: "./assets/blog/blog_item_04.jpg",
    image_alt: "Article 4 alt",
    title: "Article 4 title",
    tags: "Article 4 tags",
    description: "Article 4 description",
  },
];
