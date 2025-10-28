import React from 'react';

export type ProjectCategory = 'Arsitektur' | 'Interior' | 'Renovasi' | '360 Virtual Reality' | '3D Animasi';

export interface HeroSlide {
  title: string;
  subtitle: string;
  image: string;
  link: string;
  buttonText: string;
}

export interface Project {
  id: string;
  title:string;
  category: ProjectCategory;
  year: number;
  location: string;
  mainImage: string;
  description: string;
  gallery: string[];
}

export type IconName = 'ArchitectureIcon' | 'InteriorIcon' | 'RenovationIcon' | 'ConsultationIcon' | 'DesignConceptIcon' | 'RevisionIcon' | 'ExecutionIcon' | 'HandoverIcon';

export interface ServiceContent {
  iconName: IconName;
  title: string;
  description: string;
  details: string;
  includes: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface User {
  username: string;
  email: string;
  fullName?: string;
  phone?: string;
  address?: string;
}

export interface WorkflowStep {
  iconName: IconName;
  title: string;
  description: string;
}

export interface PricingPackage {
    name: string;
    price: string;
    features: string[];
    buttonText: string;
    popular: boolean;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

export interface CartItem {
    id: string; // productId
    name: string;
    price: number;
    image: string;
    quantity: number;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string; // ISO string
  read: boolean;
}

export type ArticleContentBlock = 
  | { type: 'heading'; level: 2 | 3 | 4; text: string; }
  | { type: 'paragraph'; text: string; }
  | { type: 'image'; src: string; caption: string; };

export interface Author {
  id: string;
  name: string;
  image: string;
  role: string;
}

export interface Article {
  id: string;
  title: string;
  authorId: string;
  date: string; // ISO string
  category: string;
  mainImage: string;
  summary: string;
  content: ArticleContentBlock[];
}

export interface Comment {
  id: string;
  articleId: string;
  author: string;
  email: string;
  text: string;
  timestamp: string; // ISO string
}


// New interfaces for site-wide editable content
export interface SiteContent {
  home: {
    aboutPreview: {
      title: string;
      subtitle: string;
      text: string;
      image: string;
    };
    servicesPreview: {
      title: string;
      subtitle: string;
    };
    testimonials: {
      title: string;
      subtitle: string;
      items: Testimonial[];
    };
    contactPreview: {
        title: string;
        subtitle: string;
    }
  };
  about: {
    bannerTitle: string;
    story: {
      title: string;
      p1: string;
      p2: string;
      image: string;
    };
    vision: {
      title: string;
      text: string;
    };
    mission: {
      title: string;
      text: string;
    };
    team: {
      title: string;
      subtitle: string;
      members: TeamMember[];
    };
    awards: {
        title: string;
        items: {
            name: string;
            logo: string;
        }[];
    }
  };
  services: {
    bannerTitle: string;
    intro: {
        title: string;
        subtitle: string;
    };
    items: ServiceContent[];
    workflow: {
        title: string;
        subtitle: string;
        steps: WorkflowStep[];
    };
    cta: {
        title: string;
        text: string;
    }
  };
  pricing: {
    bannerTitle: string;
    packages: {
        title: string;
        subtitle:string;
        items: PricingPackage[];
    },
    calculator: {
        title: string;
        subtitle: string;
    },
    faq: {
        title: string;
        subtitle: string;
        items: FaqItem[];
    },
    cta: {
        title: string;
        text: string;
    }
  };
  contact: {
    bannerTitle: string;
    intro: {
        title: string;
        subtitle: string;
    },
    info: {
        address: string;
        email: string;
        phone: string;
        hours: string;
        socials: {
            instagram: string;
            facebook: string;
            linkedin: string;
        };
    }
  };
  footer: {
      tagline: string;
  }
}