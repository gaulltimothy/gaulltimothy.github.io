// Shared by the case study layouts: the props every case study takes, and its schema.org Article and breadcrumbs.

export interface CaseStudyProps {
  // The visible H1 and Article headline.
  title: string;
  // The visible lede under the H1.
  description: string;
  eyebrow: string;
  facts: { label: string; value: string }[];
  // Search-only overrides, so the H1 and lede can run longer than search results show.
  // seoTitle: about 44 characters (Base adds " · Timothy Gaull"). metaDescription: 150 to 160 characters.
  seoTitle?: string;
  metaDescription?: string;
  // Share image and Article image. Omit to use the default share card.
  image?: { src: string; width: number; height: number };
  // ISO dates (YYYY-MM-DD) for the Article schema. Bump `updated` when the story itself changes.
  published?: string;
  updated?: string;
  // The client, so search engines can tie the story to the company.
  client?: { name: string; url?: string };
}

export function caseStudySchema(props: CaseStudyProps, pathname: string, site: URL): Record<string, unknown>[] {
  const { title, description, eyebrow, metaDescription, image, published, updated, client } = props;
  const url = new URL(pathname, site).href;
  const articleLd = {
    '@type': 'Article',
    headline: title,
    description: metaDescription ?? description,
    url,
    mainEntityOfPage: url,
    image: image ? new URL(image.src, site).href : undefined,
    datePublished: published,
    dateModified: updated ?? published,
    author: { '@id': 'https://timothygaull.com/#person' },
    publisher: { '@id': 'https://timothygaull.com/#practice' },
    about: client ? { '@type': 'Organization', name: client.name, url: client.url } : eyebrow,
    inLanguage: 'en-US',
  };
  const breadcrumbLd = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: new URL('/', site).href },
      { '@type': 'ListItem', position: 2, name: 'Work', item: new URL('/work/', site).href },
      { '@type': 'ListItem', position: 3, name: client?.name ?? eyebrow, item: url },
    ],
  };
  return [articleLd, breadcrumbLd];
}
