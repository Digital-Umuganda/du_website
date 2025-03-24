export type Mail = {
  id: number;
  email: string;
  read: boolean;
  names: string;
  subject: string;
  createdAt: Date;
  message: string;
};

export type Blog = {
  id?: string;
  title: string;
  views?: number;
  shares?: number;
  content: string;
  description: string;
  image: File | string;
  createdAt?: Date | string;
};

export type Bloger = {
  id: number;
  date: string;
  slug: string;
  link: string;
  status: string;
  modified: string;
  custom_fields?: {
    source_link: string;
    source_name: string;
  };
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  uagb_featured_image_src: {
    full: [string, number, number, boolean] | boolean;
    large: [string, number, number, boolean] | boolean;
    medium: [string, number, number, boolean] | boolean;
    thumbnail: [string, number, number, boolean] | boolean;
    "1536x1536": [string, number, number, boolean] | boolean;
    "2048x2048": [string, number, number, boolean] | boolean;
    medium_large: [string, number, number, boolean] | boolean;
  };
};

export type MediaItem = {
  id: number;
  src: string;
  alt?: string;
  duration?: number;
  type: "image" | "video";
};

export type NewsItem = {
  id: number;
  title: string;
  source: string;
  imageUrl: string;
  category: string;
  readTime: number;
  publishedAt: Date;
  sourceUrl: string;
  description: string;
};

export type WordPressImage = {
  id: number;
  guid: {
    rendered: string;
  };
  title: {
    rendered: string;
  };
  media_details: {
    sizes: {
      thumbnail: {
        source_url: string;
      };
      full: {
        source_url: string;
      };
    };
    width: number;
    height: number;
    length: number;
  };
  media_category?: number[];
  media_type: string;
};
