// ─── Project / Case Study ─────────────────────────────────────────────────
export interface Project {
  id:          string
  client:      string
  title:       string
  description: string
  category:    string
  tags:        string[]
  status:      'live' | 'in-development'
  accentColor?: string
}

// ─── Service ──────────────────────────────────────────────────────────────
export interface ServiceItem {
  icon:        string
  name:        string
  description: string
  price:       string
}

export interface ServiceTier {
  tier:        number
  badge:       string
  headline:    string
  subhead:     string
  infoLabel:   string
  infoRows:    { label: string; value: string; accent?: boolean }[]
  items:       ServiceItem[]
}

// ─── Blog Post ────────────────────────────────────────────────────────────
export interface BlogPost {
  slug:      string
  category:  string
  title:     string
  excerpt:   string
  date:      string
  readTime:  string
  icon:      string
}

// ─── Contact Form ─────────────────────────────────────────────────────────
export interface ContactFormValues {
  firstName:   string
  lastName:    string
  email:       string
  company:     string
  service:     string
  budget:      string
  message:     string
}
