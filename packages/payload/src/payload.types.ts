/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    pages: Page;
    articles: Article;
    users: User;
    media: Media;
    redirects: Redirect;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    pages: PagesSelect<false> | PagesSelect<true>;
    articles: ArticlesSelect<false> | ArticlesSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    redirects: RedirectsSelect<false> | RedirectsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    'navigation-menu': NavigationMenu;
    footer: Footer;
  };
  globalsSelect: {
    'navigation-menu': NavigationMenuSelect<false> | NavigationMenuSelect<true>;
    footer: FooterSelect<false> | FooterSelect<true>;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  /**
   * Diese Seite als Startseite festlegen
   */
  isHome?: boolean | null;
  title: string;
  /**
   * Fügen Sie Inhaltsblöcke zu Ihrer Seite hinzu
   */
  layout: (
    | {
        /**
         * Wählen Sie das Layout für diesen Hero-Bereich
         */
        layout: 'centered' | 'leftAligned' | 'split' | 'minimal';
        /**
         * Aktivieren Sie diese Option, um den Hero-Block im Vollbildmodus anzuzeigen
         */
        fullscreen?: boolean | null;
        /**
         * Die Hauptüberschrift des Hero-Blocks
         */
        headline: string;
        /**
         * Ein optionaler Untertitel
         */
        subheadline?: string | null;
        /**
         * Ein optionales Hintergrundbild
         */
        backgroundImage?: (string | null) | Media;
        /**
         * Wählen Sie den Typ des Hintergrunds
         */
        backgroundType?: ('color' | 'gradient' | 'image' | 'video') | null;
        /**
         * Optionen für das Hintergrund-Overlay
         */
        overlay?: {
          /**
           * Die Farbe des Overlays (Hex, RGB oder RGBA)
           */
          color?: string | null;
          /**
           * Die Deckkraft des Overlays in Prozent
           */
          opacity?: number | null;
          /**
           * Wählen Sie einen Gradienten für das Overlay
           */
          gradient?: ('none' | 'linear-to-b' | 'linear-to-t' | 'linear-to-r' | 'linear-to-l') | null;
        };
        /**
         * Optionaler Akzent über der Überschrift
         */
        accent?: {
          /**
           * Der Haupttext des Akzents
           */
          text?: string | null;
          /**
           * Der Link für den Akzent
           */
          link?: string | null;
          /**
           * Der Text für den Akzent-Link
           */
          linkText?: string | null;
        };
        /**
         * Optionale Call-to-Action Schaltfläche
         */
        cta?: {
          text?: string | null;
          link?: string | null;
        };
        /**
         * Der Text für den "Mehr erfahren" Link
         */
        learnMoreText?: string | null;
        /**
         * Der Link für den "Mehr erfahren" Button
         */
        learnMoreLink?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'hero';
      }
    | {
        layout: 'default' | 'centered-2x2-grid' | 'three-col-accent' | 'three-col-icon';
        /**
         * Eine kleinere Überschrift über der Hauptüberschrift
         */
        accentHeadline?: string | null;
        /**
         * Die Hauptüberschrift des Features-Blocks
         */
        headline: string;
        /**
         * Ein optionaler Untertitel
         */
        subheadline?: string | null;
        features?:
          | {
              icon: 'deploy' | 'ssl' | 'backup' | 'arrow-right';
              title: string;
              description: string;
              /**
               * Text für den optionalen Link
               */
              linkText?: string | null;
              /**
               * URL für den optionalen Link
               */
              linkUrl?: string | null;
              id?: string | null;
            }[]
          | null;
        /**
         * Ein optionales Bild für die rechte Seite
         */
        image?: (string | null) | Media;
        /**
         * Die Hintergrundfarbe des Blocks (Hex, RGB oder RGBA)
         */
        backgroundColor?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'features';
      }
    | {
        /**
         * Ein optionales Hintergrundbild für den CTA-Block
         */
        backgroundImage?: (string | null) | Media;
        /**
         * Einstellungen für das Hintergrundbild-Overlay
         */
        overlay?: {
          /**
           * Die Overlay-Farbe im HEX-Format (z.B. #000000)
           */
          color?: string | null;
          /**
           * Die Deckkraft des Overlays in Prozent
           */
          opacity?: number | null;
        };
        /**
         * Wählen Sie das Layout für diesen CTA-Bereich
         */
        layout: 'default' | 'centered' | 'imageLeft' | 'imageRight' | 'imageTop' | 'imageBottom';
        /**
         * Aktivieren Sie diese Option, um den CTA-Block in voller Breite anzuzeigen
         */
        fullwidth?: boolean | null;
        /**
         * Die Hauptüberschrift des CTA-Blocks
         */
        heading: string;
        /**
         * Der beschreibende Text des CTA-Blocks
         */
        text?: string | null;
        /**
         * Einstellungen für den primären Button
         */
        primaryButton: {
          /**
           * Der Text des primären Buttons
           */
          text: string;
          /**
           * Der Link des primären Buttons
           */
          link: string;
          /**
           * Der Stil des primären Buttons
           */
          variant?: ('default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link') | null;
        };
        /**
         * Einstellungen für den sekundären Button
         */
        secondaryButton: {
          /**
           * Der Text des sekundären Buttons
           */
          text: string;
          /**
           * Der Link des sekundären Buttons
           */
          link: string;
          /**
           * Der Stil des sekundären Buttons
           */
          variant?: ('default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link') | null;
        };
        image: {
          /**
           * Das Bild für den CTA-Block
           */
          file: string | Media;
          /**
           * Positionierung des Bildes im Block
           */
          position?: ('left' | 'right' | 'top' | 'bottom' | 'centered') | null;
          /**
           * Ausrichtung des Bildes innerhalb der Position
           */
          alignment?: ('offset' | 'center') | null;
        };
        id?: string | null;
        blockName?: string | null;
        blockType: 'cta';
      }
    | {
        /**
         * Die Hauptüberschrift des Bento Grids
         */
        title?: string | null;
        /**
         * Ein optionaler Untertitel unter der Überschrift
         */
        subtitle?: string | null;
        /**
         * Die vier Elemente des Bento Grids
         */
        items?:
          | {
              /**
               * Der Titel des Bento Elements
               */
              title: string;
              /**
               * Der Typ des Inhalts bestimmt das Layout
               */
              contentType?: ('default' | 'code') | null;
              /**
               * Die Beschreibung des Elements. Bei Code/API-Typ wird dies als Code-Snippet angezeigt.
               */
              description: string;
              /**
               * Ein optionales Bild für das Element. Bei Code/API-Typ wird dies ignoriert.
               */
              image?: (string | null) | Media;
              /**
               * Das Layout bestimmt die Größe des Elements im Grid
               */
              layout: 'large' | 'standard';
              id?: string | null;
            }[]
          | null;
        /**
         * Die Hintergrundfarbe des Blocks (Hex, RGB oder RGBA)
         */
        backgroundColor?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'bento-grid';
      }
    | {
        layout: 'default' | 'centered' | 'full-width';
        headline?: string | null;
        description?: string | null;
        backgroundImage?: (string | null) | Media;
        links?:
          | {
              text: string;
              url: string;
              id?: string | null;
            }[]
          | null;
        stats?:
          | {
              label: string;
              value: string;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'intro';
      }
    | {
        /**
         * The main heading for the newsletter section
         */
        heading: string;
        /**
         * A brief description of what subscribers will receive
         */
        description: string;
        features?:
          | {
              title: string;
              description: string;
              icon: 'calendar' | 'hand';
              id?: string | null;
            }[]
          | null;
        /**
         * Text for the subscribe button
         */
        buttonText: string;
        /**
         * Placeholder text for the email input
         */
        placeholderText: string;
        id?: string | null;
        blockName?: string | null;
        blockType: 'newsletter';
      }
    | {
        layout: 'default';
        title: string;
        description?: string | null;
        plans?:
          | {
              name: string;
              price: string;
              description?: string | null;
              features?:
                | {
                    text: string;
                    id?: string | null;
                  }[]
                | null;
              ctaText?: string | null;
              ctaLink?: string | null;
              isHighlighted?: boolean | null;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'pricing';
      }
    | {
        layoutType: 'default';
        title: string;
        steps?:
          | {
              number: string;
              title: string;
              description: string;
              id?: string | null;
            }[]
          | null;
        image?: (string | null) | Media;
        ctaText?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'howItWorks';
      }
    | {
        layout?: ('default' | 'content-left-large-avatar' | 'grid-with-sidebar') | null;
        testimonials?:
          | {
              name: string;
              position: string;
              testimonialheadline?: string | null;
              image?: (string | null) | Media;
              quote: string;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'testimonial';
      }
    | {
        content?: {
          title?: string | null;
          description?: string | null;
          backgroundImage?: (string | null) | Media;
          cards?:
            | {
                number?: number | null;
                text?: string | null;
                id?: string | null;
              }[]
            | null;
        };
        sliderSettings?: {
          /**
           * Slider springt nach der letzten Karte wieder zur ersten
           */
          loop?: boolean | null;
          autoplay?: {
            enabled?: boolean | null;
            /**
             * Zeit in Millisekunden zwischen den Slides
             */
            delay?: number | null;
            pauseOnHover?: boolean | null;
          };
          navigation?: ('arrows' | 'dots' | 'both' | 'none') | null;
        };
        id?: string | null;
        blockName?: string | null;
        blockType: 'cardSlider';
      }
    | {
        title: string;
        description?: string | null;
        layout: 'default';
        articles: (string | Article)[];
        id?: string | null;
        blockName?: string | null;
        blockType: 'blogPosts';
      }
    | {
        title: string;
        category?: string | null;
        readTime?: string | null;
        featuredImage?: (string | null) | Media;
        content?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'contentSection';
      }
  )[];
  slug?: string | null;
  slugLock?: boolean | null;
  parent?: (string | null) | Page;
  breadcrumbs?:
    | {
        doc?: (string | null) | Page;
        url?: string | null;
        label?: string | null;
        id?: string | null;
      }[]
    | null;
  publishedDate?: string | null;
  hideFromIndexing?: boolean | null;
  pathname?: string | null;
  meta: {
    title: string;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: string;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "articles".
 */
export interface Article {
  id: string;
  title: string;
  category: 'news' | 'tutorial' | 'guide' | 'case-study';
  featuredImage: string | Media;
  readTime: string;
  content: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  slug?: string | null;
  slugLock?: boolean | null;
  meta: {
    title: string;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Media;
  };
  publishedDate?: string | null;
  hideFromIndexing?: boolean | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  role: 'user' | 'admin';
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "redirects".
 */
export interface Redirect {
  id: string;
  from: string;
  to?: {
    type?: ('reference' | 'custom') | null;
    reference?:
      | ({
          relationTo: 'pages';
          value: string | Page;
        } | null)
      | ({
          relationTo: 'articles';
          value: string | Article;
        } | null);
    url?: string | null;
  };
  type: '301' | '302' | '307' | '308';
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'pages';
        value: string | Page;
      } | null)
    | ({
        relationTo: 'articles';
        value: string | Article;
      } | null)
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null)
    | ({
        relationTo: 'redirects';
        value: string | Redirect;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  isHome?: T;
  title?: T;
  layout?:
    | T
    | {
        hero?:
          | T
          | {
              layout?: T;
              fullscreen?: T;
              headline?: T;
              subheadline?: T;
              backgroundImage?: T;
              backgroundType?: T;
              overlay?:
                | T
                | {
                    color?: T;
                    opacity?: T;
                    gradient?: T;
                  };
              accent?:
                | T
                | {
                    text?: T;
                    link?: T;
                    linkText?: T;
                  };
              cta?:
                | T
                | {
                    text?: T;
                    link?: T;
                  };
              learnMoreText?: T;
              learnMoreLink?: T;
              id?: T;
              blockName?: T;
            };
        features?:
          | T
          | {
              layout?: T;
              accentHeadline?: T;
              headline?: T;
              subheadline?: T;
              features?:
                | T
                | {
                    icon?: T;
                    title?: T;
                    description?: T;
                    linkText?: T;
                    linkUrl?: T;
                    id?: T;
                  };
              image?: T;
              backgroundColor?: T;
              id?: T;
              blockName?: T;
            };
        cta?:
          | T
          | {
              backgroundImage?: T;
              overlay?:
                | T
                | {
                    color?: T;
                    opacity?: T;
                  };
              layout?: T;
              fullwidth?: T;
              heading?: T;
              text?: T;
              primaryButton?:
                | T
                | {
                    text?: T;
                    link?: T;
                    variant?: T;
                  };
              secondaryButton?:
                | T
                | {
                    text?: T;
                    link?: T;
                    variant?: T;
                  };
              image?:
                | T
                | {
                    file?: T;
                    position?: T;
                    alignment?: T;
                  };
              id?: T;
              blockName?: T;
            };
        'bento-grid'?:
          | T
          | {
              title?: T;
              subtitle?: T;
              items?:
                | T
                | {
                    title?: T;
                    contentType?: T;
                    description?: T;
                    image?: T;
                    layout?: T;
                    id?: T;
                  };
              backgroundColor?: T;
              id?: T;
              blockName?: T;
            };
        intro?:
          | T
          | {
              layout?: T;
              headline?: T;
              description?: T;
              backgroundImage?: T;
              links?:
                | T
                | {
                    text?: T;
                    url?: T;
                    id?: T;
                  };
              stats?:
                | T
                | {
                    label?: T;
                    value?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        newsletter?:
          | T
          | {
              heading?: T;
              description?: T;
              features?:
                | T
                | {
                    title?: T;
                    description?: T;
                    icon?: T;
                    id?: T;
                  };
              buttonText?: T;
              placeholderText?: T;
              id?: T;
              blockName?: T;
            };
        pricing?:
          | T
          | {
              layout?: T;
              title?: T;
              description?: T;
              plans?:
                | T
                | {
                    name?: T;
                    price?: T;
                    description?: T;
                    features?:
                      | T
                      | {
                          text?: T;
                          id?: T;
                        };
                    ctaText?: T;
                    ctaLink?: T;
                    isHighlighted?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        howItWorks?:
          | T
          | {
              layoutType?: T;
              title?: T;
              steps?:
                | T
                | {
                    number?: T;
                    title?: T;
                    description?: T;
                    id?: T;
                  };
              image?: T;
              ctaText?: T;
              id?: T;
              blockName?: T;
            };
        testimonial?:
          | T
          | {
              layout?: T;
              testimonials?:
                | T
                | {
                    name?: T;
                    position?: T;
                    testimonialheadline?: T;
                    image?: T;
                    quote?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        cardSlider?:
          | T
          | {
              content?:
                | T
                | {
                    title?: T;
                    description?: T;
                    backgroundImage?: T;
                    cards?:
                      | T
                      | {
                          number?: T;
                          text?: T;
                          id?: T;
                        };
                  };
              sliderSettings?:
                | T
                | {
                    loop?: T;
                    autoplay?:
                      | T
                      | {
                          enabled?: T;
                          delay?: T;
                          pauseOnHover?: T;
                        };
                    navigation?: T;
                  };
              id?: T;
              blockName?: T;
            };
        blogPosts?:
          | T
          | {
              title?: T;
              description?: T;
              layout?: T;
              articles?: T;
              id?: T;
              blockName?: T;
            };
        contentSection?:
          | T
          | {
              title?: T;
              category?: T;
              readTime?: T;
              featuredImage?: T;
              content?: T;
              id?: T;
              blockName?: T;
            };
      };
  slug?: T;
  slugLock?: T;
  parent?: T;
  breadcrumbs?:
    | T
    | {
        doc?: T;
        url?: T;
        label?: T;
        id?: T;
      };
  publishedDate?: T;
  hideFromIndexing?: T;
  pathname?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "articles_select".
 */
export interface ArticlesSelect<T extends boolean = true> {
  title?: T;
  category?: T;
  featuredImage?: T;
  readTime?: T;
  content?: T;
  slug?: T;
  slugLock?: T;
  meta?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  publishedDate?: T;
  hideFromIndexing?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  role?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "redirects_select".
 */
export interface RedirectsSelect<T extends boolean = true> {
  from?: T;
  to?:
    | T
    | {
        type?: T;
        reference?: T;
        url?: T;
      };
  type?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * Konfigurieren Sie die Hauptnavigation der Website
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "navigation-menu".
 */
export interface NavigationMenu {
  id: string;
  /**
   * Navigationselemente
   */
  items: {
    /**
     * Der Text, der im Menü angezeigt wird
     */
    label: string;
    /**
     * Der Link-Pfad (z.B. /produkte)
     */
    link: string;
    /**
     * Optional: Megamenü-Einstellungen
     */
    megamenu?: {
      /**
       * Aktivieren Sie das Megamenü für diesen Navigationspunkt
       */
      enabled?: boolean | null;
      /**
       * Spalten im Megamenü
       */
      columns?:
        | {
            /**
             * Spaltenüberschrift
             */
            title: string;
            items?:
              | {
                  label: string;
                  link: string;
                  /**
                   * Optionale Beschreibung
                   */
                  description?: string | null;
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
          }[]
        | null;
    };
    id?: string | null;
  }[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer".
 */
export interface Footer {
  id: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "navigation-menu_select".
 */
export interface NavigationMenuSelect<T extends boolean = true> {
  items?:
    | T
    | {
        label?: T;
        link?: T;
        megamenu?:
          | T
          | {
              enabled?: T;
              columns?:
                | T
                | {
                    title?: T;
                    items?:
                      | T
                      | {
                          label?: T;
                          link?: T;
                          description?: T;
                          id?: T;
                        };
                    id?: T;
                  };
            };
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "footer_select".
 */
export interface FooterSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SimpleButton".
 */
export interface SimpleButton {
  text: string;
  link: string;
  style?: ('default' | 'secondary' | 'outline' | 'destructive' | 'ghost' | 'link' | 'accent') | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'simpleButton';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SimpleImage".
 */
export interface SimpleImage {
  image: string | Media;
  altText: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'simpleImage';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}