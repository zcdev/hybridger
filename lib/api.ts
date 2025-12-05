import { PricingCard, FeatureItem, Testimonial, Hero } from './types';

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${preview
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 60 }
    },
  ).then((response) => response.json());
}

export async function getHero(): Promise<Hero[]> {
  const query =
    `query {
    heroSectionCollection(limit: 1) {
      items {
        imageAsset {
          url
        }
        title
        content {
          json
          links {
            assets {
              block {
                sys {
                  id
                }
                url
                description
              }
            }
          }
        }
      }
    }
  }`;
  return (await fetchGraphQL(query)).data?.heroSectionCollection?.items;
}

export async function getFeatureItems(): Promise<FeatureItem[]> {
  const query =
    `query {
      featureItemCollection(limit: 6) {
        items {
          imageAsset {
            url
          }
          id
          title
          subheader
          content {
            json
            links {
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  description
                }
              }
            }
          }
        }
      }
    }`;
  return (await fetchGraphQL(query)).data?.featureItemCollection?.items;
}

export async function getPriceCards(): Promise<PricingCard[]> {
  const query =
    `query {
      pricingCardCollection(limit: 3) {
        items {
          iconLight {
            url
          }
          iconDark {
            url
          }
          id
          title
          subheader
          content {
            json
            links {
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  description
                }
              }
            }
          }
        }
      }
    }`;
  return (await fetchGraphQL(query)).data?.pricingCardCollection?.items;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const query =
    `query {
      testimonialCollection(limit: 3) {
        items {
          avatar {
            url
          }
          id
          title
          author
        }
      }
    }`;
  return (await fetchGraphQL(query)).data?.testimonialCollection?.items;
}
